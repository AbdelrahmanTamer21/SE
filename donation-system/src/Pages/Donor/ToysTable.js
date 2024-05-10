import React, { useState, useRef } from "react";
import donationData from "../donationData";
import { SearchOutlined, SlidersOutlined } from '@ant-design/icons';
import { Row, Col, InputNumber, Slider } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import { useNavigate } from 'react-router-dom';

function ToysTable() {
    const navigate = useNavigate();

    const handleRowClick = (id) => {
        navigate(`/Donor/DonationsInfo/${id}`);
    }

    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const handleChange = (pagination, filters, sorter) => {
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };

    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
        setSearchText('');
    };

    const data = donationData.filter(d => d.category === 'Toys');

    const [state, setState] = useState({
        left: 0,
        right: 100,
    });

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1677ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const getNumberSliderProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
            <div style={{ padding: 8 }}>
                <Row
                    type="flex"
                    gutter={10}
                    style={{ marginBottom: 8, alignItems: "center" }}
                >
                    <Col>Range:</Col>
                    <Col>
                        <InputNumber
                            value={state.left}
                            onChange={e => {
                                setState({ ...state, left: e });
                                const filteredData = data.filter((d) => e <= d[dataIndex]);
                                setSelectedKeys(filteredData.map((d) => d[dataIndex]));
                            }}
                        />
                    </Col>
                    <Col>
                        <InputNumber
                            value={state.right}
                            onChange={e => {
                                setState({ ...state, right: e });
                                const filteredData = data.filter((d) => d[dataIndex] <= e);
                                setSelectedKeys(filteredData.map((d) => d[dataIndex]));
                            }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Slider
                        range
                        value={[state.left, state.right]}
                        className="w-100"
                        onChange={e => {
                            setState({ left: e[0], right: e[1] });
                            const filteredData = data.filter((d) => e[0] <= d[dataIndex] && d[dataIndex] <= e[1]);
                            setSelectedKeys(filteredData.map((d) => d[dataIndex]));
                        }}
                    />
                </Row>
                <Row>
                    <Button
                        type="primary"
                        block
                        size="small"
                        onClick={() => {
                            confirm();
                            const filteredData = data.filter((d) => state.left <= d[dataIndex] && d[dataIndex] <= state.right);
                            setSelectedKeys(filteredData.map((d) => d[dataIndex]));
                            setFilteredInfo({ ...filteredInfo, [dataIndex]: [state.left, state.right] });
                        }}
                    >
                        Confirm
                    </Button>
                </Row>
            </div>
        ),
        filterIcon: (filtered) => (
            <SlidersOutlined
                style={{
                    color: filtered ? '#1677ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) => {
            const number = Number(record[dataIndex]);
            const range = filteredInfo[dataIndex] || [ state.left , state.right];
            return number >= range[0] && number <= range[1];
        },
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        onSelect: (record, selected, selectedRows) => {
            console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            console.log(selected, selectedRows, changeRows);
        },
    };

    const toysColumns = [
        {
            title: '#',
            dataIndex: 'id',
            key: 'id',
            width: '10%',
            filteredValue: filteredInfo.id || null,
            sortOrder: sortedInfo.columnKey === 'id' ? sortedInfo.order : null,
        },
        {
            title: 'Item Name',
            dataIndex: 'itemName',
            key: 'itemName',
            width: '20%',
            ...getColumnSearchProps('itemName'),
            filteredValue: filteredInfo.itemName || null,
            sortOrder: sortedInfo.columnKey === 'itemName' ? sortedInfo.order : null,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: '10%',
            ...getNumberSliderProps('age'),
            filteredValue: filteredInfo.age || null,
            sorter: (a, b) => a.age - b.age,
            sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            with: '15%',
            filters: [
                { text: 'Male', value: 'Male' },
                { text: 'Female', value: 'Female' },
            ],
            filteredValue: filteredInfo.gender || null,
            onFilter: (value, record) => record.gender.startsWith(value),
            sortOrder: sortedInfo.columnKey === 'gender' ? sortedInfo.order : null,
        },
        {
            title: 'Toys Category',
            dataIndex: 'categoryToy',
            key: 'categoryToy',
            width: '15%',
            filters: [
                { text: 'Board Games', value: 'board games' },
                { text: 'Stuffed Toys', value: 'stuffed toys' },
                { text: 'Dolls', value: 'dolls' },
                { text: 'Sports', value: 'sports' },
                { text: 'Cars', value: 'cars' },
                { text: 'Outdoor', value: 'outdoor' },
            ],
            filteredValue: filteredInfo.categoryToy || null,
            onFilter: (value, record) => record.categoryToy.startsWith(value),
            sortOrder: sortedInfo.columnKey === 'categoryToy' ? sortedInfo.order : null,
        },
        {
            title: 'Condition',
            dataIndex: 'condition',
            key: 'condition',
            filters: [
                { text: 'New', value: 'New' },
                { text: 'Used', value: 'Used' },
            ],
            filterSearch: true,
            filteredValue: filteredInfo.condition || null,
            onFilter: (value, record) => record.condition.startsWith(value),
            sortOrder: sortedInfo.columnKey === 'condition' ? sortedInfo.order : null,
        },
        {
            title: 'Details',
            dataIndex: '',
            key: 'x',
            render: (record) => <Button onClick={() => handleRowClick(record.id)}>Details</Button>
        }
    ];

    return (
        <>
            <Button onClick={clearAll} className="mb-3">Clear Filters</Button>
            <Table bordered className="mt-4" columns={toysColumns} dataSource={data} rowSelection={rowSelection} onChange={handleChange} />
        </>
    );
};

export default ToysTable;
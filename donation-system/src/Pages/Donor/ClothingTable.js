import React, { useState, useRef } from "react";
import donationData from "../donationData";
import { SearchOutlined, SlidersOutlined } from '@ant-design/icons';
import { Row, Col, InputNumber, Slider } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import { useNavigate } from 'react-router-dom';

function ClothingTable() {
    const navigate = useNavigate();

    const handleRowClick = (id) => {
        navigate(`/Donor/DonationsInfo/${id}`);
    }

    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };

    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
        setSearchText('');
    };

    const data = donationData.filter(d => d.category === 'Clothing');

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

    const handleSearchNumber = (selectedKeys, setSelectedKeys, dataIndex, confirm) => {
        confirm();
        setSelectedKeys(selectedKeys);
        setFilteredInfo({ ...filteredInfo, dataIndex: selectedKeys });
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
                                setSelectedKeys(data.filter(d => e <= d[dataIndex]).map(d => d.key));
                            }}
                        />
                    </Col>
                    <Col>
                        <InputNumber
                            value={state.right}
                            onChange={e => {
                                setState({ ...state, right: e });
                                setSelectedKeys(data.filter(d => d[dataIndex] <= e).map(d => d.key));
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
                            setSelectedKeys(data.filter(d => e[0] <= d[dataIndex] && d[dataIndex] <= e[1]).map(d => d.key));
                        }}
                    />
                </Row>
                <Row>
                    <Button
                        type="primary"
                        block
                        size="small"
                        onClick={() => {
                            handleSearchNumber(selectedKeys, setSelectedKeys, dataIndex, confirm);
                            setSelectedKeys(
                                data
                                    .filter(
                                        d => state.left <= d[dataIndex] && d[dataIndex] <= state.right
                                    )
                                    .map(d => d.key)
                            );
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
        onFilter: (value, record) =>
            record[dataIndex].toString().includes(value),
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

    const clothingColumns = [
        {
            title: '#',
            dataIndex: 'id',
            key: 'id',
            width: '10%',
            filteredValue: filteredInfo.id || null,
        },
        {
            title: 'Item Name',
            dataIndex: 'itemName',
            key: 'itemName',
            width: '20%',
            ...getColumnSearchProps('itemName'),
            filteredValue: filteredInfo.itemName || null,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: '10%',
            ...getNumberSliderProps('age', data),
            filteredValue: filteredInfo.age || null,
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
        },
        {
            title: 'Season',
            dataIndex: 'season',
            key: 'season',
            width: '15%',
            filters: [
                { text: 'Summer', value: 'Summer' },
                { text: 'Winter', value: 'Winter' },
                { text: 'Spring', value: 'Spring' },
                { text: 'Fall', value: 'Fall' },
            ],
            filteredValue: filteredInfo.season || null,
            onFilter: (value, record) => record.season.startsWith(value),
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
        },
        {
            title: 'Details',
            dataIndex: '',
            key: 'x',
            render: (record) => <Button onClick={()=>handleRowClick(record.id)}>Details</Button>
        }
    ];

    return (
        <>
            <Button onClick={clearAll} className="mb-3">Clear Filters</Button>
            <Table className="mt-4" columns={clothingColumns} dataSource={data} rowSelection={rowSelection} onChange={handleChange}/>
        </>
    );
};

export default ClothingTable;
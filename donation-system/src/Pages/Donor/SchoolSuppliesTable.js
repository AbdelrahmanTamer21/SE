import React, { useState, useRef } from "react";
import donationData from "../donationData";
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import { useNavigate } from 'react-router-dom';

function SchoolSuppliesTable() {
    const navigate = useNavigate();

    const handleRowClick = (id) => {
        navigate(`/Donor/DonationsInfo/${id}`);
    }

    const data = donationData.filter((item) => item.category === 'School Supplies');

    const [filteredInfo, setFilteredInfo] = useState({});
    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
    };

    const clearAll = () => {
        setFilteredInfo({});
        setSearchText('');
    };

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

    const schoolSuppliesColumns = [
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
            width: '30%',
            ...getColumnSearchProps('itemName'),
            filteredValue: filteredInfo.itemName || null,
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            width: '30%',
            filters: [
                { text: 'Stationary', value: 'Stationary' },
                { text: 'Books', value: 'Books' }
            ],
            filteredValue: filteredInfo.type || null,
            onFilter: (value, record) => record.type.startsWith(value),
        },
        {
            title: 'Condition',
            dataIndex: 'condition',
            key: 'condition',
            filters: [
                { text: 'New', value: 'New' },
                { text: 'Used', value: 'Used' },
            ],
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
            <Table bordered className="mt-4" columns={schoolSuppliesColumns} dataSource={data} rowSelection={rowSelection} onChange={handleChange} />
        </>
    );
};

export default SchoolSuppliesTable;
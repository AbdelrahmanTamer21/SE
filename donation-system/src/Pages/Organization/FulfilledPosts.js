import React, { useState, useRef } from "react";
import { Button, Input, Space, Table, Popconfirm, message } from 'antd';
import Highlighter from 'react-highlight-words';
import { useNavigate } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import donationData from "../donationData";

function FulfilledDonationTable() {
    const navigate = useNavigate();
    const [data, setData] = useState(donationData); // State to manage the donation data

    const handleRowClick = (id) => {
      const selectedDonation = donationData.find(donation => donation.id === id);
    const selectedDonor = DonorsData.find(donor => donor.donor_id === selectedDonation.donor_id);
    navigate(`/DonorDetails/${id}`, { donation: selectedDonation, donor: selectedDonor });
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

    const handleAcknowledge = (id) => {
        const updatedData = data.map(item => {
            if (item.id === id) {
                return { ...item, acknowledged: true };
            }
            return item;
        });
        setData(updatedData); // Update data state with the modified data
        message.success('Acknowledged!');
    };

    const handleDelete = (id) => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData); // Update data state with the modified data
        message.success('Deleted!');
    };

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

    const generalColumns = [
        {
            title: '#',
            dataIndex: 'id',
            key: 'id',
            width: '10%',
            filteredValue: filteredInfo.id || null,
            sorter: (a, b) => a.id - b.id,
            sortOrder: sortedInfo.columnKey === 'id' ? sortedInfo.order : null,
        },
        {
            title: 'Item Name',
            dataIndex: 'itemName',
            key: 'itemName',
            width: '25%',
            ...getColumnSearchProps('itemName'),
            filteredValue: filteredInfo.itemName || null,
            sortOrder: sortedInfo.columnKey === 'itemName' ? sortedInfo.order : null,
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            width: '15%',
            ...getColumnSearchProps('category'),
            filteredValue: filteredInfo.category || null,
            sortOrder: sortedInfo.columnKey === 'category' ? sortedInfo.order : null,
        },
        {
            title: 'Acknowledged',
            dataIndex: 'acknowledged',
            key: 'acknowledged',
            width: '10%',
            render: (acknowledged) => acknowledged ? 'Yes' : 'No',
        },
        {
            title: 'Actions',
            dataIndex: 'id',
            key: 'id',
            width: '40%', // Adjusted width
            render: (id, record) => (
                <>
                    <Button onClick={() => handleRowClick(id)}>Details</Button>
                    {!record.acknowledged && (
                        <Button onClick={() => handleAcknowledge(id)} style={{ marginLeft: 8 }}>Acknowledge</Button>
                    )}
                    <Popconfirm
                        title="Are you sure to delete this row?"
                        onConfirm={() => handleDelete(id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button style={{ marginLeft: 8 }}>Delete</Button>
                    </Popconfirm>
                </>
            ),
        },
    ];

    return (
        <>
            <h2>Fulfilled Posts</h2>
            <Button onClick={clearAll} className="mb-3">Clear Filters</Button>
            <Table bordered className="mt-4" columns={generalColumns} dataSource={data} rowSelection={rowSelection} onChange={handleChange} />
        </>
    );
};

export default FulfilledDonationTable;

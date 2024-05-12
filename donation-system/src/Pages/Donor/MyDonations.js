import React, { useState, useRef } from "react";
import donationData from "../donationData";
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import { useNavigate } from 'react-router-dom';
import donationsData from "../DonationsData";


function MyDonations() {
    const navigate = useNavigate();

    const handleRowClick = (id) => {
        navigate(`/Donor/DonationsInfo/${id}`);
    }

    const data = donationsData.map((d) => {
        const donation = donationData.find((don) => d.donation_id === don.id);
        return {
            ...d,
            itemName: donation ? donation.itemName : '',
            category: donation ? donation.category : '',
        };
    });

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

    const handleDelivery = () =>{
        navigate("/Donor/Delivery")
    }

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
            title: 'Request Id',
            dataIndex: 'donation_id',
            key: 'donation_id',
            width: '10%',
            filteredValue: filteredInfo.donation_id || null,
            sorter: (a, b) => a.donation_id - b.donation_id,
            sortOrder: sortedInfo.columnKey === 'donation_id' ? sortedInfo.order : null,
        },
        {
            title: 'Item Name',
            dataIndex: 'itemName',
            key: 'itemName',
            width: '30%',
            ...getColumnSearchProps('itemName'),
            filteredValue: filteredInfo.itemName || null,
            sortOrder: sortedInfo.columnKey === 'itemName' ? sortedInfo.order : null,
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            width: '30%',
            filters: [
                { text: 'Clothing', value: 'Clothing' },
                { text: 'Food', value: 'Food' },
                { text: 'Toys', value: 'Toys' },
                { text: 'Medical Supplies', value: 'Medical Supplies' },
                { text: 'Blood Donations', value: 'Blood Donations' },
                { text: 'School Supplies', value: 'School Supplies' },
            ],
            filterSearch: true,
            filteredValue: filteredInfo.category || null,
            onFilter: (value, record) => record.category.startsWith(value),
            sortOrder: sortedInfo.columnKey === 'category' ? sortedInfo.order : null,
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            sortOrder: sortedInfo.columnKey === 'quantity' ? sortedInfo.order : null,
        },
        {
            title: 'Details',
            dataIndex: '',
            key: 'x',
            render: (record) => <Button onClick={() => handleRowClick(record.donation_id)}>Details</Button>
        },
        {
            title: 'Delivery',
            dataIndex: '',
            key: 'x',
            render: (record) => <Button onClick={() => handleDelivery()}>Schedule Delivery</Button>
        }
    ];

    return (
        <div>
            <h1>All Donations</h1>
            <Button onClick={clearAll} className="mb-3">Clear Filters</Button>
            <Table bordered className="mt-4" columns={generalColumns} dataSource={data} rowSelection={rowSelection} onChange={handleChange} />
        </div>
    );

}

export default MyDonations;
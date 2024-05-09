import React, { useState, useRef } from "react";
import donationData from "../donationData";
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import { useNavigate } from 'react-router-dom';
import { Container } from "react-bootstrap";

function ViewDonationRequest() {
    const navigate = useNavigate();

    const [editingItemId, setEditingItemId] = useState(null);
    const [editedItem, setEditedItem] = useState({});
    const [deletedItemIds, setDeletedItemIds] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleRowClick = (id) => {
        console.log(id);
        setEditingItemId(id);
    }

    const handleEditChange = (key, value) => {
        setEditedItem({
            ...editedItem,
            [key]: value
        });
    };

    const handleSave = () => {
        // Save editedItem
        console.log("Save item:", editedItem);
        // Clear editing state
        setEditingItemId(null);
        setEditedItem({});
    };

    const handleBack = () => {
        // Clear editing state
        setEditingItemId(null);
        setEditedItem({});
    };

    const handleDelete = (id) => {
        // Mark item as deleted
        setDeletedItemIds([...deletedItemIds, id]);
    };

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
                        Close
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

    const columns = [
        {
            title: '#',
            dataIndex: 'id',
            key: 'id',
            width: '10%',
            ...getColumnSearchProps('id'),
        },
        {
            title: 'Item Name',
            dataIndex: 'itemName',
            key: 'itemName',
            width: '30%',
            ...getColumnSearchProps('itemName'),
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
            onFilter: (value, record) => record.category.startsWith(value),
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
            onFilter: (value, record) => record.condition.startsWith(value),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (text, record) => (
                <Space size="middle">
                    {editingItemId === record.id ? (
                        <>
                            <Input value={editedItem.itemName} onChange={(e) => handleEditChange('itemName', e.target.value)} />
                            <Input value={editedItem.category} onChange={(e) => handleEditChange('category', e.target.value)} />
                            <Input value={editedItem.condition} onChange={(e) => handleEditChange('condition', e.target.value)} />
                            <Button onClick={handleSave}>Save</Button>
                            <Button onClick={handleBack}>Back</Button>
                        </>
                    ) : (
                        <Space size="middle">
                            <Button onClick={() => handleDelete(record.id)} type="danger">Delete</Button>
                            <Button onClick={() => setEditingItemId(record.id)}>Edit</Button>
                        </Space>
                    )}
                </Space>
            ),
        },
    ];

    return (
        <Container className="pt-3">
            <h1>Donation List</h1>
            <Table className="mt-4"
                columns={columns}
                dataSource={donationData.filter(item => !deletedItemIds.includes(item.id))}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: () => handleRowClick(record.id), // click row
                    };
                }}
            />
        </Container>
    );
}

export default ViewDonationRequest;

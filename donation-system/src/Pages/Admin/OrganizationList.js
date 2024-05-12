import React, { useState, useRef } from "react";
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import { useNavigate } from 'react-router-dom';
import { Container } from "react-bootstrap";
import OrganizationData from "../OrganizationData";
import LoginData from "../LoginData";


function OrganizationList() {
    const navigate = useNavigate();
    const updatedOrganizationData = OrganizationData.map((org, index) => ({
        ...org,
        id: index + 1, // This will generate a unique ID for each organization
    }));

    const handleRowClick = (org_id) => {
        navigate(`/Admin/OrganizationInfo/${org_id}`);
    }

    const [data, setData] = useState(OrganizationData);
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

    const handleDelete = (id) => {
        OrganizationData.forEach((item, index) => {
            if (item.org_id === id) {
                OrganizationData.splice(index, 1)
            }
        });
        LoginData.forEach((item, index) => {
            if (item.org_id === id) {
                LoginData.splice(index, 1)
            }
        });
        setData(data.filter((org) => org.org_id !== id));
    }

    const columns = [
        {
            title: '#',
            key: 'index',
            width: '10%',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Name',
            dataIndex: 'organizationName',
            key: 'name',
            width: '20%',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Type',
            dataIndex: 'orgType',
            key: 'type',
            width: '15%',
            ...getColumnSearchProps('type'),
        },
        {
            title: 'Email',
            dataIndex: 'organizationEmail',
            key: 'email',
            ...getColumnSearchProps('email'),
            sorter: (a, b) => a.email.length - b.email.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Actions',
            dataIndex: '',
            key: 'x',
            render: (_, record) => {
                return (
                    <Space size="middle">
                        <Button onClick={() => handleDelete(record.org_id)} className="me-2" style={
                            {
                                backgroundColor: '#da0808',
                                color: 'white',
                            }
                        }>
                            Delete</Button>
                        <Button onClick={() => handleRowClick(record.org_id)} className="me-2">Details</Button>
                    </Space>
                )
            }
        }
    ];

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
    return (
        <Container className="pt-3">
            <h1>Organization List</h1>
            <Table className="mt-4"
                columns={columns}
                rowSelection={{
                    ...rowSelection
                }}
                dataSource={data}
            />
        </Container>
    );
}

export default OrganizationList;
import React, { useState, useRef } from "react";
import DonorsData from "../DonorsData";
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import { useNavigate } from 'react-router-dom';
import { Container } from "react-bootstrap";
import LoginData from "../LoginData";


function DonorsList() {
    const navigate = useNavigate();

    const handleRowClick = (donor_id) => {
        navigate(`/Admin/DonorsInfo/${donor_id}`);
    }

    const [data, setData] = useState(DonorsData);
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

    const handleDelete = (id) => {
        DonorsData.forEach((item,index) => {
            if(item.donor_id === id){
                DonorsData.splice(index,1)
            }
        });
        LoginData.forEach((item,index) => {
            if(item.donor_id === id){
                LoginData.splice(index,1)
            }
        });
        setData(data.filter((donor) => donor.donor_id !== id));
    }

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

    const columns = [
        {
            title: '#',
            key: 'index',
            width: '10%',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'First Name',
            dataIndex: 'first_name',
            key: 'first_name',
            width: '20%',
            ...getColumnSearchProps('first_name'),
        },
        {
            title: 'Last Name',
            dataIndex: 'last_name',
            key: 'last_name',
            width: '20%',
            ...getColumnSearchProps('last_name'),
        },
        {
            title: 'Email',
            dataIndex: 'email',
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
                        <Button onClick={() => handleDelete(record.donor_id)} className="me-2" style={
                            {
                                backgroundColor: '#da0808',
                                color: 'white',
                            }
                        }>
                            Delete</Button>
                        <Button onClick={() => handleRowClick(record.donor_id)} className="me-2">Details</Button>
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
            <h1>Donors List</h1>
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

export default DonorsList;
import React, { useState } from 'react';
import { Button, Table, Popconfirm, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import TeacherDoctorsDummy from './TeachersDoctorDummy';

function VolunteerTable() {
    const navigate = useNavigate();
    const [data, setData] = useState(TeacherDoctorsDummy);

    const handleRowClick = (id) => {
        const selectedDonor = data.find(donor => donor.donor_id === id);
        navigate(`/Organization/VolDetails/${id}`, { donor: selectedDonor });
    };

    const handleAcknowledge = (id) => {
        const updatedData = data.map(item => {
            if (item.donor_id === id) {
                return { ...item, acknowledged: true };
            }
            return item;
        });
        setData(updatedData); // Update data state with the modified data
        message.success('Acknowledged!');
    };

    const handleDelete = (id) => {
        const updatedData = data.filter(item => item.donor_id !== id);
        setData(updatedData); // Update data state with the modified data
        message.success('Deleted!');
    };

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');

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
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <input
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    icon={<SearchOutlined />}
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
                </Button>
                <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    Reset
                </Button>
            </div>
        ),
        filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => document.getElementById('search-input').select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
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
            title: 'First Name',
            dataIndex: 'first_name',
            key: 'first_name',
            width: '25%',
            ...getColumnSearchProps('first_name'),
        },
        {
            title: 'Last Name',
            dataIndex: 'last_name',
            key: 'last_name',
            width: '25%',
            ...getColumnSearchProps('last_name'),
        },
        {
            title: 'Position',
            dataIndex: 'position',
            key: 'position',
            width: '25%',
            ...getColumnSearchProps('position'),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (text, record) => (
                <>
                    <Button onClick={() => handleRowClick(record.donor_id)}>Details</Button>
                    {!record.acknowledged && (
                        <Popconfirm
                            title="Are you sure to acknowledge this volunteer?"
                            onConfirm={() => handleAcknowledge(record.donor_id)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button style={{ marginLeft: 8 }}>Acknowledge</Button>
                        </Popconfirm>
                    )}
                    <Popconfirm
                        title="Are you sure to delete this volunteer?"
                        onConfirm={() => handleDelete(record.donor_id)}
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
            <h2 className='mt-3'>Volunteers</h2>
            <Table
                className='mt-4'
                columns={columns}
                dataSource={data}
                bordered
                rowKey="donor_id"
                pagination={{ pageSize: 10 }}
            />
        </>
    );
}

export default VolunteerTable;

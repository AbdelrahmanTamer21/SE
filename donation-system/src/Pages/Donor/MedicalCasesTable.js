import React, { useState, useRef } from "react";
import medicalCasesData from "./medicalCasesData";
import { SearchOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import { useNavigate } from 'react-router-dom';

function MedicalCasesTable() {
    const navigate = useNavigate();

    const handleRowClick = (id) => {
        navigate(`/Donor/MedicalCasesInfo/${id}`);
    }

    const [filteredInfo, setFilteredInfo] = useState({});
    const [searchText, setSearchText] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current.select());
            }
        },
        render: (text) =>
            searchText ? (
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

    const medicalCasesColumns = [
        {
            title: 'Case ID',
            dataIndex: 'id',
            key: 'id',
            width: '10%',
            filteredValue: filteredInfo.id || null,
        },
        {
            title: 'Patient Name',
            dataIndex: 'patientName',
            key: 'patientName',
            width: '20%',
            ...getColumnSearchProps('patientName'),
            filteredValue: filteredInfo.patientName || null,
        },
        {
            title: 'Medical Specialty',
            dataIndex: 'medicalSpecialty',
            key: 'medicalSpecialty',
            width: '20%',
            ...getColumnSearchProps('medicalSpecialty'),
            filteredValue: filteredInfo.medicalSpecialty || null,
        },
        {
            title: 'Organization Name',
            dataIndex: 'organizationName',
            key: 'organizationName',
            width: '20%',
            ...getColumnSearchProps('organizationName'),
            filteredValue: filteredInfo.organizationName || null,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            width: '15%',
            ...getColumnSearchProps('address'),
            filteredValue: filteredInfo.address || null,
        },
        /*{
            title: 'Governorate',
            dataIndex: 'governorate',
            key: 'governorate',
            width: '15%',
            ...getColumnSearchProps('governorate'),
            filteredValue: filteredInfo.governorate || null,
        },*/
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
            width: '15%',
            render: (text) => <EnvironmentOutlined style={{ fontSize: '16px' }} />,
        },
        {
            title: 'Details',
            dataIndex: '',
            key: 'x',
            render: (record) => <Button onClick={() => handleRowClick(record.id)}>Details</Button>,
        },
    ];
    const clearAll = () => {
        setFilteredInfo({});
        setSearchText('');
    };

    return (
        <>
            <Button onClick={clearAll} className="mb-3">Clear Filters</Button>
            <Table className="mt-4" columns={medicalCasesColumns} dataSource={medicalCasesData} rowSelection={rowSelection} />
        </>
    );
};

export default MedicalCasesTable;

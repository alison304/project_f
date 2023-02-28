import "./list.css";
import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { removeMovie, getMovieList } from "../services/movie.service";
import { Box } from '@mui/material';
import { Carousel } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const List = (props) => {
    const [movieList, setMovieList] = useState([]);
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});    

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

    function onChange(a, b, c) {
        console.log(a, b, c);
    }
    
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
            style={{
                padding: 8,
            }}
            onKeyDown={(e) => e.stopPropagation()}
            >
            
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
            style={{
                color: filtered ? '#1890ff' : undefined,
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
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
            filteredValue: filteredInfo.name || null,
            onFilter: (value, record) => record.name.includes(value),
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
            ellipsis: true,
            ...getColumnSearchProps('name'),    
        },
        {
            title: 'Categoría',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Año',
            dataIndex: 'year',
            key: 'year',
        },
        {
            title: 'Portada',
            dataIndex: 'photo',
            key: 'photo',
        },  
        {
            title: 'Acción',
            key: 'action'
        },      
    ];

    const dataSource = movieList?.map(movie => ({...movie, key: movie._id}));
    
    const navigate = useNavigate();

    const getMovieListFromService = async () => {
        try {
            const data = await getMovieList();
            console.log(data);
            setMovieList(data.data.movieList);
        } catch (error) {
            console.log("getMovieListFromService", error);            
        }
    };

    const removeMovieFromService = async (id) => {
        try {
            await removeMovie(id);
            const newMovieList = movieList.filter(movie => movie._id !== id);
            setMovieList(newMovieList);
        } catch (error) {
            console.log("removeMovieFromService", error);            
        }
    }

    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };

    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };

    useEffect(() => {
        getMovieListFromService();
    },[props.render]);
    
    return (
        <div>
            <div className='asd'></div>
            <div className='fondolista'>
                <div className="list">
                    <span className="listTitle">Películas</span>
                    <div className="wrapper">
                        <div className="container5">
                            <div className="mov">
                                
                            </div>
                            <div className="mov">
                                
                            </div>
                            <div className="mov">
                                
                            </div>
                            <div className="mov">
                                
                            </div>
                            <div className="mov">
                                
                            </div>
                            <div className="mov">
                                
                            </div>
                        </div>
                        <div className="container5">
                            <div className="mov">
                                
                            </div>
                            <div className="mov">
                                
                            </div>
                            <div className="mov">
                                
                            </div>
                            <div className="mov">
                                
                            </div>
                            <div className="mov">
                                
                            </div>
                            <div className="mov">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List

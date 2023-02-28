import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { removeMovie, getMovieList } from "../../services/movie.service";
import { Box } from '@mui/material';
import { Space, Button, Table, Input } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import "./movieList.css"

const MovieList = (props) => {
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
            key: 'action',
            render: (_, record) => (
            <Space size="middle">
                <Link to={`/movie/${record._id}`}>Edit</Link><span>&nbsp;&nbsp;</span>|<span>&nbsp;&nbsp;</span>
                <Link onClick={() => removeMovieFromService(record._id)}>Delete</Link>            
            </Space>
            ),
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
    const clearFilters = () => {
        
    };
    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };

    useEffect(() => {
        getMovieListFromService();
    },[props.render]);
    

    return (
        <div className="form-list">
            <br/>
            <h1 className="title2" onClick={() => navigate("/")}>MAGIC FILM</h1>
            <br/>
            <h1>Películas</h1>
            <br />
            <p>Lista de películas</p>
            <Box display="flex" justifyContent="flex-end">
            <Button className="btn-home" to="/movies/new" onClick={() => navigate("/movie")}> + Agregar una película</Button>            
            </Box>
            <Button className="btn-home" onClick={clearFilters}>Clear filters</Button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className="btn-home" onClick={clearAll}>Clear filters and sorters</Button>
            <br/><br/>            
            <Table columns={columns} dataSource={dataSource} onChange={handleChange} />
            <Link className="home" to="/">Back to home</Link>       
        </div>
    )
}

export default MovieList

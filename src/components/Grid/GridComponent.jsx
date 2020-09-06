import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component';
import dummyData from '../Data/DummyData';
import { Button, Grid } from '@material-ui/core';
import { differenceBy } from 'lodash';
import { withRouter } from 'react-router-dom';

const GridComponent = React.memo((props) => {

    const [data, setdata] = useState([]);
    const [toggleCleared, setToggleCleared] = useState(false);
    const [selectedRows, setselectedRows] = useState([]);

    useEffect(() => {
        console.log("useEffect called")
        setdata(dummyData);
        return () => {
        }
    }, []);

    const handleDelete = () => {

        if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.title)}?`)) {
            setdata(differenceBy(data, selectedRows, 'id'));
            setToggleCleared(!toggleCleared);

        }
    }

    const handleRowSelected = (params) => {
        setselectedRows(params.selectedRows)
    }

    const addMovie = (params) => {
        props.history.push('/Home/AddMovie');
    }


    const actions = <Button variant="contained" color="primary" onClick={addMovie}>Add</Button>;
    const contextActions = selectedRows.length === 1 ?
        <>
            <Grid item md={6}>
                <Button variant="contained" color="primary" >Edit</Button>
            </Grid>
            <Grid item md={6}>
                <Button variant="contained" color="secondary" onClick={handleDelete}>Delete</Button>
            </Grid>

        </> : selectedRows.length > 1 ?

            <Button variant="contained" color="secondary" onClick={handleDelete}>Delete</Button> :

            <Button variant="contained" color="secondary" onClick={handleDelete}>Delete</Button>;

    const columns = [
        {
            name: 'Title',
            selector: 'title',
            sortable: true,
        },
        {
            name: 'Director',
            selector: 'director',
            sortable: true,
        },
        {
            name: 'Genres',
            selector: 'genres',

            cell: row => row.genres.map((genre, i) => <div key={i}>{genre}</div>),
        },
        {
            name: 'Year',
            selector: 'year',
            sortable: true,
        },
    ];

    console.log("render method call" + selectedRows.length)
    return (
        <div>
            <DataTable
                title="Movie List"
                columns={columns}
                data={data}
                actions={actions}
                contextActions={contextActions}
                onSelectedRowsChange={handleRowSelected}
                clearSelectedRows={toggleCleared}
                selectableRows
                highlightOnHover
                pagination
            />
        </div>
    )
})

export default withRouter(GridComponent)

import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import HeaderComponent from '../Header/HeaderComponent';
import MovieComponent from '../Movie/MovieComponent';
import SidebarComponent from '../Sidebar/SidebarComponent';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));


const HomeComponent = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item md={12}>
                    <HeaderComponent />
                </Grid>
                <Grid item md={2}>
                    <SidebarComponent/>
                </Grid>
                <Grid item md={10}>
                   <MovieComponent/>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomeComponent

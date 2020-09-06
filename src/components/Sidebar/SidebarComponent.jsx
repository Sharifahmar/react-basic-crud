import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    sidebar: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const SidebarComponent = React.memo((props) => {
    const classes = useStyles();
    return (
        <div className={classes.sidebar}>
            <List component="nav" aria-label="main mailbox folders">
                <Link to='/Home'>
                <ListItem button selected={true}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Movie List" />
                </ListItem>
                </Link>
            </List>
        </div>
    )
})

export default SidebarComponent

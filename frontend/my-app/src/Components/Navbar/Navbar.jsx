import React from 'react';
import {
    AppBar,
    Container, IconButton,
    Toolbar,
    Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/core/styles";
import LogIn from "./LogIn/LogIn";




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
}));





const Navbar = () => {
    const Style = useStyles();
    return (
        <div>
            <AppBar>
                <Container>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-laabel="menu" className={Style.menuButton}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={Style.title}> My Blog</Typography>
                        <LogIn/>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Navbar;
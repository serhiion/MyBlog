import React from 'react';
import {BottomNavigation, BottomNavigationAction, Typography} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";


const BodyFooter = () => {
    const [value, setValue] = React.useState("reacents")

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <footer>
                <Typography variant={"h6"} align={"center"} gutterBottom> Footer </Typography>
                <BottomNavigation value={value}>
                    onChange={handleChange}
                    <BottomNavigationAction
                        label={"Recents"}
                        value={"recents"}
                        icon={<RestoreIcon/>}
                    />
                    <BottomNavigationAction
                        label={"Favoretes"}
                        value={"favoretes"}
                        icon={<FavoriteIcon/>}
                    />
                    <BottomNavigationAction
                        label={"Nearby"}
                        value={"nearby"}
                        icon={<LocationOnIcon/>}
                    />
                    <BottomNavigationAction
                        label={"Folder"}
                        value={"folder"}
                        icon={<FolderIcon/>}
                    />
                </BottomNavigation>
                <Typography align={"center"} color={"textSecondary"} component={"p"} variant={"subtitle1"}>My
                    Blog</Typography>
            </footer>
        </div>
    );
};

export default BodyFooter;
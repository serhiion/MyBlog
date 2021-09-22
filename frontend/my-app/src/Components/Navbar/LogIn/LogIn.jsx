import React from 'react';
import {
    Box,
    Button, Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyle = makeStyles((them) => ({
    box: {
        display: "flex"
    },
    btn: {
        marginRight: them.spacing(3)
    }
}))


const LogIn = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const style = useStyle();

    return (
        <div>
            <Container className={style.box}>
                <Box className={style.btn}>
                    <Button color="inherit" variant="outlined" onClick={handleClickOpen}>Log In</Button>
                    <Dialog open={open} onClose={handleClose} aria-labelledby={'Log In'}>
                        <DialogTitle id={"Log In"}>Log In</DialogTitle>
                        <DialogContent>
                            <DialogContentText>Please Log In</DialogContentText>
                            <TextField
                                autoFocus
                                margin={"dense"}
                                id={"name"}
                                label={"Email"}
                                type={"email"}
                                fullWidth
                            />
                            <TextField
                                autoFocus
                                margin={"dense"}
                                id={"pass"}
                                label={"Password"}
                                type={"password"}
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color={"primary"}>Cancel</Button>
                            <Button onClick={handleClose} color={"primary"}>Log In</Button>
                        </DialogActions>
                    </Dialog>
                </Box>
                <Box className={style.btn}>
                    <Button color="secondary" variant="contained" onClick={handleClickOpen}>Sign Up</Button>
                    <Dialog open={open} onClose={handleClose} aria-labelledby={'Sing In'}>
                        <DialogTitle id={"Sing In"}>Log In</DialogTitle>
                        <DialogContent>
                            <DialogContentText>Please Sing In</DialogContentText>
                            <TextField
                                autoFocus
                                margin={"dense"}
                                id={"name"}
                                label={"Email"}
                                type={"email"}
                                fullWidth
                            />
                            <TextField
                                autoFocus
                                margin={"dense"}
                                id={"pass"}
                                label={"Password"}
                                type={"password"}
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color={"primary"}>Cancel</Button>
                            <Button onClick={handleClose} color={"primary"}>Log In</Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            </Container>
        </div>
    );
};

export default LogIn;
import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import LayerIcon from "@material-ui/icons/Layers"
import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled"


const useStyle = makeStyles((theme) => ({
    featurePost: {
        position: "relative",
        color: theme.palette.common.white,
        marginBottom: theme.spacing(1),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
    Content: {
        position: "relative",
        padding: theme.spacing(3),
        marginTop: theme.spacing(7),
    },
    owerlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, .3)"
    },
    cardMedia: {
        paddingTop: "56.25%"
    },
    cardContent: {
        flexGrow: 1
    },
    cardGrid: {
        marginTop: theme.spacing(4)
    }
}));


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const BodyMain = () => {
    const style = useStyle();
    return (
        <div>
            <Paper className={style.featurePost} style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
                <Container fixed>
                    <div className={style.owerlay}/>
                    <Grid container>
                        <Grid item lg={11}>
                            <div className={style.Content}>
                                <Typography component="h1" variant="h3" color="inherit" gutterBottomw>
                                    My Blog
                                </Typography>
                                <Typography variant={"h6"} color={"inherit"} paragraph>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur
                                    commodi debitis deleniti dolor expedita fugit ipsum itaque nulla numquam obcaecati,
                                    possimus quae, quasi qui quibusdam reiciendis sequi tempore unde!
                                </Typography>
                                <Button variant={"contained"} color={"secondary"}>More</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
            <div>
                <Container maxWidth={"lg"}>
                    <Typography variant={"h2"} align={"center"} color={"textPrimary"} gutterBottom>
                        My Blog
                    </Typography>
                    <Typography variant={"h5"} align={"center"} color={"textSecondary"} gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur cumque dicta
                        distinctio exercitationem laborum laudantium maiores maxime minima neque nostrum obcaecati,
                        optio quae quaerat, quos suscipit ullam, veniam voluptatem?
                    </Typography>
                    <divs>
                        <Grid container spacing={2} justify={"center"}>
                            <Grid item>
                                <Button variant={"contained"} color={"primary"}>Start Now</Button>
                            </Grid>
                            <Grid item>
                                <Button variant={"outlined"} color={"primary"}>Learn More</Button>
                            </Grid>
                        </Grid>
                    </divs>
                    <Container className={style.cardGrid}>
                        <Grid container spacing={2}>
                            {cards.map((card) => (
                                <Grid item key={card} xs={"12"} sm={"6"} md={"4"}>
                                    <Card>
                                        <CardMedia
                                            className={style.cardMedia}
                                            image={"https://source.unsplash.com/random"}
                                            title={"image title"}
                                        />
                                        <CardContent className={style.cardContent}>
                                            <Typography variant={"h5"} gutterBottom>
                                                Blog Post
                                            </Typography>
                                            <Typography>
                                                describe describe describe
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size={"small"} color={"primary"}>View</Button>
                                            <Button size={"small"} color={"primary"}>Edit</Button>
                                            <LayerIcon/>
                                            <PlayCircleFilled/>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Container>
            </div>
        </div>
    );
};

export default BodyMain;
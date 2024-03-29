import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RangeShowCard from './RangeShowCard';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../m2-bll/redux/store";

import {Card, Paper} from "@material-ui/core";
import {Redirect} from "react-router-dom";
import {PATH} from "../../Routes";
import {acsessAPI, UserProfileType} from "../../../m3-dal/Api";
import DeckTable from "../../common/c8-Table/DeckTable";
import Search from './Search';
import Typography from "@material-ui/core/Typography";
import {authMeTC} from "../../../m2-bll/redux/auth-reducer";


const useStyles = makeStyles((theme) => ({
    root: {
        /*flexGrow: 1,*/
        marginTop: "40px",
        marginBottom: "40px",
        minWidth: 750,
    },
    paper: {
        margin: 'auto',
        maxWidth: 1200,
    },
    filterBlock: {
        backgroundColor: "#ECECF9",
        maxWidth: "250px",
        padding: "30px",
        flexGrow: 1,
    },
    mainBlock: {
        width: "fit-content",
        flexGrow: 3,
        margin: "30px",
        maxWidth: "950px",
        boxSizing : "border-box",
    },
    mainSearchBlock: {
        /*flexGrow: 1,*/
        marginBottom: "20px",
    },
    mainSearchHeader : {
        marginBottom: "20px",
    },
    mainTableBlock: {
        /*maxWidth: "500px",*/
    }
}));

export default function Pack() {
    const classes = useStyles();

    const {_id} = useSelector((state: AppStoreType) => state.auth);
    const pack = useSelector((state: AppStoreType) => state.pack);
    const userProfile = useSelector<AppStoreType, UserProfileType>(state => state.auth)
    const dispatch = useDispatch();


    useEffect(() => {
        if (!userProfile._id) {
              dispatch(authMeTC())
           }
    }, []);


     if (userProfile._id) {
        return (
            <div className={classes.root}>
                <Paper
                    elevation={4}
                    className={classes.paper}
                    square={false}
                >
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="stretch"
                    >
                        <Grid
                            item
                            className={classes.filterBlock}
                        >
                            <RangeShowCard/>
                        </Grid>
                        <Grid
                            item
                            className={classes.mainBlock}
                        >
                            <Grid
                                item
                                className={classes.mainSearchBlock}
                                alignItems={"stretch"}
                            >
                                <Typography
                                    variant={"h2"}
                                    className={classes.mainSearchHeader}
                                >
                                    Packs list
                                </Typography>
                                <Search/>
                            </Grid>
                            <Grid
                                item
                                className={classes.mainTableBlock}
                                alignItems={"stretch"}
                            >
                                <DeckTable/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    } else {
        return (
            <Redirect from={PATH.ALL_ROUTES} to="/login"/>
        )
    }

}

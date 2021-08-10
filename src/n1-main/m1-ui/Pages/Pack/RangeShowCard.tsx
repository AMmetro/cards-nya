import React, {useCallback, useMemo} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import RangeSlider from './RangeSlider' ;
import Typography from '@material-ui/core/Typography';
import {ButtonGroup} from "@material-ui/core";
import {GetPackQueryParamsType} from "../../../m3-dal/Api";
import {getAllPack} from "../../../m2-bll/redux/pack-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../m2-bll/redux/store";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,
    },
    privateModeHeader : {
        marginBottom : "20px",
    },
    privateModeBlock : {
        display: "flex",
        alignItems: "stretch",
        marginBottom : "40px",
    },
    modeButton : {
        padding: "8px 32px",
        borderRadius: "0px",
        textAlign: "center",
    },
    paper: {
        /*padding: theme.spacing(1),*/
        /*textAlign: 'left',*/
        /*color: theme.palette.text.secondary,*/
        /*height: 600,*/
        /*backgroundColor: "#e2dfef"*/
    },
    sliderCaption: {
        marginBottom : "40px",
        /*padding: theme.spacing(6),*/
        /*textAlign: 'center',*/
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    const pack = useSelector((state: AppStoreType) => state.pack);

   //------------------ вынести в отдельную компоненту ------------------------------------

    const dispatch = useDispatch();

    const [userId, setUserId] = React.useState<string>("5eecf82a3ed8f700042f1186");

    console.log(pack.user_id)


    const getAllPacks = () => {
        let sortPacks
        if (pack.sortField) {
            sortPacks = +pack.isSortTypeAscending + pack.sortField;
        }


        const paramsObject: GetPackQueryParamsType = {
            params: {
                ...(pack.packName && {packName: pack.packName}),
                ...(pack.min !== null && {min: pack.min}),
                ...(pack.max !== null && {max: pack.max}),
                ...(pack.page && {page: pack.page}),
                ...(pack.pageCount && {pageCount: pack.pageCount}),
                ...(pack.user_id && {user_id: pack.user_id}),
                ...(sortPacks && {sortPacks: sortPacks}),
            }
        }
        dispatch(getAllPack())
    };


    const myButtonClickHandler=()=>{
        alert("MY cards show")
        // dispatch (setuserAC)
    };
    const allButtonClickHandler=()=>{
        alert("ALL cards show")
    };


    return (
        <div className={classes.root}>
            <Grid container>
                <Typography
                    variant="h3"
                    className={classes.privateModeHeader}
                >
                    Show pack cards
                </Typography>
                {/*<Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                >*/}

                <ButtonGroup
                    variant="text"
                    color="primary"
                    aria-label="small outlined secondary button group"
                    /*aria-label="outlined primary button group"*/
                    className={classes.privateModeBlock}
                >
                    <Button onClick={myButtonClickHandler}
                        className={classes.modeButton}
                    >My</Button>
                    <Button onClick={allButtonClickHandler}
                        className={classes.modeButton}
                    >ALL</Button>
                </ButtonGroup>
                    {/*<Button variant="contained" color="primary">*/}
                    {/*    My*/}
                    {/*  </Button>*/}
                    {/*  <Button variant="contained" color="secondary">*/}
                    {/*    All*/}
                    {/*  </Button>*/}
                {/*</Grid>*/}
                <Typography
                    variant="h3"
                    gutterBottom
                    className={classes.sliderCaption}
                >
                    Number of cards
                </Typography>
                <RangeSlider/>
            </Grid>
        </div>
    );
}

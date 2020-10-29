import React  from "react";
import { Card,CardContent,Typography,Grid } from "@material-ui/core";

import  CountUp  from 'react-countup';
// import cx from 'classnames';
import  './cards.css';

const Cards = ({data :{confirmed,recovered,deaths,lastUpdate}}) =>{
    if(!confirmed){
        return "Loading..."
    }
    return(
        <div className="container">
            <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={12} md={3} className="infected">
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    {/* <Typography variant="h5" >{confirmed.value}</Typography> */}
                    <CountUp start={0} end={confirmed.value} duration={2.5} separator=","></CountUp>
                    <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2" >Number of active cases of COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className="recovered">
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recoverd</Typography>
                    {/* <Typography variant="h5" >{recovered.value}</Typography> */}
                    <CountUp start={0} end={recovered.value} duration={2.5} separator=","></CountUp>
                    <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2" >Number of recoverd from COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className="deaths">
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    {/* <Typography variant="h5" >{deaths.value}</Typography> */}
                    <CountUp start={0} end={deaths.value} duration={2.5} separator=","></CountUp>
                    <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2" >Number of deaths caused by COVID-19</Typography>
                </CardContent>
            </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
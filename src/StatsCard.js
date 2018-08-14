import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const styles = {
    card: {
      paddingBottom: 0,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }

function StatsCard(props) {
    let imgUrl=''
    if( props.label === 'Solos'){
      imgUrl = require("./fortnite-raven-skin.jpg")
    }
    else if ( props.label === 'Duos'){
      imgUrl = require("./fortnite_duos.jpg")
    }
    else{
      imgUrl = require("./fortnite_squads.jpg")
    }
    
    const { classes } = props;
    return (
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={imgUrl}
            title="SOLO queue stats"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {props.label}
            </Typography>
            <Typography component="p">
              Wins: {props.wins}<br></br>
              Kills: {props.kills}<br></br>
              K/D: {props.kd}<br></br>
              Matches Played: {props.matches}<br></br>
              Win Ratio: {props.winRatio}%<br></br>
            </Typography>
          </CardContent>
        </Card>
    );
  }
  
  StatsCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  
export default withStyles(styles)(StatsCard)

  

import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import "../css/HospitalCard.css";

const useStyles = makeStyles({
  root: {
    display: "flex", // Added display flex
    // minWidth: "100%",
    // minWidth:"100%",
    // justifyContent: "center",
    // margin: "10px",
  },
  content: {
    flex: 1, // Added flex 1
  },
  media: {
    width: 200, // Changed to width for right-side image
    height: "auto", // Added auto height
  },
  '@media (max-width: 600px)':{
    media:{
      width:140
    }
  }
});

const HospitalCard = ({ title, address, imageUrl }) => {
  const classes = useStyles();
  title = "Manipal Hospital, Kottayam";
  address = "Kottayam, Kerala, India";
  imageUrl = "https://source.unsplash.com/random";

  return (
      <Card className={`${classes.root} hospital-card`}>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {address}
          </Typography>
        </CardContent>
        <CardMedia
          className={`${classes.media} hospital-card-image`}
          image={imageUrl}
          title="Hospital Image"
        />
      </Card>
  );
};

export default HospitalCard;
import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";
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
      width:140,
    }
  }
});

const HospitalCard = ({HospitalObj}) => {
  const classes = useStyles();
  const title = HospitalObj.name;
  const imageUrl = "https://source.unsplash.com/random";

  const route = useNavigate();
  const handleClick=()=>{
    route(`/admindash/department/${HospitalObj._id}`)
  }

  return (
      <Card className={`${classes.root} hospital-card`} onClick={handleClick}>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {HospitalObj.address}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Contact Number : {HospitalObj.contactNumber}
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
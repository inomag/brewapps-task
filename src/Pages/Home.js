import React, { Component } from "react";
import { Typography, Container } from "@mui/material";
import "../Styles/Home.css";
import success from "../Assets/success.png";
import ChipCategories from "../Components/ChipCategories";
import BlogCards from "../Components/BlogCards";

class Home extends Component {
  render() {
    return (
      <Container maxWidth="false" className="container">
        <Typography variant="h3" className="header">
          Live Spaces
        </Typography>
        <div className="tagline">
          <img src={success} alt="success" className="tagIcon" />
          <Typography className="subheader">
            All NFTs on Cyber either belong to or were minted by their space
            creator.
          </Typography>
        </div>
        <ChipCategories />
        <BlogCards />
      </Container>
    );
  }
}

export default Home;

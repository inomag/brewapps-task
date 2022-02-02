import React, { Component } from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import "../Styles/BlogCards.css";

class BlogCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
    };
  }

    // Fetching blog details from the server
  componentDidMount() {
    fetch("./blogs.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          blogs: data.blogs,
        });
        console.log(this.state.blogs);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="blogContainer">
        {this.state.blogs.map((blog, index) => {
          return (
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                component="img"
                height="140"
                image={blog.image}
                alt=""
              />
              <CardContent className="blogContent">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="blogText"
                >
                  {blog.name}
                </Typography>

                <div className="blogButton">
                  <Typography
                    variant="body2"
                    className="blogUsername"
                    component="p"
                  >
                    {" "}
                    {blog.username}{" "}
                  </Typography>
                  <Typography variant="body2" className="blogId" component="p">
                    {" "}
                    {blog.id}{" "}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default BlogCards;

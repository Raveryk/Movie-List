import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "../Details/Details.css";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function Details() {
  // grabbing dynamic part of Url
  let { id } = useParams();
  console.log(id);

  // using id to call the same movie id on page load.
  useEffect(() => {
    dispatch({ type: "FETCH_DETAILS", payload: id });
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();
  // grabbing details from reducer
  const details = useSelector((store) => store.details);

  // send to home page and clear details from reducer
  const toList = () => {
    dispatch({ type: "CLEAR_DETAILS", payload: [] });
    history.push("/");
  };

  // send to edit page
  const toEdit = () => {
    history.push(`/edit/${id}`);
  };

  return (
    <>
      <Button
        variant="contained"
        style={{ marginBottom: "10px" }}
        onClick={toList}
      >
        Back to List
      </Button>
      <div className="detailPage">
        <div className="detail-card">
          {details.map((movie, i) => {
            return (
              <Card
                style={{backgroundColor: "wheat"}}
                key={i}
                className="detail-card"
                elevation={10}
                onClick={toEdit}
              >
                <CardActionArea>
                  <CardMedia>
                    <p>
                      <img
                        className="detail-image"
                        src={movie.poster}
                        alt={movie.title}
                      />
                    </p>
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                      {movie.title}
                    </Typography>
                    <p className="detail-genre">
                      {movie.genres.map((genre, i) => {
                        return (
                          <Typography gutterBottom key={i}>
                            {genre}
                          </Typography>
                        );
                      })}
                    </p>
                    <Typography>
                      <p className="detail-description">{movie.description}</p>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Button variant="contained" onClick={toEdit}>
                  EDIT
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Details;

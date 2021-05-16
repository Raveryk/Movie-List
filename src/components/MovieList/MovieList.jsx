import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./MovieList.css";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

function MovieList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  const toDetails = (movie) => {
    // need to figure out how to send it to specific movie detail page
    console.log("You clicked a movie!!");
    dispatch({ type: "FETCH_DETAILS", payload: movie.id });
    history.push(`/details/${movie.id}`);
  };

  return (
    <>
      <Button
        className="addBtn"
        variant="outlined"
        style={{ marginBottom: "10px" }}
        onClick={() => history.push("/add")}
      >
        Add Movie
      </Button>

      <main className="listMain">
        <section className="movies">
          {movies.map((movie) => {
            return (
              <Grid className="poster-grid" item xs={2}>
                <div className="poster" key={movie.id}>
                  <Card onClick={() => toDetails(movie)} elevation={20}>
                    <CardActionArea>
                      <CardContent>
                        <img
                          className="image"
                          src={movie.poster}
                          alt={movie.title}
                        />
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              </Grid>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default MovieList;

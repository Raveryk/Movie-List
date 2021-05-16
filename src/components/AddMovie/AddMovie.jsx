import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";

import "../AddMovie/AddMovie.css";

import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";

function AddMovie() {
  // Get genres for dropdown on page load
  useEffect(() => {
    dispatch({ type: "FETCH_GENRES" });
  }, []);

  // grabbing genres list from redux
  const genres = useSelector((store) => store.genres);

  const history = useHistory();
  const dispatch = useDispatch();
  // container for input values
  const [newMovie, setNewMovie] = useState({
    title: "",
    poster: "",
    description: "",
    genre_id: "",
  });

  // sets the value for title from input
  const handleTitle = (event) => {
    event.preventDefault();
    setNewMovie({ ...newMovie, title: event.target.value });
  };
  // sets the value for the url from input
  const handleURL = (event) => {
    event.preventDefault();
    setNewMovie({ ...newMovie, poster: event.target.value });
  };
  // sets the value for description from input
  const handleInfo = (event) => {
    event.preventDefault();
    setNewMovie({ ...newMovie, description: event.target.value });
  };
  // sets the value for genre from input
  const handleGenre = (event) => {
    event.preventDefault();
    setNewMovie({ ...newMovie, genre_id: event.target.value });
  };

  // send user to home page
  const toList = () => {
    history.push("/");
  };

  // dispatch new movie data to saga for POST route
  const handleSubmit = () => {
    dispatch({ type: "ADD_MOVIE", payload: newMovie });
    dispatch({ type: "FETCH_MOVIES" });

    history.push("/");
  };

  return (
    <div className="addPage">
      <Card className="addMovie" elevation={10}>
        <Typography style={{ marginBottom: "10px" }}>ADD A MOVIE</Typography>
        <div>
          <FormControl spacing={2}>
            <TextField
              className="titleForm"
              label="Movie Title"
              variant="outlined"
              value={newMovie.title}
              onChange={handleTitle}
            />
            <TextField
              className="posterForm"
              label="Poster URL"
              variant="outlined"
              value={newMovie.url}
              onChange={handleURL}
            />
            <TextField
              className="infoForm"
              label="Description"
              multiline
              rows={5}
              variant="outlined"
              value={newMovie.info}
              onChange={handleInfo}
            />
            <FormControl className="genreForm">
              <InputLabel>Genre</InputLabel>
              <Select
                className="genreForm"
                label="Genre"
                value={newMovie.genre_id}
                onChange={handleGenre}
              >
                {genres.map((genre) => (
                  <MenuItem key={genre.id} value={genre.id}>
                    {genre.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </FormControl>
        </div>
        <div className="btnGroup">
          <Button onClick={() => toList()} variant="outlined">
            Cancel
          </Button>
          <Button onClick={() => handleSubmit()} variant="outlined">
            Save
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default AddMovie;


import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import "../Edit/Edit.css";

function Edit() {
  // grabbing dynamic part of the url
  let { id } = useParams();
  console.log(id);

  // using id to call the same movie id on page load.
  useEffect(() => {
    dispatch({ type: "FETCH_DETAILS", payload: id });
  }, []);

  const history = useHistory();
  const dispatch = useDispatch();
  // container to hold edit values
  const [editMovie, setEditMovie] = useState({ title: "", description: "" });
  // grabbing details from redux
  const details = useSelector((store) => store.details);

  // sets value for title
  const handleTitle = (event) => {
    event.preventDefault();
    setEditMovie({ ...editMovie, title: event.target.value });
  };

  // sets value for description
  const handleInfo = (event) => {
    event.preventDefault();
    setEditMovie({ ...editMovie, description: event.target.value });
  };

  // head back to movie detail page for specific movie
  const toDetail = () => {
    history.push(`/details/${id}`);
  };
  // submit your movie updates
  const saveButton = () => {
    dispatch({ type: "EDIT_MOVIE", payload: { id: id, data: editMovie } });
    history.push(`/details/${id}`);
  };

  return (
    <div className="editPage">
      <Card style={{backgroundColor: "wheat"}}className="editCard" elevation={10}>
        <Typography style={{ marginBottom: "10px" }}>EDIT INFO</Typography>

        <div>
          <FormControl spacing={2}>
            <TextField
              style={{marginBottom:"10px", backgroundColor: "whitesmoke"}}
              className="titleEdit"
              label="Movie Title"
              variant="outlined"
              placeholder={details[0].title}
              value={editMovie.title}
              onChange={handleTitle}
            />
            <TextField
              style={{backgroundColor: "whitesmoke"}}
              className="infoForm"
              label="Description"
              multiline
              rows={5}
              placeholder={details[0].description}
              value={editMovie.description}
              onChange={handleInfo}
              variant="outlined"
            />
          </FormControl>
        </div>
        <div className="btnGroup">
          <Button color="default" onClick={() => toDetail()} variant="contained">
            Cancel
          </Button>
          <Button color="primary" onClick={() => saveButton()} variant="contained">
            Save
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Edit;

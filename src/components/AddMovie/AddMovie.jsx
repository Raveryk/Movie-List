import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button'

import '../AddMovie/AddMovie.css';

import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';


function AddMovie() {

const history = useHistory();
const dispatch = useDispatch();
const [newMovie, setNewMovie] = useState({title: '', poster: '', description: '', genre_id: []});
// console.log(newMovie)




const handleTitle = (event) => {
    event.preventDefault()
    setNewMovie({...newMovie, title: event.target.value});
}

const handleURL = (event) => {
    event.preventDefault()
    setNewMovie({...newMovie, poster: event.target.value});
}

const handleInfo = (event) => {
    event.preventDefault()
    setNewMovie({...newMovie, description: event.target.value});
}

const handleGenre = (event) => {
    event.preventDefault()
    setNewMovie({...newMovie, genre_id: event.target.value});
}

const toList = () => {
    history.push('/')
}

const handleSubmit = () => {

dispatch({ type: 'ADD_MOVIE', payload: newMovie })

    // history.push('/')
}

const genreNames = [
    "Adventure",
    "Animated",
    "Biographical",
    "Comedy",
    "Disaster",
    "Drama",
    "Epic",
    "Fantasy",
    "Musical",
    "Romantic",
    "Sci-Fi",
    "Space-Opera",
    "Superhero"
]

    return(
        <>
        <Typography >Add A Movie</Typography>

        
        <Card className="addMovie" elevation={10}>
        <FormControl>
            <TextField label="Movie Title" variant="outlined" value={newMovie.title} onChange={handleTitle}/>
            <TextField label="Poster URL" variant="outlined" value={newMovie.url} onChange={handleURL}/>
            <TextField label="Description" multiline rows={5} variant="outlined" value={newMovie.info} onChange={handleInfo}/>
            <Select placeholder="Genre" multiple value={newMovie.genre_id} onChange={handleGenre}
            renderValue={(selected) => (
                <div>
                {selected.map((value) => (
                    <Chip key={value} label={value} />
                ))}
                </div>
            )}>
                {genreNames.map((name, i) => (
                    <MenuItem key={i} value={i}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
        <Button onClick={() => toList()} variant="outlined" >Cancel</Button>
        <Button onClick={() => handleSubmit()}variant="outlined" >Save</Button>
        </Card>
        

        </>
    )
}

export default AddMovie;
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


function AddMovie() {

const history = useHistory();
const [genre, setGenre] = useState([]);
console.log(genre);

const handleChange = (event) => {
    setGenre(event.target.value);
}

const toList = () => {
    history.push('/')
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
            <TextField label="Movie Title" variant="outlined"/>
            <TextField label="Poster URL" variant="outlined"/>
            <TextField label="Description" multiline rows={5} variant="outlined"/>
            <Select placeholder="Genre" multiple value={genre} onChange={handleChange}
            renderValue={(selected) => (
                <div>
                {selected.map((value) => (
                    <Chip key={value} label={value} />
                ))}
                </div>
            )}>
                {genreNames.map(name => (
                    <MenuItem key={name} value={name}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
        <Button onClick={() => toList()} variant="outlined" >Cancel</Button>
        <Button variant="outlined" >Save</Button>
        </Card>
        

        </>
    )
}

export default AddMovie;
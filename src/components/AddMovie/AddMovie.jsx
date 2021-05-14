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

const [title, setTitle] = useState('');
// console.log(title)

const [url, setURL] = useState('');
// console.log(url)

const [info, setInfo] = useState('');
// console.log(info)

const [genre, setGenre] = useState([]);
// console.log(genre)


const handleTitle = (event) => {
    event.preventDefault()
    setTitle(event.target.value);
}

const handleURL = (event) => {
    event.preventDefault()
    setURL(event.target.value);
}

const handleInfo = (event) => {
    event.preventDefault()
    setInfo(event.target.value);
}

const handleGenre = (event) => {
    event.preventDefault()
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
            <TextField label="Movie Title" variant="outlined" value={title} onChange={handleTitle}/>
            <TextField label="Poster URL" variant="outlined" value={url} onChange={handleURL}/>
            <TextField label="Description" multiline rows={5} variant="outlined" value={info} onChange={handleInfo}/>
            <Select placeholder="Genre" multiple value={genre} onChange={handleGenre}
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
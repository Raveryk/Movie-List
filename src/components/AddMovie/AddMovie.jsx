import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


function AddMovie() {

    return(
        <>
        <form>
            <TextField label="Movie Title" variant="outlined"/>
            <TextField label="Poster URL" variant="outlined"/>
            <TextField label="Description" multiline rows={5} variant="outlined"/>
            <Select value="Genre">
                <MenuItem>Adventure</MenuItem>
                <MenuItem>Animated</MenuItem>
                <MenuItem>Biographical</MenuItem>
                <MenuItem>Comedy</MenuItem>
                <MenuItem>Disaster</MenuItem>
                <MenuItem>Drama</MenuItem>
                <MenuItem>Epic</MenuItem>
                <MenuItem>Fantasy</MenuItem>
                <MenuItem>Musical</MenuItem>
                <MenuItem>Romantic</MenuItem>
                <MenuItem>Sci-Fi</MenuItem>
                <MenuItem>Space-Opera</MenuItem>
                <MenuItem>Superhero</MenuItem>
            </Select>
        </form>

        </>
    )
}

export default AddMovie;
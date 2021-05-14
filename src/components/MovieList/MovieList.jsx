import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const toDetails = (event) => {
        // need to figure out how to send it to specific movie detail page
        console.log('You clicked a movie!!');
    }

    return (
        <main>
            <h1>MovieList</h1>
            <Button onClick={() => history.push('/add')}>Add Movie</Button>
            
            
                <section className="movies">
                    {movies.map(movie => {
                        return (
                            <Grid className="poster-grid" item xs={3}>
                                <Card onClick = {toDetails}elevation={10}>
                                    <div className="poster" key={movie.id} >
                                        <h3>{movie.title}</h3>
                                        <img src={movie.poster} alt={movie.title}/>
                                    </div>
                                </Card>
                            </Grid>
                        );
                    })}
                </section>
            
        </main>

    );
}

export default MovieList;
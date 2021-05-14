import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import './MovieList.css'

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';


function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const toDetails = (movie) => {
        // need to figure out how to send it to specific movie detail page
        console.log('You clicked a movie!!');
        dispatch({type: 'FETCH_DETAILS', payload: movie.id})
        history.push('/details')
    }

    return (
        <main>
            <h1>MovieList</h1>
            
                <section className="movies">
                    {movies.map(movie => {
                        return (
                            <Grid className="poster-grid" item xs={3}>
                                
                                    <div className="poster" key={movie.id} >
                                        <Card onClick = {() => toDetails(movie)}elevation={10}>
                                        <CardActionArea>
                                        <h3>{movie.title}</h3>
                                        <img src={movie.poster} alt={movie.title}/>
                                        </CardActionArea>
                                        </Card>
                                    </div>
                                
                            </Grid>
                        );
                    })}
                </section>
            
        </main>

    );
}

export default MovieList;
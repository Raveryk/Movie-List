import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';





function Details() {

    const dispatch = useDispatch();

    // grabbing details from reducer
    const details = useSelector( store => store.details );

    console.log(details);


    // useEffect(() => {
    //     dispatch({type: 'FETCH_DETAILS'})
    // })



    return(
        <>
        
            <div className="detail-card">
            {details.map(movie => {
            return  <Grid justify="center" alignItems="center" container sm={4}>
                        <Card className="detail-card" elevation={10}>
                            <CardActionArea>
                            
                            <CardMedia>
                                <p><img src={movie.poster} alt={movie.title}/></p>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2"><p className="detail-title">{movie.title}</p></Typography>
                                <Typography><p className="detail-description">{movie.description}</p></Typography>
                            </CardContent>
                            </CardActionArea>
                       </Card>
                    </Grid>
            })}
            </div>
        

            <Button>Back to List</Button>
    

        </>
    )
}

export default Details;
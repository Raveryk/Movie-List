import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


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
            {details.map(movie => {
                return <div><p>{movie.title}</p>
                        <p><img src={movie.poster}/></p>
                        <p>{movie.description}</p></div>
            })}
    

        </>
    )
}

export default Details;
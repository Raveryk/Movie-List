import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Details() {

    const dispatch = useDispatch();

    // grabbing details from reducer
    const details = useSelector( store => store.details );


    // useEffect(() => {
    //     dispatch({type: 'FETCH_DETAILS'})
    // })



    return(
        <>
        <p>
            {details.title}
        </p>

        </>
    )
}

export default Details;
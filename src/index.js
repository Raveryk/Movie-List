import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_DETAILS', fetchDetails);
    yield takeEvery('ADD_MOVIE', addMovie);
    yield takeEvery('FETCH_GENRES', fetchAllGenres);
    yield takeEvery('EDIT_MOVIE', editMovie);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

function* fetchAllGenres() {
    // get all the genres from DB
    try {
        const genres = yield axios.get('/api/genre');
        console.log('get all:', genres.data);
        yield put({ type: 'SET_GENRES', payload: genres.data });

    } catch {
        console.log('get all genre error');
    }
}

function* fetchDetails(action) {
    // get all details for movies from DB
    try {
        const details = yield axios.get(`/api/movie/details/${action.payload}`);
        console.log('get all:', details.data);
        yield put({ type: 'SET_DETAILS', payload: details.data });
    } catch (error) {
        console.log('error getting details from DB.', error)
    }
}

function* addMovie(action) {
    // Add movie to DB
    try {
        console.log(action.payload)
        yield axios.post('/api/movie', action.payload);
    } catch (error) {
        console.log('error sending movie to DB.', error)
    }
}

function* editMovie(action) {
    // Edit movie info for specific movie
    try {
        console.log('in edit:', action.payload)
        yield axios.put(`/api/movie/edit/${action.payload.id}`, action.payload.data)
    } catch (error) {
        console.log('error updating movie in DB.', error)
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// used to store specific movie details
const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        case 'CLEAR_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

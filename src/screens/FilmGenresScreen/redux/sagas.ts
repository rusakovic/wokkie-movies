import Config from 'react-native-config';
import {call, put, takeLatest} from '@redux-saga/core/effects';
import {Action, ActionType} from './types';
import axios, {AxiosResponse} from 'axios';
import {DEFAULT_API_URL} from 'constants/api';
import {fetchMovieFailed, fetchMovieSucceeded} from './actions';
import {Movie} from 'types/generalTypes';
import {flatten, keyBy, uniq} from 'lodash';
import {GenresWithKeysType} from '../types';

export function* FetchMovieResultRequestedSaga(): Generator {
  try {
    // 1. Fetch all movies
    const fetchUrl = `${DEFAULT_API_URL}`;
    const response = (yield call(axios.get, fetchUrl, {
      headers: {
        Authorization: `Bearer ${Config.MOVIE_DB_API_KEY}`,
      },
    })) as AxiosResponse;
    const fetchedMovies = response.data.movies as Movie[];

    // 2. Extract uniq movie genres
    const allGenres = fetchedMovies.map(movie => movie.genres);
    const combineGenres = flatten(allGenres);
    const uniqGenres = uniq(combineGenres);

    // 3. Sort movies by genres
    const genresWithKeys: GenresWithKeysType[] = uniqGenres.map(genre => {
      return {
        genreKey: genre,
        movies: [],
      };
    });

    const genresAsObject = keyBy(genresWithKeys, 'genreKey');

    const sortMoviesByGenres = fetchedMovies.map(movie => {
      const genres = movie.genres.map(genre =>
        genresAsObject[genre].movies.push(movie),
      );
    });

    yield put(fetchMovieSucceeded(genresWithKeys));
  } catch (error) {
    if (error instanceof Error) {
      console.log('here');
      yield call(console.error, error);
      const errorMessage = `Movies not fetched => ${error.message}`;
      yield put(fetchMovieFailed(errorMessage));
    }
  }
}

export function* FetchMovieResultFlowSaga(action: Action): Generator {
  switch (action.type) {
    case ActionType.FetchMovieRequested:
      yield call(FetchMovieResultRequestedSaga, action);
      break;

    default:
      break;
  }
}

function* FetchMovieResultSaga(): Generator {
  yield takeLatest([ActionType.FetchMovieRequested], FetchMovieResultFlowSaga);
}

export default FetchMovieResultSaga;

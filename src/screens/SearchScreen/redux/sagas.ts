import Config from 'react-native-config';
import {call, put, takeLatest} from '@redux-saga/core/effects';
import {searchMovieFailed, searchMovieSucceeded} from './actions';
import {Action, ActionType, SearchMovieRequestedAction} from './types';
import axios, {AxiosResponse} from 'axios';
import {DEFAULT_API_URL} from 'constants/api';
import {Movie} from 'types/generalTypes';

export function* SearchMovieResultRequestedSaga({
  searchInput,
}: SearchMovieRequestedAction): Generator {
  try {
    const fetchUrl = `${DEFAULT_API_URL}?q=${searchInput}`;
    const response = (yield call(axios.get, fetchUrl, {
      headers: {
        Authorization: `Bearer ${Config.MOVIE_DB_API_KEY}`,
      },
    })) as AxiosResponse;
    const fetchedMovies = response.data.movies as Movie[];

    yield put(searchMovieSucceeded(fetchedMovies));
  } catch (error) {
    if (error instanceof Error) {
      yield call(console.error, error);
      const errorMessage = `Movies not fetched => ${error.message}`;
      yield put(searchMovieFailed(errorMessage));
    }
  }
}

export function* SearchMovieResultFlowSaga(action: Action): Generator {
  switch (action.type) {
    case ActionType.SearchMovieRequested:
      yield call(SearchMovieResultRequestedSaga, action);
      break;

    default:
      break;
  }
}

function* SearchMovieResultSaga(): Generator {
  yield takeLatest(
    [ActionType.SearchMovieRequested],
    SearchMovieResultFlowSaga,
  );
}

export default SearchMovieResultSaga;

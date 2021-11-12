import {all} from 'redux-saga/effects';
import FetchMovieResultSaga from 'screens/FilmGenresScreen/redux/sagas';

export default function* rootSaga(): Generator {
  yield all([FetchMovieResultSaga()]);
}

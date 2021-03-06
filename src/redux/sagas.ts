import {all} from 'redux-saga/effects';
import FavoritesSaga from 'screens/FavoritiesScreen/redux/sagas';
import FetchMovieResultSaga from 'screens/FilmGenresScreen/redux/sagas';
import HiddenMoviesSaga from 'screens/HiddenMoviesScreen/redux/sagas';
import SearchMovieResultSaga from 'screens/SearchScreen/redux/sagas';

export default function* rootSaga(): Generator {
  yield all([
    FetchMovieResultSaga(),
    SearchMovieResultSaga(),
    HiddenMoviesSaga(),
    FavoritesSaga(),
  ]);
}

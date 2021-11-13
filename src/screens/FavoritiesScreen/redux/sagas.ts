import {call, put, select, takeLatest} from 'redux-saga/effects';
import {searchMovieResultDataResultsSelector} from '@screens/SearchScreen/redux/selectors';

import {favoriteMovieToggleSucceeded} from './actions';
import {
  Action,
  ActionType,
  FavoriteMovieToggleRequestedAction,
  MoviesCollection,
} from './types';
import {Movie} from 'types/generalTypes';

export function* FavoriteMovieToggleSaga({
  id,
}: FavoriteMovieToggleRequestedAction): Generator {
  const moviesData = (yield select(
    searchMovieResultDataResultsSelector,
  )) as Movie[];
  const favoriteMovieData = moviesData.filter(movie => movie.id === id)[0];
  yield put(favoriteMovieToggleSucceeded(favoriteMovieData, id));
}

export function* FavoritesFlowSaga(action: Action): Generator {
  switch (action.type) {
    case ActionType.FavoriteMovieToggleRequested:
      yield call(FavoriteMovieToggleSaga, action);
      break;
    default:
      break;
  }
}

function* FavoritesSaga(): Generator {
  yield takeLatest(
    [ActionType.FavoriteMovieToggleRequested],
    FavoritesFlowSaga,
  );
}

export default FavoritesSaga;

import {combineReducers} from 'redux';
import movies from 'screens/FilmGenresScreen/redux/reducer';
import searchedMovies from 'screens/SearchScreen/redux/reducer';

export const rootReducer = combineReducers({movies, searchedMovies});

export type RootState = ReturnType<typeof rootReducer>;

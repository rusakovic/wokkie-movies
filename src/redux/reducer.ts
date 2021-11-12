import {combineReducers} from 'redux';
import movies from 'screens/FilmGenresScreen/redux/reducer';

export const rootReducer = combineReducers({movies});

export type RootState = ReturnType<typeof rootReducer>;

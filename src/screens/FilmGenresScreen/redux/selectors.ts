import {RootState} from 'redux/reducer';
import {FetchMovieResultInitialStateType} from './types';

export const fetchMovieResultSelector = ({
  movies,
}: RootState): FetchMovieResultInitialStateType => movies;

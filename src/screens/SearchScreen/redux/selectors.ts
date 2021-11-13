import {RootState} from '@redux/reducer';
import {Movie} from 'types/generalTypes';
import {SearchMovieResultInitialStateType} from './types';

export const searchMovieResultSelector = ({
  searchedMovies,
}: RootState): SearchMovieResultInitialStateType => searchedMovies;

export const searchMovieResultDataResultsSelector = ({
  searchedMovies: {data},
}: RootState): Movie[] | null => data || null;

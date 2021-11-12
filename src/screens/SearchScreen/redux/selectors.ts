import {RootState} from '@redux/reducer';
import {SearchMovieDataType, SearchMovieResultInitialStateType} from './types';

export const searchMovieResultSelector = ({
  searchedMovies,
}: RootState): SearchMovieResultInitialStateType => searchedMovies;

export const searchMovieResultDataResultsSelector = ({
  searchMovieResult: {data},
}: RootState): SearchMovieDataType['results'] => data?.results || {};

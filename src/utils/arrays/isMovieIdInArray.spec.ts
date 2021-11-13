import {movieIDsArrayMock} from 'mock/movies';
import {isMoviesIdInArray} from './isMovieIdInArray';

describe('Check if movieID included into the array of movieIDs', () => {
  describe('if movieID is included', () => {
    it('return TRUE', () => {
      const id = '8de5e9be-ec40-4687-9b01-be1af3ace1d7';
      const isIdIncluded = isMoviesIdInArray(movieIDsArrayMock, id);
      expect(isIdIncluded).toEqual(true);
    });
  });
  describe('if movieID is NOT included', () => {
    it('return FALSE', () => {
      const id = '8de5e9be';
      const isIdIncluded = isMoviesIdInArray(movieIDsArrayMock, id);
      expect(isIdIncluded).toEqual(false);
    });
  });
});

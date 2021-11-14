import {TestID} from 'constants/testID';
import {by, element} from 'detox';

export const openMoviePreviewScreen = async () => {
  await element(by.id(TestID.GenresList));

  await element(by.id(TestID.PulpFiction)).atIndex(0).tap();

  await element(by.id(TestID.MovieDetailsScreen)).atIndex(0);
};

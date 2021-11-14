import {TestID} from 'constants/testID';
import {by, expect, element, device} from 'detox';
import {openMoviePreviewScreen} from '../../../e2e/helpers/openMoviePreviewScreen';

describe('Genres screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  describe('Navigate to movie details, check Hide/Unhide and Favorite buttons. Data should be persisted', () => {
    beforeEach(async () => {
      await device.reloadReactNative();
      await openMoviePreviewScreen();
    });
    describe('Navigate to movie details, press - Hide movie, then - Unhide movie', () => {
      it('Press hide movie button', async () => {
        await element(by.id(TestID.ButtonMovieIsShowed)).tap();
      });

      it('should visible hide button', async () => {
        await expect(element(by.id(TestID.ButtonMovieIsHidden))).toBeVisible();
      });

      it('Press show movie button', async () => {
        await element(by.id(TestID.ButtonMovieIsHidden)).tap();
      });

      it('should visible visible button', async () => {
        await expect(element(by.id(TestID.ButtonMovieIsShowed))).toBeVisible();
      });
    });

    describe('Navigate to movie details, press - Favorite movie, then - Unfavorite movie', () => {
      it('Press favorite movie button', async () => {
        await element(by.id(TestID.ButtonIsNotFavorite)).tap();
      });

      it('should visible  yellow favorite star', async () => {
        await expect(element(by.id(TestID.ButtonIsFavorite))).toBeVisible();
      });

      it('Press unfavorite movie button', async () => {
        await element(by.id(TestID.ButtonIsFavorite)).tap();
      });

      it('should visible empty gray favorite star', async () => {
        await expect(element(by.id(TestID.ButtonIsNotFavorite))).toBeVisible();
      });
    });
  });
});

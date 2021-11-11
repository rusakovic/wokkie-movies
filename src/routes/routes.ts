import {FilmDetailsRouteProps} from 'screens/FilmDetailsScreen/types';

export enum Routes {
  RootStack = 'RootStack',
  FilmGenresScreen = 'FilmGenresScreen',
  SearchFilmScreen = 'SearchFilmScreen',
  FilmDetailsScreen = 'FilmDetailsScreen',
}

export type RootStackParamList = {
  [Routes.FilmDetailsScreen]: FilmDetailsRouteProps;
  [Routes.FilmGenresScreen]: undefined;
  [Routes.SearchFilmScreen]: undefined;
  [Routes.RootStack]: undefined;
};

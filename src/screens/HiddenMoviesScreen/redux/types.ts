import {Movie} from 'types/generalTypes';

export enum ActionType {
  // HIDDEN MOVIE TOGGLE
  HiddenMovieToggleRequested = 'HiddenMovieToggleRequested',
  HiddenMovieToggleSucceeded = 'HiddenMovieToggleSucceeded',

  HiddenMovieToggleGlobal = 'HiddenMovieToggleGlobal',
}

export type HiddenMoviesInitialStateType = {
  isMoviesHiddenGlobal: boolean;
  hiddenMovies: Movie['id'][];
};

// HIDDEN MOVIE TOGGLE
export type HiddenMovieToggleRequestedAction = {
  type: ActionType.HiddenMovieToggleRequested;
  id: Movie['id'];
};

export type HiddenMovieToggleSucceededAction = {
  type: ActionType.HiddenMovieToggleSucceeded;
  id: HiddenMovieToggleRequestedAction['id'];
};

export type HiddenMovieToggleGlobalAction = {
  type: ActionType.HiddenMovieToggleGlobal;
};

export type Action =
  // HIDDEN MOVIE TOGGLE
  | HiddenMovieToggleRequestedAction
  | HiddenMovieToggleSucceededAction
  | HiddenMovieToggleGlobalAction;

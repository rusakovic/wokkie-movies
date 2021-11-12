import {Movie} from 'types/generalTypes';
import {ActionType, Action} from './types';

// HIDDEN MOVIE TOGGLE
export const hiddenMovieToggleRequested = (id: Movie['id']): Action => ({
  type: ActionType.HiddenMovieToggleRequested,
  id,
});

export const hiddenMovieToggleSucceeded = (id: Movie['id']): Action => ({
  type: ActionType.HiddenMovieToggleSucceeded,
  id,
});

export const hiddenMovieToggleGlobal = () => ({
  type: ActionType.HiddenMovieToggleGlobal,
});

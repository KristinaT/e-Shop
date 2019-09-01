import { RootState } from '../reducers/types';

const selectDirectory = (state: RootState) => state.directory;

export const selectDirectorySections = (state: RootState) =>
  selectDirectory(state).sections;

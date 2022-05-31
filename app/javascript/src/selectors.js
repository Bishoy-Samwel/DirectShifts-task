import { createSelector } from 'reselect';

export const loggedIn = (state) => state.auth.loggedIn;

export const authChecked = (state) => state.auth.authChecked;

export const currentUser = (state) => state.auth.currentUser;

export const authState = (state) => state.auth;


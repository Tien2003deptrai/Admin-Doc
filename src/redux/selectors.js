import { createSelector } from 'reselect';

// Selector to get the usersDash part of the state
export const usersDashSelector = createSelector(
    (state) => state.usersDash,
    (usersDash) => usersDash // Return the usersDash state
);

// Selector to get the rolesDash part of the state
export const rolesDashSelector = (state) => state.rolesDash;

// Selector to get the projectsDash part of the state
export const projectsDashSelector = (state) => state.projectsDash;

// Selector to get the tasksDash part of the state
export const tasksDashSelector = (state) => state.tasksDash;    

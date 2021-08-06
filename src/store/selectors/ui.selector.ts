import { createSelector } from "reselect";
import { uiSelector } from "./app.selectors";

export const sideBarSelector = createSelector([uiSelector], (uiState) => {
    return uiState.sidebarToggle;
});
import { AppData } from "../store";

export const uiSelector = (state: AppData) => state.ui;
export const groupSelector = (state: AppData) => state.groups;
export const userSelector = (state: AppData) => state.user;
export const authSelector = (state: AppData) => state.auth;
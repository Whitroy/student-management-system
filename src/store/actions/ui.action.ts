import { bindActionCreators } from "redux";
import { store } from "../store";
import { UI_SIDEBAR_TOGGLE } from "./actions.constants";

const sideBarToggleAction = () => ({ type: UI_SIDEBAR_TOGGLE });

export const uiAction = bindActionCreators(
    {
        sideBarToggle: sideBarToggleAction
    }, store.dispatch
);
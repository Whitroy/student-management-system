import { Reducer } from "redux"
import { UI_SIDEBAR_TOGGLE } from "../actions/actions.constants";

export interface UiState{
    sidebarToggle: boolean;
}

const intialState: UiState = {
    sidebarToggle: true,
}


export const uiReducer: Reducer<UiState> = (state = intialState, action) => {
    switch (action.type) {
        case UI_SIDEBAR_TOGGLE:
            return { ...state, sidebarToggle: !state.sidebarToggle };
        default: return state;
    }
}
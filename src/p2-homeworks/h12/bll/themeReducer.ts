import {themeType} from "../HW12";

export type initStateType = typeof initState
const initState = {
    theme: 'some' as themeType
};


export const themeReducer = (state: initStateType = initState, action: actionType): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

type actionType = {
    type: "CHANGE-THEME"
    theme: themeType
}

export const changeThemeC = (theme: themeType): actionType => {
    return {
        type: "CHANGE-THEME",
        theme
    }
}; // fix any
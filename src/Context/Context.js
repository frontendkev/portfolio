import { Children, createContext, useReducer } from "react";



export const Theme = createContext()
export const Dispatch = createContext()

export const TOGGLE_THEME = 'TOGGLE_THEME'
export const SET_SCHEME = 'SET_SCHEME'
export const SET_THEME = 'SET_THEME'

export const initialState = {
    fontColor: "",
    darkTheme: true,
    fillColor: '',
    strokeColor: '',
    background: '',
    borderColor: '',
    activeSection: 'home'
}


export const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'view-home': {
            return {
                ...state, activeSection: payload
            }
        }
        case 'view-projects': {
            return {
                ...state, activeSection: payload
            }
        }
        case 'view-contact': {
            return {
                ...state, activeSection: payload
            }
            }
        default: {
            return state
        }
    }
}

export const Context = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Theme.Provider value={{ ...state }}>
            <Dispatch.Provider value={dispatch}>
                {children}
            </Dispatch.Provider>
        </Theme.Provider>
    )
}


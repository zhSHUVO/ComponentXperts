import { createContext, useContext, useReducer } from "react";

const BuilderContext = createContext();

const initialState = {
    CPU: null,
    Motherboard: null,
    RAM: null,
    "Power Supply Unit": null,
    "Storage Device": null,
    Monitor: null,
};

const builderReducer = (state, action) => {
    switch (action.type) {
        case "ADD_COMPONENT":
            return {
                ...state,
                [action.payload.category]: action.payload.product,
            };
        default:
            return state;
    }
};

export const BuilderProvider = ({ children }) => {
    const [state, dispatch] = useReducer(builderReducer, initialState);

    return (
        <BuilderContext.Provider value={{ state, dispatch }}>
            {children}
        </BuilderContext.Provider>
    );
};

export const useBuilder = () => useContext(BuilderContext);

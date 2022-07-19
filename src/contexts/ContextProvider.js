import React, { createContext, useContext, 
    useState } from "react";

const StateContext = createContext();

const intialState = {
    chat: false,
    cart: false,
    notification: false,
    userProfile: false
}

export const ContextProvider = ({ children }) => {
    
    const [activeMenu, setActiveMenu] = 
    useState(true);
    const [isClicked, setIsClicked] = 
    useState(intialState);

    const handleClick = (clicked) => {
        setIsClicked({ ...intialState, 
        [clicked]: true});
    
    }
    const handleClicked = (clicked) => {
        setIsClicked({ ...intialState, 
        [clicked]: false});
    }

    const [screenSize, setScreenSize] = 
    useState(undefined);

    const [currentColor, setCurrentColor] = 
    useState('#03C9D7');

    const [currentMode, setCurrentMode] = 
    useState('Light');

    const [themeSettings, setThemeSettings] = 
    useState(false);

    //const [userProfile, setUserProfile] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false);

    }

    const setColor = (color) => {
        //console.log(e.target);
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
        setThemeSettings(false);
    }

    return (
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick, 
            screenSize, 
            setScreenSize,
            currentColor,
            currentMode, 
            themeSettings,
            setThemeSettings,
            setMode,
            setColor,
            handleClicked
        }} >
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext
(StateContext);
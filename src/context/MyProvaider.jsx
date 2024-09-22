import React, {createContext, useContext} from 'react';

const MyContext = createContext()

export const MyProvaider = ({children}) => {
    return (
        <MyContext.Provider value={{}}>
            {children}
        </MyContext.Provider>
    );
};

const useMyContext = () => useContext(MyContext)

import React, { useState, createContext, useContext } from 'react';

const MemeContext = createContext();

function MemeProvider({ children }) {
    const [ generatedMeme, setGeneratedMeme ] = useState('');

    return(
        <MemeContext.Provider value={{ generatedMeme, setGeneratedMeme }}>
            { children }
        </MemeContext.Provider>
    )
}

function useMeme() {
    const context = useContext(MemeContext);
    return context;
}

export { MemeProvider, useMeme }
import React, {useState} from "react";

export const HomeContext= React.createContext();

const HomeContextProvider = ({children}) => {
    const [ nowPlaying, setNowPlaying ] = useState(null);

    
}
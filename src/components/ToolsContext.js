import React, {useContext, useState} from "react";

const ToolsContext = React.createContext();
const ToolsUpdateContext = React.createContext();

export const useTools = () => {
    return useContext(ToolsContext);
};

export const useUpdateTools = () => {
    return useContext(ToolsUpdateContext);
};

export const ToolsProvider = ({children}) =>{
    const [currentArrayTools, setArrayTools] = useState([]);
    const updateTools = (array) =>{
        setArrayTools(array);
    }

    return (
        <ToolsContext.Provider value={currentArrayTools}>
            <ToolsUpdateContext.Provider value={updateTools}>
                {children}
            </ToolsUpdateContext.Provider>
        </ToolsContext.Provider>
    )
}

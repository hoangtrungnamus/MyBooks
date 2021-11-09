import { createContext, useState } from 'react';

export const LoveContext = createContext();

const LoveContextProvider = (props) => {
    const [count, setCount] = useState(0);

    const LoveContextData = {
        setCount,
        count
    }
    return (
        <LoveContext.Provider value={LoveContextData} >
            {props.children}
        </LoveContext.Provider>
    )
}

export default LoveContextProvider;

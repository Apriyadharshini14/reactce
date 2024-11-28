import React, { useState, createContext, useContext } from 'react';

const StepContext = createContext();

function ContextParent() {
    const [name, setName] = useState('Priya');
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <StepContext.Provider value={{ name, isAdmin }}>
            <h1>Parent Component</h1>
            <ChildA />
        </StepContext.Provider>
    );
}

function ChildA() {
    const { name, isAdmin } = useContext(StepContext);

    return (
        <div>
            <h2>ChildA Component</h2>
            <p>Name: {name}</p>
            <p>Admin: {isAdmin ? 'Yes' : 'No'}</p>
        </div>
    );
}

export default ContextParent;

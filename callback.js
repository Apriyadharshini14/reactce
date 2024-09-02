import React from 'react';
function ChildComponent(props)
{
    return(
        <button onClick={props.handleClick}>
            Click Me
        </button>
    );
}
export default ChildComponent;
import React from 'react';
import ChildComponent from './callback';
class ParentComponent extends React.Component{
    handleClick=()=>{
        alert("Button clicked in child!");
    }
    render()
    {
        return (
            <div>
                <ChildComponent handleClick={this.handleClick}/>
            </div>
        );
    }
}
export default ParentComponent;
import React,{Component}from'react';
class StateDemo extends Component
{
    constructor()
    {
       super();
       this.state={
        name:"Priya",
        dept:"csd"
       }
    }
    render()
    {
        return(
            <div>
                <h> I am {this.state.name}. I am from {this.state.dept} Department</h>
            </div>
        )
    }
}
export default StateDemo;
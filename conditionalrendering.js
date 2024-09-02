import React from 'react';
class ConditionalRendering extends React.Component
{
    constructor()
    {
        super();
        this.state={
            isLoggedIn: false
        };
    }
   changeEvent=()=>{
    this.setState(prevState=>({
        isLoggedIn :!prevState.isLoggedIn
    }))
   }

render()
{
    return(
        <div>
            {this.state.isLoggedIn ? <h1>Logged In</h1> : <h1>Logged Out</h1> }
            <button onClick={this.changeEvent}>{this.state.isLoggedIn ? 'Logout' :'Login'}</button>
        </div>
    )
}
}
export default ConditionalRendering;
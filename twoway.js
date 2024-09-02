import React ,{Component}from'react';
class TwoWayBindingExample extends Component{
    constructor()
    {
        super();
        this.state={
            inputvalue:''
        };
    }
    handleinputchange=(event)=>{
        this.setState({
            inputvalue:event.target.value
        })
    };
    render()
    {
        return(
            <div>
               <input type="text" value={this.state.inputvalue} onChange={this.handleinputchange} />
               <h1>{this.state.inputvalue}</h1>
            </div>
        )
    }
}
export default TwoWayBindingExample;



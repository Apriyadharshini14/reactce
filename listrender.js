import { Component } from "react";
class ListRenderingExample extends Component{
constructor(props)
{
    super(props);
    this.state=
    {
        items:['Apple','Banana','Cherry']
    };
}
render()
{
    return(
        <ul> {
                this.state.items.map((item,index)=>(
                    <li key={index}>{item} </li>
                ))}
        </ul>
    );
}
}
export default ListRenderingExample;
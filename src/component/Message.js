import React,{Component} from 'react';
class Message extends Component{
    constructor(){
        super();
        this.state={
            message:'yash'
        }
    }
    changeMessage(){
        this.setState({
            message:'yash is a software developer'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>click me</button>
            </div>
        )
    }
}
export default Message
import React,{Component} from 'react'

class EventH extends React.Component{
    constructor(){
    super() 

        this.state={
            event:"yes"
            }

        }
    render() {
    function handleClick() {
        console.log("I was clicked")
    }
    function ss1(){
        console.log("i am hover")        
}
    return(
    <div>
        <img onMouseOver={ss1} src="https://www.fillmurray.com/200/100"/>
        <br />
        <br />
        <button onClick={handleClick}> Click me</button>
    </div>

    )

    }

}

export default EventH




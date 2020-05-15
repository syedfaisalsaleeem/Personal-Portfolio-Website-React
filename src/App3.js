import React from 'react'
import { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state={
                isLoggedIn:"Yes"
            }


        }
    render(){
        let is1;
        if(this.state.isLoggedIn=="Yes")
        {is1="yes"}
        else{
        is1="No"
        }
        return(
            <div>
            <h1  >{is1} </h1>
        </div>

        )
  {/* this.myInterval = setInterval(() => { 
      this.state.count === 3 ?
      this.setState({
        count:0
      })
  */}
    }




} 






























/*
class App extends React.Component {
 constructor() {
    super()
    this.state= {
        name:"Faisal",
        age:"22"

        }

    }

render () {

        return(
            <div>

            <h1> Your name = {this.state.name}</h1>
            <hl/>
            <h1> Your age ={this.state.age}</h1>
            </div>

                )

}



}
*/
export default App
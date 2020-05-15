import React from 'react'
import Cda from './Cda'
class Cd extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
    this.fun=this.fun.bind(this)
    }

    fun(props){
    console.log(this.state.isLoggedIn)
    this.setState({isLoggedIn:!this.state.isLoggedIn})
    console.log(this.state.isLoggedIn)

    }

    render(){

        if(this.state.isLoggedIn===true){
        return (
                    <div><h1>is LoggedIn</h1> 
                    <button onClick={this.fun}>LoggedOut</button>
                    </div>
                )
        }
        else{
        return (
                    <div><h1>is LoggedOut</h1> 
                    <button onClick={this.fun}>LoggedIn</button>
                    </div>
                )

        }


    }


}
export default Cd
import React from 'react'
import Condition from './Condition'

class Conditional extends React.Component {
    constructor() {
        super()
        this.state={
            isloading: true
        }

    }
    componentDidMount(){
    setTimeout(()=> {
        this.setState({isloading:false})
        },3500)

    }

    render(){
        if(this.state===true){
            return(
                <h1>Loading</h1> 
            )

        }
        return(
            <div>
            <Condition loading={this.state.isloading}/>
        </div>
        )


    }

}
export default Conditional
import React from 'react'

class EventCount extends React.Component {
    constructor(){
    super()
    this.state={
    count:0



        }
    this.handleClick=this.handleClick.bind(this)
    }

    handleClick(){
    let x=this.state.count
    x=x+1
    console.log(this.state.count)
    this.setState(function(prevState){
    return{ count:prevState.count+1
    }

    }

)

    }
    render(){
        let cc1=this.state.count
        function c_1(){
        console.log(cc1)
        cc1=cc1+1

        }
        return( 

        <div>
        <h1>{cc1}</h1>
        <button onClick={this.handleClick}> Change!</button>
        </div>

        )


    }



    



}
export default EventCount
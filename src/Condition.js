import React from 'react'

class Condition extends React.Component {



    render(){
    console.log(this.props.loading)
    if(this.props.loading===true){    
    return(
            <div>

            <h1>loading </h1>
            </div>
          )               }
    else{
    return(
            <div>

            <h1>Yes there is </h1>
            </div>
          )  

    }


    }

}
export default Condition
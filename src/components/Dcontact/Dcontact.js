import React from 'react'
import './Dcontact.css'
import career from "./career.jpg"
import web from "./web.jpg";

class Dcontact extends React.Component{
constructor(){
    super()

    this.state = {}

}


render(){

return(

<div style={{transform:this.props.call?"translateY(0%)":"translateY(20%)",transition:"transform 0.8s ease-in-out"}}>


 <div className='career'>
    <h3>It's fun to work with us </h3></div>

          <img src={career} alt={career} style={{width:'100%'}}/>

          

    <div className='job'>
    <h3>Why are you waiting? Join Us </h3>
    <button className='bb'> 
    <span>Careers </span> </button>
    </div>
</div>
)



}
}



export default Dcontact
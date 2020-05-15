import React from 'react'
 
function Checking(props){
    function c1(){
    console.log(props.comp)
    }
    let cda=props.comp?"red":"green"
    return (
        
        <div>
   
      
        <input type="checkbox"  checked={props.comp} onChange={()=>props.Handle(props.id)} />
        <span style={{color:cda}}>{props.text}</span>
        <button onClick={c1}>55</button>
      
   



    </div>

)

}

export default Checking
import React from 'react'
import llogo1 from './123.png'
import './Loading.css'
class Loading extends React.Component{
render(){

    return(
<div className="body">

            <div className="logofaisal">
                <img src={llogo1}/>




            </div>
                
              <div className="coloring" >  
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                
            </div>
</div>

    )

}


}
export default Loading
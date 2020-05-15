import React from 'react'
import logon from './12.png'
import './Navigation.css'
import Side from './Side.js'
class Navigation extends React.Component {
    constructor() {
        super()
        this.state =
        {side1:false
        }

        this.handle=this.handle.bind(this)    
}
    handle(){

    this.setState({side1:!this.state.side1})
    
    

    


}
    render(){

    

if(this.state.side1===false){
    
        return(
<div className="nav" style={{background:this.props.call?"white":"transparent",color:this.props.call?"black":"white",transition:"background,color 0.5s ease-in"}}>    
                <input type="image" className="logon" src={logon}/>
                <h3>TheSorceTech</h3>
                <div className="spacer1"></div>
                
                
                <nav className="side_drawer">
                <ul>
                <button onClick={this.handle}>Back</button>

                <button><a href="/">Projects</a></button>

                <button><a href="/">Services</a></button>

                <button><a href="/">Contact Us</a></button>

                </ul>
                </nav>
                <button className="toggle_button"  onClick={this.handle}>
                <div className="toggle_button_line" style={{background:this.props.call?"black":"white",transition:"background 0.5s ease-in"}}/>
                <div className="toggle_button_line" style={{background:this.props.call?"black":"white",transition:"background 0.5s ease-in"}}></div>
                <div className="toggle_button_line" style={{background:this.props.call?"black":"white",transition:"background 0.5s ease-in"}}/>

                </button>
                
                <div className="spacer"></div>
            </div>
        )
}
else{
    let drawerClasses='side_drawer';
    if(this.state.side1===true) {
        drawerClasses='side_drawer open';
    }
return(
            <div className="nav" style={{background:this.props.call?"white":"transparent",color:this.props.call?"black":"white",transition:"background,color 0.5s ease-in"}}>

                <input type="image" className="logon" src={logon}/>
                <h3>TheSorceTech</h3>
                <div className="spacer1"></div>
                <nav className="side_drawer open">
                <ul>
                <button  onClick={this.handle}>Back</button>

                <button><a href="/">Projects</a></button>

                <button><a href="/">Services</a></button>

                <button><a href="/">Contact Us</a></button>

                </ul>
                </nav>
                <div className="spacer"></div>
            

            </div>

)


}





    }



}
export default Navigation
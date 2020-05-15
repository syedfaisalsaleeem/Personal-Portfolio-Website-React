import React from 'react'
import ReactDOM from 'react-dom'
import './Slider2.css'
import Logo from "./1234.png";
import Logo1 from "./12.png";
import Logo2 from "./121.png";


class Slider2 extends React.Component{
constructor(){
    super() 
    this.state={
count:1,
index:true,
images:[Logo,Logo1,Logo2],
id:'firstClone',
id1:'lastClone'
}
this.handle=this.handle.bind(this)
}
  componentDidMount () {
    let content=0

this.myInterval = setInterval(() => {
if(this.state.count >=4){return}
{this.setState({count:this.state.count+1,index:true})} 

    },9000)
    
 ReactDOM.findDOMNode(this).addEventListener('transitionend', this.handle);
   
  }
    componentWillUnmount () {
    ReactDOM.findDOMNode(this).removeEventListener('transitionend', this.handle);
    
      clearInterval(this.myInterval)

    }
    
handle(){

if(this.state.count===4){
this.setState({count:1,index:false})

}
}

render(){
function detectTheEnd(e) {
      if(this.state.count===4){this.setState({count:1})}
}


const size="100vw";


    return(

    <div className="slider-container">

        <div className="slider-innerContainer" style={{left: -100 * this.state.count + "%" ,transition:this.state.index?"left 1.4s ease-in-out":"none"}}>
<div ><h1>Web Development</h1><ul><li>HTML</li><li>CSS3</li><li>JavaScript</li></ul><img src={Logo2} alt={Logo2} id={this.state.id1}></img></div>
<div ><h1>Web Designing</h1><ul><li>HTML</li><li>CSS3</li><li>JavaScript</li></ul><img src={Logo} alt={Logo}></img> </div> 
<div ><h1>Web Development</h1><ul><li>Python</li><li>Node</li><li>Php</li></ul><img src={Logo1} alt={Logo1}></img></div> 
<div ><h1>Software Development</h1><ul><li>Java</li><li>Python</li><li>C++</li></ul><img src={Logo2} alt={Logo2}></img></div> 
<div ><h1>Web Designing</h1><ul><li>HTML</li><li>CSS3</li><li>JavaScript</li></ul><img src={Logo} alt={Logo} id={this.state.id1}></img></div> 
        
        
    </div>

</div>

    )
    
    }

}
export default Slider2
import React from 'react'
import Dcontact from './Dcontact'
class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      count:0,
      index: 1,
      showContent:true
    }
  }
 

  render() {
    const {count}=this.state
    const {showContent}=this.state
    var content=true
    
    if(this.state.count===0){
    return (
      
      <div className="slider-container" style={{marginTop:'0px',position:'relative'}}>

        <div 
          className="slider-innerContainer"
          style={{ transform: "translateX(0%)",transition:"transform 1.5s ease-in-out"  }}>
        
          {this.props.children.map((child, count) =>
            <div key={count}>
<div className="web1" style={{ opacity: "0",transition:"opacity 1s ease-in-out"  }}>
<h1> Web Development</h1>
</div> 

              {child}

                          
            </div>)}
            
        </div>

      </div>
    )


}
else if(this.state.count===1){
    return (
      
      <div className="slider-container" style={{marginTop:'0px',position:'relative'}}>

        <div 
          className="slider-innerContainer"
          style={{ transform:"translateX(-100%)",transition:"transform 1.5s ease-in-out" }}>
          {this.props.children.map((child, count) =>
            <div key={count}>
<div className="web1" style={{ opacity: "0",transition:"opacity 1.5s ease-in-out"  }}>
<h1> Web Development</h1>
</div> 
<div className="web1" style={{ opacity: "1",transition:"opacity 1.5s ease-in-out"  }}>
<h1> Web Development</h1>
</div>               
{child}             
            </div>)}
             
        </div>

      </div>
    )


}
else if(this.state.count===2){
    return (
      
      <div className="slider-container" style={{marginTop:'0px',position:'relative'}}>

        <div 
          className="slider-innerContainer"
          style={{ transform:"translateX(-200%)",transition:"transform 1.5s ease-in-out" }}>
          {this.props.children.map((child, count) =>
            <div key={count}>
<div className="web1" style={{ opacity: "0",transition:"opacity 1.5s ease-in-out"  }}>
<h1> Web Development</h1>
</div> 
<div className="web1" style={{ opacity: "1",transition:"opacity 1.5s ease-in-out"  }}>
<h1> Web Development</h1>
</div>              
{child}
                          
            </div>)}
             
        </div>

      </div>
    )


}
else if(this.state.count===3){
    return (
      
      <div className="slider-container" style={{marginTop:'0px',position:'relative'}}>

        <div 
          className="slider-innerContainer"
          style={{ transform:"translateX(-300%)",transition:"transform 1.5s ease-in-out" }}>
          {this.props.children.map((child, count) =>
            <div key={count}>
<div className="web1" style={{ opacity: "0",transition:"opacity 1.5s ease-in-out"  }}>
<h1> Web Development</h1>
</div> 
<div className="web1" style={{ opacity: "1",transition:"opacity 1.5s ease-in-out"  }}>
<h1> Web Development</h1>
</div>             
{child}
                           
            </div>)}
             
        </div>

      </div>
    )


}
else{
    return (
      
      <div className="slider-container" style={{marginTop:'0px',position:'relative'}}>

        <div 
          className="slider-innerContainer"
          style={{ transform: "translateX(0%)",transition:"transform 1.5s ease-in-out"  }}>
          {this.props.children.map((child, count) =>
            <div key={count}>
<div className="web1" style={{ opacity: "0",transition:"opacity 1.5s ease-in-out"  }}>
<h1> Web Development</h1>
</div> 
<div className="web1" style={{ opacity: "1",transition:"opacity 1.5s ease-in-out"  }}>
<h1> Web Development</h1>
</div>               
{child}
                           
            </div>)}
             
        </div>

      </div>
    )


}
    }

  componentDidMount () {
    let content=0
    this.myInterval = setInterval(() => { 
    if(this.state.count===3){this.setState({index:0})}
    if(this.state.index===0){this.setState({count:this.state.count-1})}   
    if(this.state.index===1){this.setState({count:this.state.count+1})}
    if(this.state.count===0 ){this.setState({index:1})}
    },8000)
    

  }
    componentWillUnmount () {
      clearInterval(this.myInterval)
    }
    
  
}
export default Slider
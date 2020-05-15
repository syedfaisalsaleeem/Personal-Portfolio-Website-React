import React from 'react'
import './SProjects.css'
import web from './web.jpg'
class Sproject extends React.Component {

constructor(){
    super()
    this.state={}

}
render(){
 return(
<div>
 <div className='design'>
    <h3>We design and develop softwares that make people's lives simple.</h3>
    </div>
    <div className='andweb'>
          <div className='a'>
          <div className='above'>
            <p> Web Development</p> 
          </div>
          <img src={web} alt={web} style={{width:'100%'}}/>

          </div>
    </div>
    <div className='job'>
    <h3>Let's see our work </h3>
    <button className='bb'> 
    <span>Projects </span> </button>
    </div>
</div>

)


}


}

export default Sproject
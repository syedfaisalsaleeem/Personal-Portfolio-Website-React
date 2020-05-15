import React from 'react'
import './components/Slider/Slider.css'
import Navigation from './Navigation'

import Footer from './components/Footer/Footer.jsx';
import Dcontact from './components/Dcontact/Dcontact'
import Sproject from './components/SProjects/Sproject'
import {  animateScroll as scroll,scroller } from 'react-scroll'
import {Redirect} from 'react-router-dom';
import Slider2 from './components/Slider2/Slider2';


class MainApp extends React.Component{
constructor(props){
    super(props)
    this.myRef = React.createRef() 
    this.state = {footer:false,scrollTop: false,scrollTop1:0,vPos : 0,theposition:0}
this.listenToScroll=this.listenToScroll.bind(this)
this.handle=this.handle.bind(this)
this.scrollToTop = this.scrollToTop.bind(this);

}
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
/*componentDidMount(){
  window.addEventListener('scroll',()=>{console.log('Scrolled!')
})
}*/
  scrollToTop() {
    scroll.scrollToBottom();
  }
 handle(){
this.myRef.current.scrollTo(0, 0)
console.log("pp")

}
componentDidMount(){
    window.addEventListener('scroll',this.listenToScroll)
    
}
componentWillUnmount(){
  window.removeEventListener('scroll', this.listenToScroll);
}
listenToScroll = () => {


  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight

  const scrolled = winScroll / height

  this.setState({
    theposition: scrolled,
  })

if(this.state.theposition>=.04 && this.state.theposition<=.6){
this.setState({scrollTop:true,footer:false})

}
else if(this.state.theposition>=.6 && this.state.theposition>=.04 ){
this.setState({footer:true})

}

else{
this.setState({scrollTop:false,footer:false})

}
}
  onSubmit = () => {

         return  <Redirect  to="/services/" />
     
  }
render(){
 





  return(
<div>
        <Navigation call={this.state.scrollTop} />
<Slider2 />

<div style={{height:"85vh",width:"100%",background:"white"}}>
            <Dcontact call={this.state.scrollTop} />
</div>

<Sproject/>
            

            <Footer call={this.state.footer}/>



</div>
        )



    }

}
export default MainApp
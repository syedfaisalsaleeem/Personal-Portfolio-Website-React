import React,{ Component } from 'react';
import Toolbar1 from './components/Toolbar/Toolbar1.jsx';
import SideDrawer from './components/SideDrawer/SideDrawer.jsx';
import Backdrop from './components/Backdrop/Backdrop.jsx';
import Footer from './components/Footer/Footer.jsx';
import Logo from "./picture2.jpg";
import Logo1 from "./picture1.jpg";
import Logo2 from "./picture3.jpg"
import Logo3 from "./picture4.jpg"
import career from "./career.jpg"
import web from "./web.jpg";
import Desktop from "./Desktop.jpg";
import android from "./android.jpg"
import logoandwebsitedesigning from "./Logoandwebsitedesigning.jpg"
import './App.css';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import Route from "react-router-dom/Route";
class autogenerate extends React.Component{
    constructor(props){
      super(props)
      this.state={
        text:0
      }
    }
render() {
  const {text}=this.text
  return (
  <h1> {text}</h1>
  )
}

}

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      count:0,
      index: 1,
      showContent:true
    }
  }
  state1 = { index: 1 };

  dotClicked = e => {
    this.setState({ index: parseInt(e.target.dataset.index, 10) });
    this.setState({count:0});
  };
  render() {
    const {count}=this.state
    const {showContent}=this.state
    var content=true

    return (
      
      <div className="slider-container" style={{marginTop:'55px',position:'relative'}}>

        <div 
          className="slider-innerContainer"
          style={{ left: -100 * this.state.count + "%" }}>
          {this.props.children.map((child, count) =>
            <div key={count}>
              {child}
          

                
            </div>)}
             
        </div>
        <div className="slider-dots">
          {this.props.children.map((child, count) =>
            <div key={count} data-count={count} onClick={this.dotClicked}>
              {count === this.state.count ? "◉" : "◌"}
              {/*{console.log(count),
              console.log(this.state.count)}*/}
            </div>
          )}
        </div>
      </div>
    );
  }
  componentDidMount () {
    let content=0
    this.myInterval = setInterval(() => { 
      this.state.count === 3 ?
      this.setState({
        count:0
      })
      :
      this.setState(prevState => ({
        count:prevState.count+1,
      })) 
    },3000)
    

  }
    componentWillUnmount () {
      clearInterval(this.myInterval)
    }
    
  
}
const User=() =>{
  return (<div style={{marginTop:'55px'}}><h1 >Welcome</h1></div>)
}
class App extends Component {
    state={
        SideDrawerOpen: false,
        imgs : [
          Logo,
          Logo1,
      ],
      
    };
    
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        
    });

  };

  backdropClickHandler =() => {
      this.setState({sideDrawerOpen:false});


  };

  render(){
      let backdrop;

      if (this.state.sideDrawerOpen) {
          
          backdrop =<Backdrop click={this.backdropClickHandler} />
      }
        return (
    <Router>
    <div className="App" style={{height:'100%',width:'100%'}}>
      <Route path="/about/" exact strict component={User} />
    
    <Toolbar1 drawerClickHandler={this.drawerToggleClickHandler}/>
    <SideDrawer show={this.state.sideDrawerOpen} />
    {backdrop}

    <Slider>
          <img src={Logo1} alt={Logo1} />
          <img src={Logo2} alt={Logo2} />
          <img src={Logo} alt={Logo} />
          <img src={Logo3} alt={Logo3} />
          {/*<div><h2>Slide4</h2>Logo1</div>
                    <img src="https://livewallpaper.info/wp-content/uploads/2016/06/wallpapers-cool7.jpg" />
          <img src="https://livewallpaper.info/wp-content/uploads/2016/06/wallpapers-cool3.jpg" />
          
            <img src="https://livewallpaper.info/wp-content/uploads/2016/06/wallpapers-cool8.jpg" />
          
          */}
    </Slider>
    <div className='career'>
      <h1>It's fun to work with us </h1>
      <img src={career} alt={career} />
    </div>
    <div className='job'>
    <h3>Why are you waiting? Join Us </h3>
    <button className='bb'> 
    <span>Careers </span> </button>
    </div>
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
    <main style={{marginTop:'55px'}}>
    
    </main>
<Footer />
   
    
    
    
    
    
    
    

    
    
    
    
    
    </div>
    </Router>
    
    
  );
    }
}

export default App;

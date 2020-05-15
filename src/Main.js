import React from 'react'
import MainApp from './MainApp'
import Loading from './components/Loading/Loading'
function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}
class Main extends React.Component{
constructor(){
    super()
    this.state={
    loading:true
    }
}
    componentDidMount(){
    demoAsyncCall().then(() => this.setState({ loading: false }));

    }


render(){

return(
<div>
{this.state.loading? ( <Loading/> ):(<MainApp/>)}

</div>

)





    }
}
export default Main
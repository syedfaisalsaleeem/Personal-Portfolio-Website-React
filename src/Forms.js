import React from 'react'
class Forms extends React.Component{
    constructor(){
    super()
        this.state={
        firstname:"111",
        lastname:""

            }
        this.handle=this.handle.bind(this)
        }
    handle(event){
    const {name,value}=event.target 
    console.log(event.target.value)
    this.setState({
        [event.target.name]:event.target.value
        //[name]:value
        })



        }
    render(){

        return(
        
        <form>
        <input type="text" value={this.state.firstname} placeholder="first name" name="firstname"  onChange={this.handle}/>
        <input type="text" placeholder="last name"  name="lastname" value={this.state.lastname} onChange={this.handle}/>
        <br/>
        <h1>{this.state.lastname}  {this.state.firstname}</h1>



        </form>




        




        )




    }


}
export default Forms
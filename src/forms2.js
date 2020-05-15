import React from 'react'

class Forms2 extends React.Component{
    constructor(){
        super()
        this.state={
            firstname:"",
            lastname:"",
            age:"",
            gender:"",
            male:"",
            female:"",
            location:"",
            vegetarian:"",
            kosher:"",
            lactosefree:""

        }
    this.handle=this.handle.bind(this)
    }
    handle(event){
    console.log(event.target.name)
if(event.target.type==="checkbox"){
    this.setState({
    [event.target.name]:event.target.checked
})}
else{

    this.setState({
    [event.target.name]:event.target.value
})

}

    }
    render(){
    return(
            <div>
            <form>
            <input type="text" name="firstname" placeholder="firstname" onChange={this.handle} />
            <h3>{this.state.firstname}</h3>
            <br/>
            <input type="text" placeholder="lastname" name="lastname" onChange={this.handle} />
            <h3>{this.state.lastname}</h3>
            <br/>
            <input type="number" placeholder="Age" name="age" onChange={this.handle} />
            <h3>{this.state.age}</h3>
            <br/>
            <select name="location" value={this.state.location} onChange={this.handle}>
            <option>Karachi</option>
            <option>Lahore</option>
            <option>Islamabad</option>
            </select>
            <h3>{this.state.location}</h3>
            <br/>
            <label>
            <input type="radio" name="gender" checked={this.state.gender==='male'} value="male"  onChange={this.handle}></input>MALE
            </label>
             <label>
            <input type="radio" name="gender" checked={this.state.gender==='female'} value="female" onChange={this.handle}></input>FEMALE
            </label>
<br/>
            <input type="checkbox" name="vegetarian" checked={this.state.dietary} onChange={this.handle}/>
            <label>vegetarian</label>
            <br/>
            <input type="checkbox" name="kosher" checked={this.state.dietary} onChange={this.handle}/>
            <label>kosher</label>
            <br/>
            <input type="checkbox" name="lactosefree" checked={this.state.dietary} onChange={this.handle}/>
            <label>lactose free</label>
            <br/>
            <button>Submit!.</button>
            


            </form>



            </div>




        )



    }




}
export default Forms2
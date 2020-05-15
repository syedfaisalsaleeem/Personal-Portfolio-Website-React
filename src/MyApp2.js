import React,{Component} from 'react'
class Header extends React.Component {
    render () {

        return(
                    <div>
                    <h1> {this.props.username} </h1>
</div>
                )


}
}
class Greeting extends Component {
    render() {
        const date= new Date()
        console.log(date)
        const hours =date.getHours()
        let timeOfDay

        if(hours<12)
        { timeOfDay= "morning"}
        else if (hours >=12 && hours <12)
        { timeOfDay="afternoon"}
        else { timeOfDay="night"}
        return(
            <div>

                      {  <p>Hours={timeOfDay} </p>  }
            </div>      
        )

    }   

}

class MyApp2 extends React.Component {
    render() {
        const date= new Date()
        console.log(date)
        const hours =date.getHours()
        let timeOfDay

        if(hours<12)
        { timeOfDay= "morning"}
        else if (hours >=12 && hours <12)
        { timeOfDay="afternoon"}
        else { timeOfDay="night"}
        return(

            <div>
                      <Header username="faisal" />
                      {  <Greeting  />  }
            </div>





)
    }


}

export default MyApp2
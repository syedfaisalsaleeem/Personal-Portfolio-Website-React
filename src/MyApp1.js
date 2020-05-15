import React from 'react'
import Joke from './Joke.js'
import jokesdata from './Jokesdata.js'
import Checking from './Checking.js'
class MyApp1 extends React.Component {
    constructor(){
        super()
        this.state={
            todos:jokesdata
            }
        this.Handle=this.Handle.bind(this)
        }
    Handle(id) {
        console.log(id)
        this.setState(prevState=>{
            const updatedtodos= prevState.todos.map(todo => {
            if(todo.id===id) {
            todo.completed=!todo.completed
        }
            return todo
        })

        return {
            todos:updatedtodos
        }
        }

        )

        }


    render(){
        function two(){
        console.log("check")
        }
        const checking1=this.state.todos.map(item=> 
                <Checking  key={item.id} id={item.id} text={item.text} comp={item.completed} Handle={this.Handle} />
                

        


            )
        return(

            <div>
                {checking1}
                <button onClick={this.Handle}>1</button>

            </div>


            )


        

        
        }


}
{/*
function MyApp1 (){
    const checking1=jokesdata.map(function(check) {
    return (
                <Checking key={check.id} text={check.text}/>

            )

}


)
    const nums =[1,2,3,4,5,6]
    console.log(jokesdata)
    const jokeComponents= jokesdata.map(function(joke1){
    return <Joke key={joke1.id} cl={{ question:joke1.question
} 
} />
})
    const jokec1=jokesdata.map(joke => 
        <Joke key={joke.id}cl={{question:joke.question}}/>

)

                                          
    const doubled =nums.map(function(num)
    { return num*2

    }
                            )       

    

return(
    <div>
{checking1}
    <Checking/>
<Checking/>
<Checking/>
<Checking/>

{/*
    {jokeComponents}
    {jokec1}
    <Joke cl={{ question:"11",
punchLine:"this is answer"

}} 


/>
    <Joke cl={{question:"what1", 
punchLine:"this is answer1"

}} 


/>
    <Joke cl={{question:"what2", 
punchLine:"this is answer2"

}} 


/>  
    <Joke cl={{question:"what", 
punchLine:"this is answer"

}} 


/>
    <Joke cl={{question:"what", 
punchLine:"this is answer"

}} 


/>
}

</div>

)

}
*/}
export default MyApp1
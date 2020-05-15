import React from 'react'
function Joke (props) {
 return(
<div>
    <h1 style={{display:props.cl.question ? "block" : "none"}}> what:{props.cl.question}</h1>
    <h2 style={{color:!props.cl.question && "red" }}> Punchline:{props.cl.punchLine}</h2>
</div>
)


}

export default Joke
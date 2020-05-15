import React from 'react'
class Calculator extends React.Component{
    constructor(){
    super()
    this.state={
    count:0,
    value:0
        }
    this.calc=this.calc.bind(this)
    this.calc1=this.calc1.bind(this)
    this.calc2=this.calc2.bind(this)
    this.calc3=this.calc3.bind(this)
    this.calc4=this.calc4.bind(this)
    this.calc5=this.calc5.bind(this)

    }
    calc(props){
    this.setState({count:1})

    }
    calc1(props){
    this.setState({count:2})

    }
    calc2(props){
    this.setState({count:3})

    }
    calc3(props){
    this.setState({count:4})

    }
    calc4(props){
    this.setState({value:this.state.count})

    }
    calc5(props){
    this.setState({count:this.state.count+this.state.value})

    }
    render() {
    return(
        <div>
        <h1> {this.state.count}</h1>
        <button onClick={this.calc}>1 </button>
        <button onClick={this.calc1}>2</button>
        <button onClick={this.calc2}>3</button>
        <button onClick={this.calc3}>4</button>
        <button>5</button>
        <button>6 </button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>10</button>
        <button onClick={this.calc4}>+</button>
        <button onClick={this.calc5}>=</button>

        </div>

    )


    }



}
export default Calculator
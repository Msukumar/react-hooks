import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 1
        }
    }
    
    handleIncrement = () => {
        this.setState((prevState)=>{
            return { count :  prevState.count + 1}
        })
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <button onClick={this.handleIncrement}> clicked {count} times</button>
            </div>
        )
    }
}

export default Counter

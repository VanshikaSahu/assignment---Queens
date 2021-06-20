import React, {Component} from 'react';
import Counter from'./Counter';

class Counters extends Component{
    state = {
            counters: [
                {id: 1, value: 0},
                {id: 2, value: 0},
                {id: 3, value: 0},
                {id: 4, value: 0}
            ]
    };
    handleDelete = (idToDelete)=>{
        const newCounters = this.state.counters.filter(c=> c.id !==idToDelete);
        this.setState({counters: newCounters})
        
    }
    handleIncrement = (idToIncrement)=>{

        const Counters = [...this.state.counters];
        Counters[idToIncrement-1].value++;
        this.setState({counter: Counters});
    }
    render(){
        return(
            <div>
                {this.state.counters.map(count=>{
                    return (<><Counter key = {count.id} value = {count.value} counter = {count} onDelete = {this.handleDelete} onIncrement = {this.handleIncrement}/> <br/></>)

                })}
            </div>
        )
    }
}

export default Counters;
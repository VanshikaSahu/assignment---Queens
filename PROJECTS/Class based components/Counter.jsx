import React, {Component} from 'react';


class Counter extends Component{
    

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    
    render(){

        let classes = this.addClasses();  
        return (<>
            <h6 className= {classes}>{this.formatCount()}</h6>
            {/* //this refers to the current object */}
            <button onClick = {()=>{this.props.onIncrement(this.props.counter.id)}} className = "btn btn-secondary btn-sm">Increment</button>
            <button onClick = {()=>{this.props.onDelete(this.props.counter.id)}}>Delete</button>
            </>);
    }

    addClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "primary" : "warning";
        return classes;
    }

    formatCount(){
        const count = this.props.counter.value;//Here we are using object destrructuring
        return count === 0 ? <h6>Zero</h6> : count;
    }
}

export default Counter;
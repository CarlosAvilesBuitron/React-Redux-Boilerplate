import React from 'react';
import {connect} from 'react-redux';


class CopyBlock extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            currentValue : 0
        };
    }
    
    _valueState(event){
        this.setState({
           currentValue :  event.currentTarget.value
        });
    }
    
    _addValue(){
        let valueGiven = this.state.currentValue;
        this.props.add(parseFloat(valueGiven));
    }
    
    render(){
        return(
            <div className="en__component en__component--copyblock" >
                <p>Result Total: {this.props.result}</p>
                <p>Current Value: {this.state.currentValue}</p>
                <br />
                <input type="number" onChange={this._valueState.bind(this)} />
                <br/>
                <button onClick={this._addValue.bind(this)}>Change Results</button>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        result : state.result
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        add : (number) => {
            dispatch(
                {
                    type: "ADD",
                    payload : number
                }
            );
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CopyBlock);

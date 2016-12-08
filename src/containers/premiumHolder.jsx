import React from 'react';
import GiftArray from '../containers/giftArrays.jsx';
import {connect} from 'react-redux';
const MainFunctions = require ('../actions/main-functions.js');


class PremiumHolder extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="en__component en__component--copyblock">
                <div id="no-premium">
                    <div id="No_Premuim_MessageDiv" style={this.props.noPremiumMessage}>Please note there are no thank-you gifts at this level.</div>
                    <GiftArray />
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        noPremiumMessage : state.noPremiumMessage
    };
};


export default connect(mapStateToProps)(PremiumHolder);
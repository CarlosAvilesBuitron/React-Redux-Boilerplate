import React from 'react';
import Comments from './comments.jsx';
import {connect} from 'react-redux';
import SectionHeader from '../components/sectionHeader.jsx';
const MainFunctions = require ('../actions/main-functions.js');

class CommentsHolder extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
           debugStyle : { display : "block" }
        };
    }
    
    componentDidMount(){
        
        if(this.props.debug){
            this.setState({ debugStyle : { display : "none" } });
        }
        
        if(MainFunctions.urlParam('DEBUG')){
            this.setState({ debugStyle : { display : "block" } });
        }
        
    }
    
    render(){
        return(
            <div className="en__component en__component--formblock">
            
               <Comments />
                
               <div style={this.state.debugStyle}>    
                    
                    <SectionHeader className="section-header" copy="Debug Mode On: Form Parameters"/>
                    <label className="en__field__label en__field__label--positionabove">Premium Code:</label>
                    <input type="text" id="Backend_Premium_Code" className="en__field__input en__field__input--hidden" name="transaction.othamt1" value={this.props.premium} />
                    <br/><br/>
                    <label className="en__field__label en__field__label--positionabove"  >Campaign ID:</label>
                    <input type="text" id="Campaign_ID" className="en__field__input en__field__input--hidden" name="transaction.othamt3" value={this.props.campaignID} />
                     <br/><br/>
                     <label className="en__field__label en__field__label--positionabove">Source Code:</label>
                    <input type="text" id="Transaction_Appeal_Code" className="en__field__input en__field__input--hidden" name="supporter.appealCode" value={this.props.sourceCode} />
                    <br/><br/>
                    <label className="en__field__label en__field__label--positionabove">Current Min Amount:</label>
                    <input type="text" className="en__field__input" value={this.props.min} />
                    <br/><br/>
                    <label className="en__field__label en__field__label--positionabove">Opted In:</label>
                    <input type="text" className="en__field__input" value={this.props.optInChoice} />
                    <br/><br/>
                    <label className="en__field__label en__field__label--positionabove">Current Transaction Amount:</label>
                    <input type="text" className="en__field__input" value={this.props.donationAmount} />
                
                </div>
                <div className="en__submit" id="Main_Submit"><button>Give Now</button></div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sourceCode : state.sourceCode,
        campaignID : state.campaignID,
        premium: state.premium,
        debug : state.debugModeOff,
        min : state.masterMin,
        optInChoice : state.optIn,
        donationAmount : state.donationAmount
    };
};

export default connect(mapStateToProps)(CommentsHolder);


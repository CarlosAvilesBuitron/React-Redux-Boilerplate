import React from 'react';
import Program from './program.jsx';
import {connect} from 'react-redux';
import SectionHeader from './sectionHeader.jsx';
const MainFunctions = require ('../actions/main-functions.js');

class MonthlyGiving extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
           debugStyle : { display : "none" }
        };
    }
    
    componentDidMount(){
        
        
        
        if(MainFunctions.urlParam('DEBUG')){
            this.setState({ debugStyle : { display : "block" } });
        } else {
            this.setState({ debugStyle : { display : "none" } });
        }
        
    }
    
    updateMonth(event){
        if(event.currentTarget.checked){
            this.props.monthlyGivingUpdate('Y');
            console.log(this.props.giveMonthlyOption);
        } else {
            this.props.monthlyGivingUpdate('N');
            console.log(this.props.giveMonthlyOption);
        }
    }
    
    render(){
        return(
            <div className="en__component en__component--formblock">
                                    
                <div className="en__field en__field--checkbox en__field--8586 en__field--NOT_TAGGED_52">
                    <label className="en__field__label en__field__label--positionabove">Yes</label>
                    <div className="en__field__element en__field__element--checkbox">
                        <div className="en__field__item">
                            <input type="checkbox" onChange={this.updateMonth.bind(this)} className="en__field__input en__field__input--checkbox" value="Yes, I would like to automatically repeat this gift each month." name="supporter.NOT_TAGGED_52" id="yesChange" />
                            <label className="en__field__label en__field__label--item" for="yesChange">Yes, I would like to automatically repeat this gift each month.</label>
                            <input type="hidden" name="supporter.NOT_TAGGED_52.checkbox" value="N" />
                        </div>
                    </div>
                </div>
                
                <div id="monthlyOptions" style={this.state.debugStyle}>
                    <br/>
                    <SectionHeader className="section-header" copy="Debug Mode On: Monthly Options"/>
                    <label className="en__field__label en__field__label--positionabove">Paypal Language Required:</label>
                    <input type="text" className="en__field__input en__field__input--hidden" name="supporter.NOT_TAGGED_57" value="By submitting this form you agree to allow this organization to take funds from your account monthly." />
                    <br/><br/>
                    <label className="en__field__label en__field__label--positionabove">Recurring Frequency:</label>
                    <input type="text" class="en__field__input en__field__input--text" name="transaction.recurrfreq" value="MONTHLY" />
                    <br/><br/>
                    <label className="en__field__label en__field__label--positionabove">Currency:</label>
                    <input type="text" className="en__field__input en__field__input--hidden" name="transaction.paycurrency" value="USD" />
                    <br/><br/>
                    <label className="en__field__label en__field__label--positionabove">User Will Be Charged Monthly:</label>
                    <input type="text" className="en__field__input en__field__input--hidden" name="transaction.recurrpay" value={this.props.giveMonthlyOption} />
                    <br/><br/>
                    <label className="en__field__label en__field__label--positionabove">Date of Recurring Payment: (999 means same day of transaction)</label>
                    <input type="text" className="en__field__input en__field__input--hidden" name="transaction.recurrday" value="999" />
                </div>

                <Program />

            </div>
);
    }
}


const mapStateToProps = (state) => {
    return {
        giveMonthlyOption : state.monthlyGiving,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        monthlyGivingUpdate : (monthlyOption) => {
            dispatch(
                {
                    type: "monthlyGivingUpdate",
                    payload : monthlyOption
                }
            );
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyGiving);
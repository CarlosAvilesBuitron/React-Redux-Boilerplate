import React from 'react';
import cookie from 'react-cookie';

class Payments extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        
        if(cookie.load('numberCookie')){
            document.getElementById('numberField').value = cookie.load('numberCookie');
        }
        
        if(cookie.load('monthCookie')){
            document.getElementById('monthField').value = cookie.load('monthCookie');
        }
        
        if(cookie.load('yearCookie')){
            document.getElementById('yearField').value = cookie.load('yearCookie');
        }
        
        if(cookie.load('cvvCookie')){
            document.getElementById('cvvField').value = cookie.load('cvvCookie');
        }
        
    }
    
 
    
    _saveNumber(event){
        cookie.save('numberCookie', event.currentTarget.value, { path: '/' , maxAge: 350  });
    }
    
    _saveMonth(event){
        cookie.save('monthCookie', event.currentTarget.value, { path: '/' , maxAge: 350  });
    }
    
    _saveYear(event){
        cookie.save('yearCookie', event.currentTarget.value, { path: '/' , maxAge: 350  });
    }
    
    _saveCVV(event){
        cookie.save('cvvCookie', event.currentTarget.value, { path: '/' , maxAge: 350  });
    }
    
    render(){
        return(
             <div className="en__component en__component--formblock">
                                    
                <div className="en__field en__field--text en__field--8591 en__field--ccnumber">
                    <span className="eamandaToryfIeldmarker">*</span>
                    <label className="en__field__label en__field__label--positionabove">Credit Card Number:</label>
                    <div className="en__field__element en__field__element--text">
                        <input type="text" onChange={this._saveNumber.bind(this)} onKeyDown={this._saveNumber.bind(this)} id="numberField" className="en__field__input en__field__input--text" name="transaction.ccnumber" />
                    </div>
                </div>
                
                <div className="en__field en__field--splitselect en__field--8603 en__field--ccexpire">
                    <span className="eamandaToryfIeldmarker">*</span>
                    <label className="en__field__label en__field__label--positionabove">Expiration Date:</label>
                    <div className="en__field__element en__field__element--splitselect">
                        <input type="hidden" name="transaction.ccexpire.delimiter"/>
                        <div className="en__field__item">
                            <select onChange={this._saveMonth.bind(this)} id="monthField" className="en__field__input en__field__input--splitselect" name="transaction.ccexpire">
            					<option selected="selected" value=""></option>
            					<option value="01">01</option>
            					<option value="02">02</option>
            					<option value="03">03</option>
            					<option value="04">04</option>
            					<option value="05">05</option>
            					<option value="06">06</option>
            					<option value="07">07</option>
            					<option value="08">08</option>
            					<option value="09">09</option>
            					<option value="10">10</option>
            					<option value="11">11</option>
            					<option value="12">12</option>
                            </select>
                        </div>
                        
                        <div className="en__field__item" id="year-select">
                            <select onChange={this._saveYear.bind(this)} id="yearField" className="en__field__input en__field__input--splitselect" name="transaction.ccexpire">
            					<option selected="selected" value=""></option>
            					<option value="2016">2016</option>
            					<option value="2017">2017</option>
            					<option value="2018">2018</option>
            					<option value="2019">2019</option>
            					<option value="2020">2020</option>
            					<option value="2021">2021</option>
            					<option value="2022">2022</option>
            					<option value="2023">2023</option>
            					<option value="2024">2024</option>
            					<option value="2025">2025</option>
            					<option value="2026">2026</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div className="en__field en__field--text en__field--8602 en__field--ccvv">
                    <span className="eamandaToryfIeldmarker">*</span>
                    <label className="en__field__label en__field__label--positionabove">Security Number:</label>
                    <div className="en__field__element en__field__element--text">
                        <input type="text" onChange={this._saveCVV.bind(this)} onKeyDown={this._saveCVV.bind(this)} id="cvvField" className="en__field__input en__field__input--text" name="transaction.ccvv" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Payments;
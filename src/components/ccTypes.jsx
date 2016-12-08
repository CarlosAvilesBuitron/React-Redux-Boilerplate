import React from 'react';
import cookie from 'react-cookie';

class CCTypes extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        
        if(cookie.load('typeCookie')){
            document.getElementById('typeField').value = cookie.load('typeCookie');
        }
        
    }
    
    _saveType(event){
        cookie.save('typeCookie', event.currentTarget.value, { path: '/' , maxAge: 350  });
    }
    
    render(){
        return(
            <div className="en__component en__component--formblock">
            
                <div className="en__field en__field--select en__field--8589 en__field--paymenttype">
                    <span className="eamandaToryfIeldmarker">*</span>
                    <label className="en__field__label en__field__label--positionabove">Please select a payment type:</label>
                    <div className="en__field__element en__field__element--select">
                        <select onChange={this._saveType.bind(this)} id="typeField" className="en__field__input en__field__input--select" name="transaction.paymenttype">
                            <option value="Visa">Visa</option>
                            <option value="MasterCard">MasterCard</option>
                            <option value="Discover">Discover</option>
                            <option value="Amex">Amex</option>
                            <option value="Paypal">Paypal</option>
                      </select>
                    </div>
                </div>
                                    
            </div>
        );
    }
}

export default CCTypes;
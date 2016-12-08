import React from 'react';
import cookie from 'react-cookie';

import {connect} from 'react-redux';
const MainFunctions = require ('../actions/main-functions.js');
let giftLevels;
let newLevels;
let premiumLoop;

class CustomAmount extends React.Component{
    constructor(props){
        super(props);

    }
    
    componentDidMount(){
       if(!MainFunctions.urlParam('COOKIES')){ 
           
           /* Multi Min Amounts */
        
            if(MainFunctions.urlParam('PRE') && MainFunctions.urlParam('LEVELS')){
                giftLevels = MainFunctions.socialFix(MainFunctions.urlParam('PRE'));
                newLevels = MainFunctions.socialFix(MainFunctions.urlParam('LEVELS'));
                cookie.save('PRE', giftLevels, { path: '/' , maxAge: 3600 * 4  });
                cookie.save('LEVELS', newLevels, { path: '/' , maxAge: 3600 * 4  });
            } else if(cookie.load('PRE') && cookie.load('LEVELS')){
                giftLevels = cookie.load('PRE');
                newLevels = cookie.load('LEVELS');
            }
           
           
           if(cookie.load('customAmount') && cookie.load('customAmount') != 0){
               
                   document.getElementById('OTHER').click();
                   document.getElementById('custom-amount').value = cookie.load('customAmount');
                   this.props.showCustom({display: 'block'});
                   this.props.donationADD(cookie.load('customAmount'));
                   
                   if(cookie.load('customAmount') >= this.props.minAmount){
                       this.props.premiumHide({display : 'block'});
                       this.props.premiumUpdate({display: 'none'});
                       if(MainFunctions.urlParam('PRE') && MainFunctions.urlParam('LEVELS') || cookie.load('PRE') && cookie.load('LEVELS')){
                               setTimeout(() => {
                               
                               for(let i = 0; i < giftLevels.length; i++){
                                   
                                   premiumLoop = document.getElementById(giftLevels[i]).parentElement.parentElement;
                                   premiumLoop.style.display ="none";
                                   let foundAmount = parseFloat(cookie.load('customAmount'));
                                   
                                   if(foundAmount >= newLevels[i]){
                                       console.log(newLevels[i]);
                                       premiumLoop.style.display ="block";
                                   } else {
                                        console.log('Level not met');
                                        if(document.getElementById('Backend_Premium_Code').value == giftLevels[i]){
                                           document.getElementById('NONE').click();
                                        }
                                    }
                                   
                               }
                               
                           }, 800);
                           
                           
                       }
                     
                   } 
                  
           }
            
       }
    }
    
   
    _onChange(event){
        let customEntered = parseFloat(event.currentTarget.value.replace(/,/g, ''));
        this.props.donationADD(customEntered);
        
        cookie.save('buttonAmount', 0, { path: '/' , maxAge: 3600 * 4  });
        cookie.save('customAmount', customEntered, { path: '/' , maxAge: 3600 * 4  });
        
        if(customEntered >= this.props.minAmount){
            this.props.premiumHide({display : 'block'});
            this.props.premiumUpdate({display: 'none'});
        } else {
            this.props.premiumHide({display : 'none'});
            this.props.chosen('NONE');
            document.getElementById('NONE').click();
        }
        
        this._newLevel(customEntered);
 
    }
        
    
    
    _onKey(event){
        let customEntered = parseFloat(event.currentTarget.value.replace(/,/g, ''));
        customEntered = customEntered;
        this.props.donationADD(customEntered);
        
        if(customEntered >= this.props.minAmount){
            this.props.premiumHide({display : 'block'});
            this.props.premiumUpdate({display: 'none'});
        } else {
            this.props.premiumHide({display : 'none'});
            this.props.chosen('NONE');
            document.getElementById('NONE').click();
        }
        
        this._newLevel(customEntered);

    }
    
    _newLevel(customEntered){
        
       if(MainFunctions.urlParam('PRE') && MainFunctions.urlParam('LEVELS') || cookie.load('PRE') && cookie.load('LEVELS')){
           for(let i = 0; i < giftLevels.length; i++){
    
                var premiumReady = document.getElementById(giftLevels[i]).parentElement.parentElement;
                
                if(premiumReady){
                    premiumReady.style.display ="none";
    
                    if (customEntered >= newLevels[i]) {
                        premiumReady.style.display ="block";
                    } else {
                        console.log('Level not met');
                        if(document.getElementById('Backend_Premium_Code').value == giftLevels[i]){
                            document.getElementById('NONE').click();
                        }
                    }
                }
            }
           
       }
        
    }
    
    render(){
        return(
            <div className="en__component en__component--formblock" style={this.props.customAmountShown}>
              <div className="amount-holder otherinput-holder" id="OtherInputHolder">
                 <span>$</span><input type="text" className="en__field__input en__field__input--text" id="custom-amount" onChange={this._onChange.bind(this)} onKeyDown={this._onKey.bind(this)} />
                 <br/>
                 <input type="hidden" id="mainTransactionAmount" className="en__field__input en__field__input--hidden" name="transaction.donationAmt" value={this.props.donationAmount} />
              </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        customAmountShown : state.customAmountHidden,
        donationAmount : state.donationAmount,
        minAmount : state.masterMin
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        donationADD : (transaction) => {
            dispatch(
                {
                    type: "DONATIONADD",
                    payload : transaction
                }
            );
        },
        donationZero : () => {
            dispatch(
                {
                    type: "DONATIONBLANK",
                    payload : 0
                }
            );
        },
        
        premiumHide : (newStyle) => {
            dispatch(
                {
                    type: "PREMIUMHIDE",
                    payload : newStyle
                }
            );
        },

        chosen : (newPremium) => {
            dispatch(
                {
                    type: "CHOSEN",
                    payload : newPremium
                }
            );
        },
        
        premiumUpdate : (premiumUpdate) => {
            dispatch(
                {
                    type: "NOPREMIUM",
                    payload : premiumUpdate
                }
            );
        },
        
        showCustom : (style) => {
            dispatch(
                {
                    type: "SHOWCUSTOM",
                    payload : style
                }
            );
        }
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomAmount);
import React from 'react';
import CustomAmount from '../containers/customAmount.jsx';
import cookie from 'react-cookie';


import {connect} from 'react-redux';
const MainFunctions = require ('../actions/main-functions.js');
const dataLayer = require('data-layer-events');

let selectedButton;
let passedSource;
let passedCampaign;
let textString;
let currentMin;
let giftLevels;
let newLevels;

if(cookie.load('sourceCode')){
    passedSource = cookie.load('sourceCode');
}

if(cookie.load('campaignID')){
    passedCampaign = cookie.load('campaignID');
}


class DonationButtons extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            buttonText : {width : '100px' , height: '70px'},
            h4Margin : {marginTop : '21px'}
        };
    }
    
    componentDidMount(){
        
        if(!cookie.load('buttonAmount') && !cookie.load('customAmount')){
            if(MainFunctions.urlParam('CHOSEN')){
                
                let chosenPass = MainFunctions.urlParam('CHOSEN');
                
                if(document.getElementById(chosenPass)){
                    document.getElementById(chosenPass).click();
                } else {
                   document.getElementById('custom-amount').value = parseFloat(chosenPass);
                   document.getElementById('OTHER').click();
                   this.props.showCustom({display: 'block'});
                   this.props.donationADD(parseFloat(chosenPass));
                   
                   if(parseFloat(chosenPass) > this.props.minAmount){
                       this.props.premiumHide({display : 'block'});
                       this.props.premiumUpdate({display: 'none'});
                   }
                }
                
            }
        }
        
        
        if(!MainFunctions.urlParam('COOKIES')){
            
            
            if(MainFunctions.urlParam('PRE') && MainFunctions.urlParam('LEVELS')){
                giftLevels = MainFunctions.socialFix(MainFunctions.urlParam('PRE'));
                newLevels = MainFunctions.socialFix(MainFunctions.urlParam('LEVELS'));
                cookie.save('PRE', giftLevels, { path: '/' , maxAge: 3600 * 4  });
                cookie.save('LEVELS', newLevels, { path: '/' , maxAge: 3600 * 4  });
            } else if(cookie.load('PRE') && cookie.load('LEVELS')){
                giftLevels = cookie.load('PRE');
                newLevels = cookie.load('LEVELS');
            }
            
            
            if(MainFunctions.urlParam('AMT')){
            
            let amountFound = MainFunctions.socialFix(MainFunctions.urlParam('AMT'));
            this.props.donationArrayUpdate(amountFound);
            cookie.save('donationArray', amountFound, { path: '/' , maxAge: 3600 * 4  });
            } else if(cookie.load('donationArray')){
                this.props.donationArrayUpdate(cookie.load('donationArray'));
            }
            
            
            if(MainFunctions.urlParam('CPID')){
                let campaignPass = MainFunctions.urlParam('CPID');
                this.props.campaignUpdate(MainFunctions.urlParam('CPID'));
                cookie.save('campaignID', campaignPass, { path: '/' , maxAge: 3600 * 4  });
            } else if(cookie.load('campaignID')){
                this.props.campaignUpdate(cookie.load('campaignID'));
            }
            
            if(MainFunctions.urlParam('SRC')){
                let sourcePassed = MainFunctions.urlParam('SRC');
                this.props.sourceUpdate(MainFunctions.urlParam('SRC'));
                cookie.save('sourceCode', sourcePassed, { path: '/' , maxAge: 3600 * 4  });
            } else if(cookie.load('sourceCode')){
                this.props.sourceUpdate(cookie.load('sourceCode'));
            }
            
            
            if(cookie.load('sourceCode') && cookie.load('sourceCode') == passedSource && cookie.load('campaignID') && cookie.load('campaignID') == passedCampaign){
                this.props.minUpdate(cookie.load('minAmount'));
                currentMin = cookie.load('minAmount');
                if(MainFunctions.urlParam('MIN')){
                    if(MainFunctions.urlParam('MIN') != cookie.load('minAmount')){
                        console.log('Different Min Amount Was Passed');
                        dataLayer.event('Donation Form', 'Min Amount', 'Min Amount is Locked via Pagebuilder', 'Min Amount is Locked via Pagebuilder');
                    }
                }
                console.log('MIN Amount is locked');
                
            } else {
                
                if(MainFunctions.urlParam('MIN')){
                    let minPass = MainFunctions.urlParam('MIN');
                    this.props.minUpdate(MainFunctions.urlParam('MIN'));
                    cookie.save('minAmount', minPass, { path: '/' , maxAge: 3600 * 4 });
                    currentMin = MainFunctions.urlParam('MIN');
                } else if(cookie.load('minAmount')){
                    this.props.minUpdate(cookie.load('minAmount'));
                    currentMin = cookie.load('minAmount');
                }  
                
            }
            
            
            if(MainFunctions.urlParam('TEXT')){
                textString = MainFunctions.urlParam('TEXT').replace(/%20/g, ' ');
                cookie.save('textString', textString, { path: '/' , maxAge: 3600 * 4  });
                let minButton = document.getElementById(currentMin);
                if(minButton){
                    console.log('found it');
                    minButton.style.width = '180px';
                    minButton.innerHTML = '<h4 style="margin-top:4px; padding-top:5px">$' + currentMin + '</h4>' + '<span style="line-height:18px; padding: 0 10px;">' + textString + '</span>';
                    this.setState({
                        buttonText : {width : '100px' , height: '80px'}
                    });
                    this.setState({
                        h4Margin : {marginTop : '26px'}
                    });
                }
            } else if(cookie.load('textString')){
                textString = cookie.load('textString');
                let minButton = document.getElementById(currentMin);
                if(minButton){
                    console.log('found it');
                    minButton.style.width = '180px';
                    minButton.innerHTML = '<h4 style="margin-top:4px">$' + currentMin + '</h4>' + '<span style="line-height:18px; padding: 0 10px;">' + textString + '</span>';
                    this.setState({
                        buttonText : {width : '100px' , height: '80px'}
                    });
                    this.setState({
                        h4Margin : {marginTop : '26px'}
                    });
                }
            }
            
            
            
            
            if(cookie.load('buttonAmount') && cookie.load('buttonAmount') != 0){
                
               var previousButton = String(cookie.load('buttonAmount'));
               
               setTimeout(function(){
                   document.getElementById(previousButton).click();
               }, 300);
               
               
               
               this.props.donationADD(cookie.load('buttonAmount'));
               
               if(cookie.load('buttonAmount') > this.props.minAmount){
                   this.props.premiumHide({display : 'block'});
                   this.props.premiumUpdate({display: 'none'});
               }
           }
            
        } else {
            cookie.remove('donationArray', { path: '/' });
            cookie.remove('minAmount', { path: '/' });
            cookie.remove('campaignID', { path: '/' });
            cookie.remove('sourceCode', { path: '/' });
            cookie.remove('customAmount', { path: '/' });
            cookie.remove('buttonAmount', { path: '/' });
            cookie.remove('giftArray', { path: '/' });
            cookie.remove('premiumChoice', { path: '/' });
            cookie.remove('textString', { path: '/' });
            cookie.remove('HEADERcookie', { path: '/' });
            cookie.remove('PRE', { path: '/' });
            cookie.remove('LEVELS', { path: '/' });
        }
        
 
    }
    
    _onClick(event){
        let selectedDonation = parseFloat(event.currentTarget.getAttribute('id'));
        this.props.donationADD(selectedDonation);
        this.props.showCustom({display: 'none'});
        document.getElementById('custom-amount').value = 0;
        
        cookie.save('buttonAmount', selectedDonation, { path: '/' , maxAge: 3600 * 4  });
        cookie.save('customAmount', 0, { path: '/' , maxAge: 3600 * 4  });
        
        if(selectedDonation >= this.props.minAmount){
            this.props.premiumHide({display : 'block'});
            this.props.premiumUpdate({display: 'none'});
        } else {
            this.props.premiumHide({display : 'none'});
            this.props.chosen('NONE');
            document.getElementById('NONE').click();
        }
        
        if (selectedButton) {
           selectedButton.className = "amount-button chosen";
        }
        
        selectedButton = event.currentTarget;
        selectedButton.className += " amount-button-clicked";
        
        this._newLevel(selectedDonation);
            
            
    }
    
    _onClickCustom(event){
        this.props.donationZero(0);
        this.props.showCustom({display: 'block'});
        this.props.premiumHide({display : 'none'});
        this.props.chosen('NONE');
        document.getElementById('NONE').click();
        
        if (selectedButton) {
           selectedButton.className = "amount-button chosen";
        }
        
        selectedButton = event.currentTarget;
        selectedButton.className += " amount-button-clicked";
        
   
    }
    
    _newLevel(customEntered){
       console.log(giftLevels);
       
       setTimeout(function(){
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
           
       }, 300);
      
        
    }
    
    render(){
        let donationNodes = this.props.donationArrayState.map((donation) => {
            return ( <div className="amount-holder" key={donation}>
                        <div className="amount-button chosen" id={donation} 
                        onClick={this._onClick.bind(this)} style={this.state.buttonText}>
                            <h4 style={this.state.h4Margin}>${donation}</h4>
                        </div> 
                      </div>
            );
        });

        return (
            <div>
                {donationNodes}
                <div className="amount-holder">
                    <div className="amount-button custom-premium-level" id="OTHER" onClick={this._onClickCustom.bind(this)} style={this.state.buttonText}>
                        <h4 style={this.state.h4Margin}>Other</h4>
                    </div>
                </div>
                <CustomAmount />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        donationAmount : state.donationAmount,
        customAmountShown : state.customAmountHidden,
        donationArrayState : state.donationArray,
        minAmount : state.masterMin,
        campaignID : state.campaignID,
        sourceCode : state.sourceCode
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
        
        showCustom : (style) => {
            dispatch(
                {
                    type: "SHOWCUSTOM",
                    payload : style
                }
            );
        },
        
        donationArrayUpdate : (updateArray) => {
            dispatch(
                {
                    type: "ARRAYPASSED",
                    payload : updateArray
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
        
        premiumUpdate : (premiumUpdate) => {
            dispatch(
                {
                    type: "NOPREMIUM",
                    payload : premiumUpdate
                }
            );
        },
        
        sourceUpdate : (sourceUpdate) => {
            dispatch(
                {
                    type: "UPDATESOURCE",
                    payload : sourceUpdate
                }
            );
        },
        
        campaignUpdate : (campaignUpdate) => {
            dispatch(
                {
                    type: "UPDATECAMPAIGN",
                    payload : campaignUpdate
                }
            );
        },
        
        minUpdate : (minUpdate) => {
            dispatch(
                {
                    type: "minUpdate",
                    payload : minUpdate
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
        }
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DonationButtons);
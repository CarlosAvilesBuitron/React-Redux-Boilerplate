import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import cookie from 'react-cookie';
const MainFunctions = require ('../actions/main-functions.js');
const dataLayer = require('data-layer-events');

/* Style Sheet Import */
require('../styles/main.scss');



(function($) {
    $(document).ready(function() {
        
        
        if(MainFunctions.urlParam('HEADER')){
            cookie.save('HEADERcookie', MainFunctions.urlParam('HEADER'), { path: '/' , maxAge: 3600 * 4  });
        }
       
       /* Error Handling */
        var genericError = document.querySelector('.en__error');
    
        if(genericError && genericError.innerHTML == 'Generic Payment Error'){
            genericError.innerHTML = "Transaction Error: Please check you credit card details and try again.";
            dataLayer.event('Donation Form', 'Transaction Error', 'Generic Error via Pagebuilder', 'Generic Error via Pagebuilder');
        }
        
        var errorsHeader = document.querySelector('.en__errorHeader');
        
        if(errorsHeader){
            $('.en__errorList').addClass('en__errorList_notice');
        }
        
        
    
        
        /* Handle Validation Errors on Submit */
        $('#Main_Submit').click(function(){
            
            setTimeout(function(){
                
                var errorsClass = document.querySelector('.en__field__error');
                
                if(errorsClass){
                    $('html, body').animate({
                        scrollTop: $(errorsClass).offset().top
                    }, 800);
                }
                
                
                var errors = $('.en__field__error').parent();
        
                errors.each(function(index){
                    console.log('Found Errors');
                   var fieldsError = $(this).find('input');
                   fieldsError.each(function(index){
                     $(this).css('border-color', '#d62a2a');
                   });
                });
                
            }, 200);
            
        });
    
       /* Hide CC Options */

        let ccOptions = document.getElementById('typeField');
        let paymentOptions = document.getElementById('Payment_ButtonsDiv');
        
        if(ccOptions){
            ccOptions.addEventListener('change', ()=>{
                if(ccOptions.value == 'Paypal'){
                    paymentOptions.style.display = 'none';
                } else {
                    paymentOptions.style.display = 'block';
                }
            });
        }
        
    
    });
})(jQuery);


/* Delete Cookies */
    if(window.location.href.match(/donate\/2/)){
        cookie.remove('donationArray', { path: '/' });
        cookie.remove('minAmount', { path: '/' });
        cookie.remove('campaignID', { path: '/' });
        cookie.remove('sourceCode', { path: '/' });
        cookie.remove('customAmount', { path: '/' });
        cookie.remove('buttonAmount', { path: '/' });
        cookie.remove('giftArray', { path: '/' });
        cookie.remove('premiumChoice', { path: '/' });
        cookie.remove('HEADERcookie', { path: '/' });
        cookie.remove('textString', { path: '/' });
        cookie.remove('PRE', { path: '/' });
        cookie.remove('LEVELS', { path: '/' });
    }




/* Premium Object Render */

ReactDOM.render(<App />, document.getElementById('mainApp'));   






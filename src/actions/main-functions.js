/* Main Cookie Class */
import cookie from 'react-cookie';

/* Main Url Parameter Setting Function */

exports.urlParam = (name) => {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    } else {
        return results[1] || 0;
    }
};

exports.socialFix = (arrayToFix) => {
    arrayToFix = arrayToFix.replace(/,/g, '%2C').split('%2C');
    return arrayToFix;
};

exports.newLevel = (customEntered, giftLevels, newLevels) =>{
           
           for(let i = 0; i < giftLevels.length; i++){
    
                var premiumReady = document.getElementById(giftLevels[i]).parentElement.parentElement;
                
                if(premiumReady){
                    premiumReady.style.display ="none";
    
                    if (customEntered >= newLevels[i]) {
                        premiumReady.style.display ="block";
                    } else {
                        console.log('Level not met');
                        if(document.getElementById('Backend_Premium_Code') == giftLevels[i]){
                            //document.getElementById('NONE').click();
                        }
                    }
                }
            }
  
        
    };






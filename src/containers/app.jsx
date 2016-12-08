import React from 'react';

import SectionHeader from '../components/sectionHeader.jsx';
import DonationButtons from './donationButtons.jsx';
import MonthlyGiving from '../components/monthlyGiving.jsx';
import Billing from './billing.jsx';
import CCTypes from '../components/ccTypes.jsx';
import CCLogos from '../components/ccLogos.jsx';
import Payments from './payment.jsx';
import PremiumHolder from './premiumHolder.jsx';
import ThankYou from '../components/thankYou.jsx';
import CommentsHolder from '../components/commentHolder.jsx';

import store from '../store.js';
import {Provider} from 'react-redux';

class App extends React.Component{
    constructor(props){
        super(props);
    }
    
    
    render(){
        return(
            <Provider store={store}>
                <section>
                
                  {/* Main Dynamic Header */}
                  <div id="mainHeader">"Header Content"</div>
                  
                  {/* Section Header */}
                  <SectionHeader className="section-header" copy="Select Your Gift Amount"/>
                  
                  {/* Custom Donation Buttons */}
                  <DonationButtons />
                  
                  {/* Section Header */}
                  <SectionHeader className="section-header-short" copy="Can you help every month?"/>
                  
                  {/* Monthly Giving and Program Choice */}
                  <MonthlyGiving />
                  
                  {/* Section Header */}
                  <SectionHeader className="section-header" copy="Billing Information"/>
                  
                  {/* Billing Information */}
                  <Billing />
                  
                  {/* Section Header */}
                  <SectionHeader className="section-header" copy="Payment Information"/>
                  
                  {/* CC Types */}
                  <CCTypes />
                  
                  {/* CC Logos */}
                  <CCLogos />
                  
                  {/* Payments */}
                  <Payments />
                  
                  {/* Section Header */}
                  <SectionHeader className="section-header" copy="Please select one thank-you gift for your donation."/>
                  
                  {/* PremiumHolder */}
                  <PremiumHolder />
                  
                  {/* Thank You Message */}
                  <ThankYou />
                  
                  {/* Comments Holder */}
                  <CommentsHolder />
    
                  
                </section>
            </Provider>
        );
    }
}

export default App;


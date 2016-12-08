import React from 'react';


class ThankYou extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="en__component en__component--copyblock">
                <div className="eaFullWidthContent" id="Thank_You_Footer_MessageDiv">Thank you in advance for your contribution to help <br className="hide-for-small" /> Keep the Miracle Alive for the children of St. Labre.<br className="hide-for-small" />
                    <strong>Together we can do more!</strong></div>
            </div>
        );
    }
}

export default ThankYou;
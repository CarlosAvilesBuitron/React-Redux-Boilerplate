import React from 'react';

class Program extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="en__field en__field--select en__field--8558 en__field--dirgift">
                <label className="en__field__label en__field__label--positionabove">What program would you like to give to?</label>
                
                <div className="en__field__element en__field__element--select">
                    <select className="en__field__input en__field__input--select" name="transaction.dirgift">
                        <option value="Where Most Needed">Where Most Needed</option>
                        <option value="Scholarship Fund">Scholarship Fund</option>
                    </select>
                </div>
                
            </div>
        );
    }
}

export default Program;
import React from 'react';
import cookie from 'react-cookie';

class Comments extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        
        if(cookie.load('commentsCookie')){
            document.getElementById('commentsField').value = cookie.load('commentsCookie');
        }
        
    }
    
    _saveComments(event){
        cookie.save('commentsCookie', event.currentTarget.value, { path: '/' , maxAge: 350  });
    }
    
    render(){
        return(

           <div className="en__field en__field--textarea en__field--8605 en__field--comments">
                <label className="en__field__label en__field__label--positionabove">Donor Comments:</label>
                <div className="en__field__element en__field__element--textarea">
                    <textarea onChange={this._saveComments.bind(this)} onKeyDown={this._saveComments.bind(this)} id="commentsField" className="en__field__input en__field__input--textarea" name="transaction.comments"></textarea>
                </div>
            </div>
                
        );
    }
}

export default Comments;
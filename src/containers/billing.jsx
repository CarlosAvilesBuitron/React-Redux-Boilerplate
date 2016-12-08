import React from 'react';
import {connect} from 'react-redux';
import cookie from 'react-cookie';

class Billing extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
           nameError : { display : "none" }
        };
        
    }
    
    
    
    componentDidMount(){
        document.getElementById('optedInChoice').click();
        
        if(cookie.load('firstNameCookie')){
            document.getElementById('firstNameField').value = cookie.load('firstNameCookie');
        }
        
        if(cookie.load('lastNameCookie')){
            document.getElementById('lastNameField').value = cookie.load('lastNameCookie');
        }
        
        if(cookie.load('address1Cookie')){
            document.getElementById('address1Field').value = cookie.load('address1Cookie');
        }
        
        if(cookie.load('address2Cookie')){
            document.getElementById('address2Field').value = cookie.load('address2Cookie');
        }
        
        if(cookie.load('cityCookie')){
            document.getElementById('cityField').value = cookie.load('cityCookie');
        }
        
        if(cookie.load('stateCookie')){
            document.getElementById('stateField').value = cookie.load('stateCookie');
        }
        
        if(cookie.load('zipCookie')){
            document.getElementById('zipField').value = cookie.load('zipCookie');
        }
        
        if(cookie.load('countryCookie')){
            document.getElementById('countryField').value = cookie.load('countryCookie');
        }
        
        if(cookie.load('emailCookie')){
            document.getElementById('emailField').value = cookie.load('emailCookie');
        }
        
        
    }
    
    optIn(event){
        if(event.currentTarget.checked){
            this.props.optInValue('Y');
            
        } else {
            this.props.optInValue('N');
            
        }
    }
    
    _saveFirstName(event){
        if(event.currentTarget.value.match(/[!^&=]+/g)){
            this.setState({
                nameError : { display : "block" }
            });
        } else {
            this.setState({
                nameError : { display : "none" }
            });
        }
        cookie.save('firstNameCookie', event.currentTarget.value, { path: '/' , maxAge: 1600  });
    }
    
    _saveLastName(event){
        if(event.currentTarget.value.match(/[!^&=]+/g)){
            this.setState({
                nameError : { display : "block" }
            });
        } else {
            this.setState({
                nameError : { display : "none" }
            });
        }
        cookie.save('lastNameCookie', event.currentTarget.value, { path: '/' , maxAge: 1600  });
    }
    
    _saveAddress1(event){
        cookie.save('address1Cookie', event.currentTarget.value, { path: '/' , maxAge: 1600  });
    }
    
    _saveAddress2(event){
        cookie.save('address2Cookie', event.currentTarget.value, { path: '/' , maxAge: 1600  });
    }
    
    _saveCity(event){
        cookie.save('cityCookie', event.currentTarget.value, { path: '/' , maxAge: 1600  });
    }
    
    _saveState(event){
        cookie.save('stateCookie', event.currentTarget.value, { path: '/' , maxAge: 1600  });
    }
    
    _saveZip(event){
        cookie.save('zipCookie', event.currentTarget.value, { path: '/' , maxAge: 1600  });
    }
    
    _saveCountry(event){
        cookie.save('countryCookie', event.currentTarget.value, { path: '/' , maxAge: 1600  });
    }
    
    _saveEmail(event){
        cookie.save('emailCookie', event.currentTarget.value, { path: '/' , maxAge: 1600  });
    }
    
    
    render(){
        return(
            <div className="en__component en__component--formblock"  >
                                    
                    <div className="en__field en__field--text en__field--6091 en__field--firstName">
                        <span className="eamandaToryfIeldmarker">*</span>
                        <label className="en__field__label en__field__label--positionabove"  >First Name:</label>
                        <div className="en__field__element en__field__element--text">
                            <input type="text" onChange={this._saveFirstName.bind(this)} onKeyDown={this._saveFirstName.bind(this)} id="firstNameField" className="en__field__input en__field__input--text" name="supporter.firstName" />
                            <label className="en__field__label name-error" style={this.state.nameError}>You cannot use the symbols & or = in name fields.</label>
                        </div>
                    </div>
                    
                    <div className="en__field en__field--text en__field--6092 en__field--lastName">
                        <span className="eamandaToryfIeldmarker">*</span>
                        <label className="en__field__label en__field__label--positionabove"  >Last Name:</label>
                        <div className="en__field__element en__field__element--text">
                            <input type="text" onChange={this._saveLastName.bind(this)} onKeyDown={this._saveLastName.bind(this)} id="lastNameField" className="en__field__input en__field__input--text" name="supporter.lastName" />
                            <label className="en__field__label name-error" style={this.state.nameError}>You cannot use the symbols & or = in name fields.</label>
                        </div>
                    </div>
                    
                    <div className="en__field en__field--text en__field--8549 en__field--address1">
                        <span className="eamandaToryfIeldmarker">*</span>
                        <label className="en__field__label en__field__label--positionabove"  >Address 1:</label>
                        <div className="en__field__element en__field__element--text">
                            <input type="text" onChange={this._saveAddress1.bind(this)} onKeyDown={this._saveAddress1.bind(this)} id="address1Field" className="en__field__input en__field__input--text" name="supporter.address1" />
                        </div>
                    </div>
                    
                    <div className="en__field en__field--text en__field--8583 en__field--address2">
                        <label className="en__field__label en__field__label--positionabove"  >Address 2:</label>
                        <div className="en__field__element en__field__element--text">
                            <input type="text" onChange={this._saveAddress2.bind(this)} onKeyDown={this._saveAddress2.bind(this)} id="address2Field" className="en__field__input en__field__input--text" name="supporter.address2" />
                        </div>
                    </div>
                    
                    <div className="en__field en__field--text en__field--8552 en__field--city">
                        <span className="eamandaToryfIeldmarker">*</span>
                        <label className="en__field__label en__field__label--positionabove"  >City:</label>
                        <div className="en__field__element en__field__element--text">
                            <input type="text" onChange={this._saveCity.bind(this)} onKeyDown={this._saveCity.bind(this)} id="cityField" className="en__field__input en__field__input--text" name="supporter.city" />
                        </div>
                    </div>
                    
                    <div className="en__field en__field--select en__field--8551 en__field--region">
                        <span className="eamandaToryfIeldmarker">*</span>
                        <label className="en__field__label en__field__label--positionabove"  >State:</label>
                        <div className="en__field__element en__field__element--select">
                            <select className="en__field__input en__field__input--select" onChange={this._saveState.bind(this)} id="stateField"  name="supporter.region">
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AS">American Samoa</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                                <option value="Ontario">Ontario</option>
                                <option value="Quebec">Quebec</option>
                                <option value="Nova Scotia">Nova Scotia</option>
                                <option value="New Brunswick">New Brunswick</option>
                                <option value="Manitoba">Manitoba</option>
                                <option value="British Colombia">British Colombia</option>
                                <option value="Prince Edward Island">Prince Edward Island</option>
                                <option value="Saskatchewan">Saskatchewan</option>
                                <option value="Alberta">Alberta</option>
                                <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                                <option value="No State or Province">No State or Province</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="en__field en__field--text en__field--8550 en__field--postcode">
                        <span className="eamandaToryfIeldmarker">*</span>
                        <label className="en__field__label en__field__label--positionabove"  >ZIP/Postal Code: <em class="zipInfo">(U.S. Cards: Enter 5 digit zip code)</em></label>
                        <div className="en__field__element en__field__element--text">
                            <input type="text" onChange={this._saveZip.bind(this)} onKeyDown={this._saveZip.bind(this)} id="zipField" className="en__field__input en__field__input--text" name="supporter.postcode" />
                        </div>
                    </div>
                    
                    <div className="en__field en__field--select en__field--8584 en__field--country">
                        <span className="eamandaToryfIeldmarker">*</span>
                        <label className="en__field__label en__field__label--positionabove"  >Country:</label>
                        <div className="en__field__element en__field__element--select">
                            <select onChange={this._saveCountry.bind(this)} id="countryField" className="en__field__input en__field__input--select" name="supporter.country">
                                <option value="GB">United Kingdom</option>
                                <option selected="selected" value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="AF">Afghanistan</option>
                                <option value="AX">Åland Islands</option>
                                <option value="AL">Albania</option>
                                <option value="DZ">Algeria</option>
                                <option value="AS">American Samoa</option>
                                <option value="AD">Andorra</option>
                                <option value="AO">Angola</option>
                                <option value="AI">Anguilla</option>
                                <option value="AQ">Antarctica</option>
                                <option value="AG">Antigua and Barbuda</option>
                                <option value="AR">Argentina</option>
                                <option value="AM">Armenia</option>
                                <option value="AW">Aruba</option>
                                <option value="AU">Australia</option>
                                <option value="AT">Austria</option>
                                <option value="AZ">Azerbaijan</option>
                                <option value="BS">Bahamas</option>
                                <option value="BH">Bahrain</option>
                                <option value="BD">Bangladesh</option>
                                <option value="BB">Barbados</option>
                                <option value="BY">Belarus</option>
                                <option value="BE">Belgium</option>
                                <option value="BZ">Belize</option>
                                <option value="BJ">Benin</option>
                                <option value="BM">Bermuda</option>
                                <option value="BT">Bhutan</option>
                                <option value="BO">Bolivia, Plurinational State of</option>
                                <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                <option value="BA">Bosnia and Herzegovina</option>
                                <option value="BW">Botswana</option>
                                <option value="BV">Bouvet Island</option>
                                <option value="BR">Brazil</option>
                                <option value="IO">British Indian Ocean Territory</option>
                                <option value="BN">Brunei Darussalam</option>
                                <option value="BG">Bulgaria</option>
                                <option value="BF">Burkina Faso</option>
                                <option value="BI">Burundi</option>
                                <option value="CV">Cabo Verde</option>
                                <option value="KH">Cambodia</option>
                                <option value="CM">Cameroon</option>
                                <option value="KY">Cayman Islands</option>
                                <option value="CF">Central African Republic</option>
                                <option value="TD">Chad</option>
                                <option value="CL">Chile</option>
                                <option value="CN">China</option>
                                <option value="CX">Christmas Island</option>
                                <option value="CC">Cocos (Keeling) Islands</option>
                                <option value="CO">Colombia</option>
                                <option value="KM">Comoros</option>
                                <option value="CG">Congo</option>
                                <option value="CD">Congo, the Democratic Republic of the</option>
                                <option value="CK">Cook Islands</option>
                                <option value="CR">Costa Rica</option>
                                <option value="CI">Côte d&#39;Ivoire</option>
                                <option value="HR">Croatia</option>
                                <option value="CU">Cuba</option>
                                <option value="CW">Curaçao</option>
                                <option value="CY">Cyprus</option>
                                <option value="CZ">Czech Republic</option>
                                <option value="DK">Denmark</option>
                                <option value="DJ">Djibouti</option>
                                <option value="DM">Dominica</option>
                                <option value="DO">Dominican Republic</option>
                                <option value="EC">Ecuador</option>
                                <option value="EG">Egypt</option>
                                <option value="SV">El Salvador</option>
                                <option value="GQ">Equatorial Guinea</option>
                                <option value="ER">Eritrea</option>
                                <option value="EE">Estonia</option>
                                <option value="ET">Ethiopia</option>
                                <option value="FK">Falkland Islands (Malvinas)</option>
                                <option value="FO">Faroe Islands</option>
                                <option value="FJ">Fiji</option>
                                <option value="FI">Finland</option>
                                <option value="FR">France</option>
                                <option value="GF">French Guiana</option>
                                <option value="PF">French Polynesia</option>
                                <option value="TF">French Southern Territories</option>
                                <option value="GA">Gabon</option>
                                <option value="GM">Gambia</option>
                                <option value="GE">Georgia</option>
                                <option value="DE">Germany</option>
                                <option value="GH">Ghana</option>
                                <option value="GI">Gibraltar</option>
                                <option value="GR">Greece</option>
                                <option value="GL">Greenland</option>
                                <option value="GD">Grenada</option>
                                <option value="GP">Guadeloupe</option>
                                <option value="GU">Guam</option>
                                <option value="GT">Guatemala</option>
                                <option value="GG">Guernsey</option>
                                <option value="GN">Guinea</option>
                                <option value="GW">Guinea-Bissau</option>
                                <option value="GY">Guyana</option>
                                <option value="HT">Haiti</option>
                                <option value="HM">Heard Island and McDonald Islands</option>
                                <option value="VA">Holy See (Vatican City State)</option>
                                <option value="HN">Honduras</option>
                                <option value="HK">Hong Kong</option>
                                <option value="HU">Hungary</option>
                                <option value="IS">Iceland</option>
                                <option value="IN">India</option>
                                <option value="ID">Indonesia</option>
                                <option value="IR">Iran, Islamic Republic of</option>
                                <option value="IQ">Iraq</option>
                                <option value="IE">Ireland</option>
                                <option value="IM">Isle of Man</option>
                                <option value="IL">Israel</option>
                                <option value="IT">Italy</option>
                                <option value="JM">Jamaica</option>
                                <option value="JP">Japan</option>
                                <option value="JE">Jersey</option>
                                <option value="JO">Jordan</option>
                                <option value="KZ">Kazakhstan</option>
                                <option value="KE">Kenya</option>
                                <option value="KI">Kiribati</option>
                                <option value="KP">Korea, Democratic People&#39;s Republic of</option>
                                <option value="KR">Korea, Republic of</option>
                                <option value="KW">Kuwait</option>
                                <option value="KG">Kyrgyzstan</option>
                                <option value="LA">Lao People&#39;s Democratic Republic</option>
                                <option value="LV">Latvia</option>
                                <option value="LB">Lebanon</option>
                                <option value="LS">Lesotho</option>
                                <option value="LR">Liberia</option>
                                <option value="LY">Libya</option>
                                <option value="LI">Liechtenstein</option>
                                <option value="LT">Lithuania</option>
                                <option value="LU">Luxembourg</option>
                                <option value="MO">Macao</option>
                                <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                                <option value="MG">Madagascar</option>
                                <option value="MW">Malawi</option>
                                <option value="MY">Malaysia</option>
                                <option value="MV">Maldives</option>
                                <option value="ML">Mali</option>
                                <option value="MT">Malta</option>
                                <option value="MH">Marshall Islands</option>
                                <option value="MQ">Martinique</option>
                                <option value="MR">Mauritania</option>
                                <option value="MU">Mauritius</option>
                                <option value="YT">Mayotte</option>
                                <option value="MX">Mexico</option>
                                <option value="FM">Micronesia, Federated States of</option>
                                <option value="MD">Moldova, Republic of</option>
                                <option value="MC">Monaco</option>
                                <option value="MN">Mongolia</option>
                                <option value="ME">Montenegro</option>
                                <option value="MS">Montserrat</option>
                                <option value="MA">Morocco</option>
                                <option value="MZ">Mozambique</option>
                                <option value="MM">Myanmar</option>
                                <option value="NA">Namibia</option>
                                <option value="NR">Nauru</option>
                                <option value="NP">Nepal</option>
                                <option value="NL">Netherlands</option>
                                <option value="NC">New Caledonia</option>
                                <option value="NZ">New Zealand</option>
                                <option value="NI">Nicaragua</option>
                                <option value="NE">Niger</option>
                                <option value="NG">Nigeria</option>
                                <option value="NU">Niue</option>
                                <option value="NF">Norfolk Island</option>
                                <option value="MP">Northern Mariana Islands</option>
                                <option value="NO">Norway</option>
                                <option value="OM">Oman</option>
                                <option value="PK">Pakistan</option>
                                <option value="PW">Palau</option>
                                <option value="PS">Palestine, State of</option>
                                <option value="PA">Panama</option>
                                <option value="PG">Papua New Guinea</option>
                                <option value="PY">Paraguay</option>
                                <option value="PE">Peru</option>
                                <option value="PH">Philippines</option>
                                <option value="PN">Pitcairn</option>
                                <option value="PL">Poland</option>
                                <option value="PT">Portugal</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="QA">Qatar</option>
                                <option value="RE">Réunion</option>
                                <option value="RO">Romania</option>
                                <option value="RU">Russian Federation</option>
                                <option value="RW">Rwanda</option>
                                <option value="BL">Saint Barthélemy</option>
                                <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                                <option value="KN">Saint Kitts and Nevis</option>
                                <option value="LC">Saint Lucia</option>
                                <option value="MF">Saint Martin (French part)</option>
                                <option value="PM">Saint Pierre and Miquelon</option>
                                <option value="VC">Saint Vincent and the Grenadines</option>
                                <option value="WS">Samoa</option>
                                <option value="SM">San Marino</option>
                                <option value="ST">Sao Tome and Principe</option>
                                <option value="SA">Saudi Arabia</option>
                                <option value="SN">Senegal</option>
                                <option value="RS">Serbia</option>
                                <option value="SC">Seychelles</option>
                                <option value="SL">Sierra Leone</option>
                                <option value="SG">Singapore</option>
                                <option value="SX">Sint Maarten (Dutch part)</option>
                                <option value="SK">Slovakia</option>
                                <option value="SI">Slovenia</option>
                                <option value="SB">Solomon Islands</option>
                                <option value="SO">Somalia</option>
                                <option value="ZA">South Africa</option>
                                <option value="GS">South Georgia and the South Sandwich Islands</option>
                                <option value="SS">South Sudan</option>
                                <option value="ES">Spain</option>
                                <option value="LK">Sri Lanka</option>
                                <option value="SD">Sudan</option>
                                <option value="SR">Suriname</option>
                                <option value="SJ">Svalbard and Jan Mayen</option>
                                <option value="SZ">Swaziland</option>
                                <option value="SE">Sweden</option>
                                <option value="CH">Switzerland</option>
                                <option value="SY">Syrian Arab Republic</option>
                                <option value="TW">Taiwan, Province of China</option>
                                <option value="TJ">Tajikistan</option>
                                <option value="TZ">Tanzania, United Republic of</option>
                                <option value="TH">Thailand</option>
                                <option value="TL">Timor-Leste</option>
                                <option value="TG">Togo</option>
                                <option value="TK">Tokelau</option>
                                <option value="TO">Tonga</option>
                                <option value="TT">Trinidad and Tobago</option>
                                <option value="TN">Tunisia</option>
                                <option value="TR">Turkey</option>
                                <option value="TM">Turkmenistan</option>
                                <option value="TC">Turks and Caicos Islands</option>
                                <option value="TV">Tuvalu</option>
                                <option value="UG">Uganda</option>
                                <option value="UA">Ukraine</option>
                                <option value="AE">United Arab Emirates</option>
                                <option value="UM">United States Minor Outlying Islands</option>
                                <option value="UY">Uruguay</option>
                                <option value="UZ">Uzbekistan</option>
                                <option value="VU">Vanuatu</option>
                                <option value="VE">Venezuela, Bolivarian Republic of</option>
                                <option value="VN">Viet Nam</option>
                                <option value="VG">Virgin Islands, British</option>
                                <option value="VI">Virgin Islands, U.S.</option>
                                <option value="WF">Wallis and Futuna</option>
                                <option value="EH">Western Sahara</option>
                                <option value="YE">Yemen</option>
                                <option value="ZM">Zambia</option>
                                <option value="ZW">Zimbabwe</option>
                              </select>
                        </div>
                    </div>
                    
                    <div className="en__field en__field--text en__field--8553 en__field--emailAddress">
                        <span className="eamandaToryfIeldmarker">*</span>
                        <label className="en__field__label en__field__label--positionabove"  >Email Address:</label>
                        <div className="en__field__element en__field__element--text">
                            <input type="text" onChange={this._saveEmail.bind(this)} onKeyDown={this._saveEmail.bind(this)} id="emailField" className="en__field__input en__field__input--text" name="supporter.emailAddress" />
                        </div>
                    </div>
                    
                    <div className="en__field en__field--checkbox en__field--question en__field--5878 en__field--opt-in">
                        <label className="en__field__label en__field__label--positionabove"  >Opt-In</label>
                        <div className="en__field__element en__field__element--checkbox">
                            <div className="en__field__item">
                                <input  type="checkbox" onChange={this.optIn.bind(this)} className="en__field__input en__field__input--checkbox" name="supporter.questions.5878" id="optedInChoice" />
                                <label className="en__field__label en__field__label--item" id="inputOptIn" >Yes, I would like to receive communications from St. Labre.</label>
                                <input type="hidden" name="supporter.questions.5878.checkbox" value={this.props.optInChoice} />
                            </div>
                        </div>
                    </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        optInChoice : state.optIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        optInValue : (optInValue) => {
            dispatch(
                {
                    type: "optInUpdate",
                    payload : optInValue
                }
            );
        }
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Billing);
const initialState = {
    result : 4,
    sourceCode : 'GWEBWEB',
    campaignID : 'GWEB',
    premium: 'NONE',
    giftArray : ['NONE', 'SCREEN', 'WHTBLK'],
    donationArray : [25, 50, 75, 100, 150] ,
    cookieFlag : false,
    hiddenFlag : false,
    donationAmount : 0,
    premiumHidden: {display: 'none'},
    customAmountHidden : {display: 'none'},
    debugModeOff: true,
    noPremiumMessage: {display: 'block'},
    masterMin : 20,
    monthlyGiving : 'N',
    optIn : 'Y'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result : state.result + action.payload,
            };
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result : state.result - action.payload,
            };
            break;
        case "GIFTS":
            state = {
                ...state,
                giftArray : action.payload,
            };
            break;
        case "CHOSEN":
            state = {
                ...state,
                premium : action.payload,
            };
            break;
        case "DONATIONADD":
            state = {
                ...state,
                donationAmount : action.payload,
            };
            break;
        case "DONATIONBLANK":
            state = {
                ...state,
                donationAmount : action.payload,
            };
            break;
        case "SHOWCUSTOM":
            state = {
                ...state,
                customAmountHidden : action.payload
            };
            break;
        case "ARRAYPASSED":
            state = {
                ...state,
                donationArray : action.payload
            };
            break;
        case "PREMIUMHIDE":
            state = {
                ...state,
                premiumHidden : action.payload
            };
            break;
        case "NOPREMIUM":
            state = {
                ...state,
                noPremiumMessage : action.payload
            };
            break;
        case "UPDATESOURCE":
            state = {
                ...state,
                sourceCode : action.payload
            };
            break;
        case "UPDATECAMPAIGN":
            state = {
                ...state,
                campaignID : action.payload
            };
            break;
        case "minUpdate":
            state = {
                ...state,
                masterMin : action.payload
            };
            break;
        case "monthlyGivingUpdate":
            state = {
                ...state,
                monthlyGiving : action.payload
            };
            break;
        case "optInUpdate":
            state = {
                ...state,
                optIn : action.payload
            };
            break;
    }
    return state;
};

export default reducer;
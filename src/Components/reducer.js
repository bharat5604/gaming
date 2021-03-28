export const initialState = {
    signature:[
        {xsign:null, timestamp:null, xnonce:null}
    ],
    user:localStorage.getItem('name'),
    login:{},
    gameApi:"https://staging.slotegrator.com/api/index.php/v1/games/init-demo",
    cashfree:{appId:null, customerEmail:null, customerName:null, customerPhone:null,orderAmount:null, orderId:null, returnUrl:null, redirectUrl:null, signature:null}
};

function reducer(state, action){
    switch(action.type){
        case 'GET_SIGN':
            // logic for getting sign
            return {state}
        default:
            return state;
    }
}

export default reducer;
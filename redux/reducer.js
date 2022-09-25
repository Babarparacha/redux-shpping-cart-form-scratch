import * as types from './actionType'
const intialState={
    users:[],
    user:{},
    loading:true,
}
const userReducers=(state=intialState,action)=>{
    switch(action.type){
        case  types.GET_USERS:
            return{
                ...state,
                users:action.payload,
                loading:false,
            }
default:
    return state;
    }
};

export default userReducers

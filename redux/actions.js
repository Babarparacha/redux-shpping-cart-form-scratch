import * as types from './actionType'
import axios from 'axios'

const getUser=(users)=>({
 type:types.GET_USERS,
 palyload:users,
})
const loadUsers=()=>{
return function(dispatch){
    axios.get(`${process.env.REACT_APP_API}`).then((resp)=>{
        console.log('we get data successfully',resp);
        dispatch(getUser(resp.data))
    }).catch((err)=>{
        console.log('error ocurrs',err)
    })
}
}
export default loadUsers;
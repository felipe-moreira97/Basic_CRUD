import * as type from './types'

function reducer(state,action) {
    switch(action.type) {
        case type.GET_USERS_SUCCESS:{            
            return {...state,users:action.payload}
        }
        case type.UPDATE_USERS_SUCCESS:{
            return {...state,users:action.payload}
        }
        case type.CREATE_USER:{
            return{...state,users:action.payload}
        }
        case type.DELETE_USER:{
            return{...state,users:action.payload}
        }
        default:{
            return {...state}
        }
    }
}
export default reducer
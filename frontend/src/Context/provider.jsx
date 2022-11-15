import globalContext from "./globalContext"
import data from './data'
import { useReducer } from "react"
import reducer from "./reducer"

function Provider({children}) {
    const [state,dispatch] = useReducer(reducer,data)
    return (
        <globalContext.Provider value={{state,dispatch}}>{children}</globalContext.Provider>
    )
}

export default Provider
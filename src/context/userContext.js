import React,{createContext, useReducer, useEffect} from "react";
// Create a context to hold the user state
export const userContext = createContext();
// Initial user state
const user =  null;
// Reducer function to handle state changes
const reducer = (state, action) => {
    switch(action.type){
        case "LOGIN":
            return action.payload;
        case "LOGOUT":
            return null;
        default:
            return state.user;
    }
}
// UserProvider component to provide the user state to its children
export function UserProvider({children}){
    const [state, dispatch] = useReducer(reducer, user);
      // Check if a token exists in local storage on component mount
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(!token){
                  // If no token exists, log the user out
            dispatch({type:"LOGOUT"})
        }else{
                  // If a token exists, log the user in with the token and userEmail
            dispatch({type:"LOGIN", payload: token});
        }
    }, [])
    return(
        <userContext.Provider value={{state, dispatch}}>
            {children}
            </userContext.Provider>
    )
}
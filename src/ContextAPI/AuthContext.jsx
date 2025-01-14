/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react'

export const AuthContextResponse= createContext();
function AuthContext({children}) {

  const [isAuthorized,setIsAuthorized]=useState(false);
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
        setIsAuthorized(true);
    }
    else{
        setIsAuthorized(false);
    }
  },[isAuthorized])
  return (
        <AuthContextResponse.Provider value={{isAuthorized,setIsAuthorized}}>
            {children}
        </AuthContextResponse.Provider>
  )
}

export default AuthContext
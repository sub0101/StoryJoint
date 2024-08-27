export const setAuth= ( token) =>{

    if(!token) return 
    setLocalStorrage(token)
}

export const setLocalStorrage = (token) =>{

    if(token) {
      return   localStorage.setItem('accessToken'  ,token)
    }
  
}

export const getFromLocalStorage = (key) =>{

    if(!key) return null
    const st = localStorage.getItem('accessToken')
   return st;
}


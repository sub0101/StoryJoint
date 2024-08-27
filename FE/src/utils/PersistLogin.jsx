import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Spinner from "../Components/Shared/Spinner";
import refresh from "../react-query/hooks/refreshToken";
import { isLoggedin } from "../services/auth.service";
     const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('PersistLogin')
        
        let isMounted = true;   

        const verifyRefreshToken = async () => {
            try {
                console.log("refresh")
                await refresh();

            }
            catch (err) {
                console.error(err);
            
            }
            finally {
                isMounted && setIsLoading(false);
            }
        }
        !isLoggedin ? verifyRefreshToken() : setIsLoading(false)
       
    }, [isLoading])

  

    return (    
        <>
        {isLoggedin
                ? <Outlet />
                :!isLoading?<Outlet />
                    : <Spinner />
                    
            }
        </>
    )
}

export default PersistLogin
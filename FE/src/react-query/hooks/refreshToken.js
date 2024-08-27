

import { refreshToken } from '../api/auth';

import { setAuth } from '../../utils/lcoalstorage';


    const refresh = async () => {

        try {
           const response = await refreshToken()
            

                  setAuth( response.data.data.accessToken)
            console.log(response.data.data.accessToken)

            return response.data.accessToken;
        }

        catch (e) {

console.log("refresh again")
        }
    }
export default refresh

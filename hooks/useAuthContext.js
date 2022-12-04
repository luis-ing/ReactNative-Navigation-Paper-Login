import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuthContext = () => {
    const { Auth, handleAuth } = useContext(AuthContext);
    // console.log(Auth, handleAuth);
    return useContext(AuthContext);
}

export default useAuthContext;
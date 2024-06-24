import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { Navigate} from "react-router-dom";

 

const PrivateRoute = ({Children}) => {

    const {user,loading} = useContext(AuthContext); 
 

    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }

    if(user?.email){
        return Children;
    }


    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;
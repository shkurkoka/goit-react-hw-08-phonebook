import { useSelector } from "react-redux";

import { getUserAuthentecation, getUserData } from "redux/auth/authReducer";
import "../phoneBook/phonebook.css";

const Home = () => {
    const isAuth = useSelector(getUserAuthentecation);
    const userData = useSelector(getUserData);
    
    return (
        <div className="">
            {
                isAuth ? <h1 className="header">Hello, {userData.name}</h1>
                : <h1 className="header">Hello, unknown user</h1>
            }
        </div>
    );
}
export default Home;
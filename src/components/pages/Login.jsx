import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "redux/auth/operations";
import { getUserError } from "redux/auth/authReducer";
import "../phoneBook/phonebook.css";

const Login = () => {
    const dispatch = useDispatch();
    let error = useSelector(getUserError);

    if (error === "Unable to fetch user") {
        error = null;
    }

    if (error === "Request failed with status code 400") {
        error = "Wrong email or password";
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const email = form.elements.email.value;
        const password = form.elements.password.value;

        const formData = {
            email,
            password,
        }
        
        dispatch(loginUser(formData));
    }

    return (
        <div className="">
            <h2 className="header">LoginPage</h2>
            <form onSubmit={handleSubmit} action="" className="form">
                <label htmlFor="email" className="label"><span>Email</span>
                    <input type="email" name="email" placeholder="Enter your mail"/>
                </label>
                <label htmlFor="password" className="label"><span>Password</span>
                    <input type="password" name="password" placeholder="Enter your password [min = 7]" minLength={7}/>
                </label>
                <button type="submit" className="submit-auth">Login</button>
            </form>
            <span>{error}</span>
        </div>
    );
}
export default Login;
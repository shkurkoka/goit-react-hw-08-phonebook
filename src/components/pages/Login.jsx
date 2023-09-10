import { useDispatch } from "react-redux";
import { loginUser } from "redux/auth/operations";
import "../phoneBook/phonebook.css";

const Login = () => {
    const dispatch = useDispatch();
    
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
            <h2>LoginPage</h2>
            <form onSubmit={handleSubmit} action="" className="form">
                <label htmlFor="email">Mail
                    <input type="email" name="email" placeholder="Enter your mail"/>
                </label>
                <label htmlFor="password">Password
                    <input type="password" name="password" placeholder="Enter your password" minLength={7}/>
                </label>
                <button type="submit" className="submit">Login</button>
            </form>
        </div>
    );
}
export default Login;
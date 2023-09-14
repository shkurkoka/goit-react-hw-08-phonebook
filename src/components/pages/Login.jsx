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
                <label htmlFor="email" className="label"><span>Mail</span>
                    <input type="email" name="email" placeholder="Enter your mail"/>
                </label>
                <label htmlFor="password" className="label"><span>Password</span>
                    <input type="password" name="password" placeholder="Enter your password" minLength={7}/>
                </label>
                <button type="submit" className="submit-auth-form">Login</button>
            </form>
        </div>
    );
}
export default Login;
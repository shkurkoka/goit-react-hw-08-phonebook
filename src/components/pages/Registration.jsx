import { useDispatch } from "react-redux";
import "../phoneBook/phonebook.css";
import { registerUser } from "redux/auth/operations";

const Register = () => {
    const dispatch = useDispatch();
    
    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const password = form.elements.password.value;

        const formData = {
            name,
            email,
            password,
        }
        
        dispatch(registerUser(formData));
    }

    return (
        <div className="">
            <h2>RegisterPage</h2>
            <form onSubmit={handleSubmit} action="" className="form">
                <label htmlFor="name" className="label"><span>Name</span>
                    <input type="name" name="name" placeholder="Enter your name"/>
                </label>
                <label htmlFor="email" className="label"><span>Mail</span>
                    <input type="email" name="email" placeholder="Enter your mail"/>
                </label>
                <label htmlFor="password" className="label"><span>Password</span>
                    <input type="password" name="password" placeholder="Enter your password" minLength={7}/>
                </label>
                <button type="submit" className="submit">Register</button>
            </form>
        </div>
    );
}
export default Register;
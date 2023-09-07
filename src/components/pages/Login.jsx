import "../phoneBook/phonebook.css";

const Login = () => {
    return (
        <div className="">
            <h2>Login</h2>
            <form action="" className="form">
                <label htmlFor="mail">Mail</label>
                <input type="text" name="mail"/>

                <label htmlFor="password">Password</label>
                <input type="text" name="password" />
                <button type="submit" className="submit">Login</button>
            </form>
        </div>
    );
}
export default Login;
import "../phoneBook/phonebook.css";

const Register = () => {
    
    return (
        <div className="">
            <h2>Register</h2>
            <form action="" className="form">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />

                <label htmlFor="mail">Mail</label>
                <input type="text" name="mail"/>

                <label htmlFor="password">Password</label>
                <input type="text" name="password" />
                <button type="submit" className="submit">Register</button>
            </form>
        </div>
    );
}
export default Register;
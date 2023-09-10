import { Link } from "react-router-dom";
import "../phoneBook/phonebook.css";

const NotFound = () => {
    return (
        <div className="">
            Erorr 404. Sorry, page wasn't found.
            <Link to="/register">Back to the Register page.</Link>
        </div>
    );
}
export default NotFound;
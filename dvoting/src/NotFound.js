import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <img src="path_to_your_image.png" alt="Page not found" className="not-found-image" />

            <p>This page cannot be found</p>
            <Link to="/">Back to homepage</Link>
        </div>
     );
}
 
export default NotFound;
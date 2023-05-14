import { Link } from 'react-router-dom'
const  Navbar= () => {
    return ( 
        <nav className="navbar">
            <h1>The Blog</h1>
            <div className="links">
                {/* normal links doesnt make use of react router instead they send request to server for every click so thats why we use router links */}
                {/* <a href="/">Home</a>
                <a href="/create">New Blog</a> */}

                {/* if we will inspect it in a browser then it will show a anchor tag */}
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar ;
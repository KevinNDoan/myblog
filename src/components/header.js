import * as React from "react"
import { Link } from "gatsby"
import Moment from 'react-moment';

const Header = () => {
    return (
        <div className="mt-4">
            <div>
                <h1 className="main-heading text-center mb-2">
                    <Link to="/">Choose to be Extraordinary</Link>
                </h1>
                <div className="d-flex flex-row align-items-baseline">
                    <small className="col"><Moment format="dddd, MMMM DD, YYYY" interval={30000}></Moment></small>
                    <small className="col text-center">Kevin N. Doan's Blog</small>
                    <small className="col text-end">
                        
                    </small>
                </div>
            </div>
            <div className="row border-top border-bottom text-center mt-1" style={{fontSize: "14px"}}>
                <Link className="p-1 col text-decoration-none text-dark" to="/" itemProp="url">
                    <small>Home</small>
                </Link>
                <Link className="p-1 col text-decoration-none text-dark" to="/business" itemProp="url">
                    <small>Business</small>
                </Link>
                <Link className="p-1 col text-decoration-none text-dark" to="/books" itemProp="url">
                    <small>Books</small>
                </Link>
                <Link className="p-1 col text-decoration-none text-dark" to="/tech" itemProp="url">
                    <small>Tech</small>
                </Link> 
                <Link className="p-1 col text-decoration-none text-dark" to="/projects" itemProp="url">
                    <small>Projects</small>
                </Link>
                <Link className="p-1 col text-decoration-none text-dark" to="/photography" itemProp="url">
                    <small>Photography</small>
                </Link>
                <Link className="p-1 col text-decoration-none text-dark" to="/contact" itemProp="url">
                    <small>Contact</small>
                </Link>
                <Link className="p-1 col text-decoration-none text-dark" to="/about" itemProp="url">
                    <small>About</small>
                </Link>
            </div>
            <br />
        </div >
    )
}

export default Header

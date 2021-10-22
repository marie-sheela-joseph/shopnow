import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {
    let resultJsx = <div className="d-flex justify-content-between header space">
        <Link to="/"><h1 className="text-upper">shop now</h1></Link>
    </div>

    return <div className="container">{resultJsx}</div>
}
export default Header
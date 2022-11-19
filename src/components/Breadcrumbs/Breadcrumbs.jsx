import { Link } from "react-router-dom"
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function Breadcrumbs({ name }) {
    return (
        <Breadcrumb>
            <Breadcrumb.Item>
                <Link to={"/"}><small>Home</small></Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active><small>{name}</small></Breadcrumb.Item>
        </Breadcrumb>



    )
}

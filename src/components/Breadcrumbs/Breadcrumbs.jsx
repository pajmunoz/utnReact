import { Link } from "react-router-dom"
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function Breadcrumbs({ name }) {
    return (
        <Breadcrumb>
            <Breadcrumb.Item title='Home' linkAs={Link} linkProps={{ to: "/" }}>
               <small>Home</small>
            </Breadcrumb.Item>
            <Breadcrumb.Item active><small>{name}</small></Breadcrumb.Item>
        </Breadcrumb>



    )
}

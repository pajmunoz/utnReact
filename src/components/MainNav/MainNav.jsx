import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';


function MainNav() {
    const context = useContext(AuthContext)
    return (
        <Navbar bg="light" expand="lg" className="my-3">
            <Container>
                <Navbar.Brand>
                    <Link className="nav-link" to="/">Bienvenido a <br /> <span className="text-muted"> Mercado Libre Database</span></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        {
                            !context.login &&
                            <>
                                <Link className="nav-link" to="/login">Login</Link>
                                <Link className="nav-link" to="/registro">Registro</Link>
                            </>
                        }

                        {
                            context.login &&
                            <>
                                <Link className="nav-link" to="/profile">Perfil</Link>
                                <Link className="nav-link" onClick={context.handleLogout} to="/" >Salir</Link>
                            </>
                        }



                    </Nav>
                </Navbar.Collapse>
                {context.login &&
                    <>
                    <div>Hola {context.user.name}</div>
                    </>}
                    <p>user:pablojaramunoz@gmail.com
                        <br /> pass: Admin1234</p>
            </Container>
        </Navbar>

    )
}

export default MainNav

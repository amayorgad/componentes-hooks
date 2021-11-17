iimport Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Outlet } from "react-router";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Dashboard = () => {

    let {signOut} = useContext(AuthContext);


    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">MisionTic</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Mi Primer Componente</Nav.Link>
                        <Nav.Link as={Link} to="calculadora">Calculadora</Nav.Link>
                        <Nav.Link onClick={signOut}>Salir</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            
            <Outlet/>
        </>
    )
}

export default Dashboard;

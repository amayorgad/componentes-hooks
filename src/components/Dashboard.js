import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom'

const Dashboard = ({ autorizado }) => {

    const navigate = useNavigate();
    /*
    useEffect(()=>{
        if(!autorizado){
            navigate('/');
        }
    }, []);
    */

    return (
        <>
            {autorizado
                ?
                (
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home">MisionTic</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="/">Inicio</Nav.Link>
                                <Nav.Link href="#features">Mi Primer Componente</Nav.Link>
                                <Nav.Link href="#pricing">Calculadora</Nav.Link>
                                <Link to="/">Salir</Link>
                            </Nav>
                        </Container>
                    </Navbar>
                )
                :
                <Navigate to="/"/>  
            }

        </>
    )
}

export default Dashboard;

import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import logo from '../logo.svg';

const Login = ({hanleAuth}) => {

    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);

    const handleUser = (e)=>{
        setUser(e.target.value);
    }

    const handlePassword = (e)=>{
        setPassword(e.target.value);
    }

    const btnLogin = () => {
        hanleAuth(user, password);
    }

    return (
        <>
            <header className="App-header">
                <Card border="dark" style={{ width: '35rem' }}>
                    <Card.Header>
                        <img src={logo} className="App-logo"/>
                        <h2>Login</h2>
                    </Card.Header>
                    <Card.Body>
                        {/*------Usuario------*/}
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Usuario</InputGroup.Text>
                            <FormControl value={user} name="user" onChange={handleUser} aria-label="First name" />
                        </InputGroup>
                        {/*------Password------*/}
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Password</InputGroup.Text>
                            <FormControl value={password} name="password" onChange={handlePassword} type="password" aria-label="First name" />
                        </InputGroup>
                        {/*------Botón de iniciar sesión------*/}
                        <Button variant="dark" onClick={btnLogin}>Iniciar Sesión</Button>
                    </Card.Body>
                </Card>
            </header>
        </>
    )
}

export default Login

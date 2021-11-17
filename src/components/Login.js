import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { useContext, useState } from 'react'
import logo from '../logo.svg';
import AuthContext from '../context/AuthContext'


const Login = () => {
    //Usar el context
    const {handleAuth} = useContext(AuthContext);
    //Usar el hook useState para los estados del componente
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleUser = (e)=>{
        setUser(e.target.value);
    }

    const handlePassword = (e)=>{
        setPassword(e.target.value);
    }

    const handleLogin = ()=>{
        handleAuth(user, password);
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
                        <Button variant="dark" onClick={handleLogin}>Iniciar Sesión</Button>
                    </Card.Body>
                </Card>
            </header>
        </>
    )
}

export default Login

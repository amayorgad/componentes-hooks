import { useState } from 'react';
import Button from 'react-bootstrap/Button'

//Componente con hooks
export default function MiPrimerComponente(){

    const [estado, setEstado] = useState('Valor inicial');
    const [estado2, setestado2] = useState('Val. ini estado 2');

    const handlerClick = (e)=>{
        console.log(estado);
        setEstado('Nuevo valor');
        console.log(estado);
    }

    const handlerClick2 = ()=>{
        setestado2('Estado 2 seteado');
    }

    return(
        <div>
            <h1>Componente con Hooks</h1>
            <h2>Subtitulo del componente</h2>
            <Button variant="primary" onClick={handlerClick}>Click</Button>
            <Button variant="success" onClick={handlerClick2}>Click2</Button>
        </div>
    );
}

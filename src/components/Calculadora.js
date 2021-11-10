import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react';
import { Resultado } from './Resultado';

export const Calculadora = () => {
    //Crear estados
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState();

    //Punto de montaje
    useEffect(() => {
        console.log("Punto de montaje");
    }, []);

    useEffect(()=>{
        console.log("Cambió el segundo valor");
    }, [num2]);

    const handlerNum1 = (e) => {
        setNum1(e.target.value);
    }
    const handlerNum2 = (e) => {
        setNum2(e.target.value);
    }
    const handlerSubmit = (e)=>{
        e.preventDefault();
        let n1 = parseInt(num1);
        let n2 = parseInt(num2);
        setResult(n1+n2);
    }
    
    const handlerReset = ()=>{
        setResult();
        setNum1();
        setNum2();

    }

    return (
        <>
            <h2>Calculadora</h2>
            {/*Formulario calculadora*/}
            <Form onSubmit={handlerSubmit}>
                <Form.Group className="mb-3" controlId="formNumber1">
                    <Form.Label>Numero 1</Form.Label>
                    <Form.Control name="num1" 
                    type="number" 
                    placeholder="Ingrese un número" 
                    value={num1} onChange={handlerNum1} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formNumber2">
                    <Form.Label>Numero 2</Form.Label>
                    <Form.Control type="number" 
                    placeholder="Ingrese un número" 
                    name="num2" 
                    value={num2} onChange={handlerNum2}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sumar
                </Button>
            </Form>
            <br />
           <Resultado resultado={result} handlerReset={handlerReset}/>      
            <br />
        </>
    )
}

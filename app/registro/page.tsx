"use client"

import { GenericAlert } from '@/components/alerts/GenericAlert';
import { MainTab } from '@/components/tabs/MainTab';
import { signupUser } from '@/services/users';
import { useRouter } from 'next/navigation';
import { FormEvent, FormEventHandler, useReducer, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function page() {
  const router = useRouter();
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showAlert, setShowAlert] = useState(false);
  const handleSignupUser = async(e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
     console.log("HOLA", nombre, email, password);
     const user = await signupUser(nombre, email, password);

     /*
     Sacar una alerta diciendo "USUARIO REGISTRADO"
     1 - 2 sec => Enviar al login.
     2 - Modificar el BE para que tambien genere un token al registrar
     */
     // await localStorage.setItem("user", JSON.stringify(user));
     setShowAlert(true);
     setTimeout(()=>{
      router.push("/");
     }, 3000)
     
     console.log("USUARIO", user)
  }

  return (
    <>        
      <Form onSubmit={(e:FormEvent<HTMLFormElement>)=> handleSignupUser(e)}>
      <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control onChange={(e)=>setNombre(e.target.value)} type="name" placeholder="Introduzca su nombre" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Introduzca su correo" />
        <Form.Text className="text-muted">
          Nunca compartiremos su correo con nadie.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recuerdame" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
      <GenericAlert variant='success' text='Usuario registrado correctamente' show={showAlert}></GenericAlert>
    </Form>

    </>
    );

}

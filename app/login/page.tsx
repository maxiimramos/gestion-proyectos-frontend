"use client"

import { AuthContext } from '@/contexts/AuthContext';
import { loginUser } from '@/services/users';
import { useRouter } from 'next/navigation';
import { FormEvent, FormEventHandler, useContext, useReducer, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCookies } from 'next-client-cookies';

export default function Page() {

    // Recoger los datos introducidos en los inputs 
    // y hacer una peticion al servidor para logear al usuario
    // - 1 Obtener los campos introducidos por el usuarioç
  const cookies = useCookies();
  const router = useRouter();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { setUser } = useContext(AuthContext);

   const handleLoginUser = async(e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
     console.log("HOLA", email, password);
     const user = await loginUser(email, password);
     // Local storage es una variable (es un elemento del navegador que no es dinamico)

     // Persistir en el navegador los datos de sesion (usuario)
     // Esto tiene el problema de que no se puede usar de forma dinamica.
     // No es un estado => No es dinamico => No puedes usar para generar paginas dinamicas
     console.log("USER",user)
     localStorage.setItem("user", JSON.stringify(user));
     // Enviar a el context el usuario para tenerlo de manera dinamica
     // La parte dinamica => Nos sirve para generar dinamismo en los componentes de react
     // En memoria dinamica => Tu cierras la app y desaparece 

     cookies.set('authTokens', JSON.stringify(user))
     setUser(user);
     router.push("/dashboard");
     console.log("USUARIO", user)
  }
   
  return (
    <Form onSubmit={(e:FormEvent<HTMLFormElement>)=> handleLoginUser(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Introduzca su correo" />
        <Form.Text className="text-muted">
          No compartiremos su correo con nadie.
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
    </Form>
  );
}
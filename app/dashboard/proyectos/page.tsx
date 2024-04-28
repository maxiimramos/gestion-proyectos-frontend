"use client"

import React, { FormEvent, FormEventHandler, useContext, useEffect, useReducer, useState } from 'react'
import { crearProyectos, obtenerProyectos } from '@/services/proyectos';
import { useRouter } from 'next/navigation';
import Form from 'react-bootstrap/Form';
import ListaProyectos from '@/components/proyectos/ListaProyectos';
import { Button } from 'react-bootstrap';
import { CrearProyecto } from '@/components/modals/CrearProyecto';
import { AuthContext } from '@/contexts/AuthContext';

export default function Page() {
  const router = useRouter();
  const [proyectos, setProyectos] = useState([])
  const [nombre, setNombre] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const  {user} = useContext(AuthContext);


  const handleObtenerProyectos = async () => {
   
    if (user && user?.id !== null){
    const response = await obtenerProyectos(user.id)

    setProyectos(response.proyectos);
    }
  }
  useEffect(() => {
    
    handleObtenerProyectos()
    
  }, [user])


  return (
    <>

      <CrearProyecto handleObtenerProyectos={handleObtenerProyectos}></CrearProyecto>
      <ListaProyectos proyectos={proyectos} handleObtenerProyectos={handleObtenerProyectos}/>
    </>
  );
}
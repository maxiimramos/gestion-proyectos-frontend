"use client"

import React, { FormEvent, FormEventHandler, useContext, useEffect, useReducer, useState } from 'react'
import { crearProyectos, obtenerProyectos } from '@/services/proyectos';
import { useRouter } from 'next/navigation';
import Form from 'react-bootstrap/Form';
import ListaProyectos from '@/components/proyectos/ListaProyectos';
import { Button } from 'react-bootstrap';
import { CrearProyecto } from '@/components/modals/CrearProyecto';

export default function page() {
  const router = useRouter();
  const [proyectos, setProyectos] = useState([])
  const [nombre, setNombre] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const handleCrearProyectos = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("HOLA", nombre, descripcion);
    const proyecto = await crearProyectos(nombre, descripcion);
  }

  const handleObtenerProyectos = async () => {
    const response = await obtenerProyectos()
    debugger;
    setProyectos(response.proyectos);
  }
  useEffect(() => {
    handleObtenerProyectos()
  }, [])


  return (
    <>

      <CrearProyecto handleObtenerProyectos={handleObtenerProyectos}></CrearProyecto>
      <ListaProyectos proyectos={proyectos} handleObtenerProyectos={handleObtenerProyectos}/>
    </>
  );
}
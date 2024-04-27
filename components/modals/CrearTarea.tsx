import { crearProyectos } from '@/services/proyectos';
import { crearTarea } from '@/services/tareas';
import React from 'react'

import { useState } from 'react';
import { Dropdown, DropdownButton, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CrearTarea = ({handleObtenerProyectos, idProyecto}: {handleObtenerProyectos: () =>{}, idProyecto: number}) => {
    const [show, setShow] = useState(false);
    const [titulo, setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [estado, setEstado] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCrearProyecto = async() => {
        await crearTarea(titulo, descripcion, estado, idProyecto, "2024-12-12" )
        await handleObtenerProyectos();
        handleClose()
    }
    return (
        <>
            <Button onClick={() => handleShow()}>
                Nueva tarea
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control  onChange={(e)=>setTitulo(e.target.value)} type="name" placeholder="introduzca el nombre del proyecto" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDescription">
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control as="textarea" onChange={(e)=>setDescripcion(e.target.value)}  rows={3} placeholder="describa aquí su proyecto" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEstado">
                            <Form.Label>Estado</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e)=>setEstado(e.target.value)}>
                            <option>Open this select menu</option>
                            <option value="TO DO">TO DO</option>
                            <option value="IN PROGRESS">IN PROGRESS</option>
                            <option value="DONE">DONE</option>
                            </Form.Select>
                                                  
                     </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCrearProyecto}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}



export { CrearTarea };
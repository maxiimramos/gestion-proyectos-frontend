import { AuthContext } from '@/contexts/AuthContext';
import { crearProyectos } from '@/services/proyectos';
import React, { useContext } from 'react'

import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CrearProyecto = ({handleObtenerProyectos}: {handleObtenerProyectos: () =>{}}) => {
    const [show, setShow] = useState(false);
    const [titulo, setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {user} = useContext(AuthContext)
    const handleCrearProyecto = async() => {

        await crearProyectos(titulo, descripcion, user.id)
        await handleObtenerProyectos();
        handleClose()
    }
    return (
        <>
            <Button onClick={() => handleShow()}>
                Nuevo proyecto
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
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleCrearProyecto}>
                        Crear proyecto
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}



export { CrearProyecto };
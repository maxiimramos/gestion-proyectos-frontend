import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface ConfirmarProps {
    titulo: string,
    body: string,
    action: () => void,
    buttonText: string
}




function Confirmar({ titulo, body, action, buttonText }: ConfirmarProps) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleConfirmar = () => {
        action();
        setShow(false)
    }

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                {buttonText}
            </Button>

            <Modal show={show} onHide={handleClose} >
                <Container style={{backgroundColor:"var(--oscuro2)"}}>
                <Modal.Header closeButton>
                    <Modal.Title>{titulo}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{body}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="danger" onClick={handleConfirmar}>
                        Confirmar
                    </Button>
                </Modal.Footer>
                </Container>
            </Modal>
        </>
    );
}


export { Confirmar };
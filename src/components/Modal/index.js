import React from 'react';
import ReactDOM from 'react-dom';
import { Overlay, Container } from './styles';

export default function Modal({ children }) {
    return ReactDOM.createPortal(
        <Overlay>
            <Container>
                { children }
            </Container>
        </Overlay>,
        document.getElementById('modal-root')
    )
}
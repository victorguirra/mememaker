import React from 'react';
import { Overlay, Container } from './styles';

export default function Modal({ children }) {
    return(
        <Overlay>
            <Container>
                { children }
            </Container>
        </Overlay>
    )
}
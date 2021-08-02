import React from 'react';
import { Container } from './styles';

export default function Button({ onClick, children }) {
    return(
        <Container onClick={ onClick }>
            { children }
        </Container>
    )
}
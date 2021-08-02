import React from 'react';
import { Container } from './styles';

import { FiAlertCircle } from 'react-icons/fi';

export default function Toast({ message }) {
    return(
        <Container>
            <FiAlertCircle size={ 25 } color="#FFF" />
                
            <span>{ message }</span>
            
            <div className="progressBar"></div>
        </Container>
    )
}
import React, { useState } from 'react';
import FileSaver from 'file-saver'
import { Container, NewMemeButton } from './styles';

import { useMeme } from '../../contexts/memeContext';

import Card from '../../components/Card';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

export default function Result() {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const [ fileName, setFileName ] = useState('');

    const { generatedMeme } = useMeme();

    function handleDownload(event) {
        event.preventDefault();

        if(!fileName) {
            alert('O nome é obrigatório!');
            return;
        }

        FileSaver.saveAs(generatedMeme, fileName);
        setModalIsOpen(false);
    }

    return(
        <Container>
            <Card>
                <img src={ generatedMeme } alt="Generated Meme" />

                <NewMemeButton to="/">Gerar outro meme</NewMemeButton>
                <Button onClick={ () => setModalIsOpen(true) }>Fazer Download</Button>

                { modalIsOpen && (
                    <Modal>
                        <h2>Digite o nome do arquivo</h2>
                        
                        <form onSubmit={ handleDownload }>
                            <input
                                type="text"
                                onChange={ event => setFileName(event.target.value)}
                            />
                            <Button type="submit">Fazer download</Button>
                        </form>
                    </Modal>
                )}
            </Card>
        </Container>
    )
}
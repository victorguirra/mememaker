import React, { useState, useEffect } from 'react';
import FileSaver from 'file-saver'
import { Container, NewMemeButton } from './styles';

import { useMeme } from '../../contexts/memeContext';

import Card from '../../components/Card';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Toast from '../../components/Toast';

export default function Result() {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const [ fileName, setFileName ] = useState('');
    const [ toastData, setToastData ] = useState({
        isOpen: false,
        message: ''
    })

    const { generatedMeme } = useMeme();

    function handleDownload(event) {
        event.preventDefault();

        if(!fileName) {
            setToastData({
                isOpen: true,
                message: 'O Nome do arquivo é obrigatório!' 
            })
            return;
        }

        FileSaver.saveAs(generatedMeme, fileName);
        setModalIsOpen(false);
    }

    useEffect(() => {
        if(toastData.isOpen){
            setTimeout(() => {
                setToastData({ isOpen: false, message: ''});
            }, 3000);
        }
    }, [toastData])

    return(
        <Container>
            <Card>
                <img src={ generatedMeme } alt="Generated Meme" />

                <NewMemeButton to="/">Gerar outro meme</NewMemeButton>
                <Button onClick={ () => setModalIsOpen(true) }>Fazer Download</Button>

                { modalIsOpen && (
                    <Modal>
                        { toastData.isOpen && <Toast message={ toastData.message } /> }

                        <h2>Digite o nome do arquivo</h2>
                        
                        <form onSubmit={ handleDownload }>
                            <input
                                type="text"
                                onChange={ event => setFileName(event.target.value)}
                                placeholder="Nome do arquivo"
                            />
                            <Button type="submit">Fazer download</Button>
                        </form>
                    </Modal>
                )}
            </Card>
        </Container>
    )
}
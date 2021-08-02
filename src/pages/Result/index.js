import React from 'react';
import FileSaver from 'file-saver'
import { Container, NewMemeButton } from './styles';

import { useMeme } from '../../contexts/memeContext';

import Card from '../../components/Card';
import Button from '../../components/Button';

export default function Result() {
    const { generatedMeme } = useMeme();

    function handleDownload() {
        FileSaver.saveAs('https://i.imgflip.com/5ics9e.jpg', 'image.jpg');
    }

    return(
        <Container>
            <Card>
                {/* <img src={ generatedMeme } alt="Generated Meme" /> */}
                <img src="https://i.imgflip.com/5ics9e.jpg" alt="Generated Meme" />

                <NewMemeButton to="/">Gerar outro meme</NewMemeButton>
                <Button onClick={ handleDownload }>Fazer Download</Button>
            </Card>
        </Container>
    )
}
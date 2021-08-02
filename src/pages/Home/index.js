import React, { useState, useEffect } from 'react';
import {Wrapper, Templates, Form} from './styles.js';
import { useHistory } from 'react-router-dom';
import qs from 'qs';

import { useMeme } from '../../contexts/memeContext';

import Card from '../../components/Card';
import Button from '../../components/Button';

import logo from '../../images/logo.svg'

export default function Home(){
    const [templates, setTemplates] = useState([]);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [boxes, setBoxes] = useState([]);

    const history = useHistory();
    const { setGeneratedMeme } = useMeme();

    useEffect(() => {
        setGeneratedMeme('');

        (async () => {
            const resp = await fetch('https://api.imgflip.com/get_memes');
            const {data : {memes}} = await resp.json();
            setTemplates(memes);
        })();
    }, [setGeneratedMeme])

    const handleInputChange = (index) => (e) => {
        const newValues = boxes;
        newValues[index] = e.target.value;
        setBoxes(newValues);
    };

    function handleSelectTemplate(template){
        setSelectedTemplate(template);
        setBoxes([]);
    }

    async function handleSubmit(e){
        e.preventDefault();

        const params = qs.stringify({
            template_id: selectedTemplate.id,
            username: 'vikayel543',
            password: 'vikayel543',
            boxes: boxes.map(text => ({text}))
        });

        const resp = await fetch(`https://api.imgflip.com/caption_image?${params}`)
        const {data: {url}} = await resp.json();

        setGeneratedMeme(url);
        history.push('/result');
    }

    return(
        <Wrapper>
            <img src={logo} alt="Logo MemeMaker" />

            <Card>
                <h2>Selecione um template</h2>

                <Templates>
                    {templates.map((template) => (
                        <button 
                            key={template.id}
                            type="button"
                            onClick={() => handleSelectTemplate(template)}
                            className={template.id === selectedTemplate ?.id ? 'selected' : ''}
                        >
                            <img src={template.url} alt={template.name} />
                        </button>
                    ))}
                </Templates>

                {selectedTemplate && (
                    <>
                        <h2>Textos</h2>

                        <Form onSubmit={ handleSubmit }>
                            {(new Array(selectedTemplate.box_count)).fill('').map((_, index) => (
                                <input
                                key={String(Math.random())}
                                placeholder={`Texto #${index + 1}`}
                                onChange={handleInputChange(index)} 
                                />
                            ))}
                            <Button type="submit">MakeMyMeme</Button>
                        </Form>
                    </>
                )}
            </Card>
        </Wrapper>
    )
}
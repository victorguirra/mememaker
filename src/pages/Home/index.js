import React, {useState, useEffect} from 'react';

import logo from '../../images/logo.svg'

import {Wrapper, Card, Templates, Form, Button} from './styles.js';

export default function Home(){
    const [templates, setTemplates] = useState([]);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [boxes, setBoxes] = useState([]);

    useEffect(() => {
        (async () => {
            const resp = await fetch('https://api.imgflip.com/get_memes');
            const {data : {memes}} = await resp.json();
            setTemplates(memes);
        })();
    }, [])

    const handleInputChange = (index) => (e) => {
        const newValues = boxes;
        newValues[index] = e.target.value;
        setBoxes(newValues);
    };

    function handleSelectTemplate(template){
        setSelectedTemplate(template);
        setBoxes([]);
    }

    function handleSubmit(e){
        e.preventDefault();

        console.log(boxes)
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

                        <Form onSubmit={handleSubmit}>

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
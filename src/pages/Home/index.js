import React from 'react';

import logo from '../../images/logo.svg'

import {Wrapper, Card, Templates, Form, Button} from './styles.js';

export default function Home(){
    return(
        <Wrapper>

            <img src={logo} alt="Logo MemeMaker" />

            <Card>

                <h2>Selecione um template</h2>

                <Templates>

                    <button type="button">

                        <img src="" alt="Template 1" />

                    </button>

                    <button type="button">

                        <img src="" alt="Template 1" />

                    </button>

                    <button type="button">

                        <img src="" alt="Template 1" />

                    </button>

                    <button type="button">

                        <img src="" alt="Template 1" />

                    </button>

                </Templates>

                <h2>Textos</h2>

                <Form>

                    <input  placeholder="Texto #1"/>
                    <input  placeholder="Texto #1"/>
                    <input  placeholder="Texto #1"/>

                    <Button type="submit">MakeMyMeme</Button>

                </Form>

            </Card>

        </Wrapper>
    )
}
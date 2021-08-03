import styled, { keyframes } from 'styled-components';

const animate = keyframes`
    0% {
        transform:translateX(-300px);
    }
    
    100% {
        transform:translateX(0px);
    }
`;

const barTransition = keyframes`
    0% {
        width:100%;
    }
    
    100% {
        width:0%;
    }
`;

export const Container = styled.div`
    width:24rem;
    max-width:75%;
    height:3.6rem;
    
    padding:0 1rem;

    background-color:#FF1437;
    border-radius:.4rem;
    
    position:absolute;
    top:1rem;
    left:2rem;

    display:flex;
    align-items:center;

    animation:${ animate } .5s;
    
    span {
        color:#FFF;
        margin-left:.8rem;

        font-size:.9rem;
    }

    .progressBar {
        
        height:.3rem;
        
        background-color:#FFF;
        opacity:.7;

        position:absolute;
        bottom:0;
        left:0;

        animation: ${ barTransition } 3s linear 2;
    }
`;
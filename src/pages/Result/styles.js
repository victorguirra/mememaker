import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    height:100vh;
    
    display:flex;
    align-items:center;
    justify-content:center;

    img {
        margin-bottom:16px;
    }
`;

export const NewMemeButton = styled(Link)`
    width:100%;
    height:40px;
    
    color:#4395D8;

    text-decoration:none;
    margin-top:8px;

    display:flex;
    align-items:center;
    justify-content:center;
`;
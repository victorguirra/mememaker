import {createGlobalStyle} from 'styled-components';

 export default createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Oswald', sans-serif; 
    }

    body{
        background-color:#EEE;
    }

    button,
    input{
        outline:0;
    }

    button{
        cursor:pointer;
    }
 `;
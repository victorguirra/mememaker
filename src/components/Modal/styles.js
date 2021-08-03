import styled from 'styled-components';

export const Overlay = styled.div`
    width: 100%;
	height: 100%;

	background-color: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(5px);
	
    position: absolute;
	left: 0;
	top: 0;
	
    display: flex;
	align-items: center;
	justify-content: center;
`;

export const Container = styled.div`
    width: 90%;
	max-width: 450px;
	
    background: #FFF;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
	
    border-radius: 4px;
	padding: 24px;

    input{
        width:100%;
        height:40px;
        
        border-radius:8px;
        border:1px solid #DBDBDB;
        
        font-size:14px;
        margin-top:16px;

        padding:0 15px;
        margin-bottom:10px;
    }
`;
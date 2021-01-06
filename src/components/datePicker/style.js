import Styled from 'styled-components';
 
const Styledbox = Styled.div`
    direction: rtl;
    height:100%;
    display:flex;
    align-items:center;
    position:relative;
    height:200px;
    &::after , &::before {
            content: " ";
            display: block;
            width: 90%;
            height:3px;
            position: absolute;
            right: 5%;
            background: #D6D6D6;
        }
        &::before{
            top:30%;
        }
        &::after{
            top:70%;
            
        }

`;
 
export {Styledbox};
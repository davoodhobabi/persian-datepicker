import Styled from 'styled-components';
 
const StyledEntry = Styled.div`

        *{
            cursor: pointer !important;
        }
        

`;
const StyledBootmSheet = Styled.div`
        z-index: 10000;
        width: 100vw;
        height: 100vh;
        top: 0;
        right: 0;
        display: flex;
        align-items: flex-end;
        justify-content:center ;
        visibility:${props => props.isOpen ? "visible" : "hidden"};
        position: fixed;
        transition: all 0.2s;
    & > div{
        position:absolute;
        width:100vw;
        height:100vh;
        top:0;
        right:0;
        z-index:999;
        background:${props => props.isOpen ? "rgba(0, 0, 0, 0.45)" : "transparent"};
        transition: all 0.1s;
        transition-delay:${props => props.isOpen ? "0" : "0.1s"};
    }
    & > section{
        width: 100vw;
        height: max-content;
        max-width: 700px;
        background: #F1EFF6;
        border-radius: 10px;
        z-index:1000;
        transition: all 0.3s;
        transition-delay:${props => props.isOpen ? "0.1s" : "0s"};
        margin-bottom:${props => props.isOpen ? "-3%" : "-160vh"};
        padding-bottom:10%;
        padding-top:10%;
    }
    
    @media only screen and (min-width: 768px) {
        align-items:center;
        & > section{
            margin-bottom:${props => props.isOpen ? "unset" : "-160vh"};
            padding-bottom: 5%;
            padding-top:5%;
        }
    }
`;
 
export {StyledBootmSheet , StyledEntry};
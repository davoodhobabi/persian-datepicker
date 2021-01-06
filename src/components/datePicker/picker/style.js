import Styled from 'styled-components';

const PickerSections = Styled.div`
    width: 33%;
    text-align: center;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 200px;
    position:relative;
    & > div{
        position: absolute;
        width: 100%;
        top: 0;
        right: 0;
        height: 100%;
        z-index: 100;
        overflow-y: scroll;
        opacity:0.001;
        &::after{
            content: " ";
            display: block;
            height: 200%;
            width: 100%;
        }
    } 
    & > span {
        height:30%;
        font-weight: bold;
        width:100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        visibility:hidden;
        transition:all 0.15s;
        font-size: 1.75rem;
        &.active{
            top:30%;
            height:40%;
            visibility:visible;
            color:#564E70;
            font-weight: bold;

        }
        &.prev{
            top:0;
            visibility:visible;
            color: #A09CAD;
        }
        &.next{
            top:70%;
            visibility:visible;
            color: #A09CAD;
        }
        &.standbay-prev{
            top:-30%;
            transition:all 0.05s;
        }
        &.standbay-next{
            top:100%;
            transition:all 0.05s;
        }
    }
`;

const StyledPicker = Styled.div`

}

`;
export {PickerSections , StyledPicker};
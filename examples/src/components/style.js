import Styled from 'styled-components';
 
const Section = Styled.section`
@font-face {
  font-family: Vazir;
  src: url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.eot');
  src: url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.eot?#iefix') format('embedded-opentype'),
       url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.woff2') format('woff2'),
       url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.woff') format('woff'),
       url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.ttf') format('truetype');
  font-weight: normal;
}

@font-face {
  font-family: Vazir;
  src: url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir-Bold.eot');
  src: url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir-Bold.eot?#iefix') format('embedded-opentype'),
       url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir-Bold.woff2') format('woff2'),
       url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir-Bold.woff') format('woff'),
       url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir-Bold.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: Vazir;
  src: url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir-Light.eot');
  src: url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir-Light.eot?#iefix') format('embedded-opentype'),
       url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir-Light.woff2') format('woff2'),
       url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir-Light.woff') format('woff'),
       url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir-Light.ttf') format('truetype');
  font-weight: 300;
}

@font-face {
  font-family: Vazir;
  src: url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir-Medium.eot');
  src: url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir-Medium.eot?#iefix') format('embedded-opentype'),
       url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir-Medium.woff2') format('woff2'),
       url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir-Medium.woff') format('woff'),
       url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir-Medium.ttf') format('truetype');
  font-weight: 500;
}

@font-face {
  font-family: Vazir;
  src: url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir-Thin.eot');
  src: url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir-Thin.eot?#iefix') format('embedded-opentype'),
       url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir-Thin.woff2') format('woff2'),
       url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir-Thin.woff') format('woff'),
       url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir-Thin.ttf') format('truetype');
  font-weight: 100;
}

@font-face {
  font-family: Vazir;
  src: url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir-Black.eot');
  src: url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir-Black.eot?#iefix') format('embedded-opentype'),
       url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir-Black.woff2') format('woff2'),
       url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir-Black.woff') format('woff'),
       url('https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir-Black.ttf') format('truetype');
  font-weight: 900;
}
    width: 100vw;
    max-width: 1200px;
    display: flex;
    -webkit-box-pack: center;
    align-items: center;
    margin: 0px auto;
    flex-direction: column;
    background: rgb(255, 255, 255);
    min-height: calc(100vh);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px 0px;
    font-family: Vazir;
    padding:5% 0;
    & > header{
        min-height: 200px;
        background: darkblue;
        width: 100%;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        margin-top: -8%;
    }
    & > main {
        width: 100%;
        & > h1{
            padding: 2%;
            a{
                color: darkblue;
                text-decoration: none;
            }

        }
    }
    .demo{
        display: flex;
        align-items: center;
        justify-content: center;
        & >div{
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2% 0;
            flex-direction: column;
            code {
                width: 80%;
                padding: 5%;
                background: #1e1e1e;
                color: #ededed;
            }
        }
    }
    .trigger-style{
        border: 2px solid darkblue;
        padding: 5%;
        border-radius: 5px 5px 5px 0;
        text-align: center;
    }
    div.api{
        width: 90%;
        margin: auto;
        border: 3px double darkblue;
        & > div{
            display: grid;
            grid-template-columns: 1fr 1fr 2fr 3fr;
            &.head{
                    font-weight:bold;
                }
            & > span{
                border: 1px solid darkblue;
                min-width: 20%;
                display: inline-block;
                text-align: center;
            }

        }
    }
`;
 
export {Section};
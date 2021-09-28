import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const BMIImg = styled.img `
width: 100%;
margin: 0 0 40px 0;
padding-right: 0;
  `

export const BmiContainer = styled.div `
min-height: 680px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index:0;
overflow: hidden;
background:linear-gradient(108deg,rgba(0, 0, 0, 1),rgba(255, 255, 255, 1)250%);
`
export const BmiWrapper = styled.div `
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width:400px){
height: 80%;
};
`
export const Icon = styled(Link) `
margin-left: 32px;
margin-top: 32px;
text-direction: none;
color: #fff;
font-weight: 700;
font-size: 32px;
text-decoration:none;

@media screen and (max-width:480px){
    margin-left:16px;
    margin-top: 8px;
};
`

export const BMIForm = styled.div `
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width:480px){
    padding:10px;
}
`


export const Form = styled.form `
background-color: #010101;
max-width: 400px;
height: auto;
width: 100%;
z-index:1;
display: grid;
margin: 0 auto;
padding-top: 0px;
padding-bottom: 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0,0,0,0.9);

@media screen and (max-width:400px){
    padding:32px 32px;
};
`

export const FormH1 = styled.h1 `
margin-bottom: 40px;
color: #fff;
font-size: 20px;
font-weight: 400;
text-align: center;

`

export const FormLabel = styled.label `
margin-bottom: 8px;
font-size: 20px;
color: #fff;
text-align: center;
`

export const FormInput = styled.input `
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px;
width: 75%;
text-align: center;
margin-left: 50px;
`

export const BMIButton = styled.button `
background:linear-gradient(108deg,rgba(0, 0, 0, 1),rgba(255, 255, 255, 1)100%);
padding:16px 0px;
border:none;
border-radius: 4px;
color: black;
font-size: 20px;
width: 75%;
margin-left: 50px;
cursor:pointer;
`
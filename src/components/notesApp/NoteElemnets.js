import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NoteBody = styled.body`
  background-color: #ffeaa7;
  min-height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: hsl(198, 1%, 29%);
  font-family: "Architects Daughter", cursive;
  text-align: center;
  font-size: 130%;
`

export const Notecontainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 500px;
  max-width: 500px;
  min-width: 250px;
  background: #f1f5f8;
  background-image: radial-gradient(#bfc0c1 7.2%, transparent 0);
  background-size: 25px 25px;
  border-radius: 20px;
  box-shadow: 4px 3px 7px 2px #00000040;
  padding: 1rem;
  box-sizing: border-box;
`

export const Noteheading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`

export const Noteh1 = styled.h1` 
  transform: rotate(2deg);
  padding: 0.2rem 1.2rem;
  border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
  background-color: #fdcb6e;
  font-size: 1.5rem;
`
export const Note = styled.div`
padding-left: 2.2rem;
`
export const Icon = styled(Link) `
margin-left: 32px;
margin-top: 32px;
text-direction: none;
color: #fdcb6e;
font-weight: 700;
font-size: 32px;
text-decoration:none;
z-index:1000

@media screen and (max-width:480px){
    margin-left:16px;
    margin-top: 8px;
};
`

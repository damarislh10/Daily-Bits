import styled from "styled-components";
import { ContainerComp } from "./StyleHome";

export const ContainerSign = styled(ContainerComp)`
  width: 25%;
  padding-top: 4%;
  @media (max-width: 540px) {
        width:70%;
      }

`;

export const Input = styled.input `
    width:100%;
    border-radius: 5px;
    padding:2%;
    border:none;
    margin-top:2%;
    color: #000;
`

export const InputAdmin = styled.input`
    display:none;
`

export const ButtonS = styled.button`
    color:#ffff;
    background-color:var(--green);
    width:100%;
    margin-top:4%;
`

export const StyleH2 = styled.h2`
    color: var(--white) !important;
`
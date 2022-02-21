import { NavLink } from "react-bootstrap";
import styled from "styled-components";

export const ContainerNav = styled.div`
    background-color: var(--neutral);
    padding: 0.5% 0;
    position: fixed;
    width: 100vw;
    bottom: 0;
    margin-top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const LabelStyled = styled.h5`
    font: var(--body2-regular);
    color:var( --white);
    font-size: 20px;
    &:focus{
      color:var(--green);
    }
`



export const NavItemB = styled(NavLink)`

`
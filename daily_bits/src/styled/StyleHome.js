import styled from "styled-components";


export const ContainerComp = styled.div`
    width:25%;
    margin: auto;
    text-align: center;

    @media (max-width: 540px) {
        width:70%;
        margin-top:10%;
      }
`

export const ContainerQuest = styled.div`
    display:flex;
    justify-content:space-around;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    padding-bottom: 100px;
`

export const ContainerAll = styled.div`
    margin: 5% 0;
`

export const BtnCircle = styled.button`
   border-radius: 100%;
   border: #DDDDDD 15px solid;
   background-color: var(--black);
   width: 128px;
   height: 128px;
   margin: 15% 0;

`

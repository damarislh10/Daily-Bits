import styled from "styled-components";
import { ContainerSign } from "./StyleSignup";

export const ContainerStadist = styled(ContainerSign)`
  width: 40%;
  @media (max-width: 540px) {
    width: 70%;
  }
`;

export const ContainerEstadist = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #94a1b2;
  border-radius: 8px;
  margin-bottom: 3%;
`;

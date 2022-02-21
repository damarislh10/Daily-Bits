import { Table } from "react-bootstrap";
import styled from "styled-components";
import { ContainerStadist } from "./styleEstadist";

export const ContainerAdmin = styled(ContainerStadist)`
  @media (max-width: 540px) {
    width: 100%;
  }
`;

export const TableA = styled(Table)`
  @media (max-width: 540px) {
    width: 30%;
    margin: auto;
    font-size: 14px;
  }
`;

import styled from "styled-components";
import {NAVBAR_HEIGHT} from "./consts";

export const NavBarStyled = styled.div`
  display: flex;
  background: transparent;
  border: 1px solid black;
  width: 100%;
  height: ${NAVBAR_HEIGHT};
  padding: 10px 15px;
  justify-content: space-between;
  align-items: flex-start;
`
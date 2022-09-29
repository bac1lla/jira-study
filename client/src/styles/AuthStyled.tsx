import styled from "styled-components";
import {Box, Wrapper} from "./components";

export const AuthStyled = styled(Wrapper)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -150px 0 0 -250px;
`
export const AuthContent = styled(Box)`
  padding: 15px 20px;
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
import styled, {css} from "styled-components";

export const shadowStyle = css`
  box-shadow: 4px 2px 0 0 rgba(0, 0, 0, 1);
`

export const boxStyles = css`
  border: 1px solid black;
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  cursor: pointer;
`


export const Wrapper = styled.div`
  max-width: 95%;
  margin: 0 auto;
`

export const Button = styled.button`
  ${boxStyles};
  text-transform: uppercase;
  ${shadowStyle}
  &:hover {
    background: rgba(0, 0, 0, .05);
  }
  &:active {
    box-shadow: 1px .5px 0 0 rgba(0, 0, 0, 1) inset;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`


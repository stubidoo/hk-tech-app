import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

export const Book = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  background-color: #b5b5b5;
  width: 700px;
  margin-bottom: 30px;
  padding: 10px;
  a {
    grid-column: 1 / 2;
    align-self: end;
  }
`
export const ImageWrapper = styled.div`
  border: 5px solid black;
  grid-row: 1 / 4;
  grid-column: 2 / 3;
`

export default Container

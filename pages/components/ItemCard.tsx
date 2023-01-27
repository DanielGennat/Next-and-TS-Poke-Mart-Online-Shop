import styled from "styled-components";

export default function ItemCard() {
    return (
        <Card>
          <p>name</p>
        </Card>
    );
}

const Card = styled.div`
  list-style: none;
  background-color: lightblue;
  border-radius: 5px;
  box-shadow: 5px 5px 3px lightgray;
  width: 140px;
  height: 140px;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
import styled from "@emotion/styled";

export const Stars = styled.div`
  display: flex;
  align-items: center;
`;

export const StarButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  width: 300px;
  @media screen and(min-width: 375px) {
    width: 350px;
  }
`;

export const ListItem = styled.li`
  height: 230px;
  background-color: #f1f4f5;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: auto;
  overflow-y: scroll;
  box-sizing: border-box;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const ItemDiv = styled.div`
  height: 100%;
  overflow: hidden;
  padding-bottom: 20px;
  box-sizing: border-box;
  overflow-y: scroll;
`;

export const UserDiv = styled.div`
  border-radius: 50px;
  background-color: #fff;
  width: 30px;
  padding: 6px 8px;
  margin-right: 20px;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2),
    2px 2px 6px 2px rgba(0, 0, 0, 0.19);
`;

export const UserName = styled.p`
  color: #007586;
  text-shadow: 2px 2px 10px #007586;
  margin-bottom: 5px;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const StarsTitle = styled.p`
  margin-right: 10px;
  font-size: 16px;
`;

export const StarsText = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

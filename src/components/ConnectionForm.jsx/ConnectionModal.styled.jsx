import styled from "@emotion/styled";
import { Form, Field } from "formik";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

export const FormTitle = styled.h1`
  font-size: 25px;
  color: #007586;
  margin-bottom: 20px;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 280px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin-bottom: 10px;
`;

export const Input = styled(Field)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-color: #007586;
  border-radius: 8px;
  margin-top: 10px;
  font-size: 16px;
`;

export const Comment = styled(Field)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-color: #007586;
  border-radius: 8px;
  margin-top: 10px;
  height: 50px;
  font-size: 18px;
`;

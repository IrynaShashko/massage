import styled from "@emotion/styled";
import { Formik } from "formik";

export const Stars = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
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

export const FormContainer = styled(Formik)`
  width: 600px;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #007586;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

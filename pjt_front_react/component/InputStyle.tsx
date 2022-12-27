import styled from "styled-components";

import inputFormTypes from "../modules/types/inputFormTypes";
import SubtitleText from "../common/SubtitleText";

const InputForm = (props: inputFormTypes) => {
  return (
    <>
      <InputFormLabel htmlFor={props.name}>
        <SubtitleText>{props.labelText}</SubtitleText>
      </InputFormLabel>
      <InputFormInput
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default InputForm;

const InputFormLabel = styled.label`
  display: flex;
`;

const InputFormInput = styled.input`
  display: flex;
  padding: 10px;
  margin: 10px;
  margin-bottom: 24px;
  border: none;
  border-bottom: 1px solid grey;
  background-color: transparent;

  &:focus {
    outline: none;
    border-bottom: 1px solid transparent;
    box-shadow: 0px 0px 2px #0062ff;
  }
`;

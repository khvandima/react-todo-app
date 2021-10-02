import React, {useContext} from "react";
import styled from "styled-components";
import {ThemeContext} from "../../theme/ThemeContext";

const InputWrapper = styled('input')`
    border: unset;
    border-bottom: 1px solid ${props => props.inputUnderLineColor};
    height: 20px;
    background-color: ${props => props.addTaskFormWrapperBgColor};
    color: ${props => props.mainTextColor};
    &:focus{
      outline: none;
    }
`;

const InputComponent = ({id, type, placeholder}) => {
    const {theme} = useContext(ThemeContext);
    return (
        <InputWrapper
            id={id}
            type={type}
            placeholder={placeholder}
            inputUnderLineColor={theme.inputUnderLineColor}
            addTaskFormWrapperBgColor={theme.addTaskFormWrapperBgColor}
            mainTextColor={theme.mainTextColor}
        />
    );
};

export { InputComponent };

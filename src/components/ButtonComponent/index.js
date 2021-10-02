import React, {useContext} from "react";
import styled from "styled-components";
import {ThemeContext} from "../../theme/ThemeContext";

const ButtonWrapper = styled('button')`
    color: ${props => props.textColor};
    background-color: ${props => props.tabWrapperBgColor};
    box-shadow: 0px 2px 6px 0px ${props => props.tabWrapperShadowColor};
    border: none;
    padding: 16px;
    cursor: pointer;
    margin: 16px 0;
    border-radius: 4px;
    &:focus{
      outline: none;
    }
`;
const ButtonComponent = ({children}) => {
    const {theme} = useContext(ThemeContext);
    return (
        <ButtonWrapper
            tabWrapperBgColor={theme.tabWrapperBgColor}
            tabWrapperShadowColor={theme.tabWrapperShadowColor}
            textColor={theme.mainTextColor}
        >
            {children}
        </ButtonWrapper>
    );
};

export { ButtonComponent };

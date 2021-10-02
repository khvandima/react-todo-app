import React, {useContext} from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-regular-svg-icons";
import {ThemeContext} from "../../theme/ThemeContext";

const ButtonWrapper = styled.button`
    width: 50px;
    height: 50px;
    position: fixed;
    right: 16px;
    top: 16px;
    background-color: ${props => props.buttonBgColor};
    color: ${props => props.mainBorderColor};
    border: 1px solid ${props => props.mainBorderColor};
    border-radius: 50%;
    cursor: pointer;
    &:focus{
      outline: 0;
    }
`;

const ChangeThemeButtonComponent = () => {
    const {theme, isDarkMode, toggleTheme} = useContext(ThemeContext);
    return (
        <ButtonWrapper
            buttonBgColor={theme.buttonBgColor}
            mainBorderColor={theme.mainBorderColor}
        >
            <FontAwesomeIcon className='fa' icon={isDarkMode ? faSun : faMoon} onClick={() => toggleTheme(!isDarkMode)} />
        </ButtonWrapper>
    );
};

export { ChangeThemeButtonComponent };

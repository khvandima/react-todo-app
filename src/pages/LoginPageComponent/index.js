import React from "react";
import styled from "styled-components";
import {ButtonComponent} from "../../components/ButtonComponent";
import {InputComponent} from "../../components/InputComponent";

const ContentWrapper = styled.div`
    padding: 0 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TabWrapper = styled.div`
    margin: 8px 0px;
    min-height: 90px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 20px;
    box-sizing: border-box;
    
`;

const H1Wrapper = styled('h1')`
    margin: 24px 0;
`;

const InputBlockWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    margin: 16px 0;
`;

const LoginPageComponent = () => (
    <ContentWrapper>
        <TabWrapper>
            <H1Wrapper>Login to Task Manager</H1Wrapper>

            <InputBlockWrapper>
                <InputComponent
                    id="email"
                    type="text"
                    placeholder="Enter Email here"
                />
            </InputBlockWrapper>

            <InputBlockWrapper>
                <InputComponent
                    id="password"
                    type="password"
                    placeholder="Enter Password here"
                />
            </InputBlockWrapper>

            <ButtonComponent children="Login" />
        </TabWrapper>
    </ContentWrapper>
);

export { LoginPageComponent };

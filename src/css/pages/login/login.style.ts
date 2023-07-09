import styled from "styled-components";
import "../../common.css";

interface validation {
    validation: boolean;
}

export const Container = styled.div`
    width: 100vw;
    min-width: 1440px;
    height: calc(100vh - 68px);
`;

export const Wrap = styled.div`
    width: 340px;
    margin: auto;
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(231, 231, 231);
`;

export const Logo = styled.img`
    width: 171px;
    display: block;
    margin: auto;
    padding: 100px 0 50px;
    cursor: pointer;
`;

export const InputWrap = styled.div`
    position: relative;

    :nth-child(1) {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    :nth-child(2) {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        padding-right: 50px;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 44px;
    padding: 0 14px 2px;
    color: #000;
    font-size: 14px;
    line-height: 42px;
    letter-spacing: -0.01em;
    font-family: "NotoSansKR-Regular";
    background-color: #fff;
    border: 1px solid #d5d5d5;
    border-radius: 6px;
    box-sizing: border-box;
    transition: 0.2s ease-out;
    outline: none;

    &:focus {
        border-color: #000;
    }
`;

export const InputPasswordIcon = styled.img`
    width: 22px;
    height: 20px;
    position: absolute;
    right: 11px;
    bottom: 13px;
    cursor: pointer;
`;

export const Validation = styled.div`
    color: #ec1f2d;
    margin-top: 4px;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: -0.01em;
`;

export const LoginStayWrap = styled.div`
    width: 100%;
    height: 22px;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #767676;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.01em;
    font-weight: 400;
`;

export const InputCheckboxLabel = styled.label`
    display: inline-block;
    position: relative;
    padding: 2px 0 0 30px;
    font-size: 14px;
    letter-spacing: -0.01em;
    line-height: 20px;
    color: #000;
    cursor: pointer;
    vertical-align: top;

    input[type="checkbox"] {
        appearance: none;
    }

    input[type="checkbox"]:checked {
        content: "";
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
        width: 24px;
        height: 24px;
        border: 1px solid rgb(70, 78, 164);
        border-radius: 50%;
        background-color: rgb(70, 78, 164);
        background-position: center 8px;
        background-repeat: no-repeat;
        background-size: 10px 7px;
        background-image: url(https://contents.kyobobook.co.kr/resources/fo/images/common/ink/ico_checkbox@2x.png);
    }

    &:before {
        content: "";
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        border: 1px solid #ccc;
        transition: 0.2s;
        background-position: center 8px;
        background-repeat: no-repeat;
        background-size: 10px 7px;
        background-image: url(https://contents.kyobobook.co.kr/resources/fo/images/common/ink/ico_checkbox@2x.png);
    }
`;

export const OAuthLoginWrap = styled.div`
    width: 50%;
    margin: 30px auto 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const OAuthLoginIcon = styled.img`
    width: 40px;
    //height: 30px;
    cursor: pointer;
`;

export const Button = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 6px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.01em;
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s ease-out;
`;

export const ButtonLogin = styled(Button)<validation>`
    margin-top: 20px;
    color: #fff;
    background: ${props => (props.validation ? "rgb(70, 78, 164)" : "rgb(107, 107, 107)")};
    border: 1px solid rgb(107, 107, 107);

    &:hover {
        background: rgb(79, 79, 79);
    }
`;

export const ExplainText = styled.div`
    width: 100%;
    margin: 16px 0 30px;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: -0.01em;
    color: #767676;
    text-align: center;
    word-break: keep-all;
`;

export const ButtonSignup = styled(Button)`
    color: #474c98;
    border: 1px solid #5055b1;
    background: #fff;

    &:hover {
        background: rgb(236, 237, 246);
    }
`;

export const ButtonNonMember = styled(Button)`
    color: #595959;
    background: #fff;
    border: 1px solid #ccc;
    margin-top: 10px;

    &:hover {
        background: rgb(240, 240, 240);
    }
`;

export const Footer = styled.div`
    width: 100vw;
    min-width: 1440px;
    height: 68px;
    border-top: 1px solid rgb(231, 231, 231);
    font-family: "NotoSansKR-Regular";
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
`;

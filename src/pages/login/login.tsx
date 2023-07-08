import React, { useEffect, useState } from "react";
import * as S from "../../css/pages/login/login.style";
import { useLocation } from "react-router-dom";

declare global {
    interface Window {
        naver: any;
    }
}

const { naver } = window;

type inputData = { id: string; pw: string };

const Login = () => {
    const [inputData, setInputData] = useState<inputData>({ id: "", pw: "" });
    const [validation, setValidation] = useState<number>(0);
    const [isPasswordIconClick, setIsPasswordIconCLick] = useState<Boolean>(false);

    const location = useLocation();

    useEffect(() => {
        OauthNaverInit();
    }, []);

    const OauthNaverInit = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
            callbackUrl: "http://localhost:3000/login",
            callbackHandle: true,
            isPopup: false,
            loginButton: { color: "green", type: 1, height: 30 },
        });

        naverLogin.init();
    };
    const getNaverToken = () => {
        if (!location.hash) return;
        const token = location.hash.split("=")[1].split("&")[0];
        console.log("dddd", token);
    };

    return (
        <>
            <S.Container>
                <S.Wrap>
                    <S.Logo src="images/img_logo_kyobo_member@2x.png" />
                    <S.InputWrap>
                        <S.Input
                            type="text"
                            value={inputData.id}
                            onBlur={() => (inputData.id === "" ? setValidation(1) : setValidation(0))}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setInputData({ ...inputData, id: e.target.value })
                            }
                            placeholder="아이디를 입력해 주세요"
                        />
                        <S.Input
                            type={isPasswordIconClick ? "text" : "password"}
                            value={inputData.pw}
                            onBlur={() => (inputData.pw === "" ? setValidation(2) : setValidation(0))}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setInputData({ ...inputData, pw: e.target.value })
                            }
                            placeholder="비밀번호를 입력해 주세요"
                        />
                        <S.InputPasswordIcon
                            src="images/ico_eye@2x.png"
                            onClick={() => setIsPasswordIconCLick(!isPasswordIconClick)}
                        />
                    </S.InputWrap>
                    {validation !== 0 &&
                        (validation === 1 ? (
                            <S.Validation>아이디를 입력해 주세요</S.Validation>
                        ) : (
                            <S.Validation>비밀번호를 입력해 주세요</S.Validation>
                        ))}
                    <S.ButtonLogin validation={inputData.id !== "" && inputData.pw !== ""}>로그인</S.ButtonLogin>
                    <S.LoginStayWrap>
                        <S.InputCheckboxLabel>
                            <input type="checkbox" onChange={() => console.log("fff")} />
                            아이디 저장
                        </S.InputCheckboxLabel>
                        <div>아이디/비밀번호 찾기</div>
                    </S.LoginStayWrap>

                    <S.OAuthLoginWrap>
                        <div id="naverIdLogin" onClick={getNaverToken} />
                    </S.OAuthLoginWrap>

                    <S.ExplainText>
                        개인정보 보호를 위해 공용 PC에서 사용 시 SNS계정의 로그아웃 상태를 꼭 확인해 주세요.
                    </S.ExplainText>
                    <S.ButtonSignup>회원가입</S.ButtonSignup>
                    <S.ButtonNonMember>비회원 주문조회</S.ButtonNonMember>
                </S.Wrap>
            </S.Container>

            <S.Footer>@jm4293 BOOK CENTER</S.Footer>
        </>
    );
};

export default Login;

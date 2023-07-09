import React, { useEffect, useState } from "react";
import * as S from "../../css/pages/login/login.style";
import { useLocation, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../util/firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

declare global {
    interface Window {
        naver: any;
    }
}

type inputData = { id: string; pw: string };

const Login = () => {
    const [inputData, setInputData] = useState<inputData>({ id: "", pw: "" });
    const [validation, setValidation] = useState<number>(0);
    const [isPasswordIconClick, setIsPasswordIconCLick] = useState<Boolean>(false);

    const navigate = useNavigate();
    const location = useLocation();
    const { naver } = window;

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

    const OauthGetNaverToken = () => {
        if (!location.hash) return;
        const token = location.hash.split("=")[1].split("&")[0];
    };

    const FirebaseLogin = () => {
        signInWithEmailAndPassword(auth, inputData.id, inputData.pw)
            .then(userCredential => {
                // Signed in
                const user = userCredential.user;

                console.log("user", user);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log("errorCode", errorCode);
                console.log("errorMessage", errorMessage);
            });
    };

    const OauthGoogleLogin = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then(result => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential!.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)

                console.log("credential", credential);
                console.log("token", token);
                console.log("user", user);
            })
            .catch(error => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);

                console.log("errorCode", errorCode);
                console.log("errorMessage", errorMessage);
                console.log("email", email);
                console.log("credential", credential);
            });
    };

    const keyUpEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            inputData.id !== "" && inputData.pw !== "" && FirebaseLogin();
        }
    };

    return (
        <>
            <S.Container>
                <S.Wrap>
                    <S.Logo src="/images/img_logo_kyobo_member@2x.png" onClick={() => navigate("/")} />
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
                            onKeyUp={keyUpEnter}
                            placeholder="비밀번호를 입력해 주세요"
                        />
                        <S.InputPasswordIcon
                            src={isPasswordIconClick ? "/images/ico_eye_active@2x.png" : "/images/ico_eye@2x.png"}
                            onClick={() => setIsPasswordIconCLick(!isPasswordIconClick)}
                        />
                    </S.InputWrap>
                    {validation !== 0 &&
                        (validation === 1 ? (
                            <S.Validation>아이디를 입력해 주세요</S.Validation>
                        ) : (
                            <S.Validation>비밀번호를 입력해 주세요</S.Validation>
                        ))}
                    <S.ButtonLogin isEmpty={inputData.id !== "" && inputData.pw !== ""} onClick={FirebaseLogin}>
                        로그인
                    </S.ButtonLogin>
                    <S.LoginStayWrap>
                        <S.InputCheckboxLabel>
                            <input type="checkbox" />
                            아이디 저장
                        </S.InputCheckboxLabel>
                        <div>아이디/비밀번호 찾기</div>
                    </S.LoginStayWrap>

                    <S.OAuthLoginWrap>
                        <div id="naverIdLogin" onClick={OauthGetNaverToken} />
                        <S.OAuthLoginIcon src="/images/ico_sns_google@2x.png" alt="" onClick={OauthGoogleLogin} />
                    </S.OAuthLoginWrap>

                    <S.ExplainText>
                        개인정보 보호를 위해 공용 PC에서 사용 시 SNS계정의 로그아웃 상태를 꼭 확인해 주세요.
                    </S.ExplainText>
                    <S.ButtonSignup onClick={() => navigate("/login/register")}>회원가입</S.ButtonSignup>
                    <S.ButtonNonMember>비회원 주문조회</S.ButtonNonMember>
                </S.Wrap>
            </S.Container>

            <S.Footer>@jm4293 BOOK CENTER</S.Footer>
        </>
    );
};

export default Login;

import React, { useState } from "react";
import * as S from "../../css/pages/login/signUp.style";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../util/firebase/firebase";

type inputData = { id: string; pw: string };

const SignUp = () => {
    const [inputData, setInputData] = useState<inputData>({ id: "", pw: "" });
    const [validation, setValidation] = useState<number>(0);
    const [isPasswordIconClick, setIsPasswordIconCLick] = useState<Boolean>(false);

    const navigate = useNavigate();

    const OauthGoogleCreat = () => {
        createUserWithEmailAndPassword(auth, inputData.id, inputData.pw)
            .then(userCredential => {
                // Signed in
                const user = userCredential.user;

                console.log("user", user);
                navigate("/login");
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log("errorCode", errorCode);
                console.log("errorMessage", errorMessage);
            });
    };

    const keyUpEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            inputData.id !== "" && inputData.pw !== "" && OauthGoogleCreat();
        }
    };

    return (
        <>
            <S.Container>
                <S.Wrap>
                    <S.Logo src="/images/img_logo_kyobo_member@2x.png" />
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
                    <S.ButtonLogin isEmpty={inputData.id !== "" && inputData.pw !== ""} onClick={OauthGoogleCreat}>
                        회원가입
                    </S.ButtonLogin>
                    <S.ButtonCancel onClick={() => navigate("/login")}>돌아가기</S.ButtonCancel>
                </S.Wrap>
            </S.Container>
            <S.Footer>@jm4293 BOOK CENTER</S.Footer>
        </>
    );
};

export default SignUp;

import React, { useState } from "react";
import * as S from "../css/components/header.style";

const Header = () => {
  const [isBanner, setIsBanner] = useState<boolean>(false);

  return (
    <S.Frame>
      <S.BannerWrap isBanner={isBanner}>
        <S.BannerImg src="/images/header_banner.jpg" />
        <S.BannerCancel onClick={() => setIsBanner(true)}></S.BannerCancel>
      </S.BannerWrap>

      <S.HeaderWrap>
        <S.ServiceButtonWrap>
          <S.Service>
            <ul>
              <li>eBook</li>
              <li>sam</li>
              <li>핫트랙스</li>
              <li>매장안내</li>
              <li>톡소다</li>
              <li>스토리</li>
              <li>브랜드 더보기</li>
            </ul>
          </S.Service>
          <S.User>
            <ul>
              <li>회원가입</li>
              <li>로그인</li>
              <li>회원혜택</li>
              <li>고객센터</li>
            </ul>
          </S.User>
        </S.ServiceButtonWrap>
        <S.SearchWrap></S.SearchWrap>
        <S.GnbWrap></S.GnbWrap>
      </S.HeaderWrap>
    </S.Frame>
  );
};

export default Header;

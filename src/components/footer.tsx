import React from "react";
import * as S from "../css/components/footer.style";

const Footer = () => {
  return (
    <S.Frame>
      <S.AnnouncementWrap>
        <S.Announcement>
          <span>공지사항</span>
        </S.Announcement>
      </S.AnnouncementWrap>

      <S.ServiceMenuWrap>
        <S.ServiceMenu>
          <ul>
            <li>회원혜택</li>
            <li>Prestige Lounge</li>
            <li>신규회원 혜택</li>
            <li>등급별 혜택</li>
            <li>출석체크</li>
          </ul>

          <ul>
            <li>쇼핑 TIP</li>
            <li>제휴포인트/상품권</li>
            <li>기프트카드</li>
            <li>대량구매</li>
            <li>리딩트릭서비스</li>
          </ul>

          <ul>
            <li>빠른 서비스</li>
            <li>북클럽카드 등록</li>
            <li>영수증 후 적립</li>
            <li>캐시 조회·충전</li>
            <li>e캐시 조회·충전</li>
            <li>기프트카드 조회·충전</li>
            <li>협력사 여러분</li>
          </ul>

          <ul>
            <li>소식</li>
            <li>인스타그램</li>
            <li>인스타그램</li>
            <li>페이스북</li>
            <li>페이스북</li>
            <li>트위터</li>
            <li>유튜브</li>
          </ul>

          <ul>
            <li>FAQ</li>
            <li>주문·결제</li>
            <li>eBook</li>
            <li>도서·상품정보</li>
            <li>중고장터</li>
          </ul>
        </S.ServiceMenu>
      </S.ServiceMenuWrap>
    </S.Frame>
  );
};

export default Footer;

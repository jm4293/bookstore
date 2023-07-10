import styled from "styled-components";
import "../common.css";

export const Frame = styled.div`
  width: 100vw;
  min-width: 1440px;
`;

export const BannerWrap = styled.div<{ isBanner: boolean }>`
  width: 100%;
  height: 70px;
  background: #f2f2f2;
  display: ${props => (props.isBanner ? "none" : "block")};
  position: relative;
`;

export const BannerImg = styled.img`
  position: absolute;
  top: 0;
  left: 50%;

  transform: translateX(-50%);
`;
export const BannerCancel = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    width: 30px;
    height: 1px;
    background: #000;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {
    content: "";
    position: absolute;
    width: 30px;
    height: 1px;
    background: #000;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(315deg);
  }
`;

export const HeaderWrap = styled.div`
  width: 100vw;
  margin: auto;
`;

export const ServiceButtonWrap = styled.div`
  width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

export const Service = styled.div`
  ul {
    display: flex;
  }

  ul li {
    list-style: none;
    width: 100px;
    height: 33px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #595959;
    font-size: 13px;
  }
`;

export const User = styled.div`
  ul {
    display: flex;
  }

  ul li {
    list-style: none;
    width: 70px;
    height: 33px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #595959;
    font-size: 13px;
  }
`;

export const SearchWrap = styled.div`
  width: 1200px;
  margin: auto;
  display: flex;
  //justify-content: space-between;
  align-items: center;
  border: 1px solid red;
`;

export const Logo = styled.img`
  width: 171px;
  margin-right: 40px;
`;

export const Search = styled.div`
  width: 544px;
  height: 48px;
  border: 1px solid rgb(71, 79, 146);
  border-radius: 24px;
`;

export const Mypage = styled.div``;
export const GnbWrap = styled.div``;

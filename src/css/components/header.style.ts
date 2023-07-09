import styled from "styled-components";
import "../common.css";

export const Frame = styled.div`
  width: 100vw;
  min-width: 1440px;
  border: 1px solid red;
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
  width: 1200px;
  margin: auto;
`;

export const ServiceButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;

  ul {
    display: flex;
  }

  ul li {
    list-style: none;
    margin-left: 10px;
  }
`;

export const Service = styled.div`
  width: 780px;
  border: 1px solid red;

  //ul {
  //  display: flex;
  //}
  //
  //ul li {
  //  list-style: none;
  //}
`;

export const User = styled.div`
  border: 1px solid blue;
  margin-left: 150px;

  //ul {
  //  display: flex;
  //}
  //
  //ul li {
  //  list-style: none;
  //}
`;

export const SearchWrap = styled.div``;

export const GnbWrap = styled.div``;

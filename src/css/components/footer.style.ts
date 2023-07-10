import styled from "styled-components";

export const Frame = styled.div`
  width: 100vw;
  min-width: 1440px;
  border-top: 1px solid rgb(207, 207, 207);
  margin-top: 50px;
`;

export const AnnouncementWrap = styled.div`
  width: 100vw;
  border-bottom: 1px solid rgb(237, 237, 237);
`;

export const Announcement = styled.div`
  width: 1200px;
  margin: auto;
  height: 62px;
  display: flex;
  align-items: center;
`;

export const ServiceMenuWrap = styled.div`
  width: 100vw;
  background: rgb(246, 246, 246);
  border-bottom: 1px solid rgb(237, 237, 237);
`;

export const ServiceMenu = styled.div`
  width: 1200px;
  margin: auto;
  padding: 40px 0 50px 0;
  display: flex;
  justify-content: space-between;

  ul li {
    list-style: none;
    color: #595959;
    font-size: 13px;
    font-family: "NotoSansKR-Regular";
    cursor: pointer;
  }

  ul li:nth-child(1) {
    font-family: "NotoSansKR-Bold";
    color: #000;
    margin-bottom: 16px;
    font-size: 14px;
    cursor: auto;
  }
`;

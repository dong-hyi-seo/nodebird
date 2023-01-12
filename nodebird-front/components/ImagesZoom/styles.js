import styled, { createGlobalStyle } from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';

export const Overlay = styled.div`
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
export const Header = styled.header`
  height : 44px;
  background: white;
  position: relative;
  padding: 0;
  text-align:center;
  & h1 {
    margin : 0;
    font-size : 17px;
    color : #333;
    line-height: 44px;
  }
  
  & button {
    position: absolute;
    right: 0;
    top : 0;
    padding : 15px;
    line-height: 14px;
    cursor : pointer;
  }
`;

export const CloseBtn = styled(CloseOutlined)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 15px;
  line-height: 14px;
  cursor: pointer;
`;

export const SlickWrapper = styled.div`
  height: calc(100% - 44px);
  background: #090909;
`;

export const ImgWrapper = styled.div`
  padding: 32px;
  text-align: center;
  
  & img {
    margin: 0 auto;
    max-height: 750px;
  }
`;
export const Indicator = styled.div`
  text-align: center;
  
  & > div {
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`;
/* 라이브러리 이미 설정된 css를 덮어버린다. */
export const Global = createGlobalStyle`
  .slick-slide {
    display: inline-block;
  }
  //.antd-car-cover 안의 특정 영역에 fixed를 해줌에도 불구하고 transform 때문에 전체 화면이 안되는 버그존재
  //transform을 없애줘야한다.
  .ant-card-cover {
    transform: none !important;
  }
`;

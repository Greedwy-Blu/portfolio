import styled from "styled-components";
import imageProfile from "../../assets/profile.png";

export const HeaderButton = styled.button`
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 2px solid #80501cc3;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  font-weight: 700;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  color: #ffff;
  margin-top: 0.875rem;

  &:after {
    content: "";
    background-color: #d8a063;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }

  &:hover:after {
    top: 0px;
    left: 0px;
  }

  @media (min-width: 768px) {
    padding: 13px 50px 13px;
  }
`;

export const Border = styled.div`
  border-radius: 137px 137px 154px 154px;
  background-color: #d4cea476;
  color: #fff;
  line-height: 213px;
  text-align: center;

  width: 336px;
  height: 511px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

export const ImgProfile = styled.div`
  background-image: url(${imageProfile});
  height: 350px;

  background-position: ;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

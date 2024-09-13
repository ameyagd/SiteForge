import Link from "next/link";
import styled from "styled-components";

export const GoogleAdLink = styled(Link)`
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 36px;
  padding-top: 12px;
  width: 100%;
  border-left: var(--link-bl) 7px solid;
  display: block;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 20px;
    width: 20px;
    background-color: white;
    clip-path: polygon(58% 30%, 100% 50%, 58% 70%, 0% 100%, 25% 50%, 0% 0%);
  }
`;

export const GoogleAdLinkText = styled.span`
  font-size: 24px;
  padding-right: 20px;
  color: #fff;
`;

export const GoogleAdItem = styled.li`
  background-color: #2a56c6;
  border-radius: 25px;
  border: 5px solid #fff;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #4285f4;
  }
  &:hover ${GoogleAdLinkText} {
    text-decoration: underline;
  }

  &:nth-child(1) {
    --link-bl: #1f8a70;
  }
  &:nth-child(2) {
    --link-bl: #fd7400;
  }
  &:nth-child(3) {
    --link-bl: #bedb39;
  }
  &:nth-child(4) {
    --link-bl: #004358;
  }
`;

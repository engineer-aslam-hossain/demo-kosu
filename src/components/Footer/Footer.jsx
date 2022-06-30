import React from "react";
import styled from "styled-components";
import LanguageIcon from "@mui/icons-material/Language";

const FooterContainer = styled.div`
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.6rem;
  color: #1c1d1f;
`;
const FooterSection = styled.section`
  padding: 2.4rem 3.2rem 0 3.2rem;
  background-color: #1c1d1f;
  color: #fff;
  border-top: 1px solid #3e4143;
`;
const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (min-width: 576px) {
    display: flex;
  }
`;
const LanguageSelectorContainer = styled.div`
  padding: 0;
  order: 1;
  flex-shrink: 1;
  margin-left: auto;

  @media (max-width: 576px) {
    margin-top: 2rem;
  }
`;
const LanguageSelectorBtn = styled.div`
  border: 1px solid #fff;
  color: #fff;
  justify-content: flex-start;
  padding: 0 1.6rem;
  min-width: 14rem;
  background-color: transparent;
  height: 4rem;
  position: relative;
  align-items: center;
  display: inline-flex;
  cursor: pointer;
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.6rem;
`;
const LanguageSpan = styled.span`
  margin-left: 0.4rem;
`;
const FooterListUl = styled.ul`
  flex-basis: 25.6rem;
  margin: 0 1.6rem 0 0;
  padding: 0;
  list-style: none;
`;
const FooterListLi = styled.li`
  padding-left: 0;
`;
const FooterLink = styled.span`
  color: #fff;
  display: block;
  font-weight: 400;
  font-size: 1.4rem;
  text-decoration: none;
  padding: 0.4rem 0;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6.4rem 0 3.2rem 0;
  color: #fff;
`;
const LogoLink = styled.a`
  display: block;
  cursor: pointer;
  width: 91px;
  height: 34px;
`;
const LogoImg = styled.img`
  width: 100%;
  height: auto;
`;
const Copyright = styled.div`
  padding: 0;
  font-size: 1.2rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterTop>
          <LanguageSelectorContainer>
            <LanguageSelectorBtn>
              <LanguageIcon style={{ width: "2rem", height: "2rem" }} />
              <LanguageSpan>English</LanguageSpan>
            </LanguageSelectorBtn>
          </LanguageSelectorContainer>
          <FooterListUl>
            <FooterListLi>
              <FooterLink href="#">Litepaper</FooterLink>
            </FooterListLi>
            <FooterListLi>
              <FooterLink href="#">Docs</FooterLink>
            </FooterListLi>
            <FooterListLi>
              <FooterLink href="#">Partnerships</FooterLink>
            </FooterListLi>
          </FooterListUl>
          <FooterListUl>
            <FooterListLi>
              <FooterLink href="#">Careers</FooterLink>
            </FooterListLi>
            <FooterListLi>
              <FooterLink href="#">Blog</FooterLink>
            </FooterListLi>
            <FooterListLi>
              <FooterLink href="#">Sponsors</FooterLink>
            </FooterListLi>
            <FooterListLi>
              <FooterLink href="#">Affiliate</FooterLink>
            </FooterListLi>
          </FooterListUl>
          <FooterListUl>
            <FooterListLi>
              <FooterLink href="#">Contact Us</FooterLink>
            </FooterListLi>
            <FooterListLi>
              <FooterLink href="#">Terms</FooterLink>
            </FooterListLi>
            <FooterListLi>
              <FooterLink href="#">Accessibility Statement</FooterLink>
            </FooterListLi>
          </FooterListUl>
        </FooterTop>
        <FooterBottom>
          <div>
            <LogoLink href="#">
              <LogoImg src="/images/header/logo-kosu.svg" />
            </LogoLink>
          </div>
          <Copyright>&copy; 2022 KŌSU SPACE.</Copyright>
        </FooterBottom>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;

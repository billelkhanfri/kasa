import { useState } from "react";
import styled from "styled-components";
import Arrow from "../../assets/Arrow.svg";
import { colors } from "../Styles/colors";

import PropTypes from "prop-types";

const GobalWrapper = styled.div`
  width: 90%;
  height: auto;
  margin: 30px auto;
  border-radius: 5px;
  @media (min-width: 768px) {
    width: 71%;
  }
`;

const DropDownSeen = styled.div`
  background: ${colors.primary};
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  height: 30px;
  padding: 0 12px;
  @media (min-width: 768px) {
    height: 47px;
  }
`;
const Title = styled.h2`
  font-size: 13px;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: ${(props) => (props.exportedto === "about" ? "24px" : "18px")};
  }
`;
const ArrowImg = styled.img`
  width: 8.98px;
  height: 15.2px;
  @media (min-width: 768px) {
    width: 16px;
    height: 27px;
  }
`;

const ContentWrapper = styled.div`
  height: auto;
  background: #f6f6f6;
  border-radius: 5px 0px;
`;

const Content = styled.div`
  margin: 0px;
  pointer-events: none;
  color: #ff6060;
  font-size: 12px;
  line-height: 18px;
  padding: 10px 15px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: ${(props) => (props.exportedto === "about" ? "24px" : "18px")};
    line-height: 34px;
    padding-top: 20px;
  }
`;

function DropDown(props) {
  const [toggle, setToggle] = useState(true);

  return (
    <GobalWrapper>
      <DropDownSeen onClick={() => setToggle(!toggle)}>
        <Title exportedto={props.exportedto}>{props.title}</Title>
        <ArrowImg
          src={Arrow}
          alt="Arrow"
          style={{ rotate: toggle ? "180deg" : "" }}
        />
      </DropDownSeen>

      {toggle && (
        <ContentWrapper>
          <Content exportedto={props.exportedto}>{props.content}</Content>
        </ContentWrapper>
      )}
    </GobalWrapper>
  );
}

DropDown.propTypes = {
  title: PropTypes.string.isRequired,
  exportedto: PropTypes.string.isRequired,
};

DropDown.defaultProps = {
  title: "",
  exportedto: "",
};

export default DropDown;

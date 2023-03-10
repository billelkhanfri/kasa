import React from "react";
import { colors } from "../Styles/colors";
import Star from "../atoms/Star";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledStars = styled.div`
  width: 150px;
`;

export const Rate = ({ rating }) => {
  const stars = [];

  for (let i = 1; i < 6; i++) {
    stars.push(
      <Star
        key={Math.random()}
        fill={i <= parseInt(rating) ? colors.primary : colors.StarGray}
      />
    );
  }

  return <StyledStars>{stars}</StyledStars>;
};

Rate.propTypes = {
  rating: PropTypes.string.isRequired,
};

Rate.defaultProps = {
  rating: "",
};

export default Rate;

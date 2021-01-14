import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideFromTop = keyframes`
  from {
    margin-top: -15px;
  }
  to {
    margin-top: 0;
  }
`;

const slideFromBottom = keyframes`
  from {
    margin-top: 15px;
  }
  to {
    margin-top: 0;
  }
`;

const StyledIconMoon = styled(FontAwesomeIcon)`
  color: #ffa500;
  animation: ${fadeIn} 0.5s ease, ${slideFromBottom} 0.5s ease;
`;

const StyledIconSun = styled(FontAwesomeIcon)`
  animation: ${fadeIn} 0.5s ease, ${slideFromTop} 0.5s ease;
`;

export { StyledIconMoon, StyledIconSun };

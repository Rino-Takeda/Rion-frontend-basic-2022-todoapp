import styled from "styled-components"
import COLOR from "../../../variables/color"
import TEXT from "../../../variables/texts"
import FONTSTYLE from "../../../variables/font_family"
import BREAKPOINT from "../../../variables/breakpoint"
import React from "react";

export const Title = () => {
  return <StyledText>SIMPLE TODO APP</StyledText>;
}

const StyledText = styled.div`
  color: ${COLOR.WHITE};
  font-family: ${FONTSTYLE.NOTO_SANS};
  ${TEXT.M};

  /* メディアクエリ */
  @media (min-width: ${BREAKPOINT.MEDIUM}){
    ${TEXT.L};
  }
`;


import React from "react";
import styled from "styled-components";
const Inst = styled.img`
  width: 242px;
  height: 242px;
`;
const InstBlock = (props) => {
  return (
    <div>
      <Inst src={props.ul.node.display_url} />
    </div>
  );
};

export default InstBlock;
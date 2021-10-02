import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
   padding: 30px 20px;
   position: relative;
`;

const HeaderComponent = ({ deviceBorderColor }) => {
   const day = new Date();

   let d_week = day.toString().split(" ")[0];

   let month = day.toString().split(" ")[1];

   return (
      <HeaderWrapper deviceBorderColor={deviceBorderColor}>
         <h1>Hello, Dima</h1>
         <div className="greeting">
            {`Today, ${d_week} ${day.getDate()} ${month}`}
         </div>
      </HeaderWrapper>
   );
};

export default HeaderComponent;

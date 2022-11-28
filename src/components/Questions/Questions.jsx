import React, { useState } from "react";

import { QuestionsCtn, QuestionsBox } from "./Styled";

function Questions({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <QuestionsCtn>
      <div style={{ display: "flex", justifyContent: "center"}}>
        <QuestionsBox>
          <h3 style={{ display: "flex", alignItems: "center" }}>{title}</h3>
          <button style={{ border: "none", background: "transparent", fontSize: "3rem", color: "#fff" }} onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? "-" : "+"}
          </button>
        </QuestionsBox>
      </div>
      <div style={{ textAlign: "left", display: 'flex', justifyContent: 'center'}}>
        {showInfo && <p style={{  background: '#303030', fontSize: '1.5rem', width: "850px", padding: "1rem 2rem", marginBottom: ".3rem"}}>{info}</p>}
      </div>
    </QuestionsCtn>
  );
}

export default Questions;

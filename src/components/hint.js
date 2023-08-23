import React from "react";
import { randomHint } from "./hints";

function Hint() {
  return (
    <div>
      <p></p>
      <button
        onClick={(e) => {
          alert(randomHint());
        }}
      >
        Help
      </button>
    </div>
  );
}

export default Hint;

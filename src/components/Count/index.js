import React, { useState } from "react";
import { PropTypes } from "prop-types";

function Count() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Add Count</button>
      <div>{count}</div>
    </div>
  );
}

export default React.memo(Count);

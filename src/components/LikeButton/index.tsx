import { useState } from "react";

function LikeButton() {
  const [state, setState] = useState<number>(0);

  return (
    <button onClick={() => setState((prev) => prev + 1)}>{state} likes</button>
  );
}

export default LikeButton;

import { useState } from "react";

const MOCK = ["comment 1", "comment 2", "comment 3", "comment 4"];

function CommentsForm() {
  const [currentComment, setCurrentComment] = useState<string>("");

  return (
    <>
      <input
        type="textarea"
        value={currentComment}
        onChange={(e) => setCurrentComment(e.target.value)}
      />
      <button
        onClick={() => {
          setCurrentComment("");
        }}
      >
        submit
      </button>
    </>
  );
}

export default CommentsForm;

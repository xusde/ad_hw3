import React from "react";
import { clearAll } from "../features/checkSlice";
import { useDispatch } from "react-redux";

const ClearBtn = () => {
  const dispatch = useDispatch();
  return (
    <button className="clear-btn" onClick={() => dispatch(clearAll())}>
      Clear All
    </button>
  );
};

export default ClearBtn;

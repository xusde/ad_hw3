import React from "react";
import { useDispatch } from "react-redux";
import { toggleCheck } from "../features/checkSlice";

const CheckItem = ({ checkItem }) => {
  const dispatch = useDispatch();
  return (
    <div className="check-item">
      <label>
        <input
          type="checkbox"
          name=""
          id=""
          checked={checkItem.checked ? true : false}
          onChange={() => dispatch(toggleCheck({ id: checkItem.id }))}
        />
        <span>{checkItem.name}</span>
      </label>
    </div>
  );
};

export default CheckItem;

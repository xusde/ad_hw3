import CheckItem from "./CheckItem";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearAll, selectAll } from "../features/checkSlice";

const CheckboxContainer = () => {
  const checkList = useSelector((state) => state.check);
  const dispatch = useDispatch();

  const checkAllSelected = () => {
    return checkList.every((checkItem) => checkItem.checked === true);
  };
  let isAllSelected = checkAllSelected();

  const fireClearAll = () => {
    dispatch(clearAll());
  };
  const fireSelectAll = () => {
    dispatch(selectAll());
  };
  return (
    <div className="checkbox-container">
      <div className="select-all">
        <label>
          <input
            type="checkbox"
            name=""
            id=""
            checked={isAllSelected ? true : false}
            onChange={isAllSelected ? fireClearAll : fireSelectAll}
          />
          <span>Select All</span>
        </label>
      </div>
      {checkList.map((checkItem) => {
        return <CheckItem key={checkItem.id} checkItem={checkItem} />;
      })}

      <hr />
    </div>
  );
};

export default CheckboxContainer;

import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Banner = () => {
  const checkList = useSelector((state) => state.check);
  const getSelectedItems = (): any[] => {
    const checkedItems = checkList.filter((checkItem) => checkItem.checked);
    return checkedItems.map((item) => item.name);
  };
  let seletedItems = getSelectedItems().join(", ");

  return (
    <div className="banner">
      <p>Selected Value: {seletedItems} </p>
    </div>
  );
};

export default Banner;

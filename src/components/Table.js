import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { todosSelector } from "../store/selectors";
import TableItem from "./TableItem";

let Table = (props) => {
  let selector = useSelector(todosSelector);

  let [todosList, setTodosList] = useState([]);

  useEffect(() => {
    setTodosList(selector);
    console.log(selector);
  }, [selector]);
  return (
    <div>
      {todosList.length !== 0 ? (
        todosList.map((item) => <TableItem item={item} />)
      ) : (
        <div className="w-full justify-center flex my-5">Empty</div>
      )}
    </div>
  );
};

export default Table;

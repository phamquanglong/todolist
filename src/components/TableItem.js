import { useDispatch } from "react-redux";
import { deleteTodos } from "../store/actions";

let TableItem = (props) => {
  let { item } = props;

  let dispatchRedux = useDispatch();
  let dispatchTodos = (data) => {
    dispatchRedux(deleteTodos(data));
  };

  return (
    <div className="flex items-center my-3">
      <div className="flex-1 justify-center flex">{item.id}</div>
      <div className="flex-1 justify-center flex">{item.content}</div>
      <div className="flex-1 justify-center flex">{item.date}</div>
      <div className="flex-1 justify-center flex">
        <button
          className="text-white bg-red-400 p-2 rounded-md"
          onClick={() => dispatchTodos(item)}
        >
          delete
        </button>
        <input type="checkbox" className="w-12 h-12 ml-3" />
      </div>
    </div>
  );
};

export default TableItem;

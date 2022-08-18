import Popup from "reactjs-popup";
import Table from "./components/Table";
import "reactjs-popup/dist/index.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, setTodos } from "./store/actions";
import { todosSelector } from "./store/selectors";

function App() {
  let [content, setContent] = useState("");
  let [date, setDate] = useState("");

  let dispatchRedux = useDispatch();
  let dispatchTodos = (data) => {
    dispatchRedux(addTodos(data));
  };

  let selector = useSelector(todosSelector);

  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(selector);
    // console.log(JSON.parse(localStorage.getItem("todos")));
  }, [selector]);

  return (
    <div className="w-screen h-screen flex bg-red-400 items-center justify-center relative">
      <div className="bg-white rounded-md w-1/3 p-5">
        <div className="flex flex-row items-center justify-between w-full mb-5">
          <div className="text-2xl text-red-400 font-bold">Todolist</div>

          <Popup
            trigger={
              <button className="bg-gray-200 px-4 py-2 rounded-full font-bold">
                +
              </button>
            }
            position={"bottom center"}
            onOpen={() => setIsOpen(true)}
            open={isOpen}
          >
            <div className="rounded-md absolute top-0 left-0 p-5 bg-white">
              <input
                placeholder="Content"
                className="p-5"
                onChange={(e) => setContent(e.target.value)}
              />
              <input
                placeholder="Date"
                className="p-5"
                onChange={(e) => setDate(e.target.value)}
              />
              <button
                className="bg-red-400 w-full text-white p-5 mt-5"
                onClick={() => {
                  if (content !== "" && date !== "") {
                    dispatchTodos({
                      id:
                        selector.length > 0
                          ? selector[selector.length - 1].id + 1
                          : 1,
                      content: content,
                      date: date,
                    });
                    setIsOpen(false);
                    setContent("");
                    setDate("");
                  } else {
                    alert("content or date is invalid");
                  }
                  // localStorage.setItem("todos", JSON.stringify(selector));
                }}
              >
                ADD
              </button>
            </div>
          </Popup>
        </div>

        <div className="flex font-bold uppercase">
          <div className="flex-1 justify-center flex">id</div>
          <div className="flex-1 justify-center flex">content</div>
          <div className="flex-1 justify-center flex">date</div>
          <div className="flex-1 justify-center flex">action</div>
        </div>
        <Table />
      </div>
    </div>
  );
}

export default App;

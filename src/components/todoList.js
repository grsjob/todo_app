import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../store/actions/todo-actions";
import {selectVisibleTodos} from "../store/selectors/todos-selectors"
import { selectActiveFilter } from "../store/selectors/filter-selectors";


export const TodoList = () => {
    const activeFilter = useSelector(selectActiveFilter)
    const todoList = useSelector(state => selectVisibleTodos(state,activeFilter))
    const dispatch = useDispatch();

    return (
        <ul>
            {todoList.map((item) => (
            <li key={item.id}>
                <input
                type="checkbox"
                checked={todoList.completed}
                onChange={() => dispatch(toggleTodo(item.id))}
                />
                {item.title}
                <button onClick={() => dispatch(removeTodo(item.id))}>
                delete
                </button>
            </li>
            ))}
      </ul>
    )
}

import { useGetTodosQuery } from "../../store/reducers/todoSlice";

const Todo = () => {
    const { data, isLoading, isSuccess } = useGetTodosQuery();

    if (isLoading) {
        return <>it is loading</>
    }

    return (
        <div style={{ marginTop: "50px", marginLeft: "20px" }}>
            List of todos
            {
                data.map((todo) => {
                    return (
                        <div key={todo.id}>
                            {todo.title}
                        </div>
                    )
                })
            }
        </div>
    )
};
export default Todo;
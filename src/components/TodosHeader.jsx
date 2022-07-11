import StyledTodosHeader from "../assets/styles/components/StyledTodosHeader";
import StyledFilterTodos from "../assets/styles/components/StyledFilterTodos";
import StyledButton from "../assets/styles/components/StyledButton"

const TodosHeader = () => {
  return (
    <StyledTodosHeader>
      <StyledButton primary>add task</StyledButton>
      <StyledFilterTodos>
        <option value="all">all</option>
        <option value="active">active</option>
        <option value="completed">completed</option>
      </StyledFilterTodos>
    </StyledTodosHeader>
  );
}

export default TodosHeader
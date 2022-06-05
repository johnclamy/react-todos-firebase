import { StyledListItem } from "../assets/styles/ListItem.styled";
import { StyledLabel } from "../assets/styles/Label.styled";
import { StyledInput } from "../assets/styles/Input.styled"
import { StyledButton } from "../assets/styles/Button.styled";

const Todo = ({ todo }) => {

  const handleClick = () => {
    console.log('click it!')
  }

  return (
    <StyledListItem>
      <StyledLabel>
        <StyledInput>
          <input type="checkbox" />
          <span>{todo.task}</span>
        </StyledInput>
        <StyledButton type="button" onClick={handleClick}>
          delete
        </StyledButton>
      </StyledLabel>
    </StyledListItem>
  );
}

export default Todo
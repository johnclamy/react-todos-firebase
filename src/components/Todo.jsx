import { StyledListItem } from "../assets/styles/ListItem.styled";
import { StyledLabel } from "../assets/styles/Label.styled";
import { StyledInput } from "../assets/styles/Input.styled"
import { StyledButton } from "../assets/styles/Button.styled";
import { StyledTrashIcon } from "../assets/styles/TrashIcon.styled"
import TrashIcon from "../assets/icons/Trash"

const Todo = ({ todo }) => {

  const handleClick = () => {
    console.log('click it!')
  }

  return (
    <StyledListItem>
      <StyledLabel>
        <StyledInput>
          <input type="checkbox" checked={todo.checked} />
          <span>{todo.task}</span>
        </StyledInput>
        <StyledButton type="button" onClick={handleClick}>
          <StyledTrashIcon>
            <TrashIcon />
          </StyledTrashIcon>
        </StyledButton>
      </StyledLabel>
    </StyledListItem>
  );
}

export default Todo
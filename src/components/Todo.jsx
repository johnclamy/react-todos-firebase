import { StyledListItem } from "../assets/styles/ListItem.styled";
import { StyledLabel } from "../assets/styles/Label.styled";
import { StyledInput } from "../assets/styles/Input.styled";
import { StyledText } from "../assets/styles/Text.styled";
import { StyledButton } from "../assets/styles/Button.styled";
import { StyledTrashIcon } from "../assets/styles/TrashIcon.styled";
import TrashIcon from "../assets/icons/Trash";

const Todo = ({
  todo = {},
  onToggleCheckedState = (f) => f,
  onDeleteButtonClick = (f) => f
}) => (
  <StyledListItem>
    <StyledLabel>
      <StyledInput>
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={() => onToggleCheckedState(todo.id)}
        />
        <StyledText completed={todo.checked}>
          {todo.task}
        </StyledText>
      </StyledInput>
      <StyledButton
        type="button"
        onClick={() => onDeleteButtonClick(todo.id)}
      >
        <StyledTrashIcon>
          <TrashIcon />
        </StyledTrashIcon>
      </StyledButton>
    </StyledLabel>
  </StyledListItem>
);

export default Todo
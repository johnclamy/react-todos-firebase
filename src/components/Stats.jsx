import { StyledStats } from "../assets/styles/Stats.styled"

const Stats = ({ todos }) => {
  return (
    <StyledStats>
      <p>
        total items:
        <span>{todos.length}</span>
      </p>
      <p>
        completed:
        <span>{todos.filter((todo) => todo.checked === true).length}</span>
      </p>
    </StyledStats>
  );
}

export default Stats
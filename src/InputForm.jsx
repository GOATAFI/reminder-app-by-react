import PropTypes from "prop-types";

function InputForm({ userInput: { reminderText, dueDate }, setUserInput }) {
  return (
    <form>
      <input
        value={reminderText}
        id="reminderText"
        type="text"
        placeholder="What do you want to do?"
      />
      <input value={dueDate} id="dueDate" type="date" />
      <button>Add Item</button>
    </form>
  );
}

InputForm.propTypes = {
  userInput: PropTypes.shape({
    reminderText: PropTypes.string,
    dueDate: PropTypes.string,
  }),
  setUserInput: PropTypes.func,
};

const date = new Date();
const formattedDate = date.toISOString().substr(0, 10);

InputForm.defaultProps = {
  userInput: {
    reminderText: "",
    dueDate: formattedDate,
  },
};

export default InputForm;

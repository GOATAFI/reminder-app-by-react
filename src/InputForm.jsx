export default function InputForm(props) {
  return (
    <form>
      <input
        type="text"
        name=""
        id="reminderText"
        placeholder="What do you want to do ?"
      />
      <input type="date" name="" id="dueDate" />
      <button>Add Item</button>
    </form>
  );
}

export default function Reminder(props) {
  return (
    <div>
      Item : {props.reminderText}
      Due Date : {props.dueDate}
      Completed ? : {String(props.isComplete)}
    </div>
  );
}

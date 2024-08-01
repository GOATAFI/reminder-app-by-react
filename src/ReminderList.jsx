import Reminder from "./Reminder";

export default function ReminderList(props) {
  const reminders = props.reminders.map((reminder, index) => {
    return (
      <Reminder
        reminderText={reminder.reminderText}
        dueDate={reminder.dueDate}
        isComplete={reminder.isComplete}
        id={index}
        key={index}
      />
    );
  });
  return <div>{reminders}</div>;
}

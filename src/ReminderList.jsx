import Reminder from "./Reminder";

export default function ReminderList(props) {
  return (
    <div>
      <Reminder
        reminderText="pick up Mafi"
        dueDate="2024-01-15"
        isComplete={false}
      />
      <Reminder
        reminderText="pick up Mafi"
        dueDate="2024-01-15"
        isComplete={false}
      />
      <Reminder
        reminderText="pick up Mafi"
        dueDate="2024-01-15"
        isComplete={false}
      />
      <Reminder
        reminderText="pick up Mafi"
        dueDate="2024-01-15"
        isComplete={false}
      />
    </div>
  );
}

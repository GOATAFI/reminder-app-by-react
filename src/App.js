import { useState } from "react";
import FilterSelect from "./FilterSelect";
import InputForm from "./InputForm";
import ReminderList from "./ReminderList";

function App() {
  const [reminders, setReminders] = useState();
  const [userInput, setUserInput] = useState();
  const [selectedFilter, setSelectedFilter] = useState("all");
  return (
    <div>
      <InputForm userInput={userInput} setUserInput={setUserInput} />
      <FilterSelect
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <ReminderList reminders={reminders} />
    </div>
  );
}

export default App;

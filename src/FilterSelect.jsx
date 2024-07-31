export default function FilterSelect(props) {
  return (
    <label htmlFor="filterReminders">
      {" "}
      Show Tasks Due :
      <select name="" id="filterReminders" value="2day">
        <option value="2day">Within 2 Days</option>
        <option value="1week">Within 1 Week</option>
        <option value="30days">Within 30 Days</option>
        <option value="all">Any Day</option>
      </select>
    </label>
  );
}

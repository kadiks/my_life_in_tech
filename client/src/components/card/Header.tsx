export default ({ handle, date }) => {
  const dateObj = new Date(date);
  const month = dateObj.getMonth() + 1;
  const dateMonth = month < 10 ? `0${month}` : month;
  const dateStr = `${dateObj.getDate()}/${dateMonth}`;
  return (
    <div className="card-header">
      <h3>{handle === '' ? 'Anonyme' : handle}</h3>
      <time dateTime={date}>{dateStr}</time>
    </div>
  );
};

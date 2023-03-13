
const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  );
}

const Content = (props) => {
  return (
    <p>{props.part} {props.exercses}</p>
  );
}

const Total = (props) => {
  return (
    <p>Number of exersises {props.total}</p>
  );
}

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercses1 = 10;
  const part2 = 'Using props to pass data';
  const exercses2 = 7;
  const part3 = 'State of a component';
  const exercses3 = 14;

  return (
    <div>
      <Header title={course} />

      <Content part={part1} exercses={exercses1} />
      <Content part={part2} exercses={exercses2} />
      <Content part={part3} exercses={exercses3} />

      <Total total={exercses1 + exercses2 + exercses3} />
    </div>
  );
}

export default App;
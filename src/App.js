
const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  );
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercses}</p>
  );
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercses={props.exercses1} />
      <Part part={props.part2} exercses={props.exercses2} />
      <Part part={props.part3} exercses={props.exercses3} />
    </div>
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

      <Content part1={part1} exercses1={exercses1}
              part2={part2} exercses2={exercses2}
              part3={part3} exercses3={exercses3} />

      <Total total={exercses1 + exercses2 + exercses3} />
    </div>
  );
}

export default App;
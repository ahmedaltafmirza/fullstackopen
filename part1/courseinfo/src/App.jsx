const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14


  return (
    <div>
      <Header course={course.name} />
      {/* <Part name={part1.name} exercises={part1.exercises}  />
      <Part name={part2.name} exercises={part2.exercises}  />
      <Part name={part3.name} exercises={part3.exercises}  /> */}
      <Total ex1={course.parts[0].exercises} ex2={course.parts[1].exercises} ex3={course.parts[2].exercises}/>
      <Content
        name1={course.parts[0].name} exercises1={course.parts[0].exercises} 
        name2={course.parts[1].name} exercises2={course.parts[1].exercises}
        name3={course.parts[2].name} exercises3={course.parts[2].exercises} 
        
      />

    </div>
  )
}

//THE PART NAMES MUST MATCH AS DEFINED IN H2 OF PART.
const Content = (props) => {
  console.log(props)
  return(
    <div>
    <Part name={props.name1} exercises={props.exercises1}/>
    <Part name={props.name2} exercises={props.exercises2}/>
    <Part name={props.name3} exercises={props.exercises3}/>      
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return(
    <div>
      <h2>{props.name} {props.exercises}</h2>
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}



const Total = (props) => {
  console.log(props)
  return(
    <div>
      <h3>total number of ex is: {props.ex1 + props.ex2 + props.ex3}</h3>
     
    </div>
  )
}






export default App

const Course = ({ course }) => {
    const Header = ({ course }) => {
        return <h1>{course.name}</h1>;
    };
    
    const Content = ({ parts }) => {
        return (
        <>
            {parts.map((part) => (
            <Part key={part.id} part={part} />
            ))}
        </>
        );
    };
    
    const Part = ({ part }) => {
        return <p>{part.name} {part.exercises}</p>;
    };
    
    const Total = ({ parts }) => {
        const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
        return <p>Number of exercises {totalExercises}</p>;
    };
    
    return (
        <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
        </div>
    );
    }

export default Course;
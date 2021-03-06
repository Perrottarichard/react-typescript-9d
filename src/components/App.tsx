import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const App: React.FC = () => {
    const courseName = "Half Stack Application Development";
    const courseParts = [
        {
            name: "Fundamentals",
            exerciseCount: 10
        },
        {
            name: "Using props to pass data",
            exerciseCount: 7
        },
        {
            name: "Deeper type usage",
            exerciseCount: 14
        }
    ];
    return (
        <div>
            <Header courseName={courseName} />
            <Content courseParts={courseParts} />
            <Total courseParts={courseParts} />
        </div>
    )
};
export default App;
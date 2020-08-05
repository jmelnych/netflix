import React from 'react';
import './title.scss';

class Title extends React.Component {
    render() {
        const homeworkCount = 2;

        return (
            <h1 className="title">Homework #{homeworkCount}</h1>
        )
    }
}

export default Title;

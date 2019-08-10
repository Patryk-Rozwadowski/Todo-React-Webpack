import React from 'react';
import style from './Title.css';
const Title = props => <h2 className={style.TodoTitle}>{props.title}{props.taskNumber}</h2>;
export default Title;
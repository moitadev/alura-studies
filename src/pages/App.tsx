import { useState } from 'react';
import Form from '../components/Form/form';
import List from '../components/List/list';
import Timer from '../components/Timer/timer';
import style from './App.module.scss'
import { ITask } from '../types/task';

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Timer />
    </div>
  );
}

export default App;

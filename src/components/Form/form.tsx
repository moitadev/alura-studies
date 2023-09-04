import { useState } from 'react';
import Button from '../Button/button';
import style from './form.module.scss';
import { ITask } from '../../types/task';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export default function Form({ setTasks }: Props) {
  const [task, setTask] = useState('');
  const [time, setTime] = useState('00:00');
  function addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      {
        task,
        time,
        selected: false,
        completed: false,
        id: uuidv4(),
      },
    ]);
    setTask('');
    setTime('00:00');
  }
  return (
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          id="tempo"
          min="00:00:00"
          max="24:00:00"
          pattern="^(24:00)|((0[1-9]|1\d|2[0-3]):([0-5]\d))|(00:(0[1-5]|[1-9]0|[1-5][1-9]))$"
          required
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}

import { ITask } from '../../../types/task';
import style from './listitem.module.scss';

interface Props extends ITask {
  selectTask: (selectTask: ITask) => void;
}

export default function ListItem({
  task,
  time,
  selected,
  completed,
  id,
  selectTask,
}: Props) {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelecionado : ''} ${
        completed ? style.itemCompletado : ''
      }`}
      onClick={() => 
        !completed && selectTask({
          task,
          time,
          selected,
          completed,
          id,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && <span className={style.concluido} aria-label='task finished'></span>}
    </li>
  );
}

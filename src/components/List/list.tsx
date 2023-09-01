import { ITask } from '../../types/task';
import ListItem from './ListItem/listitem';
import style from './list.module.scss';

function List({tasks}: {tasks: ITask[]}) {
  return (
    <aside className={style.listaTarefas}>
      <h2>
        Estudos do dia
      </h2>
      <ul>
        {tasks.map((item, index) => (
          <ListItem {...item} key={index} />
        ))}
      </ul>
    </aside>
  );
}

export default List;

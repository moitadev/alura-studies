import { ITask } from "../../../types/task";
import style from "./listitem.module.scss";

export default function ListItem({ task, time, selected, completed, id }: ITask) {
  console.log("utem atual: ", { task, time, selected, completed, id });
  return (
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}
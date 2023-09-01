import style from "./listitem.module.scss";

export default function ListItem({ task, time }: { task: string, time: string }) {
  return (
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}
import style from './clock.module.scss';

interface Props {
  time: number | undefined;
}

export default function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteTens, minuteUnits] = String(minutes).padStart(2, '0');
  const [secondTens, secondUnits] = String(seconds).padStart(2, '0');
  return (
    <>
      <span className={style.relogioNumero}>{minuteTens}</span>
      <span className={style.relogioNumero}>{minuteUnits}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondTens}</span>
      <span className={style.relogioNumero}>{secondUnits}</span>
    </>
  );
}

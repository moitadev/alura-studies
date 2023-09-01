import Button from '../Button/button';
import Clock from './Clock/clock';
import style from './timer.module.scss';

export default function Timer() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button>Começar!</Button>
    </div>
  );
}

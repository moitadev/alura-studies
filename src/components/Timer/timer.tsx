import { useState, useEffect } from 'react';
import timeToSeconds from '../../common/utilities/date';
import { ITask } from '../../types/task';
import Button from '../Button/button';
import Clock from './Clock/clock';
import style from './timer.module.scss';

interface Props {
  selected: ITask | undefined,
  finishTask: () => void,
}

export default function Timer({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if(counter > 0) {
        setTime(counter - 1);
        return regressive(counter - 1);
      }
      finishTask();
    }, 1000)
  }
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressive(time)}>
        Começar!
      </Button>
    </div>
  );
}

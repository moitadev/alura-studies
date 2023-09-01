import Form from '../components/Form/form';
import List from '../components/List/list';
import Timer from '../components/Timer/timer';
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Timer />
    </div>
  );
}

export default App;

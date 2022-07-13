import { FC } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';

import './App.css';
import { decrement, increment, login } from './actions';

const App: FC = () => {
  const counter = useAppSelector((state) => state.counter);
  const isLogin = useAppSelector((state) => state.isLogin);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <h1>Hello Redux(TS)</h1>
      <h3>カウント：{counter}</h3>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h3>{isLogin ? 'ログイン済み' : 'ログインしてください'}</h3>
      <button onClick={() => dispatch(login())}>
        {isLogin ? 'ログアウト' : 'ログイン'}
      </button>
    </div>
  );
};

export default App;

import './App.css';
import AppRouters from "./route/AppRouters";
import {Link} from "react-router-dom";

function App() {

  return (
        <div className='App'>
            <div style={{marginBottom: '20px'}}>
                Для использования redux saga или redux thunk нужно в index.js файле в компоненте Provider заменить нужный store.
            </div>
            <Link className='link' to={'/redux-saga'}> redux-saga</Link>
            <Link className='link' to={'/redux-thunk'}> redux-thunk</Link>
            <AppRouters />
        </div>
  );
}

export default App;

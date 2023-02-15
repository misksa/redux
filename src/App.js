import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {

    // диспетчер/диспатч изменяет состояние обращаясь к редюсеру
    const dispatch = useDispatch()

    // полуаем state с помощью хука useSelector, в него передается callback функция в оторую передается state
    const cash = useSelector(state => state.cash.cash)

    const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})
    }

    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash})
    }

  return (
    <div className="App">
        <div>
            <button
                onClick={() => addCash(Number(prompt()))}
            >
                Пополнить счет
            </button>
            <button
                onClick={() => getCash(Number(prompt()))}
                style={{marginLeft: "15px"}}
            >
                Снять со счета
            </button>
        </div>
        <div style={{marginTop: "15px", fontSize: '2em'}}>
            {cash}
        </div>
    </div>
  );
}

export default App;

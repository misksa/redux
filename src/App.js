import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {addCashAction, getCashAction} from "./store/cashReducer";

function App() {

    // диспетчер/диспатч изменяет состояние обращаясь к редюсеру
    const dispatch = useDispatch()

    // полуаем state с помощью хука useSelector, в него передается callback функция в оторую передается state
    const cash = useSelector(state => state.cash.cash)

    const customers = useSelector(state => state.customers.customers)


    const getCash = (cash) => {
        dispatch(getCashAction(cash))
    }

    const addCash = (cash) => {
        dispatch(addCashAction(cash))
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
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
            <button
                onClick={() => addCustomer(prompt())}
                style={{marginLeft: "15px"}}
            >
                Добаваить клиента
            </button>
        </div>
        <div style={{marginTop: "15px", fontSize: '2em'}}>
            {cash}
        </div>
        {
            customers.length > 0 ?
                <div style={{fontSize: '2rem', marginTop: '20px'}}>
                    Клиенты:
                    {customers.map(customer =>
                        <div
                            onClick={() => removeCustomer(customer)}
                            style={{cursor: "pointer", border: "1px solid black", borderRadius: '4px', marginTop: '10px'}}

                        >
                            {customer.name}
                        </div>
                    )}
                </div>
                :
                <div style={{fontSize: '2rem', marginTop: '20px'}}>
                    Клиенты отсуствуют!
                </div>
        }
    </div>
  );
}

export default App;

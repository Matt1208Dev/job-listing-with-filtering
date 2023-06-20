import { Provider } from "react-redux";
import { store } from "./Redux/store";
import "./App.css";
import Listing from "./Components/Listing/Listing";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Listing />
            </div>
        </Provider>
    );
}

export default App;

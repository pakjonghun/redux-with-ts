import { Provider } from "react-redux";
import Demo from "./demo";
import store from "./state/store";

function App() {
  return (
    <Provider store={store}>
      <Demo />
    </Provider>
  );
}

export default App;

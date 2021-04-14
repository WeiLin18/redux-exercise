import Header from "./common/Header";
import GlobalStyle from "./styles.js";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/home";
import Details from "./pages/details";
export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/details/:id" exact component={Details} />
      </BrowserRouter>
    </Provider>
  );
}

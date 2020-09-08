import React from "react";
import Firebase, { FirebaseContext } from "./components/firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Routes from "./constants/routes";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MainView from "./components/MainView/mainView";
import "./App.scss";
import AdminLanding from "./components/admin/landing/adminLanding";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path={Routes.ADMIN_LOGIN}
          component={AdminLanding}
        />
        <Route path={Routes.home}>
          <div className="App">
            <Header />
            <MainView />
            <Footer />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

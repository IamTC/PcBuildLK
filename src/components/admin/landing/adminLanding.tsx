import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import * as AdminRoutes from "../adminRoutes";
import { AdminLoginForm } from "../login/adminLogin";
import { ADMIN_LOGIN } from "../../../constants/routes";

class AdminLanding extends React.Component<any, any> {
  render() {
    const { path, url } = this.props.match;

    if (this.props.location.pathname === ADMIN_LOGIN) {
      this.props.history.push(`${ADMIN_LOGIN}${AdminRoutes.LOGIN}`);
    }

    return (
      <Router>
        <Switch>
          <Route exact={true} path={`${path}${AdminRoutes.DASHBOARD}`}>
            <div></div>
          </Route>
          <Route exact={true} path={`${path}${AdminRoutes.LOGIN}`}>
            <AdminLoginForm />
          </Route>
        </Switch>
        <div className=""></div>
      </Router>
    );
  }
}
export default withRouter(AdminLanding);

import React from "react";
import { FirebaseContext, withFirebase } from "../../firebase";
import * as ROUTES from "../../../constants/routes";
import { compose } from "recompose";

import "./adminLogin.scss";
import { withRouter } from "react-router-dom";

interface state {
  email: string;
  pwd: string;
  error: any;
}

const INITIAL_STATE: state = {
  email: "",
  pwd: "",
  error: null,
};

class AdminLogin extends React.Component<
  { firebase: any; history: any },
  { email: string; pwd: string; error: any }
> {
  constructor(props: any) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
  onChangePwd = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ pwd: event.target.value });
  };

  onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value });
  };

  onSubmit = (event: any) => {
    event.preventDefault();

    const { email, pwd, error } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, pwd)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        // this.props.history.push(ROUTES.home);
      })
      .catch((error: any) => {
        this.setState({ error });
      });
  };

  render() {
    const { email, pwd, error } = this.state;
    const isInvalid = pwd === "" || email === "";

    return (
      <form onSubmit={this.onSubmit}>
        <div
          id="admin-login-container"
          className="mx-auto rounded max-w-sm shadow-lg mt-56 p-1 text-center"
        >
          <h3 id="login-text" className="mb-3 text-center">
            Login
          </h3>
          <input
            id="username"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mb-3"
            type="email"
            placeholder="jane@example.com"
            value={this.state.email}
            onChange={this.onChangeEmail}
          />
          <input
            id="pwd"
            className="bg-white mb-2 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="password"
            placeholder="password"
            value={this.state.pwd}
            onChange={this.onChangePwd}
          />

          <button
            disabled={isInvalid}
            type="submit"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded shadow"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

const AdminLoginForm = compose(withRouter, withFirebase)(AdminLogin);

export default AdminLogin;
export { AdminLoginForm };

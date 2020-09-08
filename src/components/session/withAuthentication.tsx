import React from "react";
import AuthUserContext from "./context";

const withAuthentication = (Component: new () => React.Component) => {
  class WithAuthentication extends React.Component<any, any> {
    listener: any;
    props: any;

    constructor(props: any) {
      super(props);

      this.state = {
        authUser: null,
      };
    }

    componentDidMount = () => {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        (authUser: any) => {
          authUser
            ? this.setState({ authUser })
            : this.setState({ authUser: null });
        }
      );
    };

    componentWillMount = () => {
      this.listener();
    };

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }
  return WithAuthentication;
};

export default withAuthentication;

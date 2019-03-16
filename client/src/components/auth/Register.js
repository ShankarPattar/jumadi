import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      gender: "",
      dob: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    console.log("e.target.value->", e.target);

    this.setState({ [e.target.name]: e.target.value });
    console.log("this state-->", this.state);
  };

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      dob: this.state.dob,
      gender: this.state.gender
    };
    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="register">
        <div className="container">
          <h2 className="text-center col-md-12">JUMADI</h2>
          <div className="row ">
            <div className="col-md-4 bg-secondary m-auto form-padding">
              <form noValidate onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <TextFieldGroup
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                  info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
                />
                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <TextFieldGroup
                  placeholder="Confirm Password"
                  name="password2"
                  type="password"
                  value={this.state.password2}
                  onChange={this.onChange}
                  error={errors.password2}
                />

                <label className="control-label col-sm-4">
                  <input
                    className="radio-inline"
                    name="gender"
                    type="radio"
                    value={"M"}
                    onChange={this.onChange}
                  />
                  Male
                </label>
                <label className="control-label col-sm-4">
                  <input
                    className="radio-inline"
                    name="gender"
                    type="radio"
                    value={"F"}
                    onChange={this.onChange}
                  />
                  Female
                </label>
                <label className="control-label col-sm-4">
                  <input
                    className="radio-inline"
                    name="gender"
                    type="radio"
                    value={"O"}
                    onChange={this.onChange}
                  />
                  Other
                </label>
                {errors.gender && (
                  <label className="text-danger small"> {errors.gender}</label>
                )}
                <br />

                <div className="form-group">
                  <label className="col-sm-4">Date Of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    max="3000-12-31"
                    min="1000-01-01"
                    value={this.state.dob ? this.state.dob : ""}
                    onChange={this.onChange}
                  />
                  {errors.dob && (
                    <label className="text-danger small"> {errors.dob}</label>
                  )}
                </div>
                <p className="small font-italic">
                  confirm by clicking 'Join Jumadi' you are aggree to Jumadi's
                  policies
                </p>
                <div className="col text-center">
                  <Link type="submit" to="/register">
                    <button
                      type="submit"
                      onClick={this.onSubmit}
                      className="btn btn-default"
                    >
                      Join Jumadi
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));

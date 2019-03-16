import React, { Component } from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";

class BasicInfo extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
    console.log("propsss---->", this.props.getCurrentProfile());
  }

  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      company: "",
      website: "",
      location: "",
      status: "",
      skills: "",
      githubusername: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      errors: {}
    };

    //this.onChange = this.onChange.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    console.log("props---->", this.props);
    return (
      <div className="form-padding">
        <div className="form-group">
          <button>Overview</button>

          <button>Basic Info</button>

          <button>Passion</button>

          <button>Education and Work</button>

          <button>Life Style </button>
        </div>
        <form noValidate onSubmit={this.onSubmit}>
          <label className="row">
            Full Name :
            <TextFieldGroup
              placeholder="Name"
              name="fname"
              value={"jj"}
              onChange={""}
              error={""}
            />
          </label>
          <label className="row">
            Date Of Birth :
            <input
              type="date"
              name="dob"
              max="3000-12-31"
              min="1000-01-01"
              onChange={this.onChange}
            />
          </label>
          <label className="row">
            Gender :
            <label className="control-label">
              <input
                className="radio-inline"
                name="gender"
                type="radio"
                value={"M"}
                onChange={this.onChange}
              />
              Male
            </label>
            <label className="control-label">
              <input
                className="radio-inline"
                name="gender"
                type="radio"
                value={"F"}
                onChange={this.onChange}
              />
              Female
            </label>
            <label className="control-label">
              <input
                className="radio-inline"
                name="gender"
                type="radio"
                value={"O"}
                onChange={this.onChange}
              />
              Other
            </label>
          </label>

          <label className="row">
            Birth Place :
            <TextFieldGroup
              placeholder="Which city you are born in ?"
              name="bplace"
              onChange={""}
              error={""}
            />
          </label>
          <label className="row">
            Current City:
            <TextFieldGroup
              placeholder="Which city you are living in ?"
              name="ccity"
              onChange={""}
              error={""}
            />
          </label>
          <label className="row">
            Mobile No:
            <TextFieldGroup
              placeholder="9999999999"
              name="mno"
              onChange={""}
              error={""}
            />
          </label>
          <label className="row">
            Email:
            <TextFieldGroup
              placeholder="ex@mail.com"
              name="email"
              onChange={""}
              error={""}
            />
          </label>
          <label className="row">
            Permanent Address:
            <button> Add</button>
          </label>
          <label className="row">
            Present Address:
            <button> Add</button>
          </label>
        </form>
        <label className="row">
          <button> Public</button>
          <button> Save</button>
          <button> Cancel</button>
        </label>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(withRouter(BasicInfo));

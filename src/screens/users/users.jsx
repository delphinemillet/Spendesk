import React from "react";
import PropTypes from "prop-types";
import Dropzone from "../../components/dropzone";

const Users = ({ onDrop }) => (
  <React.Fragment>
    <h1>Invite your collaborators</h1>

    <Dropzone accept="text/csv" onDrop={onDrop}>
      <p>Only CSV files will be accepted</p>
    </Dropzone>
  </React.Fragment>
);

Users.propTypes = {
  users: PropTypes.array,
  onDrop: PropTypes.func
};

Users.defaultProps = {
  users: [],
  onDrop: undefined
};

export default Users;

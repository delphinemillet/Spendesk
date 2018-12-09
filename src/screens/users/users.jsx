import React from "react";
import PropTypes from "prop-types";
import Dropzone from "../../components/dropzone";
import Table from "../../components/table";

const Users = ({ header, data, onDrop, editUser }) => (
  <React.Fragment>
    <h1>Invite your collaborators</h1>

    <Dropzone accept="text/csv" onDrop={onDrop}>
      <p>Only CSV files will be accepted</p>
    </Dropzone>

    <Table header={header} content={data} onChange={editUser} />
  </React.Fragment>
);

Users.propTypes = {
  header: PropTypes.array,
  data: PropTypes.array,
  onDrop: PropTypes.func
};

Users.defaultProps = {
  header: [],
  data: [],
  onDrop: undefined
};

export default Users;

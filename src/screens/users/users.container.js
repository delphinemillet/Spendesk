import { connect } from "react-redux";
import Component from "./users";
import { USERS_HEADERS } from "./users.constants";
import { importUsers, editUser } from "../../redux/actions/users";

const mapStateToProps = state => {
  const { header, data } = state.users;
  return {
    header: header.map(title => USERS_HEADERS[title]),
    data
  };
};
const mapDispatchToProps = dispatch => ({
  onDrop: accepted => dispatch(importUsers(accepted)),
  editUser: (event, row, index) =>
    dispatch(editUser({ value: event.target.value, position: { row, index } }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

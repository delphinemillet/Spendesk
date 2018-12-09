import { connect } from "react-redux";
import Component from "./users";
import { USERS_HEADERS } from "./users.constants";
import { importUsers } from "../../redux/actions/users";

const mapStateToProps = state => {
  const { header, data } = state.users;
  return {
    header: header.map(title => USERS_HEADERS[title]),
    data
  };
};
const mapDispatchToProps = dispatch => ({
  onDrop: accepted => dispatch(importUsers(accepted))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

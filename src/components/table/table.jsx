import React from "react";
import PropTypes from "prop-types";
import "./table.styles.css";

const Table = ({ header, content }) => (
  <table className="table-component">
    <thead>
      <tr>
        {header.map(title => (
          <th key={title}>{title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {content.map((row, index) => (
        <tr key={`row${index}`}>
          {row.map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  header: PropTypes.array,
  content: PropTypes.array
};

Table.defaultProps = {
  header: [],
  content: []
};

export default Table;

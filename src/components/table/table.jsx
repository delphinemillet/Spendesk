import React from "react";
import PropTypes from "prop-types";
import "./table.styles.css";

const Table = ({ header, content, onChange }) => (
  <table className="table-component">
    <thead>
      <tr>
        {header.map((title, index) => (
          <th key={`title${index}`}>{title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {content.map(
        (row, i) =>
          row.length > 0 && (
            <tr key={`row${i}`}>
              {row.map((value, j) => (
                <td key={j}>
                  <input
                    type="text"
                    defaultValue={value}
                    onChange={event => onChange(event, i, j)}
                  />
                </td>
              ))}
            </tr>
          )
      )}
    </tbody>
  </table>
);

Table.propTypes = {
  header: PropTypes.array,
  content: PropTypes.array,
  onChange: PropTypes.func
};

Table.defaultProps = {
  header: [],
  content: [],
  onChange: undefined
};

export default Table;

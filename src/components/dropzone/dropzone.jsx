import React from "react";
import PropTypes from "prop-types";
import DropzoneComponent from "react-dropzone";
import "./dropzone.styles.css";

const Dropzone = ({ accept, onDrop, multiple, children }) => (
  <DropzoneComponent
    className="dropzone-component"
    accept={accept}
    onDrop={onDrop}
    multiple={multiple}
  >
    <p>Drop your file here, or click to select file to upload.</p>
    {children}
  </DropzoneComponent>
);

Dropzone.propTypes = {
  accept: PropTypes.string,
  onDrop: PropTypes.func,
  multiple: PropTypes.bool,
  children: PropTypes.node
};

Dropzone.defaultProps = {
  accept: "",
  onDrop: undefined,
  multiple: false,
  children: null
};

export default Dropzone;

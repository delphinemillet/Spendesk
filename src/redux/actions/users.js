export const IMPORT_USERS = "IMPORT_USERS";

export const SET_HEADER = "SET_HEADER";
export const setHeader = (header = []) => ({
  type: SET_HEADER,
  payload: header
});

export const SET_CONTENT = "SET_CONTENT";
export const setContent = (content = []) => ({
  type: SET_CONTENT,
  payload: content
});

export const importUsers = files => dispatch => {
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = () => {
      const [header, ...content] = reader.result.split("\n");
      dispatch(setHeader(header.split(",")));
      const data = content.map(c => c.split(","));
      dispatch(setContent(data));
    };
    reader.onabort = () => console.log("file reading was aborted");
    reader.onerror = () => console.log("file reading has failed");
    reader.readAsBinaryString(file);
  });
};

export const send = users => {};

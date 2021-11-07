export const addElement = (data) => {
  return {
    type: "ADD",
    payload: data,
  };
};

export const deleteElement = () => {
  return {
    type: "DELETE",
  };
};

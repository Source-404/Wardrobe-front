const intialState = [
  {
    ids: 4,
    name: "tie",
    price: "449",
  },
];

const updateList = (state = intialState, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.push({});
    default:
      return state;
  }
};

export default updateList;

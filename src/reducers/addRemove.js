const intialState = [
  {
    ids: 99,
    name: "WARDROBE",
    price: "000",
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

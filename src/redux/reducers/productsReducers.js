import { ActionType } from "../contants/actionsType";

const initialState = {
  products: [
    {
      id: 1,
      title: "zafar",
      category: "programmer",
    },
  ],
};
export const productsReducers = (state = initialState, { type, paayload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};

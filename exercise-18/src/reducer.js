

export const initialState = [];
export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'UPDATE':
      return state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
    case 'DELETE':
      return state.filter((contact) => contact.id !== action.payload);
    case 'FAVORITE':
      return state.map((contact) =>
        contact.id === action.payload
          ? { ...contact, favorite: !contact.favorite }
          : contact
      );
    default:
      return state;
  }
};

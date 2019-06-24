/*
 * Copyright (c) 2019
 */

const initialState = {
  articles: []
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    default: {
      return state;
    }
  }
};

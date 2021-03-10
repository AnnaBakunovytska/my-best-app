import * as constants from "../constants";

const initialState = {
  color: ''
}

export const changeColor = (state = initialState, action) => {
  switch(action.type) {
    case constants.GREEN_COLOR: {
        return {
            color: 'green'
        };
    }
    case constants.RED_COLOR: {
        return {
            color: 'red'
        };
    }
    case constants.BLUE_COLOR: {
        return {
            color: 'blue'
        };
    }
    default: {
        return state;
    }
  }
};
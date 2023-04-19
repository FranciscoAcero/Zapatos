import { CHANGE_SELECTED_IMAGE } from "../actions/imageActions.js";

const initialState = {
  selectedImage: "",
  selectedImageByReferencia: {},
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SELECTED_IMAGE:
      return {
        ...state,
        selectedImageByReferencia: {
          ...state.selectedImageByReferencia,
          [action.payload.referencia]: action.payload.imagePath,
        },
      };
    default:
      return state;
  }
};

export default imageReducer;
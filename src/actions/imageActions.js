export const CHANGE_SELECTED_IMAGE = "CHANGE_SELECTED_IMAGE";

export const changeSelectedImage = (imagePath, referencia) => ({
  type: CHANGE_SELECTED_IMAGE,
  payload: { imagePath, referencia },
});
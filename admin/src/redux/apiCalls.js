import { loginFailure, loginstart, loginsuccess } from "./userRedux";
import { publicReq, userred } from "../requestmetode";
import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductFailure,
  deleteProductSuccess,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} from "./prodredux";

export const login = async (dispatch, user) => {
  dispatch(loginstart());
  try {
    const res = await publicReq.get("/auth/login", user);
    dispatch(loginsuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicReq.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProducts = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    // const res = await userred.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};
export const updateProducts = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // const res = await userred.update(`/products/${id}`);
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProducts = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userred.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

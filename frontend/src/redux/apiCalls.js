import { loginFailure, loginstart, loginsuccess } from "./userRedux"
import {publicReq} from "../requestmetode"

export const login = async (dispatch, user) => {
    dispatch(loginstart())
    try {
        const res = await publicReq.post("/auth/login",user);
        dispatch(loginsuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}
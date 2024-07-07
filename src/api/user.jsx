import { getCookie } from "../utils/cookie";
import { instance } from "./axios";

export const signUpApi = async (username, password) => {
    try {
        const res = await instance.post("/account/signup/", {
            "username": username,
            "password": password
        });
        if (res.status === 201 || res.status === 200) {
            alert("회원가입에 성공했습니다.");
            window.location.href = "/";
            return res;
        }
        else {
            alert("회원가입에 실패했습니다.");
        }
    } catch (e) {
        console.error(e);
    }
}

export const loginApi = async (username, password) => {
    try {
        const res = await instance.post("/account/signin/", {
            "username": username,
            "password": password
        });
        if (res.status === 200 || res.status === 201) {
            // alert("로그인에 성공했습니다.");
            console.log(getCookie("access_token"));
            // window.location.href = "/";
            return res;
        }
        else {
            alert("로그인에 실패했습니다.");
        }
    } catch (e) {
        console.error(e);
    }
}

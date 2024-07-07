import { setCookie } from "../utils/cookie";
import { instance } from "./axios";

export const signUpApi = async (username, password) => {
    try {
        const res = await instance.post("/account/signup/", {
            "username": username,
            "password": password
        });
        // const access_token = res.data.access_token;
        // const refresh_token = res.data.refresh_token;

        // setCookie("access_token", access_token);
        // setCookie("refresh_token", refresh_token);

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
        // const access_token = res.data.access_token;
        // const refresh_token = res.data.refresh_token;

        // setCookie("access_token", access_token);
        // setCookie("refresh_token", refresh_token);

        if (res.status === 200 || res.status === 201) {
            alert("로그인에 성공했습니다.");
            window.location.href = "/";
            return res;
        }
        else {
            alert("로그인에 실패했습니다.");
        }
    } catch (e) {
        console.error(e);
    }
}

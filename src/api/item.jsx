import { instance } from "./axios";

export const getItemListAPI = async () => {
    try {
        const res = await instance.get("/item/");
        return res;
    } catch (e) {
        console.error(e);
    }
}

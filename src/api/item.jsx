import axios from "axios";

export const getItemListAPI = async () => {
    try {
        const res = await axios.get("https://port-0-paystudy-django-lxlodv5z82196b68.sel5.cloudtype.app/item/");
        console.log(res);
        return res;
    } catch (e) {
        console.error(e);
    }
}

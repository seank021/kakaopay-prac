import { instance } from "./axios";

export const getPointListAPI = async () => {
    try {
        const res = await instance.get("/point/");
        return res;
    } catch (e) {
        console.error(e);
    }
}

export const purchasePointAPI = async (item) => {
    try {
        const res = await instance.post("/api/kakaopay/ready/", {
            "cid": "TC0ONETIME",
            "partner_order_id": "POID1234",
            "partner_user_id": "PUID1234",
            "item_name": item.name,
            "quantity": 1,
            "total_amount": item.price,
            "tax_free_amount": 0,
            "approval_url":"http://localhost:3000/approval",
            "cancel_url":"http://localhost:3000/cancel",
            "fail_url":"http://localhost:3000/fail"
        });
        return res;
    } catch (e) {
        console.error(e);
    }
}

export const approvePointAPI = async (tid, pg_token) => {
    try {
        const res = await instance.post("/api/kakaopay/approve/", {
            "pg_token": pg_token,
            "tid": tid
        });
        return res;
    } catch (e) {
        console.error(e);
    }
}

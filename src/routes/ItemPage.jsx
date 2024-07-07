import React, { useEffect, useState } from "react";
import { getItemListAPI } from "../api/item";

const priceName = {
    1500000: "150만원",
    3000000: "300만원",
    13000: "1만 3천원"
}

export default function ItemPage() {
    const [item, setItem] = useState([]);
    useEffect(() => {
        getItemListAPI().then((res) => {
            setItem(res.data);
        });
    }, []);

    const onClickItem = (item) => {
        console.log(item);
        if (window.confirm(item.name + " 구매하시겠습니까?")) {
            // api 연결
        }
    }

    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr", gap: "10px", width: "100%", height: "300px" }}>
            {item.map((item) => (
                <div key={item.id} onClick={() => onClickItem(item)} className="Box" style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center" }}>
                    <span style={{ fontSize: "30px", textAlign: "center", color: "white" }}>{item.name}</span>
                    <span style={{ fontSize: "20px", textAlign: "center", color: "white" }}>{priceName[item.price]}</span>
                    <span style={{ fontSize: "20px", textAlign: "center", color: "white" }}>재고: {item.stock}개</span>
                </div>
            ))}
        </div>
    );
}

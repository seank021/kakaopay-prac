import React, { useState } from "react";
import { point } from "../data/point";

export default function PointPage() {
    const [quantity, setQuantity] = useState([0, 0, 0, 0, 0, 0]);

    const onClickPoint = (item) => {
        if (quantity[item.id - 1] === 0) {
            alert("충전할 포인트를 입력해주세요.");
            return;
        }
        
        console.log(item);
        if (window.confirm(item.name + " 포인트를 " + quantity[item.id - 1] + "개 충전하시겠습니까?")) {
            // api 연결
        }
    }

    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "10px", width: "100%", height: "300px" }}>
            {point.map((item) => (
                <div key={item.id} onClick={() => onClickPoint(item)} className="Box" style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center" }}>
                    <span style={{ fontSize: "30px", textAlign: "center", color: "white" }}>{item.name}</span>
                    <input type="number" value={quantity[item.id - 1]} onChange={(e) => { setQuantity(quantity.map((q, i) => i === item.id - 1 ? parseInt(e.target.value) : q)) }} onClick={(e) => e.stopPropagation()} style={{ width: "100px", height: "30px", fontSize: "20px", textAlign: "center" }} />
                </div>
            ))}
        </div>
    );
}

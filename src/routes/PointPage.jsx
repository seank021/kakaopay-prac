import React, { useEffect, useState } from "react";
import { getPointListAPI, purchasePointAPI } from "../api/point";

export default function PointPage() {
    const [point, setPoint] = useState([]);
    useEffect(() => {
        getPointListAPI().then((res) => {
            setPoint(res.data);
        });
    }, []);

    const onClickPoint = (item) => {
        console.log(item);
        if (window.confirm(item.name + " 포인트를" + " 충전하시겠습니까?")) {
            purchasePointAPI(item).then((res) => {
                console.log(res);
                window.location.href = res.data.next_redirect_pc_url;
            });
        }
    }

    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "10px", width: "100%", height: "300px" }}>
            {point.map((item) => (
                <div key={item.id} onClick={() => onClickPoint(item)} className="Box" style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center" }}>
                    <span style={{ fontSize: "30px", textAlign: "center", color: "white" }}>{item.name}</span>
                </div>
            ))}
        </div>
    );
}

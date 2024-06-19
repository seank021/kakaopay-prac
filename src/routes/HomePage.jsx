import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr", gap: "10px", width: "100%", height: "300px" }}>
            <Link className="Box" to="/item">
                <span style={{ fontSize: "30px", textAlign: "center", color: "white" }}>아이템 구매</span>
            </Link>
            <Link className="Box" to="/point">
                <span style={{ fontSize: "30px", textAlign: "center", color: "white" }}>포인트 충전</span>
            </Link>
        </div>
    );
}

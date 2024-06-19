import React, { useEffect, useState } from "react";
import { userprofile } from "../data/userprofile";

export default function Header() {
    const [point, setPoint] = useState(0);
    useEffect(() => {
        setPoint(userprofile[0].point);
    }, []);

    return (
        <header className="Header">
            <span style={{ fontSize: "20px", color: "black" }}>잔여 포인트: {point}</span>
        </header>
    );
}

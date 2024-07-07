import React, { useEffect, useState } from "react";
import { getCookie } from "../utils/cookie";

export default function Header() {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (getCookie("access_token")) {
            setIsLogin(true);
        }
    }, []);

    return (
        <header className="Header">
            {isLogin ? (
                <div style={{ display: "flex", direction: "row", gap: "20px" }}>
                    <span>로그인 중</span>
                </div>
            ) : (
                <div style={{ display: "flex", direction: "row", gap: "20px" }}>
                    <a href="/login">로그인</a>
                    <a href="/signup">회원가입</a>
                </div>
            )}
        </header>
    );
}

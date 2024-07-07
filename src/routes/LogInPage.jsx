import React, { useState } from "react";
import { loginApi } from "../api/user";

export default function LogInPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if (!username || !password) {
            alert("모든 항목을 입력해주세요.");
            return;
        }

        await loginApi(username, password);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input type="text" placeholder="유저네임" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="비밀번호" security="true" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>로그인</button>
        </div>
    );
}

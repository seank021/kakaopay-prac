import React, { useState } from "react";
import { signUpApi } from "../api/user";

export default function SignUpPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    const handleSignUp = async () => {
        if (!username || !password || !passwordCheck) {
            alert("모든 항목을 입력해주세요.");
            return;
        }

        if (password !== passwordCheck) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        await signUpApi(username, password);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input type="text" placeholder="유저네임" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="비밀번호" security="true" onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="비밀번호 확인" security="true" onChange={(e) => setPasswordCheck(e.target.value)} />
            <button onClick={handleSignUp}>회원가입</button>
        </div>
    );
}

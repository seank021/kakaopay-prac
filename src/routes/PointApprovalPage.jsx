import React, { useState, useEffect } from "react";
import { approvePointAPI } from "../api/point";

export default function PointApprovalPage() {
    useEffect(() => {
        const url = new URL(window.location.href);
        const pg_token = url.searchParams.get("pg_token");
        
        if (pg_token) {
            approvePointAPI(localStorage.getItem("tid"), pg_token).then((res) => {
                console.log(res);
                window.location.href = "/";
            });
        }
    }, []);

    return (
        <div>
            결제가 완료되었습니다.
        </div>
    );
}

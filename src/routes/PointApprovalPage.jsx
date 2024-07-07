import React, { useEffect } from "react";

export default function PointApprovalPage() {
    useEffect(() => {
        const url = new URL(window.location.href);
        const pg_token = url.searchParams.get("pg_token");
        console.log(pg_token);
    }, []);

    return (
        <div>
            결제가 완료되었습니다.
        </div>
    );
}

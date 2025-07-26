"use client";

import { useEffect } from "react";

const TawkTo = () => {
    useEffect(() => {
        var Tawk_API = window.Tawk_API || {};
        var Tawk_LoadStart = new Date();
        var s1 = document.createElement("script");
        var s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = "https://embed.tawk.to/6435ae134247f20fefeb111d/1gtoqvv1m";
        s1.charset = "UTF-8";
        s1.setAttribute("crossorigin", "*");
        s0.parentNode.insertBefore(s1, s0);
    }, []);

    return null;
};

export default TawkTo;

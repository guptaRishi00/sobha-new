// src/lib/googleSheet.ts

export const getUTMParameters = () => {
    if (typeof window === "undefined") return {};
    const searchParams = new URLSearchParams(window.location.search);
    return {
        utm_source: searchParams.get("utm_source") || "",
        utm_medium: searchParams.get("utm_medium") || "",
        utm_campaign: searchParams.get("utm_campaign") || "",
        utm_term: searchParams.get("utm_term") || "",
        utm_content: searchParams.get("utm_content") || "",
    };
};

export const submitToGoogleSheet = async (data: any) => {
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxcsMAkj0w25SBUbHVNg9BDfJrAts58CIEotl-hO1NfYDGVjweFwSzmug6cza8erSGjcg/exec";

    try {
        await fetch(SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        return true;
    } catch (error) {
        console.error("Submission error:", error);
        return false;
    }
};
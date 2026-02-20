// src/lib/googleSheet.ts
export const submitToGoogleSheet = async (data: { name: string; email: string; phone: string }) => {
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxcsMAkj0w25SBUbHVNg9BDfJrAts58CIEotl-hO1NfYDGVjweFwSzmug6cza8erSGjcg/exec";

    try {
        // We use 'no-cors' because Google Apps Script redirects often cause CORS issues in browsers
        await fetch(SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return true;
    } catch (error) {
        console.error("Submission error:", error);
        return false;
    }
};
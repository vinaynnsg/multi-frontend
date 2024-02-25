// Check the correct path to the "./urls" module
import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
    const options = {
        method: "GET",
        headers: {
            Authorization: "Bearer" + STRAPI_API_TOKEN,
        },
    };

    try {
        // Make sure the endpoint is appended to the correct API_URL
        const res = await fetch(`${API_URL}${endpoint}`, options);
        
        // Ensure that the response is successful before attempting to parse JSON
        if (!res.ok) {
            throw new Error(`Fetch failed with status ${res.status}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        // Handle any errors that may occur during the fetch
        console.error("Error fetching data:", error);
        throw error; // Propagate the error for the caller to handle if needed
    }
};


export const makePaymentRequest = async (endpoint, payload) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
            Authorization: "Bearer" + STRAPI_API_TOKEN,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data;
};

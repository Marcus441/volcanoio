export function buildURL(baseURL, parameters) {
    const url = new URL(baseURL);
    const params = new URLSearchParams();
    
    for (const key in parameters) {
        if (parameters[key]) {
            params.append(key, parameters[key]);
        }
    }
    url.search = params.toString();
    return url.toString();
}
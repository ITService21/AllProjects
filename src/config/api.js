// API Configuration
const getApiBaseUrl = () => {
    // Check if we're in production (deployed domain)
    const isProduction = window.location.hostname === 'growstartup.in' || 
                        window.location.hostname === 'www.growstartup.in';
    
    // Try HTTPS first, fallback to HTTP
    if (isProduction) {
        return 'https://194.164.150.8:5000';
    }
    
    return 'http://194.164.150.8:5000';
};

const API_BASE_URL = getApiBaseUrl();

export const API_ENDPOINTS = {
    SEND_FORM_MAIL: `${API_BASE_URL}/send-form-mail`
};

export default API_BASE_URL;

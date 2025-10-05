// SMTP Configuration from environment variables
export const SMTP_CONFIG = {
    host: import.meta.env.VITE_SMTP_HOST || "smtp.gmail.com",
    port: parseInt(import.meta.env.VITE_SMTP_PORT || "465"),
    secure: import.meta.env.VITE_SMTP_SECURE === "true",
    user: import.meta.env.VITE_SMTP_USER ,
    pass: import.meta.env.VITE_SMTP_PASS  
};

export const SMTP_TO_EMAIL = import.meta.env.VITE_SMTP_TO || "info@growstartup.in";


# 📧 Email API Documentation

## API Endpoint
```
POST http://194.164.150.8:5000/send-form-mail?company=growstartup
```

## Request Structure

### Headers
```json
{
  "Content-Type": "application/json"
}
```

### Payload Format
```json
{
  "to": "recipient@email.com",
  "subject": "Email Subject",
  "fields": {
    "Name": "John Doe",
    "Phone": "1234567890",
    "Email": "john@example.com",
    "Message": "Your message here",
    "Company": "Optional Company Name",
    "Service": "Optional Service",
    "Budget": "Optional Budget"
  }
}
```

## Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `to` | string | Yes | Recipient email address |
| `subject` | string | Yes | Email subject line |
| `fields` | object | Yes | Form data fields |

### Fields Object
The `fields` object is flexible and can contain any key-value pairs based on the form type. Common fields include:

- **Name** - User's full name
- **Phone** - Contact phone number
- **Email** - User's email address
- **Message** - User's message/inquiry
- **Company** - Company name (optional)
- **Service** - Service requested (optional)
- **Budget** - Budget range (optional)
- **Service Scheme** - ARTHA, SURAKSHA, NISHTHA, etc. (optional)

## Example Usage

### Newsletter Subscription
```javascript
fetch('http://194.164.150.8:5000/send-form-mail?company=growstartup', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    to: "user@example.com",
    subject: "Newsletter signup",
    fields: {
      Email: "user@example.com"
    }
  })
})
```

### Contact Form
```javascript
fetch('http://194.164.150.8:5000/send-form-mail?company=growstartup', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    to: "user@example.com",
    subject: "Contact Form Submission",
    fields: {
      Name: "John Doe",
      Phone: "1234567890",
      Email: "user@example.com",
      Company: "Acme Corp",
      "Service Scheme": "PRAGATI",
      Subject: "Business Inquiry",
      Message: "I need help with..."
    }
  })
})
```

### Consultant Booking
```javascript
fetch('http://194.164.150.8:5000/send-form-mail?company=growstartup', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    to: "user@example.com",
    subject: "Consultant Booking Request",
    fields: {
      Name: "Jane Smith",
      Phone: "9876543210",
      Email: "user@example.com",
      Company: "Tech Startup",
      "Service Scheme": "ARTHA",
      Message: "Need funding consultation"
    }
  })
})
```

### Partnership Inquiry
```javascript
fetch('http://194.164.150.8:5000/send-form-mail?company=growstartup', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    to: "partner@company.com",
    subject: "Partnership Inquiry - Tech Corp",
    fields: {
      "Company Name": "Tech Corp",
      "Contact Person": "John Doe",
      "Email": "john@techcorp.com",
      "Phone": "1234567890",
      "Website": "https://techcorp.com",
      "Partnership Type": "Strategic Partner",
      "Business Category": "Technology",
      "Company Size": "50-200 employees",
      "Location": "Mumbai, India",
      "Company Description": "Leading tech solutions provider",
      "Partnership Expectations": "Mutual growth opportunities",
      "Message": "Interested in strategic partnership"
    }
  })
})
```

## Response

### Success (200 OK)
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

### Error (400/500)
```json
{
  "success": false,
  "error": "Error message"
}
```

## Important Notes

1. **Query Parameter**: Always include `?company=growstartup` in the URL
2. **HTTPS/HTTP**: 
   - Production (growstartup.in): Uses HTTPS
   - Development: Uses HTTP
3. **Flexible Fields**: The `fields` object can contain any form data
4. **Field Names**: Use proper capitalization for field names (e.g., "Name", "Email")
5. **Special Characters**: Fields with spaces should be quoted (e.g., "Service Scheme")

## Implementation in Code

All email submissions in the project use the centralized `API_ENDPOINTS.SEND_FORM_MAIL` from `src/config/api.js`:

```javascript
import { API_ENDPOINTS } from "../config/api";

// Usage
const response = await fetch(API_ENDPOINTS.SEND_FORM_MAIL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    to: userEmail,
    subject: "Your Subject",
    fields: { /* your fields */ }
  })
});
```

## Backend Configuration

The email API handles SMTP configuration server-side using the `company=growstartup` query parameter. No SMTP credentials are sent from the frontend.

Server-side SMTP settings:
- Host: smtp.gmail.com
- Port: 465
- Secure: true
- User: info@growstartup.in
- Password: Managed server-side

## Security

✅ SMTP credentials are stored server-side only
✅ No sensitive data exposed in frontend code
✅ Query parameter validates the company
✅ All fields are sanitized server-side

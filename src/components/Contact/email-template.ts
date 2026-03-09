export const generateEmailTemplate = (
  name: string,
  email: string,
  subject: string,
  message: string,
  product?: string,
) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 0;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    .header {
      background-color: #0d1a43;
      color: #ffffff;
      padding: 30px;
      text-align: left;
    }
    .header h1 {
      margin: 0;
      font-size: 26px;
      text-transform: uppercase;
      font-weight: 900;
      display: inline-block;
      vertical-align: middle;
    }
    .content {
      padding: 40px 30px;
    }
    .field {
      margin-bottom: 25px;
    }
    .label {
      font-weight: bold;
      color: #666;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 8px;
      display: block;
    }
    .value {
      font-size: 16px;
      color: #000;
      line-height: 1.5;
    }
    .message-box {
      background-color: #f8f9fa;
      padding: 20px;
      border-left: 4px solid #3a61d7;
      border-radius: 4px;
      font-size: 16px;
    }
    .footer {
      background-color: #f8f9fa;
      text-align: center;
      padding: 20px;
      border-top: 1px solid #eee;
      color: #888;
      font-size: 12px;
    }
    .highlight {
      color: #3a61d7;
    }
  </style>
</head>
<body>
  <div style="padding: 20px; background-color: #f4f4f4; min-height: 100vh;">
    <div class="container">
      <div class="header">
        <h1>GrantImbo.com</h1>
      </div>
      <div class="content">
        <h2 style="margin-top: 0; margin-bottom: 20px; font-size: 20px; color: #111;">New Message Received</h2>
        <p style="margin-bottom: 30px; color: #555;">You have received a new contact form submission via your website.</p>
        
        <div class="field">
          <span class="label">From</span>
          <div class="value"><strong>${name}</strong> (<a href="mailto:${email}" style="color: #CC6A4B; text-decoration: none;">${email}</a>)</div>
        </div>

        <div class="field">
          <span class="label">Subject</span>
          <div class="value">${subject}</div>
        </div>
        ${product ? `
        <div class="field">
          <span class="label">Product</span>
          <div class="value">${product}</div>
        </div>
        ` : ""}

        <div class="field">
          <span class="label">Message</span>
          <div class="message-box">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      </div>
      <div class="footer">
        <p>&copy; ${new Date().getFullYear()} FC Inter-Racial. All rights reserved.</p>
      </div>
    </div>
  </div>
</body>
</html>
  `;
};

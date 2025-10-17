export interface EmailData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export const sendEmailViaMailto = (data: EmailData): void => {
  const subject = encodeURIComponent(`Contact Form Message from ${data.name}`);
  const body = encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'Not provided'}
Phone: ${data.phone || 'Not provided'}
Service Interest: ${data.service || 'Not specified'}

Message:
${data.message}

---
This message was sent from the GloomDev contact form.
  `);

  const mailtoLink = `mailto:info@gloomdev.in?subject=${subject}&body=${body}`;
  window.open(mailtoLink);
};

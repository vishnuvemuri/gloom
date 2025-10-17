export interface EmailData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

// Get API URL based on environment
const getApiUrl = () => {
  // Check if we're in production
  if (import.meta.env.PROD) {
    // In production, always use the backend URL
    return 'https://gloomdev-api.onrender.com';
  }
  // In development, use the proxy from vite.config.ts
  return '/api';
};

export const sendEmail = async (data: EmailData): Promise<{ success: boolean; error?: string }> => {
  try {
    const apiUrl = getApiUrl();
    console.log('API URL being used:', apiUrl);
    console.log('Environment variables:', {
      PROD: import.meta.env.PROD,
      VITE_API_URL: import.meta.env.VITE_API_URL
    });
    const response = await fetch(`${apiUrl}/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Check if response is HTML (error case)
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('text/html')) {
      throw new Error('Received HTML response instead of JSON. Check API URL configuration.');
    }

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Server error');
    }

    console.log('Email sent successfully:', result);
    return { success: true };

  } catch (error) {
    console.error('Email sending failed:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send email' 
    };
  }
};

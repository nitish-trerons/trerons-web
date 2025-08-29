// EmailJS Configuration
// You need to set up an account at https://www.emailjs.com/ and get these credentials

export const emailjsConfig = {
    // Replace these with your actual EmailJS credentials
    serviceId: 'service_ffsbaj2', // Your EmailJS service ID
    templateId: 'template_8n9lxid', // Your EmailJS template ID
    publicKey: 'DAgPjY49_Zp_xNtdY', // Your EmailJS public key
};

// EmailJS Template Variables
export interface EmailTemplateParams {
    from_name: string;
    from_email: string;
    phone: string;
    service_interest: string;
    message: string;
    to_name: string;
}

// Initialize EmailJS (call this in your main.tsx or App.tsx)
export const initEmailJS = () => {
    // This will be called when you're ready to initialize EmailJS
    // import emailjs from '@emailjs/browser';
    // emailjs.init(emailjsConfig.publicKey);
};

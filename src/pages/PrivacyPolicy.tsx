import React from 'react';
import { Button } from '@/components/ui/button';
import { Eye, Lock, Database, Users, Globe } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-20">
            {/* Header */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            How we collect, use, and protect your personal information
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <div className="bg-card rounded-2xl p-8 border border-border">
                            <div className="space-y-8">
                                {/* Introduction */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                                        <Eye className="h-6 w-6 mr-3 text-primary" />
                                        Introduction
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        At Trerons ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed mt-4">
                                        By using our services, you consent to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                                    </p>
                                </div>

                                {/* Information We Collect */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                                        <Database className="h-6 w-6 mr-3 text-primary" />
                                        Information We Collect
                                    </h2>
                                    <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        We may collect personal information that you voluntarily provide to us, including:
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                        <li>Name and contact information (email address, phone number, mailing address)</li>
                                        <li>Company name and job title</li>
                                        <li>Project requirements and specifications</li>
                                        <li>Communication preferences</li>
                                        <li>Payment information (processed securely through third-party providers)</li>
                                    </ul>

                                    <h3 className="text-xl font-semibold mb-3 mt-6">Automatically Collected Information</h3>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        When you visit our website, we automatically collect certain information:
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                        <li>IP address and browser type</li>
                                        <li>Device information and operating system</li>
                                        <li>Pages visited and time spent on our website</li>
                                        <li>Referring website and search terms</li>
                                        <li>Cookies and similar tracking technologies</li>
                                    </ul>
                                </div>

                                {/* How We Use Information */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                                        <Users className="h-6 w-6 mr-3 text-primary" />
                                        How We Use Your Information
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        We use the information we collect for various purposes:
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                        <li>Providing and improving our services</li>
                                        <li>Communicating with you about projects and services</li>
                                        <li>Processing payments and managing accounts</li>
                                        <li>Sending marketing communications (with your consent)</li>
                                        <li>Analyzing website usage and improving user experience</li>
                                        <li>Complying with legal obligations</li>
                                        <li>Protecting against fraud and security threats</li>
                                    </ul>
                                </div>

                                {/* Information Sharing */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                                        <Globe className="h-6 w-6 mr-3 text-primary" />
                                        Information Sharing and Disclosure
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                        <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our business</li>
                                        <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
                                        <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                                        <li><strong>Consent:</strong> We may share information with your explicit consent</li>
                                    </ul>
                                </div>

                                {/* Data Security */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                                        <Lock className="h-6 w-6 mr-3 text-primary" />
                                        Data Security
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                        <li>Encryption of data in transit and at rest</li>
                                        <li>Regular security assessments and updates</li>
                                        <li>Access controls and authentication measures</li>
                                        <li>Employee training on data protection</li>
                                        <li>Incident response procedures</li>
                                    </ul>
                                    <p className="text-muted-foreground leading-relaxed mt-4">
                                        However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                                    </p>
                                </div>

                                {/* Your Rights */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Your Rights and Choices</h2>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        You have certain rights regarding your personal information:
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                        <li><strong>Access:</strong> Request access to your personal information</li>
                                        <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                                        <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                                        <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                                        <li><strong>Objection:</strong> Object to processing of your information</li>
                                        <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
                                    </ul>
                                    <p className="text-muted-foreground leading-relaxed mt-4">
                                        To exercise these rights, please contact us using the information provided below.
                                    </p>
                                </div>

                                {/* Cookies */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors come from. You can control cookie settings through your browser preferences.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Types of cookies we use:
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-2">
                                        <li><strong>Essential cookies:</strong> Required for basic website functionality</li>
                                        <li><strong>Analytics cookies:</strong> Help us understand how visitors use our website</li>
                                        <li><strong>Marketing cookies:</strong> Used for targeted advertising and marketing</li>
                                    </ul>
                                </div>

                                {/* Children's Privacy */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                                    </p>
                                </div>

                                {/* International Transfers */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">International Data Transfers</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                                    </p>
                                </div>

                                {/* Changes to Policy */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                                    </p>
                                </div>

                                {/* Contact Information */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        If you have any questions about this Privacy Policy or our data practices, please contact us:
                                    </p>
                                    <div className="bg-muted/20 rounded-lg p-6">
                                        <div className="space-y-2">
                                            <p className="text-foreground"><strong>Email:</strong> privacy@trerons.com</p>
                                            <p className="text-foreground"><strong>Phone:</strong> +1 (555) 123-4567</p>
                                            <p className="text-foreground"><strong>Address:</strong> 123 Business Street, New York, NY 10001</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;

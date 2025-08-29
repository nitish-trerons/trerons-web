

import { Scale, Users, AlertTriangle } from 'lucide-react';

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-20">
            {/* Header */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                            Terms of Service
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Please read these terms carefully before using our services
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
                                        <Scale className="h-6 w-6 mr-3 text-primary" />
                                        Introduction
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        These Terms of Service ("Terms") govern your use of Trerons' website and services. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access our services.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed mt-4">
                                        Trerons ("we," "us," or "our") provides creative services including event management, video production, and technology solutions. These Terms apply to all users of our services.
                                    </p>
                                </div>

                                {/* Services Description */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Description of Services</h2>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        Trerons offers the following services:
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                        <li><strong>Event Services:</strong> Corporate events, conferences, weddings, sports tournaments, and branding campaigns</li>
                                        <li><strong>Film & Video Production:</strong> Advertisements, live shows, short films, music videos, and post-production</li>
                                        <li><strong>Technology Services:</strong> Web development, mobile applications, digital products, and social media management</li>
                                    </ul>
                                    <p className="text-muted-foreground leading-relaxed mt-4">
                                        We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
                                    </p>
                                </div>

                                {/* User Accounts */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                                        <Users className="h-6 w-6 mr-3 text-primary" />
                                        User Accounts and Responsibilities
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        When you create an account or use our services, you agree to:
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                        <li>Provide accurate, current, and complete information</li>
                                        <li>Maintain and update your account information</li>
                                        <li>Protect your account credentials and notify us of any unauthorized use</li>
                                        <li>Accept responsibility for all activities under your account</li>
                                        <li>Use our services only for lawful purposes</li>
                                        <li>Not interfere with or disrupt our services or servers</li>
                                    </ul>
                                </div>

                                {/* Payment Terms */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        Payment terms for our services are as follows:
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                        <li>Payment is due according to the terms specified in your service agreement</li>
                                        <li>We accept payment through approved methods only</li>
                                        <li>Late payments may result in service suspension or termination</li>
                                        <li>All fees are non-refundable unless otherwise specified</li>
                                        <li>Prices are subject to change with prior notice</li>
                                    </ul>
                                </div>

                                {/* Intellectual Property */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Intellectual Property Rights</h2>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        <strong>Our Rights:</strong> All content, features, and functionality of our services are owned by Trerons and are protected by copyright, trademark, and other intellectual property laws.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        <strong>Your Rights:</strong> Upon full payment, you retain ownership of custom content created specifically for your project, subject to our portfolio rights.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        <strong>Portfolio Rights:</strong> We reserve the right to showcase completed work in our portfolio and marketing materials.
                                    </p>
                                </div>

                                {/* Prohibited Uses */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                                        <AlertTriangle className="h-6 w-6 mr-3 text-primary" />
                                        Prohibited Uses
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        You may not use our services to:
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                        <li>Violate any applicable laws or regulations</li>
                                        <li>Infringe on intellectual property rights</li>
                                        <li>Transmit harmful, offensive, or inappropriate content</li>
                                        <li>Attempt to gain unauthorized access to our systems</li>
                                        <li>Use our services for spam or unsolicited communications</li>
                                        <li>Interfere with other users' enjoyment of our services</li>
                                    </ul>
                                </div>

                                {/* Limitation of Liability */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        To the maximum extent permitted by law, Trerons shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                        <li>Loss of profits, data, or business opportunities</li>
                                        <li>Service interruptions or technical issues</li>
                                        <li>Damages resulting from third-party actions</li>
                                        <li>Any other damages arising from your use of our services</li>
                                    </ul>
                                    <p className="text-muted-foreground leading-relaxed mt-4">
                                        Our total liability shall not exceed the amount paid by you for the specific service in question.
                                    </p>
                                </div>

                                {/* Disclaimers */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Disclaimers</h2>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        Our services are provided "as is" and "as available" without warranties of any kind. We disclaim all warranties, express or implied, including but not limited to:
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                        <li>Warranties of merchantability or fitness for a particular purpose</li>
                                        <li>Warranties that our services will be uninterrupted or error-free</li>
                                        <li>Warranties regarding the accuracy or reliability of any information</li>
                                        <li>Warranties that defects will be corrected</li>
                                    </ul>
                                </div>

                                {/* Indemnification */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        You agree to indemnify and hold harmless Trerons, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these Terms.
                                    </p>
                                </div>

                                {/* Termination */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Termination</h2>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including:
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                        <li>Violation of these Terms</li>
                                        <li>Non-payment of fees</li>
                                        <li>Fraudulent or illegal activities</li>
                                        <li>At our sole discretion</li>
                                    </ul>
                                    <p className="text-muted-foreground leading-relaxed mt-4">
                                        Upon termination, your right to use our services will cease immediately.
                                    </p>
                                </div>

                                {/* Governing Law */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Governing Law and Dispute Resolution</h2>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Any disputes arising from these Terms or our services shall be resolved through binding arbitration in New York, NY, in accordance with the rules of the American Arbitration Association.
                                    </p>
                                </div>

                                {/* Changes to Terms */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the new Terms.
                                    </p>
                                </div>

                                {/* Severability */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Severability</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
                                    </p>
                                </div>

                                {/* Contact Information */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        If you have any questions about these Terms of Service, please contact us:
                                    </p>
                                    <div className="bg-muted/20 rounded-lg p-6">
                                        <div className="space-y-2">
                                            <p className="text-foreground"><strong>Email:</strong> legal@trerons.com</p>
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

export default TermsOfService;

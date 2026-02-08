require('dotenv').config();
const { Resend } = require('resend');

console.log('🧪 Testing Resend email configuration...\n');

// Initialize Resend
const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
    console.error('❌ Missing RESEND_API_KEY in .env file');
    process.exit(1);
}

const resend = new Resend(resendApiKey);

const FROM_EMAIL = 'arpithamedarametla@gmail.com';
const FROM_NAME = 'Arpitha Medarametla';

console.log(`📧 FROM_EMAIL: ${FROM_EMAIL}`);
console.log(`📧 FROM_NAME: ${FROM_NAME}`);

async function testResend() {
    console.log('\n🔍 Testing Resend email sending...');

    try {
        // Send test email
        const data = await resend.emails.send({
            from: `${FROM_NAME} <${FROM_EMAIL}>`,
            to: FROM_EMAIL, // Send to yourself
            subject: '🧪 Email Test - Portfolio Contact Form with Resend',
            text: `This is a test email sent on ${new Date().toISOString()}`,
            html: `
                <div style="padding: 20px; font-family: Arial, sans-serif;">
                    <h2>🎉 Resend Email Test Successful!</h2>
                    <p>Your Resend configuration is working properly.</p>
                    <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
                    <p><strong>Service:</strong> Resend</p>
                </div>
            `
        });

        console.log(`✅ Resend: Test email sent successfully!`);
        console.log(`📧 Message ID: ${data.id}`);

        return true;
    } catch (error) {
        console.log(`❌ Resend: Failed`);
        console.log(`   Error: ${error.message}`);

        return false;
    }
}

async function runTests() {
    const success = await testResend();

    console.log(`\n📊 Test Results: ${success ? 1 : 0}/1 configuration successful`);

    if (!success) {
        console.log('\n🆘 Troubleshooting steps:');
        console.log('1. ✅ Make sure your Resend API key is correct');
        console.log('2. ✅ Verify that the FROM_EMAIL is added to your verified domains in Resend');
        console.log('3. ✅ Check your Resend dashboard for any issues');
        process.exit(1);
    } else {
        console.log('\n🎉 All tests passed! Your email configuration is ready.');
    }
}

runTests().catch(console.error);
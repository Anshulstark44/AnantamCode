const otpTemplate = (otp = '123456') => {
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>OTP Verification Email</title>
    </head>
    <body style="background-color: #ffffff; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.4; color: #333333; margin: 0; padding: 0;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; text-align: center;">
			<div style="color: #bfdbfe; font-size: 24px; font-family: serif; font-weight: 600; margin-bottom: 20px;">AnantamCode</div>
            <div style="font-size: 18px; font-weight: bold; margin-bottom: 20px;">OTP Verification Email</div>
            <div style="font-size: 16px; margin-bottom: 20px;">
                <p>Dear User,</p>
                <p>Thank you for registering with AnantamCode. To complete your registration, please use the following OTP (One-Time Password) to verify your account:</p>
                <h2 style="font-weight: bold;">${otp}</h2>
                <p>This OTP is valid for 5 minutes. If you did not request this verification, please disregard this email. Once your account is verified, you will have access to our platform and its features.</p>
            </div>
            <div style="font-size: 14px; color: #999999; margin-top: 20px;">
                If you have any questions or need assistance, please feel free to reach out to us at <a href="mailto:anantamcode44@gmail.com">anantamcode44@gmail.com</a>. We are here to help!
            </div>
        </div>
    </body>
    </html>`;
};
module.exports = otpTemplate;

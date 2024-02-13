// Using CryptoJS to generate a secure OTP

let generateSecureOTP = () => {

    // Define o comprimento do OTP
    const otpLength = 6;

    // Generate the code using CryptoJS
    const hmac = CryptoJS.HmacSHA256(Math.random().toString(), 'd@_$up3r_s3cr3t_k3y');

    return hmac.toString(CryptoJS.enc.Base64).substring(0, otpLength);
}

console.log(generateSecureOTP());
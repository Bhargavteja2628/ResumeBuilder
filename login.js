// Dummy user data store
const users = {};

// OTP Generation and sending simulation
function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Toggle between Login and Register forms
document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

document.getElementById('showRegister').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
});

// Register Form Handling
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const otp = document.getElementById('otp').value;
    const storedOtp = sessionStorage.getItem('otp');

    if (users[email]) {
        document.getElementById('message').innerText = 'Email already registered.';
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById('message').innerText = 'Passwords do not match.';
        return;
    }

    if (otp === storedOtp) {
        users[email] = password;
        document.getElementById('message').innerText = 'Registration successful. Please login.';
        sessionStorage.removeItem('otp');
        setTimeout(() => {
            document.getElementById('registerForm').style.display = 'none';
            document.getElementById('loginForm').style.display = 'block';
        }, 2000);
    } else {
        document.getElementById('message').innerText = 'Invalid OTP.';
    }
});

// OTP Generation
document.getElementById('getOtpBtn').addEventListener('click', function() {
    const email = document.getElementById('email').value;

    if (!email) {
        document.getElementById('message').innerText = 'Please enter your email first.';
        return;
    }

    const otp = generateOtp();
    sessionStorage.setItem('otp', otp);
    alert(`OTP sent to ${email}: ${otp}`); // Simulate sending OTP
    document.getElementById('message').innerText = 'OTP has been sent to your email.';
});

// Login Form Handling
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('login_email').value;
    const password = document.getElementById('login_password').value;

    if (users[email] && users[email] === password) {
        document.getElementById('loginMessage').innerText = 'Login successful!';
        setTimeout(() => window.location.href = 'resume_builder.html', 2000);
    } else {
        document.getElementById('loginMessage').innerText = 'Incorrect email or password.';
    }
});

// Initial view setup
document.getElementById('registerForm').style.display = 'block';
document.getElementById('loginForm').style.display = 'none';
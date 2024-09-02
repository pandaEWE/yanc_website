// Countdown Timer
const countdown = () => {
    const eventDate = new Date("Dec 31, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "Event Launched!";
    }
};

const interval = setInterval(countdown, 1000);

// Toggle Form
const toggleForm = () => {
    document.getElementById("form-container").classList.toggle("hidden");
};

// Submit Email
const submitEmail = () => {
    const email = document.getElementById("email").value;
    if (email) {
        alert(`Thank you! You'll be notified at ${email}`);
        document.getElementById("form-container").classList.add("hidden");
        document.getElementById("email").value = "";
    } else {
        alert("Please enter a valid email.");
    }
};

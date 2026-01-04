// AgeCalc JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const birthDateInput = document.getElementById('birthDate');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultsDiv = document.getElementById('results');
    const errorMessage = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');

    // Set max date to today
    const today = new Date();
    const maxDate = today.toISOString().split('T')[0];
    birthDateInput.setAttribute('max', maxDate);

    // Calculate button click event
    calculateBtn.addEventListener('click', function() {
        calculateAge();
    });

    // Enter key press event
    birthDateInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calculateAge();
        }
    });

    function calculateAge() {
        const birthDateValue = birthDateInput.value;

        // Hide previous results and errors
        resultsDiv.classList.add('d-none');
        errorMessage.classList.add('d-none');

        // Validate input
        if (!birthDateValue) {
            showError('Please select your birth date!');
            return;
        }

        const birthDate = new Date(birthDateValue);
        const currentDate = new Date();

        // Validate date
        if (birthDate > currentDate) {
            showError('Birth date cannot be in the future!');
            return;
        }

        // Calculate age
        const age = calculateDetailedAge(birthDate, currentDate);

        // Display results
        displayResults(age, birthDate, currentDate);
    }

    function calculateDetailedAge(birthDate, currentDate) {
        let years = currentDate.getFullYear() - birthDate.getFullYear();
        let months = currentDate.getMonth() - birthDate.getMonth();
        let days = currentDate.getDate() - birthDate.getDate();

        // Adjust for negative days
        if (days < 0) {
            months--;
            const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
            days += lastMonth.getDate();
        }

        // Adjust for negative months
        if (months < 0) {
            years--;
            months += 12;
        }

        // Calculate total days
        const timeDiff = currentDate - birthDate;
        const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const totalWeeks = Math.floor(totalDays / 7);
        const totalHours = Math.floor(timeDiff / (1000 * 60 * 60));
        const totalMinutes = Math.floor(timeDiff / (1000 * 60));

        return {
            years,
            months,
            days,
            totalDays,
            totalWeeks,
            totalHours,
            totalMinutes
        };
    }

    function displayResults(age, birthDate, currentDate) {
        // Animate numbers
        animateValue('years', 0, age.years, 1000);
        animateValue('months', 0, age.months, 1000);
        animateValue('days', 0, age.days, 1000);
        animateValue('totalDays', 0, age.totalDays, 1000);
        animateValue('totalWeeks', 0, age.totalWeeks, 1000);
        animateValue('totalHours', 0, age.totalHours, 1000);
        animateValue('totalMinutes', 0, age.totalMinutes, 1000);

        // Calculate next birthday
        const nextBirthday = getNextBirthday(birthDate, currentDate);
        document.getElementById('nextBirthday').textContent = nextBirthday;

        // Show results
        resultsDiv.classList.remove('d-none');
        resultsDiv.style.animation = 'fadeInUp 0.6s ease-out';
    }

    function animateValue(id, start, end, duration) {
        const element = document.getElementById(id);
        const range = end - start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));
        let current = start;

        const timer = setInterval(function() {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                element.textContent = formatNumber(end);
                clearInterval(timer);
            } else {
                element.textContent = formatNumber(current);
            }
        }, stepTime);
    }

    function formatNumber(num) {
        return num.toLocaleString('en-US');
    }

    function getNextBirthday(birthDate, currentDate) {
        const currentYear = currentDate.getFullYear();
        const nextBirthday = new Date(currentYear, birthDate.getMonth(), birthDate.getDate());

        // If birthday has passed this year, set it to next year
        if (nextBirthday < currentDate) {
            nextBirthday.setFullYear(currentYear + 1);
        }

        // Calculate days until next birthday
        const daysUntil = Math.ceil((nextBirthday - currentDate) / (1000 * 60 * 60 * 24));

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = nextBirthday.toLocaleDateString('en-US', options);

        if (daysUntil === 0) {
            return `Today! 🎉`;
        } else if (daysUntil === 1) {
            return `${formattedDate} (Tomorrow!)`;
        } else {
            return `${formattedDate} (in ${daysUntil} days)`;
        }
    }

    function showError(message) {
        errorText.textContent = message;
        errorMessage.classList.remove('d-none');
        errorMessage.style.animation = 'shake 0.5s ease-out';
    }
});

// Add shake animation for errors
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);


// Function to start a single counter animation
function startCounter(targetNumber, duration, counterElement) {
    const increment = targetNumber / (duration / 16); // 16ms per frame assuming 60 FPS

    let currentNumber = 0;
    const updateCounter = () => {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
            counterElement.textContent = targetNumber.toLocaleString() + "+"; // Add "+" symbol after the number
        } else {
            counterElement.textContent = Math.ceil(currentNumber).toLocaleString();
            requestAnimationFrame(updateCounter);
        }
    };

    updateCounter();
}

// For counter section

// Function to start counters when the section is in view
function startCountersWhenVisible(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const counters = [
                {
                    target: 30000,
                    duration: 3000,
                    element: document.getElementById("donation-counter"),
                },
                {
                    target: 3000,
                    duration: 2000,
                    element: document.getElementById("solve-problems-counter"),
                },
                {
                    target: 6000,
                    duration: 2500,
                    element: document.getElementById("help-people-counter"),
                },
                {
                    target: 30,
                    duration: 1000,
                    element: document.getElementById("project-counter"),
                },
            ];

            counters.forEach((counter) => {
                startCounter(counter.target, counter.duration, counter.element);
            });

            observer.unobserve(entry.target); // Stop observing once counters are started
        }
    });
}

// Create an observer to watch for the counter section
const options = {
    root: null, // Use the viewport as the root
    threshold: 0.5, // Trigger when 50% of the section is visible
};

const counterSection = document.getElementById("work-counter-section");
const observer = new IntersectionObserver(startCountersWhenVisible, options);
observer.observe(counterSection);

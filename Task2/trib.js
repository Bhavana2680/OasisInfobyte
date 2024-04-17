document.addEventListener("DOMContentLoaded", function () {
    // Simulating a delay for fetching biography
    setTimeout(() => {
        const bio = `Newton's most famous work is his formulation of the three laws of motion, which are now known as Newton's Laws of Motion. These laws describe the relationship between the motion of an object and the forces acting on it, providing a framework for understanding the behavior of objects in motion. His laws are fundamental principles in classical mechanics and are still used today in various fields such as engineering and astronomy.`;
        document.getElementById("bio").textContent = bio;
    }, 1000); // Delayed for 1 second to simulate loading time
});
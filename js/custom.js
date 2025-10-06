document.addEventListener("DOMContentLoaded", () => {
    const profileButtons = document.querySelectorAll(".btn-view-profile");

    profileButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = button.getAttribute("data-target");
            if (!targetId) return;

            const details = document.querySelector(targetId);

            // Close all other profiles (accordion behavior)
            document.querySelectorAll(".card-details-hidden.show").forEach(openDetails => {
                if (openDetails !== details) {
                    openDetails.classList.remove("show");
                    const openBtn = document.querySelector(
                        `.btn-view-profile[data-target="#${openDetails.id}"]`
                    );
                    if (openBtn) openBtn.textContent = "View Profile";
                }
            });

            // Toggle the selected profile
            details.classList.toggle("show");

            // Update button text
            if (details.classList.contains("show")) {
                button.textContent = "Hide Profile";
            } else {
                button.textContent = "View Profile";
            }
        });
    });
});
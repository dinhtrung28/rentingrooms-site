document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".room-card button");
    const roomModal = document.getElementById("roomModal");
    const confirmModal = document.getElementById("confirmModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");
    const modalPrice = document.getElementById("modalPrice");
    const closeModal = roomModal.querySelector(".close");
    const confirmButton = roomModal.querySelector("#confirm-booking");
    const closeConfirm = confirmModal.querySelector(".close-confirm");
    const closeConfirmButton = confirmModal.querySelector(".close-confirm-button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const card = this.closest(".room-card");
            modalTitle.textContent = card.querySelector("h2").textContent;
            modalImage.src = card.querySelector("img").src;
            modalDescription.textContent = card.querySelector("p").textContent;
            modalPrice.textContent = card.querySelector(".price").textContent;
            roomModal.style.display = "flex";
            roomModal.style.justifyContent = "center";
            roomModal.style.alignItems = "center";
        });
    });

    closeModal.addEventListener("click", function () {
        roomModal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === roomModal) {
            roomModal.style.display = "none";
        }
        if (event.target === confirmModal) {
            confirmModal.style.display = "none";
        }
    });

    confirmButton.addEventListener("click", function () {
        roomModal.style.display = "none";
        confirmModal.style.display = "flex";
        confirmModal.style.justifyContent = "center";
        confirmModal.style.alignItems = "center";
    });

    closeConfirm.addEventListener("click", function () {
        confirmModal.style.display = "none";
    });

    closeConfirmButton.addEventListener("click", function () {
        confirmModal.style.display = "none";
    });
});
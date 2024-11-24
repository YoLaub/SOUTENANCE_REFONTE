document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.servicesCard');
    const modal = document.getElementById('modal');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    const closeModal = document.getElementById('close-modal');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            const description = card.getAttribute('data-description');
            const price = card.getAttribute('data-price');
            modalDescription.textContent = description;
            modalPrice.textContent = 'Price: $' + price;
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});
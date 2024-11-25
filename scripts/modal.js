document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.servicesCard');
    const modal = document.getElementById('modal');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    const modalDetail = document.getElementById('modal-details')
    const closeModal = document.getElementById('close-modal');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            const description = card.getAttribute('data-description');
            const price = card.getAttribute('data-price');
            const details = card.getAttribute('data-details')
            modalDescription.textContent = description;
            modalPrice.textContent = 'Tarif: $' + price;
            modalDetail.textContent = "-" + details;
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});
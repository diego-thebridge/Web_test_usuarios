function calculateTotal() {
    const items = document.querySelectorAll('.item');
    let total = 0;
    items.forEach((item) => {
        if (item.checked) {
            total += parseInt(item.value);
        }
    });
    document.getElementById('totalPrice').textContent = total;
}

const handleClick = () => {
    const btnElm = document.querySelector('#buy-btn');
    const quantityElm = document.querySelector('#quantity');
    const quantity = Number(quantityElm.value);
    console.log('quantityElm.Value');
    btnElm.textContent = quantity +'pieces in cart';
    btnElm.className = 'btn--done'
}
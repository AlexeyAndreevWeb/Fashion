const cards = document.querySelector('.cards')

const cardImages = [
    './images/products/1.png',
    './images/products/2.png',
    './images/products/3.png',
    './images/products/4.png',
    './images/products/5.png',
    './images/products/6.png',
]

const render = (item) => {
    cards.insertAdjacentHTML('beforeend', `
        <div class="card">
            <img src="${item}" alt="" class="card-img">
            <div class="card-text">
                <h3 class="card-title">
                    ELLERY X M'O CAPSULE
                </h3>
                <p class="card-description">
                    Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.
                </p>
                
                <span class="card-price">
                    $52.00
                </span>
            </div>
        </div>
    `)
}

cardImages.map(item => render(item))
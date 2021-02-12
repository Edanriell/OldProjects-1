const layout = require('../layout');

module.exports = ({ products }) => {
  const renderedProducts = products
    .map(product => {
      return `
  <div class="ui special cards column testtt">
    <div class="card">
      <div class="blurring dimmable image">
        <div class="ui dimmer">
          <div class="content">
            <div class="center">
              <form action="/cart/products" method="POST">
                <input hidden value="${product.id}" name="productId" />
                <button class="ui inverted button">
                  <i class="fa fa-shopping-cart"></i> Add to cart
                </button>
              </form>
            </div>
          </div>
        </div>
        <img class="card-image" src="data:image/png;base64, ${product.image}"/>
      </div>
      <div class="content">
        <a class="header">${product.title}</a>
      </div>
      <div class="extra content">
        <a>
          $${product.price}
        </a>
      </div>
    </div>
  </div>
      `;
    })
    .join('\n');

  return layout({
    content: `
      <section class="banner">
        <div>
          <div class="">
            <img src="/images/banner2.jpg" />
          </div>
        </div>
      </section>
      <section>
        <div class="ui container">
          <h2 class="title text-center">Featured Items</h2>
          <div>
            <div class="ui equal width grid">
              <div class="three column row">
                ${renderedProducts}  
              </div>
            </div>
          </div>
        </div>
      </section>
    `
  });
};

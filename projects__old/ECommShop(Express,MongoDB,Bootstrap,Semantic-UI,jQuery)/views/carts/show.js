const layout = require('../layout');

module.exports = ({ items }) => {

  const totalPrice = items.reduce((prev, item) => {
    return prev + item.quantity * item.product.price;
  }, 0);

  const renderedItems = items
    .map(item => {
      return `
        <div class="ui relaxed divided items">
          <div class="item">
            <div class="ui small image">
              <img class="cart-img" src="data:image/png;base64, ${item.product.image}"/>
            </div>
            <div class="content">
              <a class="header">${item.product.title}</a>
              <div class="description">
                $${item.product.price}  X  ${item.quantity} =  <div class="ui label">$${item.product.price * item.quantity}</div>
              </div>
              <div class="extra">
                <div class="remove">
                  <form method="POST" action="/cart/products/delete">
                    <input hidden value="${item.id}" name="itemId" />
                    <button class="ui right floated red button">
                      <i class="fas fa-trash-alt"></i> 
                        Remove Item
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <hr>
        </div>
      `;
    })
    .join('');

  return layout({
    content: `
      <div id="cart" class="ui container">
        <div class="columns">
          <div class="column is-four-fifths">
            <h2 class="subtitle"><b><a class="ui black basic label massive">Shopping Cart</a></b></h2>
            <div>
              ${renderedItems}
            </div>
            <div class="total message is-info">
                <button class="styled-btn green zoom-out"><span class="label">Total price: $${totalPrice}</span>
                <span class="hidden-text">Buy</span></button>
            </div>
          </div>
        </div>
      </div>
    `
  });
};

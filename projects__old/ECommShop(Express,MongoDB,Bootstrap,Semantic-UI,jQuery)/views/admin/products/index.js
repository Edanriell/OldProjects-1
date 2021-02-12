const layout = require('../layout');

module.exports = ({ products }) => {
  const renderedProducts = products
    .map(product => {
      return `
      <div class="col-sm-3 col-lg-3">
        <div class="card mb-5 mt-5 shadow" style="width: 18rem;">
          <div class="card-header">${product.title}</div>
          <img class="cart-img card-img-top" style="height: 300px" src="data:image/png;base64, ${product.image}"/>
            <div class="card-body">
              <p class="card-text">Product price: $${product.price}</p>
            </div>
            <div class="card-footer bg-transparent">
              <div class="d-grid gap-1">
                <a href="/admin/products/${product.id}/edit" class="btn btn-warning">Edit</a>
                <form method="POST" action="/admin/products/${product.id}/delete">
                  <button class="btn btn-danger w-100">Delete</button>
                </form>
              </div>
          </div>
        </div>
      </div>
    `;
    })
    .join('');

  return layout({
    content: `
    <div class="container">
      <div>
        <h1 class="heading1 pt-5"><i class="fas fa-sign-in-alt"></i>  aPanel</h1>
      </div>
      <div class="control">
        <h2 class="mb-5 mt-3 heading2">Products page</h2>  
        <a href="/admin/products/new" class="btn btn-lg btn-success shadow">Add New Product</a>
        <a href="/" class="btn btn-lg btn-primary shadow">Return Back To The Site</a>
          <div class="row">
            ${renderedProducts}
          </div>
    `
  });
};

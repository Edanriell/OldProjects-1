const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
  return layout({
    content: `
      <div class="container">
        <div class="d-flex flex-column mt-5">
          <div>
            <h3 class="heading2">Create a Product</h3>
          </div>
            <form method="POST" enctype="multipart/form-data">
              <div class="field">
                <h5 class="heading2">Title</h5>
                <input class="input form-control" placeholder="Title" name="title">
                <p class="help is-danger">${getError(errors, 'title')}</p>
              </div>
              <div class="field">
                <h5 class="heading2">Price</h5>
                <input class="input form-control" placeholder="Price" name="price">
                <p class="help is-danger">${getError(errors, 'price')}</p>
              </div>
              <div class="field">
                <div class="input-group">
                  <input type="file" name="image" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                </div>
              </div>
              <br>
              <button class="btn btn-lg btn-primary">Create</button>
              <a href="/admin/products" class="btn btn-lg btn-danger"><i class="fa fa-star"></i> Return To Products</a>
            </form>
        </div>
      </div>
    `
  });
};

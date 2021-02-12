module.exports = {
  getError(errors, prop) {
    try {
      return `
        <div class="p-3">
          <div class="alert alert-danger m-0" role="alert">
          ${errors.mapped()[prop].msg}
          </div>
        </div>
        ` 
    } catch (err) {
      return '';
    }
  }
};

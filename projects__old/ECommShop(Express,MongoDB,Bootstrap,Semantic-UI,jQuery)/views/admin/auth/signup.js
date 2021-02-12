const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ req, errors }) => {
  console.log(errors);
  return layout({
    content: `
    <div class='box'>
    <div class='box-form'>
      <div class='box-login-tab'></div>
      <div class='box-login-title'>
        <div class='i i-login'><i class="fas fa-sign-in-alt"></i></div><h4 class="pt-2">aPanel</h4>
      </div>
      <div class='box-login'>
        <div class='fieldset-body' id='login_form'>
          <button onclick="openLoginInfo();" class='b b-form i i-more fas fa-angle-double-right' title='Mais Infor'></button>
          <form method="POST">
            <p class='field'>
              <label>E-MAIL</label>
              <input name="email" type='text' />
              ${getError(errors, 'email')}
              <span id='valida' class='i i-warning'></span>
            </p>
            <p class='field'>
              <label>PASSWORD</label>
              <input name="password" type="password" />
              ${getError(errors, 'password')}
              <span id='valida' class='i i-close'></span>
            </p>
            <p class='field'>
              <label>PASSWORD CONFIRMATION</label>
              <input name="passwordConfirmation" type="password" />
              ${getError(errors,'passwordConfirmation')}
              <span id='valida' class='i i-close'></span>
            </p>
            <input type='submit' value='CREATE ACCOUNT' />
          </form>
        </div>
      </div>
    </div>
    <div class='box-info'>
        <p><button onclick="closeLoginInfo();" class='b b-info i i-left fas fa-times'></button><h3>Have an account?</h3></p>
        <div class='line-wh'></div>
        <a href="/signin"><button onclick="" class='b-cta'> SIGN IN</button></a>
      </div>
  </div>
    `
  });
};

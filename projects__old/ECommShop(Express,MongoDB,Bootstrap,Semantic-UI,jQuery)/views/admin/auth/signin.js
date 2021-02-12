const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
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
            <button onclick="openLoginInfo();" class='b b-form i i-more fas fa-angle-double-right'></button>
            <form method="POST">
              <p class='field'>
                <label>E-MAIL</label>
                <input required name="email" type='text' />
                ${getError(errors, 'email')}
                <span id='valida' class='i i-warning'></span>
              </p>
              <p class='field'>
                <label>PASSWORD</label>
                <input required name="password" type="password" />
                ${getError(errors, 'password')}
                <span id='valida' class='i i-close'></span>
              </p>
              <label class='checkbox'>
                <input type='checkbox' value='TRUE' title='Keep me Signed in' /> Keep me Signed in
              </label>
              <input type='submit' value='GET STARTED' />
            </form>
          </div>
        </div>
      </div>
      <div class='box-info'>
        <p><button onclick="closeLoginInfo();" class='b b-info i i-left fas fa-times' title='Back to Sign In'></button><h3 class="p-0 m-0">Need Help?</h3></p>
        <div class='line-wh'></div>
        <a href="/"><button onclick="" class='b-support'> Back To EComm Shop</button></a>
        <button onclick="" class='b-support'> Forgot Password?</button>
        <div class='line-wh'></div>
        <a href="/signup"><button onclick="" class='b-cta' title='Sign up now!'> CREATE ACCOUNT</button></a>
      </div>
    </div>
    `
  });
};

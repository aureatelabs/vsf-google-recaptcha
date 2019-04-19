import { Logger } from '@vue-storefront/core/lib/logger'

// This function will be fired both on server and client side context after registering other parts of the module
declare global {
  interface Window { grecaptcha: any; }
}

export function afterRegistration({ Vue, config, store, isServer }): any {
  if( !config.googleRecaptcha || !config.googleRecaptcha.is_active || !config.googleRecaptcha.tokens ) {
    if( !config.googleRecaptcha.is_active ) {
        Logger.warn('Google captcha module is disabled.', 'Google Recaptcha')();
        return;
    }
    if( !config.googleRecaptcha.tokens || !config.googleRecaptcha.tokens.site_key || !config.googleRecaptcha.tokens.secret_key ) {
        Logger.warn('No google captcha config or captcha site_key or captcha secret_key found.', 'Google Recaptcha')();
        return;
    }
  }

  this.onCaptchaLoaded = (): void => {

    setTimeout(() => {
      window.grecaptcha = window.grecaptcha || {};
    }, 1);

  }

  if (!isServer) {

    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.onload = this.onCaptchaLoaded();
    script.src = '//www.google.com/recaptcha/api.js?render=' + config.googleRecaptcha.tokens.site_key;
    head.appendChild(script);

  }

}
# Vue Storefront Google Recaptcha module for API
[Google Recaptcha](https://developers.google.com/recaptcha) integration for [vue-storefront](https://github.com/aureatelabs/vsf-google-recaptcha), by [Aureate Labs Pvt. Ltd.](https://aureatelabs.com/).
<br />Google Recaptcha registration required (It's a free)
<br /><br />
This module not work with the [front side module](https://github.com/aureatelabs/vsf-google-recaptcha).
<br /><br />
Google recaptcha module for Vue Storefront️ API

> This module is developed for the verify the generated captcha token is valid. This also support the check with the scrore given by google captcha api

<br/>

## Installation:

### 1. Clone the repository

Clone the vsf-google-recaptcha-api repository into your VSF API installation.
```shell
$ cd /path/to/vue-storefront-api
$ git clone git@github.com:aureatelabs/vsf-google-recaptcha-api.git src/modules/google-recaptcha
```

### 2. Add the module config to your local VSF API's configuration file.
Add the following JSON config snippet into your desired config, eg. `config/local.json`
```json
"googleRecaptcha" : {
  "tokens" : {
      "secret_key": "<YOUR_CAPTCHA_SECRET_KEY>"
  },
  "score_match": {
    "enable": false,
    "low_score": 0.9
  }
}
```
Replace the `secret_key` parameter with the secret key provided by Google recaptcha registration time. You can find your Captcha Site Key here: https://www.google.com/recaptcha/admin/. Setting `enable` to `true` will check the captcha base on the score response from the google captcha api. To disable score match simple set value to `false`. Possible values for `low_score` is `0.0` to `0.9`.
<br />
Valid secret_key example: `"secret_key": "6Lcn_Z0UAAAAACodWP8oU9wcdVKatvQVBqklWA9c"`
<br />
sample response of api call `/api/ext/google-recaptcha/is-verify`
```
{ success: false, error: 'Invalid captcha found.' }
```

### 3. You must be installed vsf-google-recaptcha module at vue-storefront

### 4. Enjoy!
Thats it! It's easy, plug and play! If you havn't got an Register captcha already, you can create one here, there is free tier that you can use to get started: https://www.google.com/recaptcha/admin/create

## Customization
You can customize this extension based on requirement of match the google-verification api

## License

<br/>
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

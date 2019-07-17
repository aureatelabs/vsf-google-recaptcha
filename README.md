# Vue Storefront Google Recaptcha module
[Google Recaptcha](https://developers.google.com/recaptcha) integration for [vue-storefront](https://github.com/aureatelabs/vsf-google-recaptcha), by [Aureate Labs Pvt. Ltd.](https://aureatelabs.com/).
<br />Google Recaptcha registration required (It's a free)
<br /><br />
Google recaptcha is for the protect the spamming your any submiting form and idea about to do some other stuff authentication to prevent this.
<br /><br />
![Demo](docs/preview.png)
<br/>

Google recaptcha module for Vue Storefront️

> Google recaptcha documentation: https://developers.google.com/recaptcha/intro

<br/>

## Installation:

### 1. Clone the repository

Clone the vsf-google-recaptcha repository into your VSF installation.
```shell
$ git clone git@github.com:aureatelabs/vsf-google-recaptcha.git vue-storefront/src/modules/google-recaptcha
```

### 2. Add the module config to your local VSF configuration file.
Add the following JSON config snippet into your desired config, eg. `config/local.json`
```json
"googleRecaptcha" : {
   "tokens" : {
       "site_key": "<YOUR_CAPTCHA_SITE_KEY>",
       "secret_key": "<YOUR_CAPTCHA_SECRET_KEY>"
   },
   "is_active": false
}
```
Replace the `site_key` & `secret_key` parameter with the site key & secret key provided by Google recaptcha registration time. You can find your Captcha Site Key here: https://www.google.com/recaptcha/admin/. Setting `is_active` to `false` will disable the google recaptcha module at runtime.
<br />
Valid site_key example: `"site_key": "6Lcn_Z0UAAAAAN4LdRSfM5eNd3LJ-xPfUtnV6Lud"`
<br />
Valid secret_key example: `"secret_key": "6Lcn_Z0UAAAAACodWP8oU9wcdVKatvQVBqklWA9c"`

### 3. Register the Google Recaptcha module
Open up your `../vue-storefront/src/modules/index.ts` and add the following code. Adding it inside this file the registers the module so it can be used in your Vue Storefront.
<br />
```js
import { GoogleRecaptcha } from './google-recaptcha'
...
export const registerModules: VueStorefrontModule[] = [
...
GoogleRecaptcha
...
]
```

### 4. How to call captcha method
In your theme template file you can directly call store action and immediate next you can check captcha is verified or not
<br />
```js
this.$store.dispatch('googleRecaptcha/isVerifiedCaptcha')
if (!this.$store.state.googleRecaptcha.is_verified) {
    //captcha is not verified
}
```
### 5. Enjoy!
Thats it! It's easy, plug and play! If you haven't got an Register captcha already, you can create one here, there is free tier that you can use to get started: https://www.google.com/recaptcha/admin/create

## Customization
### Replacing the Google captcha Script.
If you need to change the Intercom script that is loaded on the page, open up the `./google-recaptcha/hooks/afterRegistration.ts` file. On line 35 you'll find the script provided from Google Recaptcha, you can swap this out or extend it as required.


## License

<br/>
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

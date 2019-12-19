import { apiStatus } from '../../../lib/util';
import { Router } from 'express';
const request = require('request');

module.exports = ({ config }) => {

  let gCaptchaApi = Router();

  gCaptchaApi.post('/is-verify', (req, res) => {
    const userData = req.body
    if (!userData.response) {
      apiStatus(res, 'Invalid captcha found!', 200)
    }
    let reqUrl = 'https://www.google.com/recaptcha/api/siteverify';
    request({ // Do the google recaptcha request
      uri: reqUrl,
      method: 'POST',
      formData: {
        "secret": config.googleRecaptcha.tokens.secret_key,
        "response": userData.response
      },
      json: true
    }, function (_err, _res, _resBody) {
      let returnData = { success: false, error: 'Invalid captcha found.' };
      if (_resBody && _resBody.success && _resBody.success === true) {
        if (config.googleRecaptcha.score_match.enable) {
          if (_resBody.score > config.googleRecaptcha.score_match.low_score) {
            returnData = _resBody;
          }
        } else {
          returnData = _resBody;
        }
        return apiStatus(res, returnData, 200)
      }
      return apiStatus(res, returnData, 200)
    })
  })

  return gCaptchaApi
}

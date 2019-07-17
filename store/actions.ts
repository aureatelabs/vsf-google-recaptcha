import { ActionTree } from 'vuex'
import RootState from '@vue-storefront/core/types/RootState'
import config from 'config'
import { isServer } from '@vue-storefront/core/helpers'

// actions
const actions: ActionTree<any, RootState> = {
  /**
   * Check is verified google captcha
   */
  async isVerifiedCaptcha ({ commit, dispatch, state }) {
    if (!isServer && typeof window.grecaptcha !== 'undefined') {
      await window.grecaptcha.ready(() => {
        // do request for recaptcha token
        window.grecaptcha
          .execute(config.googleRecaptcha.tokens.site_key)
          .then(gToken => {
            commit('SET_CAPTCHA_TOKEN', gToken)
            dispatch('verifiedCaptcha', gToken)
          })
      })
      return state.is_verified
    }
    return true
  },
  /**
   * Verify captcha with the google api
   * @param param0
   * @param gToken
   */
  async verifiedCaptcha ({ commit, state }, gToken) {
    // await commit('USER_VERIFIED_CAPTCHA', true)
    let gCaptchaQueryBody = JSON.stringify({
      response: gToken
    })

    await fetch(config.googleRecaptcha.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: gCaptchaQueryBody
    })
      .then(resp => {
        return resp.json()
      })
      .then(resp => {
        var gCaptchaResponse = false
        if (resp.code === 200) {
          gCaptchaResponse = resp.result.success
          console.log('Response of request', resp, gCaptchaResponse)
        }
        commit('USER_VERIFIED_CAPTCHA', gCaptchaResponse)
        return gCaptchaResponse
      })
  }
}

export default actions

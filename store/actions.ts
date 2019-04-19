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
			if(!isServer && typeof window.grecaptcha != 'undefined'){
				window.grecaptcha.ready(function() {
					// do request for recaptcha token
					// response is promise with passed token
					window.grecaptcha.execute (config.googleRecaptcha.tokens.site_key)
					.then(function(gToken) {
						commit('SET_CAPTCHA_TOKEN', gToken)
					})
				})
				await dispatch('verifiedCaptcha', state.google_generated_token)
				return true
			}
		return true
	},
	/**
	 * Verify captcha with the google api
	 * @param param0
	 * @param gToken
	 */
	async verifiedCaptcha ({ commit, state }, gToken) {
		await commit('USER_VERIFIED_CAPTCHA', true)
			// fetch('//www.google.com/recaptcha/api/siteverify', {
			// 	method: 'POST',
			// 	headers: { 'Content-Type': 'multipart/form-data' },
			// 	mode: 'no-cors',
			// 	body: JSON.stringify({
			// 		secret: config.googleRecaptcha.tokens.secret_key,
			// 		response: gToken
			// 	})
			// }).then(res => {
			// 		console.log('Commiting the mutation')
			// 		console.log(res)
			// 		commit('USER_VERIFIED_CAPTCHA', true)
			// 		resolve
			// 	})
		}
}

export default actions

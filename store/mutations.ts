import { MutationTree } from 'vuex'
import * as types from './mutation-types'

const mutations: MutationTree<any> = {
	async [types.USER_VERIFIED_CAPTCHA] (state, payload) {
		state.is_verified = payload
	},
	async [types.SET_CAPTCHA_TOKEN] (state, payload) {
		state.google_generated_token = payload
	}
}

export default mutations

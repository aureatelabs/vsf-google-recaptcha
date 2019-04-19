import { Module } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import RootState from '@vue-storefront/core/types/RootState'

export const module: Module<any, RootState> = {
  namespaced: true,
  state: {
  	google_generated_token: '',
  	is_verified: false
  },
  actions,
  mutations
}

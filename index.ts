import { module } from './store'
import { createModule } from '@vue-storefront/core/lib/module'
import { afterRegistration } from './hooks/afterRegistration'

const KEY = 'googleRecaptcha';
export const GoogleRecaptcha = createModule({
  key: KEY,
  store: { modules: [{ key: KEY, module }] },
  afterRegistration
});


import router from '@/js/bootstrap/router.js';
import components from '@/js/bootstrap/components.js';
import store from '@/js/bootstrap/store.js';

export default async function bootstrap(app) {

    router(app);
    await components(app)
    store(app)
}
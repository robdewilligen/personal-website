import { createStore } from "vuex";

export function createEmptyState() {

    return {

        nullData: 'test',
    };
}

export default function (app) {

    const store = createStore({

        state() {

            return createEmptyState();
        },

        getters: {


        },

        mutations: {


        }
    });

    app.use(store);
}
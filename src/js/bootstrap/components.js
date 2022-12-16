//UI
import {
    Dropdown
} from '@/js/components/ui';

//Layout
import {
Footer, Header
} from '@/js/components/layout';

export default async function (app) {

    //UI
    app.component("rw-dropdown", Dropdown)

    // Layout
    app.component(Header.name, Header);
    app.component(Footer.name, Footer);

}
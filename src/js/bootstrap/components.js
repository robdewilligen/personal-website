//RW
import {
    control, button, ui
} from '@/js/components/components/index.js';

//Layout
import {
Footer, Header, Capital
} from '@/js/components/layout';

export default async function (app) {

    //RW
    // Control
    app.component("rw-dropdown", control.Dropdown)
    app.component("rw-input", control.Input)
    app.component("rw-stack", control.Stack)

    // Button
    app.component("rw-link-button", button.LinkButton)
    app.component("rw-button", button.Button)
    app.component("rw-link", button.Link)

    // UI
    app.component("rw-grid", ui.Grid)

    // Layout
    app.component(Header.name, Header);
    app.component(Footer.name, Footer);
    app.component(Capital.name, Capital);

}
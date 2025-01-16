/** @odoo-module **/
import { registry } from "@web/core/registry";
const { session } = require('@web/session');
const myService = {
    dependencies: ['bus_service'],

    start(_, { bus_service }) {
        bus_service.addChannel('custom-logout');

        bus_service.addEventListener('notification', ({ detail: notifications }) => {
            for (const { payload, type } of notifications) {
                if (type === "custom-logout") {
                    this.myEventHandler(payload);
                }
            }
        });

        bus_service.addEventListener('connect', () => {
            console.log('Connected');
        });

        bus_service.start();
    },

    myEventHandler(event) {
        if (event.user_id === this._getCurrentUserId()) {
            location.replace("/web/session/logout");
        }
    },

    _getCurrentUserId() {
        return session.uid;
    }
};

registry.category("services").add("myService", myService);

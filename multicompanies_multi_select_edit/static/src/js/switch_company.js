/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { SwitchCompanyMenu } from "@web/webclient/switch_company_menu/switch_company_menu";
import { symmetricalDifference } from "@web/core/utils/arrays";

patch(SwitchCompanyMenu.prototype, "multicompanies_multi_select_edit.confirm_patch", {
    setup() {
        this._super(...arguments);
        this.toggleTimer = null;
    },

    toggleCompany(companyId) {
        if (this.toggleTimer) {
            clearTimeout(this.toggleTimer);
            this.toggleTimer = null;
        }
        this.state.companiesToToggle = symmetricalDifference(
            this.state.companiesToToggle,
            [companyId]
        );
    },

    confirmSelection() {
        if (!this.state.companiesToToggle || this.state.companiesToToggle.length === 0) {
            return;
        }
        this.companyService.setCompanies("toggle", ...this.state.companiesToToggle);

        this.state.companiesToToggle = [];
    },

    cancelSelection() {
        if (this.toggleTimer) {
            clearTimeout(this.toggleTimer);
            this.toggleTimer = null;
        }
        this.state.companiesToToggle = [];
    },

    logIntoCompany(companyId) {
        if (this.toggleTimer) {
            clearTimeout(this.toggleTimer);
            this.toggleTimer = null;
        }
        this._super(...arguments);
    }
});
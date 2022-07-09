// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        function onInit() {

            var paramModel = this.getOwnerComponent().getModel("paramModel");
  
            this.getView().setModel(paramModel, "paramModel");

        }

        function handleChangeDate(oEvent) {

            var sValue = oEvent.getParameter("value");

            var bValid = oEvent.getParameter("valid");

            if (bValid) {

                this.getOwnerComponent().getModel("paramModel").setProperty("/date", sValue);

            }
            else {

                this.getOwnerComponent().getModel("paramModel").setProperty("/date", "");
            }

        }

        function onSelectRGB1(oEvent) {

            var indx = oEvent.getParameter("selectedIndex")

            if (indx == 1) {

                this.getOwnerComponent().getModel("paramModel").setProperty("/inYears", 'X');
                            
            }else{

                this.getOwnerComponent().getModel("paramModel").setProperty("/inYears", '');

            }
            
        }     

        function onValidateV1() {

            var date = this.getOwnerComponent().getModel("paramModel").getProperty("/date");

            var name = this.getView().byId("IN1").getValue();

            var studies = this.getView().byId("TXTA1").getValue();

            var experience = this.getView().byId("IN2").getValue();

            if (date != '' && date != undefined && name != '' && name != undefined
                && studies != '' && studies != undefined && experience != '' && experience != undefined) {

                this.getOwnerComponent().getModel("paramModel").setProperty("/date", date);
                this.getOwnerComponent().getModel("paramModel").setProperty("/personName", name);
                this.getOwnerComponent().getModel("paramModel").setProperty("/studies", studies);
                this.getOwnerComponent().getModel("paramModel").setProperty("/experience", experience);

                this.getView().byId("BT1").setEnabled(true);

            }
            else {

                this.getView().byId("BT1").setEnabled(false);

            }

        }

        function navigateToView2(oEvent) {

            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteView2");

        }

        const Main = Controller.extend("mcc.project3ui5.controller.View1", {});
        Main.prototype.onValidateV1 = onValidateV1;
        Main.prototype.navigateToView2 = navigateToView2;
        Main.prototype.handleChangeDate = handleChangeDate;
        Main.prototype.onSelectRGB1 = onSelectRGB1;
        Main.prototype.onInit = onInit;
        return Main

    });

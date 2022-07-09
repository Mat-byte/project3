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

        function initModel() {

            this.getOwnerComponent().getModel("paramModel").setProperty("/date", "");
            this.getOwnerComponent().getModel("paramModel").setProperty("/personName", "");
            this.getOwnerComponent().getModel("paramModel").setProperty("/studies", "");
            this.getOwnerComponent().getModel("paramModel").setProperty("/experience", "");
            this.getOwnerComponent().getModel("paramModel").setProperty("/dictionarySkill", "");
            this.getOwnerComponent().getModel("paramModel").setProperty("/ALVSkill", "");
            this.getOwnerComponent().getModel("paramModel").setProperty("/ABAPOOSkill", "");
            this.getOwnerComponent().getModel("paramModel").setProperty("/DynproSkill", "");
        }

        function navigateToView1(oEvent) {

            initModel();
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteView1");

        }

        const Main = Controller.extend("mcc.project3ui5.controller.View3", {});
        Main.prototype.navigateToView1 = navigateToView1;
        Main.prototype.initModel = initModel;
        Main.prototype.onInit = onInit;
        return Main

    });

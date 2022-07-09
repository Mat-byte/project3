// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageBox} MessageBox
     */
    function (Controller,MessageBox) {
        "use strict";

        function onInit() {

            var paramModel = this.getOwnerComponent().getModel("paramModel");

            this.getView().setModel(paramModel, "paramModel");

        }

        function setParamsModel(these) {

            var ri1 = these.getView().byId("RI1").getValue();
            var ri2 = these.getView().byId("RI2").getValue();
            var ri3 = these.getView().byId("RI3").getValue();
            var ri4 = these.getView().byId("RI4").getValue();

            these.getOwnerComponent().getModel("paramModel").setProperty("/dictionarySkill", ri1);
            these.getOwnerComponent().getModel("paramModel").setProperty("/ALVSkill", ri2);
            these.getOwnerComponent().getModel("paramModel").setProperty("/ABAPOOSkill", ri3);
            these.getOwnerComponent().getModel("paramModel").setProperty("/DynproSkill", ri4);
        }

        function getExpProm(these) {

            var expProm = 0;

            var experience = these.getOwnerComponent().getModel("paramModel").getProperty("/experience");

            var inYears = these.getOwnerComponent().getModel("paramModel").getProperty("/inYears");

            if (inYears == 'X') {

               experience = experience * 12;                 
            } 

            if (experience < 12) {

                expProm = 1;
                
            } else if (experience < 24) {

                expProm = 2;
                
            } else if (experience < 60){

                expProm = 3;

            } else if (experience < 120){

                expProm = 4;

            } else{

                expProm = 5;

            }

            return expProm;
        }

        function getSkillProm(these) {

            var skill1 = these.getOwnerComponent().getModel("paramModel").getProperty("/dictionarySkill");
            var skill2 = these.getOwnerComponent().getModel("paramModel").getProperty("/ALVSkill");
            var skill3 = these.getOwnerComponent().getModel("paramModel").getProperty("/ABAPOOSkill");
            var skill4 = these.getOwnerComponent().getModel("paramModel").getProperty("/DynproSkill");

            return (skill1 + skill2 + skill3 + skill4) / 4;

        }

        function getScore(these) {

            var expProm = getExpProm(these);

            var skillProm = getSkillProm(these);

            var score = (skillProm + expProm) / 2;

            these.getOwnerComponent().getModel("paramModel").setProperty("/score", score);

            setImage(these,score);

        }

        function setImage(these,score) {

            if (score < 3) {

                these.getOwnerComponent().getModel("paramModel").setProperty("/image", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Spec_indicator_fail.svg/1200px-Spec_indicator_fail.svg.png");
                        
            }else{

                these.getOwnerComponent().getModel("paramModel").setProperty("/image", "https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/172-512.png");
       
            }
            
        }

        function navigateToView3(oEvent) {

            sap.m.MessageBox.warning("Skills without a starts are considered 0. \n Do you want to continue?", {
                actions: [sap.m.MessageBox.Action.OK, sap.m.MessageBox.Action.CANCEL],
                emphasizedAction: sap.m.MessageBox.Action.OK,
                onClose: function (sAction) {

                    if (sAction == "OK") {

                        setParamsModel(this);
                        getScore(this);
                        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                        oRouter.navTo("RouteView3");

                    }
                }
                .bind(this)
            });

        }

        const Main = Controller.extend("mcc.project3ui5.controller.View2", {});
        Main.prototype.navigateToView3 = navigateToView3;
        Main.prototype.setParamsModel = setParamsModel;
        Main.prototype.getSkillProm = getSkillProm;
        Main.prototype.getExpProm = getExpProm;
        Main.prototype.getScore = getScore;
        Main.prototype.onInit = onInit;
        return Main

    });

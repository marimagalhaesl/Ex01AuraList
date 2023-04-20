({
    handleSucessHelper : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Lead inserido!",
            "message": "O lead foi inserido com sucesso.",
            "type": "success"
        });
        toastEvent.fire();
    },
    
    handleResetHelper: function(component, event, helper) {
        component.find('field').forEach(function(f) {
            f.reset();
        });
    }
})

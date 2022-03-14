({
	packItem  : function(component, event, helper) {
		var btnClicked = event.getSource();         // the button
        var btnMessage = btnClicked.set("v.disabled",true); // the button's label
        component.set("v.item.Packed__c", true);     // update our message
	}
})
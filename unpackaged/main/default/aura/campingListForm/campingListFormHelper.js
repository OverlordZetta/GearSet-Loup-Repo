({
	createItem : function(component, newItem) {
		//fire the create Item event
        var createEvent = component.getEvent("addItem");
        createEvent.setParams({ "item": newItem });
        createEvent.fire();
        //Then reset the form with a blank item.
        component.set("v.newItem",{'sobjectType':'Camping_Item__c',
                'Name': '',
                'Quantity__c': 0,
                'Price__c': 0,
                'Packed__c': false});
	}
})
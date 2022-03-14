({
	handleAdditem : function(component, newItem) {
		 // Create the action
        var action = component.get("c.saveItem");
            action.setParams(
                {
                    "item" : newItem
                });
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
            var items = component.get("v.items");
                items.push(response.getReturnValue());
        component.set("v.items", items);
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
	}
})
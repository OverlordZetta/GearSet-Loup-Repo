({
    
    
     doInit: function(component, event, helper) {
        // Create the action
        var action = component.get("c.getItems");
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.items", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    },
    
	handleAddItem  : function(component, event, helper) {
        newItem = event.getParam("item");
        
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
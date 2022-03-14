({
	doInit : function(component, event, helper) {
        console.log('init');	
        let fieldsToCheck = component.get('v.fields');
        let myArray = fieldsToCheck.split(",");
        console.log(JSON.stringify(myArray) + ' i s the aray');
        component.set('v.fieldsList',myArray);
        component.set('v.totalFieldNumber',myArray.length);
        component.find('recordData').reloadRecord(true) 
	},
    
    handleRecordUpdated: function(component, event, helper) {
        let fieldsToCheck = component.get('v.fields');
        let numberOfFields = component.get('v.totalFieldNumber');
        let record = component.get('v.fieldValues');

        let countFullFields  = 0;        
        let myArray = fieldsToCheck.split(",");
        
        myArray.forEach(function (item, index) {
            console.log('value of count is : ' + countFullFields);
            console.log('field is : ' + item);
            if(record[item] != undefined && record[item] != null && record[item] != '') countFullFields++;
            console.log('value s : ' + record[item]);
        });
                    console.log('value of count at end : ' + countFullFields);

        component.set('v.percent', countFullFields*100/numberOfFields);
        
        
	}
})
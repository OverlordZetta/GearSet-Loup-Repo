trigger devTrainingTrigger on Lead (before insert) {

    for(Lead l : Trigger.New) {
        l.description = 'New Description';
        l.FirstName = 'bbiName';
        
    }   

}
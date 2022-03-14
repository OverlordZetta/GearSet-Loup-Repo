trigger ContentDocumentTrigger on ContentDocument (after insert, after update, after delete, before delete) {
    
    
    if(Trigger.isBefore){
        if(Trigger.isDelete){
            System.debug('i m in delete');
            List<ContentDocumentLink> cdls = [Select id, LinkedEntityId
                                             From ContentDocumentLink
                                             Where ContentDocumentId IN:Trigger.oldMap.Keyset()];
            
            System.debug('cdls : ' + cdls);
		    List<Id> relatedCaseIds = new List<Id>();
            for(ContentDocumentLink cdl : cdls){
                if((cdl.LinkedEntityId+'').startsWith('500'))
                    relatedCaseIds.add(cdl.LinkedEntityId);
            }
            
            System.debug('related cases : ' + relatedCaseIds);
            
            ContentDocumentHandler.countDocuments(relatedCaseIds);
        }        
    }
    
    
    
    
}
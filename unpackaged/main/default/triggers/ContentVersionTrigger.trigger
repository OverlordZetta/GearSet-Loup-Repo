trigger ContentVersionTrigger on ContentVersion (after delete) {

    if(Trigger.isAfter){
        if(Trigger.isDelete){
            List<Id> contentDocuments = new List<Id>();
            for(ContentVersion cv : Trigger.old){
                contentDocuments.add(cv.ContentDocumentId);
            }
            System.debug('i m in delete');
            List<ContentDocumentLink> cdls = [Select id, LinkedEntityId
                                             From ContentDocumentLink
                                             Where ContentDocumentId IN:contentDocuments];
            
            System.debug('cdls : ' + cdls);
		    List<Id> relatedCaseIds = new List<Id>();
            for(ContentDocumentLink cdl : cdls){
                if((cdl.LinkedEntityId+'').startsWith('500'))
                    relatedCaseIds.add(cdl.LinkedEntityId);
            }
            
            System.debug('related cases : ' + relatedCaseIds);
            
            List<Case> cases = [Select id, (Select id from ContentDocumentLinks)
                               from Case where Id IN:relatedCaseIds];
            For(Case c : cases){
                if(c.ContentDOcumentLinks.size()>0) {
                    System.debug('case : ' + c.Id + ' my docs are : ' + c.ContentDocumentLinks.size());
                }
            }
        }        
    }
    
    
}
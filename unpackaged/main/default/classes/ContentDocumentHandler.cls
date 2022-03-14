public class ContentDocumentHandler {

    @future
    public static void countDocuments(List<Id> relatedCaseIds){
        List<Case> cases = [Select id, (Select id from ContentDocumentLinks)
                               from Case where Id IN:relatedCaseIds];
            For(Case c : cases){
                if(c.ContentDOcumentLinks.size()>0) {
                    //my update logic
                    System.debug('case : ' + c.Id + ' my docs are : ' + c.ContentDocumentLinks.size());
                }
            }
        //update cases;
    }
}
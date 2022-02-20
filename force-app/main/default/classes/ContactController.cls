public with sharing class ContactController {
   // public class testException extends AuraHandledException  {}
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        List<Contact> cList = [
            SELECT FirstName, LastName, Email
            FROM Contact
            WITH SECURITY_ENFORCED
            ORDER By LastName ASC
        ];
        if (true) {
            throw new AuraHandledException('NSFW name detected.');
        }
        /*return ;*/
        return cList;
    }

}

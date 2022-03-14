trigger ScratchTrigger on Opportunity (before insert) {
    for (Opportunity opp : Trigger.new) {
        opp.Name='this is the name';
    }
}
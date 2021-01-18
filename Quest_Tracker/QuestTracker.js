function QuestTracker(){
    let QuestName= document.getElementById("frm1");
    let text=QuestName.elements[0].value;
    text=text.replace(/[^A-Za-z0-9]+/g,"");
    text=text.toLowerCase();
    text=Dict[text];
    let QuestText="";
    let Header="Currently in: ";
    let QuestNumber=Number(text[1]);
    if(QuestNumber<=164){
        Header=Header+"A Realm Reborn"; 
    }
    else if(QuestNumber>164 && QuestNumber<=174){
        Header=Header+"A Realm Awoken (Patch 2.1)";
    }
    else if(QuestNumber>174 && QuestNumber<=188){
            Header=Header+"Through the Maelstorm (Patch 2.2)";
    }
    else if(QuestNumber>188 && QuestNumber<=202){
            Header=Header+"Defenders of Eorzea (Patch 2.3)";
    }
    else if(QuestNumber>202 && QuestNumber<=220){
            Header=Header+"Dreams of Ice (Patch 2.4)";
    }
    else if(QuestNumber>220 && QuestNumber<=244){
            Header=Header+"Before the Fall (Patch 2.5)";
    }
    else if(QuestNumber>224 && QuestNumber<=337){
            Header=Header+"Heavensward";
    }
    else if(QuestNumber>337 && QuestNumber<=345){
            Header=Header+"As Goes Light, So Goes Darkness (Patch 3.1)";
    }
    else if(QuestNumber>345 && QuestNumber<=356){
            Header=Header+"Gears of Change (Patch 3.2)";
    }
    else if(QuestNumber>356 && QuestNumber<=362){
            Header=Header+"Revenge of the Horde (Patch 3.3)";
    }
    else if(QuestNumber>362 && QuestNumber<=372){
            Header=Header+"Soul Surrender (Patch 3.4)";
    }
    else if(QuestNumber>372 && QuestNumber<=381){
            Header=Header+"The Far Edge of Fate (Patch 3.5)";
    }
    else if(QuestNumber>381 && QuestNumber<=503){
            Header=Header+"StormBlood";
    }
    else if(QuestNumber>503 && QuestNumber<=514){
            Header=Header+"The Legend Returns (Patch 4.1)";
    }
    else if(QuestNumber>514 && QuestNumber<=522){
            Header=Header+"Rise of a New Sun (Patch 4.2)";
    }
    else if(QuestNumber>522 && QuestNumber<=529){
            Header=Header+"Under the Moonlight (Patch 4.3)";
    }
    else if(QuestNumber>529 && QuestNumber<=536){
            Header=Header+"Prelude in Violet (Patch 4.4)";
    }
    else if(QuestNumber>536 && QuestNumber<=543){
            Header=Header+"A Requiem for Heroes (Patch 4.5)";
    }
    else if(QuestNumber>543 && QuestNumber<=649){
            Header=Header+"ShadowBringers";
    }
    else if(QuestNumber>649 && QuestNumber<=659){
            Header=Header+"Vows of Virtue, Deeds of Cruelty (Patch 5.1)";
    }
    else if(QuestNumber>659 && QuestNumber<=669){
            Header=Header+"Echoes of a Fallen Star (Patch 5.2)";
    }
    else if(QuestNumber>669 && QuestNumber<=681){
            Header=Header+"Relfections in a Crystal (Patch 5.3)";
    }
    else if(QuestNumber>681 && QuestNumber<=691){
            Header=Header+"Futures Rewritten (Patch 5.4)";
    }
    else{
     Header=Header+"(Patch 5.5)";   
    }
    if(text[3]=="T"){
        QuestText="Quest #"+text[1]+": "+text[0]+".\n This quest unlocks a Trial.";
    }
    else if(text[3]=="D"){
        QuestText="Quest #"+text[1]+": "+text[0]+".\n This quest unlocks a Dungeon.";
    }
    else{
        QuestText="Quest #"+text[1]+": "+text[0]+".\n Number of quests until next Dungeon/Trial: "+text[2];
    }
    document.getElementById("Stats").innerHTML=QuestText;
    document.getElementById("Head").innerHTML=Header;
}

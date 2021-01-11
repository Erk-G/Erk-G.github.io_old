function QuestTracker(){
    let QuestName= document.getElementById("frm1");
    let text=QuestName.elements[0].value;
    text=text.replace(/[^A-Za-z0-9]+/g,"");
    text=text.toLowerCase();
    text=Dict[text];
    let QuestText=""
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
}
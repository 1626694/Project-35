class Player{
    constructor(){

    }
    update(name){
var playerindex="player"+playerCount;
database.ref(playerindex).set({
name:name
})
    }
    getPlayerCount(){
var PlayerCountref=database.ref("playerCount");

PlayerCountref.on("value",function(data){
    playerCount=data.val();
})
    }
updatePlayerCount(count){
database.ref('/').update({
    playerCount:count
})
}
}
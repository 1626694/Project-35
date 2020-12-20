class Form{
    constructor(){

    }
    display(){
        var title=createElement('h1');
        title.html("Car Racing Game")
        title.position(130,0);
        var inputbox=createInput("Name")
        inputbox.position(130,160)
        var button=createButton("Play")
        button.position(250,200);
        button.mousePressed(function(){
            inputbox.hide();
            button.hide();
            var name=input.value();
            playercount=playercount+1;
            player.update(name);
            player.updatePlayerCount(playerCount);
            var greetingmessage=createElement('h3');
            greetingmessage.html("Hello"+name);
            greetingmessage.position(130,160);
        })
       }
    
}
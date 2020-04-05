class Form{
    constructor(){
        this.input = createInput("...");
        this.button = createButton('Play');
        this.greeting = createElement('h3');
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(500, 130);

        this.input.position(500, 300);
        this.button.position(500, 350);

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            this.greeting.html("hello "+ player.name);
            this.greeting.position(500, 350);
        });
    }
}
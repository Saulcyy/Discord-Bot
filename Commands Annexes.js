	*Vous pouvez modifier les liens TENOR pour mettre vos gifs à la place ou tout remplacer par une réponse simple comme au /ping.*



    /////////////////////////////////////////////////// Option Ping-Pong ////////////////////////////////////////////////////
    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send('Pong :ping_pong: !');
    }
    
    ////////////////////////////////////////////////////// Option NUKE //////////////////////////////////////////////////////
    if (message.content.startsWith(prefix + "nuke")) {
        message.channel.send('https://tenor.com/view/explosion-mushroom-cloud-atomic-bomb-bomb-boom-gif-4464831');
        message.delete()
    }
    
    //////////////////////////////////////////////////// Option SPECIAL /////////////////////////////////////////////////////
    if (message.content.startsWith(prefix + "special")) {
        message.channel.send('https://tenor.com/view/special-ralph-the-simpsons-football-gif-5491308');
        message.delete()
    }
    
    ////////////////////////////////////////////////// Option IMAGINATION ///////////////////////////////////////////////////
    
    if (message.content.startsWith(prefix + "imagination")) {
        message.channel.send('https://tenor.com/view/spongebob-squarepants-spongebob-imagination-rainbow-happy-gif-4596954');
        message.delete()
    }

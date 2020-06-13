var opopathx,opopathy
function get_opo_x_y(){
    if(playerID === 1){
    opopathx = "players/player2/x";
    }
    if(playerID === 2){
        opopathx = "players/player1/x";
    }
    if(playerID === 1){
        opopathy = "players/player2/y";
    }
    if(playerID === 2){
        opopathy = "players/player1/y";
    }
    var chosen_numberRef = database.ref(opopathx);
    chosen_numberRef.on("value", (data) => {
        thatx = data.val();
    }); 
    var chosen_numberRef2 = database.ref(opopathy);
    chosen_numberRef2.on("value", (data) => {
        thaty = data.val();
    }); 
}
function get_playerCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value", (data) => {
        playerCount = data.val();
    });    
}
function update_playerCount(){
    playerCount+=1
    database.ref("/").update({
        playerCount:playerCount
    });   
}

function update_x_y(){
    var path = "players/player"+playerID
    database.ref(path).update({
        x :thisx,
        y:thisy
    });   
}

function create_player(){
    var path = "players/player"+playerID
    database.ref(path).update({
        x :thisx,
        y:thisy
    }); 
}

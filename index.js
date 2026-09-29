let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")


let homePnts = 0,guestPnts = 0


function addScore(team,points){
    if(team == 'home')
    {
        homePnts+=points
       homeScore.textContent = homePnts
    }
    if(team == 'guest')
    {
        guestPnts+=points
       guestScore.textContent = guestPnts
    }    
}

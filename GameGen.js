var genre = ["An action game", "An arcade game", "A top-down game","An adventure game", "A strategy game", "RTS game", "A turn-based strategy game", "A role-playing game", "A platformer game", "A puzzle game", "A visual novel", "A social media game", "A mobile game", "A browser game", "An indie game", "An experimental game", "A student project", "An artsy game"],
allGenres = genre.length,
firstGenre = 0,
selectedgenre = document.querySelector('#genre'),
changeGenre = function() {
  selectedgenre.textContent = genre[firstGenre];
  firstGenre = (firstGenre + 1) % allGenres;
}

function NoGenre() {
YesGenre = setInterval(changeGenre, 120);
};

selectedgenre.addEventListener("mouseenter", function() { 
NoGenre();
});
selectedgenre.addEventListener("mouseleave", function() { 
clearInterval(YesGenre);
});

var action = ['go to war with','wage war on','unite','lead','build','destroy','conquer','invade','colonize','discover','explore','trade with','lead the rebels in','make peace with','investigate','rename','collect gold from','collect crystals from','mine ore from','align','click on','match','throw','toss','fire pellets at','control','touch','stack','guess','memorize','rotate','swap','slide','avoid','drag and drop','tickle','race','challenge','collect','draw','unlock','cook','break','solve puzzles involving','collect','juggle'],
allActions = action.length,
firstAction = 0,
selectedaction = document.querySelector('#action'),
changeAction = function() {
  selectedaction.textContent = action[firstAction];
  firstAction = (firstAction + 1) % allActions;
}

function NoAction() {
YesAction = setInterval(changeAction, 120);
};

selectedaction.addEventListener("mouseenter", function( ) { 
NoAction();
});
selectedaction.addEventListener("mouseleave", function( ) { 
clearInterval(YesAction);
});

var things = ['countries','nations','dragons','castles','cities','strongholds','towers','dungeons','citadels','kingdoms','unknown worlds','other worlds','parallel worlds','other dimensions','alien worlds','heaven','hell','mythological places','historical places','islands','sanctuaries','temples','ruins','factories','caves','gems','diamonds','gold nuggets','bricks','bubbles','squares','triangles','treasure','blobs','kitchen appliances','nondescript fruits','animals','birds','baby animals','farm animals','exotic fruits','sentient plants','your friends','shapes','jewels','letters','words','numbers','tokens','coins','eggs','hats','candy','chocolate','shoes','clothing items','princesses','blocks','cubes','asteroids','stars','balls','spheres','magnets','riddles'],
allThings = things.length,
firstThing = 0,
selectedthings = document.querySelector('#things'),
changeThing = function() {
  selectedthings.textContent = things[firstThing];
  firstThing = (firstThing + 1) % allThings;
}

function NoThings() {
YesThings = setInterval(changeThing, 120);
};

selectedthings.addEventListener("mouseenter", function( ) { 
NoThings();
});
selectedthings.addEventListener("mouseleave", function( ) { 
clearInterval(YesThings);
});

var goals = ['to win','for glory','in the name of love','to live forever','to become the ruler of the world','to form an invincible empire','to win points','to reach the highscore','to unlock bonus items','to earn tokens','to unlock the next level'],
allGoals = goals.length,
firstGoal = 0,
selectedgoals = document.querySelector('#goals'),
changeGoal = function() {
  selectedgoals.innerHTML = goals[firstGoal];
  firstGoal = (firstGoal + 1) % allGoals;
  console.log(selectedgoals.innerHTML);
}

function NoGoals() {
YesGoals = setInterval(changeGoal, 120);
};

selectedgoals.addEventListener("mouseenter", function( ) { 
NoGoals();
});

selectedgoals.addEventListener("mouseleave", function( ) { 
clearInterval(YesGoals);
});
var genre = ["An action game", "An arcade game", "A top-down game","An adventure game", "A strategy game", "RTS game", "A turn-based strategy game", "A role-playing game", "A platformer game", "A puzzle game", "A visual novel", "A social media game", "A mobile game", "A browser game", "An indie game", "An experimental game", "A student project", "An artsy game"],
  allGenres = genre.length,
  firstGenre = 0,
  changeGen = $('.genre'),
  changeGenre = function() {
    changeGen.html(genre[firstGenre]);
    firstGenre = (firstGenre + 1) % allGenres;
  }

function NoGenre() {
  YesGenre = setInterval(changeGenre, 120);
};

$('.genre').hover(function() {
  NoGenre();
}, function() {
  clearInterval(YesGenre);
});

var action = ['go to war with','wage war on','unite','lead','build','destroy','conquer','invade','colonize','discover','explore','trade with','lead the rebels in','make peace with','investigate','rename','collect gold from','collect crystals from','mine ore from','align','click on','match','throw','toss','fire pellets at','control','touch','stack','guess','memorize','rotate','swap','slide','avoid','drag and drop','tickle','race','challenge','collect','draw','unlock','cook','break','solve puzzles involving','collect','juggle'],
  allActions = action.length,
  firstAction = 0,
  changeA = $('.action'),
  changeAction = function() {
    changeA.html(action[firstAction]);
    firstAction = (firstAction + 1) % allActions;
  }

function NoAction() {
  YesAction = setInterval(changeAction, 120);
};

$('.action').hover(function() {
  NoAction();
}, function() {
  clearInterval(YesAction);
});

var things = ['countries','nations','dragons','castles','cities','strongholds','towers','dungeons','citadels','kingdoms','unknown worlds','other worlds','parallel worlds','other dimensions','alien worlds','heaven','hell','mythological places','historical places','islands','sanctuaries','temples','ruins','factories','caves','gems','diamonds','gold nuggets','bricks','bubbles','squares','triangles','treasure','blobs','kitchen appliances','nondescript fruits','animals','birds','baby animals','farm animals','exotic fruits','sentient plants','your friends','shapes','jewels','letters','words','numbers','tokens','coins','eggs','hats','candy','chocolate','shoes','clothing items','princesses','blocks','cubes','asteroids','stars','balls','spheres','magnets','riddles'],
  allThings = things.length,
  firstThing = 0,
  changeT = $('.things'),
  changeThing = function() {
    changeT.html(things[firstThing]);
    firstThing = (firstThing + 1) % allThings;
  }

function NoThings() {
  YesThings = setInterval(changeThing, 120);
};

$('.things').hover(function() {
  NoThings();
}, function() {
  clearInterval(YesThings);
});

var goals = ['to win','for glory','in the name of love','to live forever','to become the ruler of the world','to form an invincible empire','to win points','to reach the highscore','to unlock bonus items','to earn tokens','to unlock the next level'],
  allGoals = goals.length,
  firstGoal = 0,
  changeGo = $('.goals'),
  changeGoal = function() {
    changeGo.html(goals[firstGoal]);
    firstGoal = (firstGoal + 1) % allGoals;
  }

function NoGoals() {
  YesGoals = setInterval(changeGoal, 120);
};

$('.goals').hover(function() {
  NoGoals();
}, function() {
  clearInterval(YesGoals);
});

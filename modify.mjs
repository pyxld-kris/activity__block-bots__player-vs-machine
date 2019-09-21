/**** WELCOME! *********************************************/
/**
 * Program your Bot to defeat a series of opponents! 
 * 
 * Game Summary:
 *  - Every .5 seconds, each Bot is able to make a
 * movement if they are touching the ground. Each movement expends 
 * a certain amount of energy when made, defined by the code running
 * the Bot. Higher energy used == bigger movement. A movement is either 
 * a jump or a dash. Bots gain a point when they jump on top of another
 * Bot or when their opponent Bot runs out of energy. For each round, 
 * the first Bot to 3 points wins!
 * 
 * Use the "Activity Documentation" button to read more about 
 * all the different ways you can control your bot
 * 
 * ----------------------------------------------------------
 * After making a change: save this file, then press the refresh
 * button above the game window!
 * ----------------------------------------------------------
 */

var myBot = this; // More readable/easier access
var opponent = this.opponent; // More readable/easier access


/**************** Start Modifying Here! *********************/

myBot.setName('My Bot');
myBot.setColor(0x992222);
myBot.makeMove = function() {
  /*
    * Scene Width: 800
    * Scene Height: 480
    */
  if (myBot.distanceFrom(opponent) > 150) {
    myBot.jumpToward(opponent, 7);
  }
  else {
    myBot.dashAwayFrom(opponent, 10);
  }
};




/**** GOODBYE! ************************************************/

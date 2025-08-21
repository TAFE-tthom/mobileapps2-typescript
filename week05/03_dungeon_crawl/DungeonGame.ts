import {Dungeon} from './Dungeon'
import process from 'node:process';
import readline from 'node:readline';


class DungeonGame {

  level: Dungeon;

  // Update this and add additional fields
  // for keeping track of the locaiton in the game
  location: any;


  constructor(level: Dungeon) {
    this.level = level;
  }


  /**
   * After receiving user input
   */
  perform(input: string): boolean {
    // TODO: process the commands here
    // If QUIT is given, then return false
    return false;
  }


  /**
   * Starts the game with a filepath for the dungeon itself. 
   */
  static async startGame(filepath: string) {
    const dungeon = Dungeon.loadFrom(filepath);

    if(dungeon) {
      // Go into the game
      const rl = readline.createInterface({ input: process.stdin });
      const game = new DungeonGame(dungeon);

      // Input loop
      for await (const line of rl) {
        
        if(!game.perform(line)) {
          // Breaks, ends the game early
          break;
        }
      }

    }
  }  
  
}


// Start of the game
if(process.argv.length >= 2) {
  // Starts the game, will accept a string which will load
  // 
  DungeonGame.startGame(process.argv[2])
    .finally(console.log);
} else {
  // Response when an error has occurred.
  console.error("Unable to load the dungeon game");
}




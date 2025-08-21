import readline from 'node:readline';
import fs from 'node:fs/promises';

/**
 * DungeonConnections where each direction is mapped to a room or null.
 */
export type DungeonConnections = {
   NORTH: DungeonRoom | null,
   EAST: DungeonRoom | null,
   SOUTH: DungeonRoom | null,
   WEST: DungeonRoom | null,
}

/**
 * Encompasses a room within the dungeon itself
 */
export class DungeonRoom {
  name: string;
  connections: DungeonConnections = {
    NORTH: null,
    EAST: null,
    SOUTH: null,
    WEST: null,
  }

  /**
   * Name of the dungeon room
   * Connections will be added after the initialisation
   */
  constructor(name: string) {
    this.name = name;
  }

  /**
   * Adds a connection to the room
   */
  addConnection(direction: keyof DungeonConnections,
    room: DungeonRoom) {
    
    //TODO: Implement this
  }

  
}



/**
 * Dungeon
 * where it will hold onto the rooms 
 */
export class Dungeon {

  rooms: Array<DungeonRoom>;

  /**
   * Constructs a dungeon with an array of rooms
   */
  constructor(rooms: Array<DungeonRoom>) {
    this.rooms = rooms;
  }

  /**
   * Loads from file path
   */
  static async loadFrom(path: string): Promise<Dungeon | null> {
    const file = await fs.open(path);
    if(file) {
      const rl = readline.createInterface({ input: file.createReadStream() });

      // Reads the file line by line
      for await(const line of rl) {
        //TODO: loads the line
      }
      //Return an instance of a dungeon once it has been constructed
    }
    return null;
  }
}

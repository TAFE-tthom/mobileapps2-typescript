
export type HuffmanCodingMap = {
  toCode: Map<string, string>
  toChar: Map<string, string>
}

export class HuffmanCoding {


  static encode(text: string, toCode: Map<string, string>) {
    
  }

  static decode(bin: string, toChar: Map<string, string>) {
    
  }

  static generate(binstring: string): HuffmanCodingMap {


    return {
      toCode: new Map(),
      toChar: new Map()
    }
  }
}


export type HuffmanCodingMap = {
  toCode: Map<string, string>
  toChar: Map<string, string>
}

export class HuffmanCoding {


  static encode(text: string, toCode: Map<string, string>) {
    return '';
  }

  static decode(bin: string, toChar: Map<string, string>) {
    return '';
  }

  static generate(binstring: string): HuffmanCodingMap {


    return {
      toCode: new Map(),
      toChar: new Map()
    }
  }
}

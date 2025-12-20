export interface Puzzle {
  // This id matches the number of the puzzle in the book.
  id: number,
  pgn: string,
}

export function getPuzzle(id: number) {
  return ALL_PUZZLES[id - 1]
}

export function totalNrOfPuzzles() {
  return ALL_PUZZLES.length
}

const ALL_PUZZLES = [
  {
    id: 1,
    pgn: "[FEN \"1r1n1rk1/b1p1qppp/p2p1n2/4pP2/P3P3/2PPNB2/6PP/R1BQK2R w KQ - 0 16\"]\n 16. g4! $16 Nd7 17. h4 c6 18. g5 f6 *"
  },
  {
    id: 6,
    pgn: "[FEN \"r1r3k1/3bbppp/pqn1pn2/1p6/3P1B2/1BN2N2/PP2QPPP/R2R2K1 b - - 0 17\"]\n 17... Na5! (17... b4 18. Ne4 $10) 18. Bc2 b4 19. Ne4 Nd5 $17 *"
  }
]

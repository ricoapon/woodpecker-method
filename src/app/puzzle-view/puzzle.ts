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
    pgn: "[FEN \"1r1n1rk1/b1p1qppp/p2p1n2/4pP2/P3P3/2PPNB2/6PP/R1BQK2R w KQ - 0 16\"]\n[ChapterName \"Chapter 1-50 - solution ex 1\"]\n16. g4! $16 Nd7 17. h4 c6 18. g5 f6 *",
  },
  {
    id: 2,
    pgn: "[FEN \"r2q1rk1/pbpnnpbp/1p1pp1p1/8/3PPP2/2NBB3/PPPQN1PP/R4RK1 w - - 0 10\"]\n[ChapterName \"Chapter 1-50 - solution ex 2\"]\n10. f5! exf5 11. exf5 $16 *",
  },
  {
    id: 3,
    pgn: "[FEN \"r3r1k1/ppq1bppp/2ppnn2/4p3/4PP2/2PP2PP/PPB1Q3/RNB2RK1 w - - 0 14\"]\n[ChapterName \"Chapter 1-50 - solution ex 3\"]\n14. f5! (14. Nd2 exf4 15. gxf4 g6) 14... Nc5 (14... Nf8 15. g4 h6 16. h4 N6h7 17. g5 hxg5 18. Kh1! $36) *",
  },
  {
    id: 4,
    pgn: "[FEN \"r1bqk2r/3n1ppp/p3p3/1pbpP3/5P2/3n1N2/PPPBQ1PP/R2NK2R w KQkq - 0 12\"]\n[ChapterName \"Chapter 1-50 - solution ex 4\"]\n12. cxd3! b4 (12... a5) (12... d4 13. Nf2 $14) *",
  },
  {
    id: 5,
    pgn: "[FEN \"r1r3k1/3bbppp/pqn1pn2/1p6/3P1B2/1BN2N2/PP2QPPP/R3R1K1 w - - 0 17\"]\n[ChapterName \"Chapter 1-50 - solution ex 5\"]\n17. d5! exd5 18. Nxd5 Nxd5 19. Bxd5 Bf6 20. Rad1 Rf8 21. Be4 Rad8 22. Qc2 *",
  },
  {
    id: 6,
    pgn: "[FEN \"r1r3k1/3bbppp/pqn1pn2/1p6/3P1B2/1BN2N2/PP2QPPP/R2R2K1 b - - 0 17\"]\n[ChapterName \"Chapter 1-50 - solution ex 6\"]\n17... Na5! (17... b4 18. Ne4 $10) 18. Bc2 b4 19. Ne4 Nd5 $17 *",
  },
  {
    id: 7,
    pgn: "[FEN \"r4rk1/1b2bppp/ppq1pn2/2ppB3/5P2/1P1BP1N1/P1PPQ1PP/R4RK1 w - - 0 14\"]\n[ChapterName \"Chapter 1-50 - solution ex 7\"]\n14. Nh5! (14. f5 g6! $14) 14... Nxh5 (14... Ne8 15. Bxg7! Nxg7 16. Qg4) 15. Bxh7+! (15. Qxh5 f5 $10) 15... Kxh7 16. Qxh5+ Kg8 17. Bxg7!! Kxg7 18. Qg4+ Kh7 19. Rf3 e5 20. Rh3+ Qh6 21. Rxh6+ Kxh6 22. Qd7! *",
  },
  {
    id: 8,
    pgn: "[FEN \"r1bq1rnk/1pp3np/p2p2p1/3Ppp2/2P1P3/2Q2NNP/PPB2PP1/3RR1K1 b - - 0 21\"]\n[ChapterName \"Chapter 1-50 - solution ex 8\"]\n21... f4! (21... fxe4?) (21... Nf6 22. exf5 gxf5 23. Nxe5!? dxe5 24. Rxe5) 22. Nf1 b6 23. N1d2 (23. b4 a5 24. a3 g5 25. c5 h5 $17) 23... g5 24. Kf1! $13 *",
  },
  {
    id: 9,
    pgn: "[FEN \"r1bq1rk1/pp3ppp/2n2n2/2bp4/5B2/2NBPN2/PP3PPP/2RQK2R b K - 0 10\"]\n[ChapterName \"Chapter 1-50 - solution ex 9\"]\n10... d4 11. exd4 Re8+! $15 *",
  },
  {
    id: 10,
    pgn: "[FEN \"r1bqk2r/pppp1ppp/2n5/8/2BPn3/2P2N2/P4PPP/R1BQ1RK1 b kq - 0 9\"]\n[ChapterName \"Chapter 1-50 - solution ex 10\"]\n9... d5! $15 (9... O-O? 10. d5 $14) 10. Ba3? dxc4 11. Re1 Qd5 12. Nd2 Be6 *",
  },
  {
    id: 11,
    pgn: "[FEN \"3r2k1/1b3ppp/pqnbpn2/1p6/1P6/PQN1PN1P/1B2BPP1/2R2K2 b - - 0 18\"]\n[ChapterName \"Chapter 1-50 - solution ex 11\"]\n18... Ne5! 19. Nxe5 Bxe5 20. Qc2 *",
  },
  {
    id: 12,
    pgn: "[FEN \"2r1r1k1/p2n1pp1/1pqpp2p/3n4/3P4/2PQ1NB1/PP3PPP/3RR1K1 b - - 0 18\"]\n[ChapterName \"Chapter 1-50 - solution ex 12\"]\n18... b5 $15 *",
  },
  {
    id: 13,
    pgn: "[FEN \"2rq1rk1/1p1bppbp/p2p1np1/4nPP1/3NP3/2N1B2P/PPP1B3/R2Q1RK1 b - - 0 13\"]\n[ChapterName \"Chapter 1-50 - solution ex 13\"]\n13... Rxc3! 14. bxc3 (14. gxf6 Rxe3 15. fxg7 Kxg7 $19) 14... Nxe4 $19 *",
  },
  {
    id: 14,
    pgn: "[FEN \"r4rk1/p1p3pp/2p1b3/2qpPp2/5P2/1PNQ3P/P1P3PK/4RR2 w - - 0 20\"]\n[ChapterName \"Chapter 1-50 - solution ex 14\"]\n20. Na4! $18 *",
  },
  {
    id: 15,
    pgn: "[FEN \"r1bq1rk1/ppp2pp1/1bnp1n1p/3Np3/1PB1P3/2PP1N2/P4PPP/R1BQ1RK1 w - - 0 10\"]\n[ChapterName \"Chapter 1-50 - solution ex 15\"]\n10. a4! $14 *",
  },
  {
    id: 16,
    pgn: "[FEN \"r2q1rk1/2p1nppp/p1pb4/4p2b/4P3/4BN1P/PPPNQPP1/R3K2R w KQ - 0 12\"]\n[ChapterName \"Chapter 1-50 - solution ex 16\"]\n12. g4! Bg6 13. h4 f6 (13... h5 14. Ng5! hxg4 15. h5 Bh7 16. h6 g6) 14. h5 Bf7 15. g5! *",
  },
  {
    id: 17,
    pgn: "[FEN \"r4rk1/ppp1qpp1/2n4p/3np3/8/1PPPBN2/1P1Q1PPP/R4RK1 b - - 0 14\"]\n[ChapterName \"Chapter 1-50 - solution ex 17\"]\n14... a5! $15 (14... f5 15. b4 $10) *",
  },
  {
    id: 18,
    pgn: "[FEN \"r2qk1nr/ppp2ppp/2npb3/2bNp3/2B1P3/3P1N2/PPP2PPP/R1BQK2R b KQkq - 0 6\"]\n[ChapterName \"Chapter 1-50 - solution ex 18\"]\n6... Na5! 7. b4? Bxd5! *",
  },
  {
    id: 19,
    pgn: "[FEN \"r2qk2r/ppp2ppp/2np1n2/2b1p3/2B1PPb1/2NP1N2/PPP3PP/R1BQK2R w KQkq - 0 7\"]\n[ChapterName \"Chapter 1-50 - solution ex 19\"]\n7. Na4! $14 *",
  },
  {
    id: 20,
    pgn: "[FEN \"r1bqkb1r/5ppp/ppn1p1n1/3p4/3P4/2N1BN2/PP2PPPP/R2QKB1R w KQkq - 0 9\"]\n[ChapterName \"Chapter 1-50 - solution ex 20\"]\n9. h4! Bd6 (9... h5) (9... h6) 10. h5 Nge7 11. h6 g6 12. Bg5 O-O 13. Bf6 *",
  },
  {
    id: 21,
    pgn: "[FEN \"r2q1rk1/1b1nbppp/2p1pn2/p5B1/PpBPP3/5N2/NP2QPPP/R2R2K1 b - - 0 13\"]\n[ChapterName \"Chapter 1-50 - solution ex 21\"]\n13... c5 14. dxc5 (14. d5 exd5 15. exd5 Nb6 $19) 14... Qc7 $17 *",
  },
  {
    id: 22,
    pgn: "[FEN \"r1b2rk1/pp3ppp/2n1pn2/3pN3/3P4/qP1B1N2/P1P2PPP/R2Q1RK1 b - - 0 12\"]\n[ChapterName \"Chapter 1-50 - solution ex 22\"]\n12... Nb4! (12... Bd7 13. c3! $14) 13. Be2 Ne4! 14. Re1 Nc3 (14... b6 $10) 15. Qd2 Ne4! $10 (15... Nxe2+?! 16. Rxe2) *",
  },
  {
    id: 23,
    pgn: "[FEN \"4rrk1/ppp2ppp/2nq4/2bnp3/2B2P2/P2P2Q1/1PP1N1PP/R1B2R1K w - - 0 14\"]\n[ChapterName \"Chapter 1-50 - solution ex 23\"]\n14. f5! $16 (14. Bxd5?! Qxd5 15. Nc3 exf4!? 16. Bxf4 Qd7 17. Bxc7 f5 $44) 14... Nf6 15. Nc3 Kh8 16. Bg5 *",
  },
  {
    id: 24,
    pgn: "[FEN \"r2qk2r/p3b1pp/2p5/np1bpp2/8/2PP2N1/PPQ1NPPP/R1B2RK1 b kq - 0 14\"]\n[ChapterName \"Chapter 1-50 - solution ex 24\"]\n14... f4! $15 (14... O-O? 15. f4 $10) 15. Ne4 (15. Nf5 O-O 16. Nxe7+ Qxe7 17. f3 c5 $17) 15... O-O 16. f3 c5 $17 *",
  },
  {
    id: 25,
    pgn: "[FEN \"rn1qkbnr/ppp2ppp/4p3/4N2b/2pP4/2N5/PP2PPPP/R1BQKB1R w KQkq - 0 6\"]\n[ChapterName \"Chapter 1-50 - solution ex 25\"]\n6. g4! Bg6 7. h4 f6 8. Qa4+! (8. h5) 8... c6 9. Nxg6 hxg6 10. Qxc4 $18 *",
  },
  {
    id: 26,
    pgn: "[FEN \"r4rk1/pp1b2pp/2nqp3/2pp1p2/3P4/2PQPN2/PP2BPPP/R4RK1 b - - 0 13\"]\n[ChapterName \"Chapter 1-50 - solution ex 26\"]\n13... c4! $10 *",
  },
  {
    id: 27,
    pgn: "[FEN \"r2qk2r/pbpn1ppp/1p1ppn2/6B1/1bPP4/2NBP3/PPQ2PPP/R3K1NR w KQkq - 0 8\"]\n[ChapterName \"Chapter 1-50 - solution ex 27\"]\n8. f3! (8. e4?! c5! 9. d5 exd5 10. cxd5) *",
  },
  {
    id: 28,
    pgn: "[FEN \"3r2k1/pp1r1pp1/2p1pb2/5q1p/1PPP1P2/2B1Q3/P2R2PP/3R2K1 b - - 0 22\"]\n[ChapterName \"Chapter 1-50 - solution ex 28\"]\n22... b5! 23. c5 (23. Qf3 $19) 23... g5 $17 *",
  },
  {
    id: 29,
    pgn: "[FEN \"r3k2r/1bq1bppp/pp2pn2/2p5/3PPP2/2PB2N1/PB4PP/R2Q1RK1 b kq - 0 14\"]\n[ChapterName \"Chapter 1-50 - solution ex 29\"]\n14... h5! 15. Qe2 (15. e5 h4!? 16. exf6 hxg3 17. fxe7 Rxh2 18. Rf3! Kxe7 19. Rxg3 Qxf4 20. Qg4 (20. Kxh2? Rh8+ $19) 20... Rxg2+ 21. Rxg2 Qe3+ 22. Kf1 Qxd3+ $15) 15... h4 16. Nh1 $15 *",
  },
  {
    id: 30,
    pgn: "[FEN \"r3kb1r/3bqn1p/p1pp2p1/1p2pp2/1P2P3/3P1NN1/1PPBQPPP/R3K2R b KQkq - 0 16\"]\n[ChapterName \"Chapter 1-50 - solution ex 30\"]\n16... f4 $17 *",
  },
  {
    id: 31,
    pgn: "[FEN \"r1b1qrk1/ppp1b1pp/2nppn2/3P1p2/2P2B2/2N2NP1/PP2PPBP/2RQK2R b K - 0 9\"]\n[ChapterName \"Chapter 1-50 - solution ex 31\"]\n9... Nd8! (9... exd5? 10. cxd5 $16) 10. Nb5 Qd7 *",
  },
  {
    id: 32,
    pgn: "[FEN \"r1b2rk1/pp1n1pp1/2p1p2p/q7/2BP3B/b1P1PN2/P2Q1PPP/1R2K2R b K - 0 13\"]\n[ChapterName \"Chapter 1-50 - solution ex 32\"]\n13... e5! $10 (13... b6 14. Qd3! $14) *",
  },
  {
    id: 33,
    pgn: "[FEN \"rn1qk2r/1ppbbppp/p2p1n2/3Pp3/B3P3/2P2N2/PP3PPP/RNBQ1RK1 w kq - 0 9\"]\n[ChapterName \"Chapter 1-50 - solution ex 33\"]\n9. Bc2! (9. Bxd7+ Nbxd7 $10) *",
  },
  {
    id: 34,
    pgn: "[FEN \"r3r1k1/pp1b1pbp/2p1p1p1/q3B3/3P4/P1PB4/1PQ2PPP/3RR1K1 w - - 0 19\"]\n[ChapterName \"Chapter 1-50 - solution ex 34\"]\n19. h4! (19. Qc1 Rad8 20. b4) 19... Qd8 20. h5 Qg5 21. hxg6 (21. Bxg7? Kxg7) 21... hxg6 22. Re3 $18 *",
  },
  {
    id: 35,
    pgn: "[FEN \"r1b2rk1/ppq1b2p/2p1ppp1/8/2NP1P2/2PBP3/P1R3PP/3Q1RK1 w - - 0 18\"]\n[ChapterName \"Chapter 1-50 - solution ex 35\"]\n18. h4! $36 *",
  },
  {
    id: 36,
    pgn: "[FEN \"1r1q1rk1/pbpn2pp/1p1pp3/5p2/2PPn3/1P2QNP1/PB2PPBP/3R1RK1 w - - 0 13\"]\n[ChapterName \"Chapter 1-50 - solution ex 36\"]\n13. d5! exd5 (13... e5 14. Nh4!) 14. cxd5 Ndf6 15. Nh4 Qd7 16. Bh3! $18 *",
  },
  {
    id: 37,
    pgn: "[FEN \"r1bq1rk1/pp2npbp/2pp2p1/4p3/2Pn4/2NP1NP1/PP1BPPBP/2RQ1RK1 w - - 0 10\"]\n[ChapterName \"Chapter 1-50 - solution ex 37\"]\n10. b4 (10. Nxd4? exd4 11. Ne4 f5 12. Ng5 h6 13. Nh3 g5 $15) *",
  },
  {
    id: 38,
    pgn: "[FEN \"rn1q1rk1/pbppbppp/1p2p3/8/2PPn3/2N2NP1/PP1BPPBP/R2Q1RK1 w - - 0 9\"]\n[ChapterName \"Chapter 1-50 - solution ex 38\"]\n9. d5! Nxd2 (9... exd5) 10. Qxd2 $16 *",
  },
  {
    id: 39,
    pgn: "[FEN \"r1b1k2r/pp1nbppp/1qn1p3/3pP3/3P4/P2B1N2/1P2NPPP/R1BQ1K1R b kq - 0 11\"]\n[ChapterName \"Chapter 1-50 - solution ex 39\"]\n11... f6! (11... Nf8? 12. b4 $18) (11... Na5?! 12. h4 Nb3 13. Rb1 $16) (11... O-O?! 12. Qc2 h6 13. h4) 12. Nf4 (12. exf6 Nxf6 $15) 12... Ndxe5! (12... fxe5?! 13. Nxe6 (13. dxe5 Ndxe5 14. Nxe5 Nxe5 15. Qh5+ Nf7 $13) 13... e4 14. Bf4 Kf7 $13) 13. dxe5 fxe5 14. Nh5?! (14. Nxe5 Nxe5 $15) 14... O-O 15. Be3 Qxb2 16. Be2 e4 $17 *",
  },
  {
    id: 40,
    pgn: "[FEN \"r3r1k1/2q1bppp/p3bn2/npp1p3/4P3/2P1NN2/PPB1QPPP/R1B1R1K1 w - - 0 16\"]\n[ChapterName \"Chapter 1-50 - solution ex 40\"]\n16. Ng5! (16. Nd5 Bxd5 17. exd5 e4! 18. Bxe4 Bf8 19. Qc2 Nxe4 20. Rxe4 Qd7 $10) 16... Bd7 (16... Bc4?! 17. Qf3 h6 18. b3 hxg5 19. bxc4 $16) 17. Nd5 $14 *",
  },
  {
    id: 41,
    pgn: "[FEN \"r1bq1rk1/pp2b1np/n2p2pB/2pPpp2/2P1P3/2N3P1/PP1QNPBP/R4RK1 w - - 0 12\"]\n[ChapterName \"Chapter 1-50 - solution ex 41\"]\n12. f4! Nc7 (12... Bf6 13. Rae1 Nc7 14. fxe5 Bxe5 15. Nf4) 13. exf5 gxf5 (13... Bxf5 14. fxe5) 14. g4! fxg4 15. fxe5 dxe5 16. Rxf8+ Bxf8 17. Ng3 $18 *",
  },
  {
    id: 42,
    pgn: "[FEN \"r1bqkb1r/ppn2ppp/2n5/2p1p3/8/2NPB1P1/PP2PPBP/R2QK1NR w KQkq - 0 8\"]\n[ChapterName \"Chapter 1-50 - solution ex 42\"]\n8. Bxc6+! bxc6 9. Qa4 Ne6!? $14 *",
  },
  {
    id: 43,
    pgn: "[FEN \"2r1kb1r/1p1n1ppp/pq1p1n2/4pPB1/4P3/P1N5/1PPNQ1PP/2KR3R b k - 0 14\"]\n[ChapterName \"Chapter 1-50 - solution ex 43\"]\n14... Rxc3 15. bxc3 d5 16. Nb1 dxe4! $15 (16... Nxe4 17. Rxd5!) *",
  },
  {
    id: 44,
    pgn: "[FEN \"2rqrnk1/pp3b1p/2p2bp1/3pB3/3P2P1/2NBPP2/PP5Q/4RR1K w - - 0 23\"]\n[ChapterName \"Chapter 1-50 - solution ex 44\"]\n23. f4! (23. Bxf6 Qxf6 $14) 23... Bxe5 24. dxe5! $16 *",
  },
  {
    id: 45,
    pgn: "[FEN \"r1bqr1k1/3n1pbp/p2p1np1/1ppP4/P3P3/2NB1N1P/1PQ2PP1/R1B1R1K1 b - - 0 13\"]\n[ChapterName \"Chapter 1-50 - solution ex 45\"]\n13... c4! 14. Bf1 b4 15. Nb1 Nc5! 16. Qxc4 a5! (16... Nfxe4) 17. Nbd2 Ba6 18. Qc2 Bxf1 19. Kxf1 Rc8 20. Qb1 Qb6 $19 *",
  },
  {
    id: 46,
    pgn: "[FEN \"r1q1nrk1/p4ppp/bpnpp3/2p5/Q1PPP3/P1PBB3/4NPPP/3R1RK1 b - - 0 13\"]\n[ChapterName \"Chapter 1-50 - solution ex 46\"]\n13... Na5 14. dxc5 (14. f4 cxd4 15. cxd4 Bxc4 $19) 14... dxc5 *",
  },
  {
    id: 47,
    pgn: "[FEN \"r2qk2r/1b1n1ppp/p3pb2/2p5/3P4/1Bp2N2/PP2QPPP/R1BR2K1 w kq - 0 14\"]\n[ChapterName \"Chapter 1-50 - solution ex 47\"]\n14. d5! cxb2 (14... e5 15. bxc3 $18) 15. Bxb2 (15. dxe6!? bxa1=Q? 16. exd7+ Kf8 17. Qc4 Qe7 18. d8=Q+) 15... Bxb2 16. dxe6! *",
  },
  {
    id: 48,
    pgn: "[FEN \"r1b1r1k1/1pp2pb1/3p1qpp/p1nPp3/2P1P3/P1N3P1/1P3PBP/R2QNRK1 b - - 0 13\"]\n[ChapterName \"Chapter 1-50 - solution ex 48\"]\n13... a4! *",
  },
  {
    id: 49,
    pgn: "[FEN \"r2qnrk1/pp3pbp/2n1p1p1/3pP3/3P4/4BBPP/PP3P2/RN1Q1RK1 b - - 0 13\"]\n[ChapterName \"Chapter 1-50 - solution ex 49\"]\n13... f6! 14. Bg4 (14. exf6 Qxf6 $17) 14... fxe5! (14... Qe7?! 15. f4) 15. dxe5 d4 $17 *",
  },
  {
    id: 50,
    pgn: "[FEN \"1r1q1rk1/2pb1pb1/1p1p1np1/pNnPp1B1/P1P1P2p/1P4P1/2Q1NPBP/4RRK1 b - - 0 18\"]\n[ChapterName \"Chapter 1-50 - solution ex 50\"]\n18... h3! (18... hxg3? 19. fxg3!) 19. Bh1 Qc8! $10 *",
  },
  {
    id: 51,
    pgn: "[FEN \"r3k2r/1pqbbpp1/p1npp2p/8/4PP1P/1NN4R/PPP2QP1/2KR1B2 b kq - 0 14\"]\n[ChapterName \"Chapter 51-100 - solution ex 51\"]\n14... b5! $15 (14... O-O-O?!) (14... O-O 15. g4) (14... h5 15. Na4!? Bd8 16. Nc3! b5? 17. Bxb5 $16) 15. g4 b4 16. Ne2 a5 $17 *",
  },
  {
    id: 52,
    pgn: "[FEN \"2rq1rk1/pp1bppb1/3p2p1/4n2n/3NP2P/2N1BP2/PPPQ4/1K1R1BR1 b - - 0 15\"]\n[ChapterName \"Chapter 51-100 - solution ex 52\"]\n15... Rxc3! (15... e6? 16. f4 Nc4 17. Bxc4 Rxc4 18. f5 $18) 16. bxc3 (16. Qxc3 Nxf3 $132) 16... Qc7 17. Bh6 Bxh6 18. Qxh6 Qb6+ 19. Ka1 Qa5 20. Qxh5 Be6 21. Nb3 Qxc3+ 22. Kb1 Rc8 23. Rg2 a5 $44 *",
  },
  {
    id: 53,
    pgn: "[FEN \"rn1q1rk1/pbp1bppp/1p3n2/3p4/3P4/P1N1P1N1/1P2BPPP/R1BQK2R w KQ - 0 10\"]\n[ChapterName \"Chapter 51-100 - solution ex 53\"]\n10. Nf5! Re8 11. Nxe7+ $14 (11. O-O?! Bf8 $10) *",
  },
  {
    id: 54,
    pgn: "[FEN \"r1b2rk1/ppq2ppp/2n1pn2/2p5/3P4/P1PBPN2/5PPP/R1BQ1RK1 b - - 0 11\"]\n[ChapterName \"Chapter 51-100 - solution ex 54\"]\n11... e5! *",
  },
  {
    id: 55,
    pgn: "[FEN \"rnb2rk1/ppp1qppp/8/3p4/3P4/3BP3/PP3PPP/R2QK1NR b KQ - 0 9\"]\n[ChapterName \"Chapter 51-100 - solution ex 55\"]\n9... c5! (9... Qg5? 10. Nf3! Qxg2 11. Bxh7+ $18) 10. Ne2 (10. dxc5 d4! $36) 10... Nc6 (10... c4 11. Bc2 Bg4 12. f3 Bh5 13. Qd2 Bg6 $15) 11. dxc5 d4 12. exd4 Nxd4 $10 *",
  },
  {
    id: 56,
    pgn: "[FEN \"r3r1k1/2qbbppp/pn1p1n2/1pp1p3/3PP3/1PP2N1P/P1B1QPP1/R1B1RNK1 w - - 0 16\"]\n[ChapterName \"Chapter 51-100 - solution ex 56\"]\n16. dxe5 dxe5 17. c4! Bc6 18. Bb2 Bf8 19. N3d2 $16 *",
  },
  {
    id: 57,
    pgn: "[FEN \"3rr1k1/2qb1pbp/p2p1np1/np2p3/3PP3/1P2NQ1P/PBBN1PP1/R3R1K1 b - - 0 19\"]\n[ChapterName \"Chapter 51-100 - solution ex 57\"]\n19... Nc6 20. d5 Nd4 21. Qd1 Nxc2 $15 *",
  },
  {
    id: 58,
    pgn: "[FEN \"r4rk1/pp2bppp/1q2p1b1/4B3/2BP4/1P6/P3QPPP/3RR1K1 w - - 0 21\"]\n[ChapterName \"Chapter 51-100 - solution ex 58\"]\n21. d5! exd5 (21... Bb4 22. dxe6!? (22. Rf1 exd5 23. Rxd5 $16 a6 24. h4!) 22... Bxe1 23. Rxe1 fxe6 24. Qb2 $16 Rf7 25. Bxg7! Rxg7 26. Rxe6 $18) 22. Rxd5 $16 (22. Bxd5? Bb4 23. Rf1 Rfe8 24. Qb2 Bf8) *",
  },
  {
    id: 59,
    pgn: "[FEN \"r1b1rnk1/1pp1qppp/p1p5/4P3/3N4/P1Q3B1/1PP2PPP/3R1RK1 b - - 0 17\"]\n[ChapterName \"Chapter 51-100 - solution ex 59\"]\n17... c5! (17... Bd7 18. f4 c5 19. Nb3 b6 20. f5 $18) 18. Nf3 (18. Nb3 b6 19. f4 Bf5 $10) 18... b6! $10 *",
  },
  {
    id: 60,
    pgn: "[FEN \"2rr2k1/pn2qp1p/4b1p1/2pp4/8/6P1/PPNQPPBP/2RR2K1 w - - 0 21\"]\n[ChapterName \"Chapter 51-100 - solution ex 60\"]\n21. b4! (21. Ne3 d4 22. Nc4 Bd5 $10) 21... Nd6 (21... cxb4 22. Nxb4 $16) 22. bxc5 Rxc5 23. Nd4 $14 *",
  },
  {
    id: 61,
    pgn: "[FEN \"rnbqkbnr/pp4pp/2p1p3/3p1p2/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5\"]\n[ChapterName \"Chapter 51-100 - solution ex 61\"]\n5. Bf4 *",
  },
  {
    id: 62,
    pgn: "[FEN \"2r2rk1/p2qn1pp/1p2p3/n2pPp1P/3P1N2/P2PB1Q1/5PP1/R3K2R w KQ - 0 18\"]\n[ChapterName \"Chapter 51-100 - solution ex 62\"]\n18. h6! g6 19. O-O $16 *",
  },
  {
    id: 63,
    pgn: "[FEN \"r1b1qrk1/2p3bp/p2p1n2/3Ppp1n/2B5/2N1BP1P/PPQ1N1P1/2K1R2R b - - 0 16\"]\n[ChapterName \"Chapter 51-100 - solution ex 63\"]\n16... f4! $10 (16... Qf7? 17. g4 $18) (16... Qg6?! 17. g4 Bh6 18. Bxh6 Qxh6+ 19. Kb1 Nf4? 20. g5! $18) *",
  },
  {
    id: 64,
    pgn: "[FEN \"r3qrk1/2nnppbp/p2p2p1/1ppP2B1/2P1PP2/1PNQ4/P2N2PP/4RRK1 b - - 0 15\"]\n[ChapterName \"Chapter 51-100 - solution ex 64\"]\n15... e5 (15... f5! 16. f6 Be3 17. b4 (17. g5 cxb5 18. axb5 Nxb5 19. Nxb5 Qxb5 20. Rxa2 Ra1 $18) 17... Na4 18. g5 $16) (15... dxe6 16. Nxe6 Bh4) *",
  },
  {
    id: 65,
    pgn: "[FEN \"rnbq1rk1/1p3pbp/p2p1np1/2pP4/P3P3/2NB1N2/1P3PPP/R1BQ1RK1 b - - 0 10\"]\n[ChapterName \"Chapter 51-100 - solution ex 65\"]\n10... Bg4! 11. h3 Bxf3 12. Qxf3 Nbd7 13. Bf4 Qc7 14. Qe2 Rfe8 15. Bh2 Rac8 $10 *",
  },
  {
    id: 66,
    pgn: "[FEN \"r1bqnrk1/pp1n2bp/2pp2p1/4pp2/2PPP3/2N1BN2/PP3PPP/R2QRBK1 w - - 0 12\"]\n[ChapterName \"Chapter 51-100 - solution ex 66\"]\n12. exf5 (12. dxe5?! Nxe5) 12... gxf5 13. dxe5 Nxe5 $16 (13... dxe5 14. Bc5 Rf7? 15. Nxe5) *",
  },
  {
    id: 67,
    pgn: "[FEN \"r3r1k1/1pqn1pb1/p2p1npp/2pP4/P3PB2/2N2B1P/1PQ2PP1/R3R1K1 b - - 0 16\"]\n[ChapterName \"Chapter 51-100 - solution ex 67\"]\n16... c4! 17. Be2 Rac8 $132 *",
  },
  {
    id: 68,
    pgn: "[FEN \"r2qr1k1/ppn2pb1/3p1n1p/2pP2p1/4P1b1/P1N2NB1/1PQ1BPPP/R2R2K1 b - - 0 15\"]\n[ChapterName \"Chapter 51-100 - solution ex 68\"]\n15... Nh5 16. Nd2! (16. h3?!) 16... Bxe2 17. Nxe2 Nb5!? 18. Nb3!? $132 *",
  },
  {
    id: 69,
    pgn: "[FEN \"r1bq1rk1/pppnn1bp/3p2p1/3Ppp2/1PP1P3/2N2NP1/P4PBP/R1BQ1RK1 w - - 0 11\"]\n[ChapterName \"Chapter 51-100 - solution ex 69\"]\n11. Ng5! Nf6 12. a4!? (12. Ba3) (12. Ne6) 12... a5 13. b5 $16 *",
  },
  {
    id: 70,
    pgn: "[FEN \"r1b2rk1/pp2qpbp/2p3p1/2n1p2n/2P1P3/2N1BP2/PP1QN1PP/1B1R1RK1 b - - 0 13\"]\n[ChapterName \"Chapter 51-100 - solution ex 70\"]\n13... Ne6 (13... a5?! 14. Qd6 $14) (13... Re8!? 14. Qd6 Bf8 $10) 14. g3 (14. Qd6?! Qf6! $15) *",
  },
  {
    id: 71,
    pgn: "[FEN \"r4rk1/pppqppbp/1n4p1/3P4/4P3/1QN1BP2/PP3P1P/2KR3R w - - 0 17\"]\n[ChapterName \"Chapter 51-100 - solution ex 71\"]\n17. h4 h5 *",
  },
  {
    id: 72,
    pgn: "[FEN \"r1bqn1k1/ppp2rb1/3p2np/PPPPp1p1/2N1Pp2/B1N2P2/4B1PP/R2Q1RK1 w - - 0 18\"]\n[ChapterName \"Chapter 51-100 - solution ex 72\"]\n18. b6! axb6 (18... cxb6 19. axb6 (19. cxb6 a6)) 19. axb6 cxb6 20. Nxb6 (20. cxd6 Bf8) 20... Rb8 21. Nb5 Bf8 22. Na7 (22. Qc2) *",
  },
  {
    id: 73,
    pgn: "[FEN \"r1bqk2r/pp2bppp/2n1pn2/3p4/2PP4/P1N2N2/1P3PPP/R1BQKB1R w KQkq - 0 8\"]\n[ChapterName \"Chapter 51-100 - solution ex 73\"]\n8. c5! b6?! 9. Bb5 $14 (9. b4 a5? 10. b5 $18) *",
  },
  {
    id: 74,
    pgn: "[FEN \"r1bqk2r/pp2ppbp/1nnp2p1/6B1/2PP4/2N5/PP3PPP/2RQKBNR w Kkq - 0 9\"]\n[ChapterName \"Chapter 51-100 - solution ex 74\"]\n9. d5! (9. Nf3 Bg4 $36) (9. Be3 e5 $132) 9... Ne5 10. Be2 O-O 11. b3 $16 *",
  },
  {
    id: 75,
    pgn: "[FEN \"r2q1r2/pp2ppkp/3p2p1/3b1P2/2P1P3/3Q4/PP4PP/2R2RK1 w - - 0 19\"]\n[ChapterName \"Chapter 51-100 - solution ex 75\"]\n19. exd5 $16 *",
  },
  {
    id: 76,
    pgn: "[FEN \"r2q1r2/1ppb1pbk/p1np1npp/4p3/1P2P3/1BPP1N2/PB1N1PPP/R2QR1K1 b - - 0 12\"]\n[ChapterName \"Chapter 51-100 - solution ex 76\"]\n12... Nh5! $15 *",
  },
  {
    id: 77,
    pgn: "[FEN \"r2qr1k1/ppn1ppbp/2bp2p1/3N4/2P1PP2/4B3/PP1QB1PP/3R1RK1 w - - 0 16\"]\n[ChapterName \"Chapter 51-100 - solution ex 77\"]\n16. f5! (16. b4 Nxd5 17. exd5 Bd7 $14) 16... Nxd5 17. exd5 Bd7 18. Bd3 $16 *",
  },
  {
    id: 78,
    pgn: "[FEN \"r1bqk2r/pp1pppbp/2n2np1/8/2PP4/2N2N2/PP3PPP/R1BQKB1R w KQkq - 0 7\"]\n[ChapterName \"Chapter 51-100 - solution ex 78\"]\n7. d5! $16 *",
  },
  {
    id: 79,
    pgn: "[FEN \"r4rk1/2qnbpp1/ppbp1n1p/4pP2/P3P1PP/1NN1B3/1PP3B1/R2Q1RK1 b - - 0 15\"]\n[ChapterName \"Chapter 51-100 - solution ex 79\"]\n15... Nh7! 16. Bf2 (16. Qe1 Rfc8 17. Qg3 Qd8! $17) 16... Rfc8 $15 *",
  },
  {
    id: 80,
    pgn: "[FEN \"r2nk1nr/pppq1pbp/3pb1p1/1P2p3/2P5/2NP1NP1/P3PPBP/R1BQK2R w KQkq - 0 9\"]\n[ChapterName \"Chapter 51-100 - solution ex 80\"]\n9. Ng5 Bf5 (9... e4? 10. Bb2 $18) 10. e4 $16 *",
  },
  {
    id: 81,
    pgn: "[FEN \"r1b2rk1/pp1n1pbp/3p1np1/q2Pp3/4P3/2N2NPP/PP3PB1/R1BQ1RK1 b - - 0 11\"]\n[ChapterName \"Chapter 51-100 - solution ex 81\"]\n11... b5! $132 (11... Nc5 12. Nd2 Bd7 13. Nc4 Qa6 14. Na3 $14) *",
  },
  {
    id: 82,
    pgn: "[FEN \"3rr1k1/pp3pp1/2n1qn1p/3p4/8/1QN1P1P1/PP3PBP/2R2RK1 b - - 0 18\"]\n[ChapterName \"Chapter 51-100 - solution ex 82\"]\n18... d4! 19. Qxe6 Rxe6 20. exd4 Rxd4 $10 (20... Nxd4) *",
  },
  {
    id: 83,
    pgn: "[FEN \"rnbq1rk1/ppp1ppbp/6p1/8/3P4/2n2N2/PP1BPPPP/2RQKB1R w K - 0 8\"]\n[ChapterName \"Chapter 51-100 - solution ex 83\"]\n8. Bxc3 (8. bxc3?! c5) 8... c5 9. dxc5 (9. d5!? Bxc3+ 10. Rxc3) *",
  },
  {
    id: 84,
    pgn: "[FEN \"2r2rk1/p4ppp/1p6/n2P4/5Q2/5N2/q4PPP/3RR1K1 w - - 0 21\"]\n[ChapterName \"Chapter 51-100 - solution ex 84\"]\n21. d6! $16 *",
  },
  {
    id: 85,
    pgn: "[FEN \"1r1q1rk1/p3ppbp/2bp1np1/2p5/1nP5/1PN1N1PP/PB1QPPB1/R4RK1 w - - 0 17\"]\n[ChapterName \"Chapter 51-100 - solution ex 85\"]\n17. Ncd5! Nbxd5 (17... Nfxd5 18. cxd5 Bxb2 19. Qxb2 Bb5 $16) 18. cxd5 Bb5 $14 *",
  },
  {
    id: 86,
    pgn: "[FEN \"rnb2rk1/ppq1n1pp/4p3/3pPp2/3P4/P2B2Q1/2PB1PPP/R3K1NR b KQ - 0 11\"]\n[ChapterName \"Chapter 51-100 - solution ex 86\"]\n11... b6! *",
  },
  {
    id: 87,
    pgn: "[FEN \"r2q1rk1/pp1nppbp/2p1b1p1/4N1B1/3P4/2PB3P/PP3PP1/R2QR1K1 w - - 0 15\"]\n[ChapterName \"Chapter 51-100 - solution ex 87\"]\n15. Nf3! $16 (15. Nxd7 Qxd7 $14) *",
  },
  {
    id: 88,
    pgn: "[FEN \"r3nr1k/pb1nqppp/1pp5/3p4/3P4/1QNBPN2/PP3PPP/2RR2K1 w - - 0 14\"]\n[ChapterName \"Chapter 51-100 - solution ex 88\"]\n14. e4! dxe4 15. Nxe4 h6 (15... Nef6? 16. Neg5! $18) 16. Re1 *",
  },
  {
    id: 89,
    pgn: "[FEN \"1rr3k1/1p1np2p/p2pb3/5p2/2P5/1PR1BP2/P3B1PP/3RK3 b - - 0 20\"]\n[ChapterName \"Chapter 51-100 - solution ex 89\"]\n20... b5 21. Rdc1 Nf6 $10 *",
  },
  {
    id: 90,
    pgn: "[FEN \"r1bq1rk1/p5p1/1p3npp/2pPp3/P1P1P3/2PBB3/6PP/R2Q1RK1 b - - 0 16\"]\n[ChapterName \"Chapter 51-100 - solution ex 90\"]\n16... a5! $15 *",
  },
  {
    id: 91,
    pgn: "[FEN \"rnbqk2r/pp2ppbp/3p1np1/2P5/4PP2/2N2N2/PPP3PP/R1BQKB1R b KQkq - 0 6\"]\n[ChapterName \"Chapter 51-100 - solution ex 91\"]\n6... Qa5! (6... dxc5? 7. Qxd8+ Kxd8 8. e5 $18) 7. Bd3 (7. cxd6?! Nxe4 $15) 7... Qxc5 *",
  },
  {
    id: 92,
    pgn: "[FEN \"rnbqkb1r/pp1ppp1p/5np1/2p5/2P5/1P6/PB1PPPPP/RN1QKBNR w KQkq - 0 4\"]\n[ChapterName \"Chapter 51-100 - solution ex 92\"]\n4. Bxf6! exf6 5. Nc3 Bg7 6. g3 $14 *",
  },
  {
    id: 93,
    pgn: "[FEN \"r3r1k1/pp1nppbp/2p5/5bp1/2NP4/BPP1P3/4BPPP/R4RK1 w - - 0 15\"]\n[ChapterName \"Chapter 51-100 - solution ex 93\"]\n15. Na5! Rab8 $14 *",
  },
  {
    id: 94,
    pgn: "[FEN \"r1bqk1nr/1p3pbp/2np2p1/p1p1p3/2P5/P1N2NP1/1P1PPPBP/1RBQ1RK1 b kq - 0 8\"]\n[ChapterName \"Chapter 51-100 - solution ex 94\"]\n8... Nge7 (8... f5?! 9. d3 Nf6 (9... h6 10. e4!? Nf6 11. Nh4 $16) 10. Bg5 h6 11. Bxf6 Bxf6 12. Nd5 O-O 13. b4 $16) 9. d3 O-O 10. Bd2 Rb8! 11. Ne1 Be6 12. Nc2 d5! 13. cxd5 Nxd5 14. Nxd5 Bxd5 15. b4 Bxg2 16. Kxg2 b5 17. bxa5 Nxa5 *",
  },
  {
    id: 95,
    pgn: "[FEN \"r2qkb1r/ppp3pp/2b1pp1n/3pP3/3P4/1N3N2/PPP2PPP/R1BQK2R b KQkq - 0 8\"]\n[ChapterName \"Chapter 51-100 - solution ex 95\"]\n8... Nf7 *",
  },
  {
    id: 96,
    pgn: "[FEN \"r2q1rk1/pbp2pbp/1p2p1pB/n7/3PP3/2PB4/P2QNPPP/R4RK1 b - - 0 13\"]\n[ChapterName \"Chapter 51-100 - solution ex 96\"]\n13... c5 (13... Bxh6?! 14. Qxh6 c5 15. e5 $16) *",
  },
  {
    id: 97,
    pgn: "[FEN \"rn1qk1nr/1b2ppbp/p2p2p1/1pp5/3PPP2/2NB1N2/PPP1Q1PP/R1B1K2R w KQkq - 0 8\"]\n[ChapterName \"Chapter 51-100 - solution ex 97\"]\n8. dxc5! dxc5 (8... Bxc3+ 9. bxc3 dxc5 10. c4 $16) 9. e5! $16 *",
  },
  {
    id: 98,
    pgn: "[FEN \"r2q1rk1/1p1bbppp/2nppn2/p7/4PP2/1NN1B3/PPP1B1PP/R2Q1RK1 w - - 0 11\"]\n[ChapterName \"Chapter 51-100 - solution ex 98\"]\n11. a4! (11. Kh1?! a4 12. Nd4 a3) (11. a3 a4 12. Nd4 Nxd4 13. Bxd4 Bc6 $10) 11... Nb4 12. Bf3 Bc6 13. Nd4 g6 14. Rf2 e5 15. Nxc6 bxc6 16. fxe5 dxe5 17. Qf1! *",
  },
  {
    id: 99,
    pgn: "[FEN \"r1b1rnk1/pp2q1pp/2p5/5p2/3Pp3/2N1P3/PPQN1PPP/4RRK1 w - - 0 15\"]\n[ChapterName \"Chapter 51-100 - solution ex 99\"]\n15. f3 exf3 16. Nxf3 Be6 17. e4! fxe4 18. Rxe4 $10 *",
  },
  {
    id: 100,
    pgn: "[FEN \"r2q1rk1/pb2bppp/1p3n2/2ppN3/3P4/6P1/PPQ1PPBP/R1BR2K1 w - - 0 13\"]\n[ChapterName \"Chapter 51-100 - solution ex 100\"]\n13. dxc5 Bxc5 (13... bxc5 14. Bg5) 14. Nd3 Bd6 15. Bf4 $16 *",
  },
  {
    id: 101,
    pgn: "[FEN \"r4rk1/1q1nppbp/pp1p1np1/3N4/1PPNP3/5PP1/PB2Q1KP/3R1R2 b - - 0 17\"]\n[ChapterName \"Chapter 101-150 - solution ex 101\"]\n17... Rfe8! $10 (17... Nxd5?! 18. cxd5 Bxd4 19. Bxd4 b5 20. h4 $14) *",
  },
  {
    id: 102,
    pgn: "[FEN \"r4rk1/pbpqppbp/1p4p1/n7/3PP3/2PBBP2/P2QN1PP/R4RK1 b - - 0 13\"]\n[ChapterName \"Chapter 101-150 - solution ex 102\"]\n13... c5 (13... Rfd8?! 14. Bh6 c5 15. Bxg7 Kxg7 16. d5 e6 17. c4! $16) 14. Bh6 (14. d5 e6 $10) 14... cxd4 15. Bxg7 Kxg7 16. cxd4 Rac8 17. Rac1 *",
  },
  {
    id: 103,
    pgn: "[FEN \"r4rk1/pb4qp/np1p4/2pP1p2/2P1pP2/PP1N2P1/3Q2BP/R2R2K1 w - - 0 23\"]\n[ChapterName \"Chapter 101-150 - solution ex 103\"]\n23. Ne1 $14 *",
  },
  {
    id: 104,
    pgn: "[FEN \"rnbq1rk1/pp2nppp/2pb4/3p4/3P1B2/2PB4/PP2NPPP/RN1Q1RK1 b - - 0 8\"]\n[ChapterName \"Chapter 101-150 - solution ex 104\"]\n8... Bf5! $10 (8... Bg4 9. Bxd6 Qxd6 10. Qc2 $14) 9. Bxd6 Qxd6 10. Ng3 Bxd3 11. Qxd3 Nd7 12. Nd2 *",
  },
  {
    id: 105,
    pgn: "[FEN \"r2qkb1r/pp3ppp/2p1pn2/4Nb2/3P4/2P5/PP3PPP/R1BQKB1R w KQkq - 0 9\"]\n[ChapterName \"Chapter 101-150 - solution ex 105\"]\n9. g4 Bg6 (9... Be4 10. f3 Bd5 11. c4 $18) 10. h4 h5 11. g5 Nd5 12. Nxg6 fxg6 13. Qc2 $18 *",
  },
  {
    id: 106,
    pgn: "[FEN \"3r1rk1/1q2bppp/pp1ppn2/2n5/2PQP3/1PN2PPN/PB4KP/3R1R2 b - - 0 17\"]\n[ChapterName \"Chapter 101-150 - solution ex 106\"]\n17... b5! 18. Nf2 (18. cxb5 axb5 $15) 18... Rc8! $15 (18... bxc4 19. Qxc4 d5 $10) (18... b4 19. Ne2 a5 20. Qe3 $10) 19. cxb5 axb5 20. Qb4 Rb8! $15 *",
  },
  {
    id: 107,
    pgn: "[FEN \"r1b2rk1/p1q2ppp/1p3n2/n1pPp3/4P3/P1PB3P/1B2QPP1/R3K1NR b KQ - 0 14\"]\n[ChapterName \"Chapter 101-150 - solution ex 107\"]\n14... c4! (14... Ne8 15. c4 $14) 15. Bc2 Nb3 16. Rd1 a5! $15 *",
  },
  {
    id: 108,
    pgn: "[FEN \"r1r3k1/pp2ppbp/6p1/8/1n1PP3/4BB1P/P4PP1/3R1RK1 w - - 0 17\"]\n[ChapterName \"Chapter 101-150 - solution ex 108\"]\n17. e5 Rab8 (17... Rc7 18. Rb1 Nxa2 19. Rb3 $16) 18. e6! fxe6 19. Bf4 $16 *",
  },
  {
    id: 109,
    pgn: "[FEN \"r2q1rk1/1b1nbpp1/p3p2p/2p5/1pNPP3/5NP1/PPQ2PBP/R2R2K1 w - - 0 19\"]\n[ChapterName \"Chapter 101-150 - solution ex 109\"]\n19. d5 $16 (19. dxc5? Qc7 20. Rxd7 Qxd7 21. Nb6 Qb5 22. Nxa8 Rxa8 23. Rc1 Rc8 24. Nd4 Qxc5) *",
  },
  {
    id: 110,
    pgn: "[FEN \"r1b1r1k1/1pq1bppp/p1nppn2/8/P2NPP2/2N1B3/1PP1B1PP/R3QR1K b - - 0 12\"]\n[ChapterName \"Chapter 101-150 - solution ex 110\"]\n12... Nxd4! (12... Bd7 13. Qg3 $14) (12... Na5 13. Rd1 Nc4 14. Bc1 $14) 13. Bxd4 e5 14. fxe5 (14. Be3 exf4 15. Bxf4 Be6) 14... dxe5 15. Qg3 Bd8 $10 *",
  },
  {
    id: 111,
    pgn: "[FEN \"2rr2k1/pbq1bppp/1pp1pn2/4N3/2PP4/1P4P1/PBQ2PBP/R2R2K1 w - - 0 17\"]\n[ChapterName \"Chapter 101-150 - solution ex 111\"]\n17. c5 $14 *",
  },
  {
    id: 112,
    pgn: "[FEN \"r4rk1/1q2bp1p/p1bppnp1/1p6/3BPP2/P1N2BQ1/1PP3PP/3R1R1K w - - 0 17\"]\n[ChapterName \"Chapter 101-150 - solution ex 112\"]\n17. f5 e5 18. Be3 $14 *",
  },
  {
    id: 113,
    pgn: "[FEN \"r2qkb1r/1b1n1ppp/p1p1pn2/1p6/3P4/P1NBPN2/1P3PPP/R1BQK2R w KQkq - 0 10\"]\n[ChapterName \"Chapter 101-150 - solution ex 113\"]\n10. b4 *",
  },
  {
    id: 114,
    pgn: "[FEN \"1r4k1/ppq1rp1p/6p1/2nB4/2P5/5R1P/PQ3PP1/3R2K1 w - - 0 24\"]\n[ChapterName \"Chapter 101-150 - solution ex 114\"]\n24. h4 $16 h5? (24... Rbe8 25. g3) 25. Qf6 $18 (25. Rxf7!? Rxf7 26. Qf6) *",
  },
  {
    id: 115,
    pgn: "[FEN \"r2qk2r/1p1b1pb1/p2p1npp/2pPn3/P3P3/2N1BP2/1P2BNPP/R2QK2R b KQkq - 0 13\"]\n[ChapterName \"Chapter 101-150 - solution ex 115\"]\n13... g5! $16 *",
  },
  {
    id: 116,
    pgn: "[FEN \"r3rbk1/1bqn1ppp/pp1ppn2/8/2PNPP2/2NBB3/PP2Q1PP/2RR3K w - - 0 15\"]\n[ChapterName \"Chapter 101-150 - solution ex 116\"]\n15. b4!? Rac8 (15... d5?? 16. cxd5 $18) 16. Nb3 Qb8 17. a3 (17. a4!? Qa8 18. a5 d5!?) (17. Bd2) *",
  },
  {
    id: 117,
    pgn: "[FEN \"r2qk2r/1b2bpp1/p2ppn1p/8/1p1BP1PP/2N2P2/PPPQ4/2KR1B1R w kq - 0 14\"]\n[ChapterName \"Chapter 101-150 - solution ex 117\"]\n14. Na4 (14. Ne2 Qa5 15. Kb1 e5 16. Be3 d5 $132) 14... Bc6 15. Nb6 Rb8 16. Nc4 $16 (16. Qf2 $16) *",
  },
  {
    id: 118,
    pgn: "[FEN \"r2q1k1r/1ppb1pb1/3p1np1/p2Pp3/1nP1P2p/2N1BPP1/PP2Q1BP/2KR2NR b - - 0 16\"]\n[ChapterName \"Chapter 101-150 - solution ex 118\"]\n16... Bh6! $10 (16... a4 17. g4) (16... Nh5 17. Qf2 Bh6) 17. f4?! Ng4 18. Bd2? Nf2! *",
  },
  {
    id: 119,
    pgn: "[FEN \"r1q2rk1/1bp1bppp/p3pn2/1p6/1n1P1B2/5NP1/PP1NPPBP/R1QR2K1 b - - 0 13\"]\n[ChapterName \"Chapter 101-150 - solution ex 119\"]\n13... c5! $10 *",
  },
  {
    id: 120,
    pgn: "[FEN \"1rbqr1k1/1p3pbp/p2p1np1/2pPn3/P1N5/2N3PP/1P2PPB1/R1BQ1RK1 w - - 0 14\"]\n[ChapterName \"Chapter 101-150 - solution ex 120\"]\n14. Na3! (14. Ne3? b5 $17) (14. Nxe5 Rxe5 15. a5 b5 16. axb6 Rxb6 $10) 14... Nh5! 15. e4 (15. g4 Bxg4 16. hxg4 Nxg4 17. Qd3 Bxc3 18. bxc3 Re3! 19. Bxe3 Qh4 20. Rfd1 Re8! 21. Nc4 Nf4 22. Bxf4 Qxf2+ 23. Kh1 Qh4+ 24. Kg1) 15... Bd7 16. a5 b5! (16... Qxa5 17. g4 Nf6 18. f4 Nexg4 19. hxg4 Nxg4 20. f5) 17. axb6 Bb5 18. Naxb5 axb5 19. Nxb5 Qxb6 20. Na3 Qb3 $44 *",
  },
  {
    id: 121,
    pgn: "[FEN \"r1q2rk1/1b2bppp/p3pn2/1pp3B1/1n1P4/5NP1/PP2PPBP/RNQR2K1 w - - 0 14\"]\n[ChapterName \"Chapter 101-150 - solution ex 121\"]\n14. Bxf6! gxf6 (14... Bxf6 15. a3! (15. dxc5 a5! $10) 15... Nd5 16. dxc5 $16) 15. a3 Nd5 16. Qh6 Rd8 17. Rc1! $14 *",
  },
  {
    id: 122,
    pgn: "[FEN \"r2r2k1/5p1p/p3pp2/1pbb4/8/P4NP1/1P2PPBP/R2R2K1 w - - 0 20\"]\n[ChapterName \"Chapter 101-150 - solution ex 122\"]\n20. Ne1! Bxg2 (20... Bb3? 21. Rd3! Rxd3 22. Nxd3 Rc8 23. Rc1 $18) 21. Kxg2 f5 22. Rxd8+ Rxd8 23. Nd3 Be7 24. Rc1 $14 (24. a4 bxa4) *",
  },
  {
    id: 123,
    pgn: "[FEN \"r1bqr1k1/1p1n1pbp/p2p1np1/2pP4/P7/2N2NPP/1P2PPB1/R1BQR1K1 b - - 0 12\"]\n[ChapterName \"Chapter 101-150 - solution ex 123\"]\n12... Ne4! 13. Nxe4 Rxe4 *",
  },
  {
    id: 124,
    pgn: "[FEN \"2rqk2r/3bbpp1/p1nppn1p/1p6/4PP2/1NN1BB2/PPPQ2PP/2KR3R b k - 0 13\"]\n[ChapterName \"Chapter 101-150 - solution ex 124\"]\n13... Na5! 14. Nxa5 Qxa5 15. Kb1 (15. e5 b4! $19) 15... b4 16. Ne2 O-O $15 (16... Bc6 17. Qd3 O-O 18. Nd4 $10) *",
  },
  {
    id: 125,
    pgn: "[FEN \"r2q1rk1/1p2ppbp/1n3np1/p2P1b2/P2P4/1QN3P1/1P2NPBP/R1B2RK1 b - - 0 12\"]\n[ChapterName \"Chapter 101-150 - solution ex 125\"]\n12... Bd3 13. d6! exd6 14. Bxb7 Rb8 15. Bf3 *",
  },
  {
    id: 126,
    pgn: "[FEN \"r1bqk2r/4np1p/p1p1p1p1/8/2Nb4/3B4/PPP3PP/R1BQ1R1K w kq - 0 14\"]\n[ChapterName \"Chapter 101-150 - solution ex 126\"]\n14. Bh6! $18 *",
  },
  {
    id: 127,
    pgn: "[FEN \"2r1r1k1/1p2b1pp/p1qppn2/4n3/P3P3/2N4Q/1PP1B1PP/R1B2R1K b - - 0 21\"]\n[ChapterName \"Chapter 101-150 - solution ex 127\"]\n21... Bd8! (21... Nxe4?! 22. Qxe6+ Kh8 23. Nxe4 Qxe4 24. Bf3 Qxc2 25. Bxb7 $14) 22. Bd3 (22. a5 Nxe4 23. Bh5 Ng6 24. Bg4 d5 $15) 22... Ba5 $17 *",
  },
  {
    id: 128,
    pgn: "[FEN \"r4r1k/1bqnbp1p/pp1p2p1/4p2n/P3P3/2N1BP2/1PPNBQPP/R2R2K1 b - - 0 16\"]\n[ChapterName \"Chapter 101-150 - solution ex 128\"]\n16... f5! 17. exf5? (17. Qe1! fxe4 (17... Ndf6 $13) 18. Ndxe4 Ndf6 $13) 17... d5! $17 (17... gxf5?! 18. Nc4 $13) *",
  },
  {
    id: 129,
    pgn: "[FEN \"r1bq1rk1/1p2bppp/p2p1n2/4p3/P3PP2/2Nn1N2/1PP1Q1PP/R1B2RK1 w - - 0 12\"]\n[ChapterName \"Chapter 101-150 - solution ex 129\"]\n12. cxd3 (12. Qxd3 Qc7 $15) 12... exf4 13. Bxf4 Be6 $10 *",
  },
  {
    id: 130,
    pgn: "[FEN \"2rr2k1/pbqnbppp/1p3n2/2pp4/3P4/1PNBPN2/PB2QPPP/2RR2K1 w - - 0 14\"]\n[ChapterName \"Chapter 101-150 - solution ex 130\"]\n14. Bf5! g6 15. Bh3 Ra8 (15... Ne4 16. Nxe4! dxe4 17. Nd2! (17. Ne5? Nxe5! 18. Bxc8 Nd3 $10) 17... Bf6 18. Ba3 $16) 16. Ne5 Nxe5 17. dxe5 Ne4 18. Nxe4 dxe4 19. e6 $36 *",
  },
  {
    id: 131,
    pgn: "[FEN \"4rrk1/1pqnbppp/pNbpp3/P7/4P3/4B1P1/1PP2PBP/R2QR1K1 b - - 0 15\"]\n[ChapterName \"Chapter 101-150 - solution ex 131\"]\n15... f5! (15... Nxb6 16. Bxb6 Qd7 17. c4 $16) 16. Nxd7 Qxd7 17. Qd3 fxe4 18. Bxe4 Bxe4 19. Qxe4 d5 $10 *",
  },
  {
    id: 132,
    pgn: "[FEN \"rn1q1rk1/p2p1pbp/1p4p1/2pPp3/2P1b3/1Q3NP1/PP2PPBP/R1B2RK1 w - - 0 11\"]\n[ChapterName \"Chapter 101-150 - solution ex 132\"]\n11. Bh3! Bxf3 12. Qxf3 $14 *",
  },
  {
    id: 133,
    pgn: "[FEN \"r2q1rk1/1p1b1pbp/p2p1np1/P1pPn3/4P3/2N1BP2/1P1Q1NPP/R3KB1R b KQ - 0 13\"]\n[ChapterName \"Chapter 101-150 - solution ex 133\"]\n13... b5! 14. axb6 Qxb6 15. Be2 Bb5 $10 (15... Rfb8) *",
  },
  {
    id: 134,
    pgn: "[FEN \"r1b1r1k1/pp1nqpbp/2p3p1/2P1p2n/N3P3/5NP1/PPQ1BP1P/R1BR2K1 b - - 0 13\"]\n[ChapterName \"Chapter 101-150 - solution ex 134\"]\n13... Nf8 *",
  },
  {
    id: 135,
    pgn: "[FEN \"2r2r2/3q1pkp/pp4p1/1b1Pp2P/4P3/8/P2QNPP1/2RR2K1 w - - 0 23\"]\n[ChapterName \"Chapter 101-150 - solution ex 135\"]\n23. h6+ $18 *",
  },
  {
    id: 136,
    pgn: "[FEN \"q1r1n1k1/1brn1ppp/1p1pp3/p7/1PP1PP2/PN1Q2PP/2R3BK/2RN4 w - - 0 32\"]\n[ChapterName \"Chapter 101-150 - solution ex 136\"]\n32. Nd4 $16 *",
  },
  {
    id: 137,
    pgn: "[FEN \"r1q1kb1r/pp1npppp/2p2nb1/2PpN3/3P1BP1/1QN2P2/PP2P2P/R3KB1R w KQkq - 0 11\"]\n[ChapterName \"Chapter 101-150 - solution ex 137\"]\n11. h4 h6 12. Nxg6 fxg6 $18 *",
  },
  {
    id: 138,
    pgn: "[FEN \"r2r2k1/1bq1bppp/ppnppn2/8/P3PPP1/1NN2B2/1PP1Q2P/R1B2R1K b - - 0 14\"]\n[ChapterName \"Chapter 101-150 - solution ex 138\"]\n14... d5! 15. e5 (15. exd5 Nxd5 16. Nxd5 Rxd5!! $17 (16... exd5 $15)) 15... Nd7 $17 16. Be3 Ndxe5! 17. fxe5 d4 18. Nd5 Rxd5! 19. Bxd5 dxe3 20. Be4 Nxe5 $19 *",
  },
  {
    id: 139,
    pgn: "[FEN \"r1bq1rk1/pp1nb1pp/2p1pn2/3pNp2/2PP4/6P1/PP1NPPBP/R1BQ1RK1 w - - 0 9\"]\n[ChapterName \"Chapter 101-150 - solution ex 139\"]\n9. Nd3! (9. Ndf3 Nxe5 10. Nxe5 Nd7!) 9... Ne4 10. Qc2 Bf6 (10... Nxd2 11. Bxd2 $16) 11. Nf3! $14 *",
  },
  {
    id: 140,
    pgn: "[FEN \"2r3k1/pp1qp1bp/6p1/n7/3PP3/3QB2P/P3N1P1/5RK1 w - - 0 20\"]\n[ChapterName \"Chapter 101-150 - solution ex 140\"]\n20. d5 Nc4 21. Bd4 e5! (21... Ne5 $14) 22. dxe6 Qxe6 23. Bxg7 Kxg7 24. Nf4 $36 *",
  },
  {
    id: 141,
    pgn: "[FEN \"r3r1k1/pp1bqpbp/n1pp1np1/4p3/2PPP3/2N1BN1P/PP3PP1/R2QRBK1 w - - 0 12\"]\n[ChapterName \"Chapter 101-150 - solution ex 141\"]\n12. c5! exd4 (12... dxc5 13. dxe5 $18) 13. cxd6 Qxd6 14. e5 $18 *",
  },
  {
    id: 142,
    pgn: "[FEN \"r1bqkbnr/pp1ppp1p/2n3p1/1Bp5/4P3/2N5/PPPP1PPP/R1BQK1NR w KQkq - 0 4\"]\n[ChapterName \"Chapter 101-150 - solution ex 142\"]\n4. Bxc6! $14 bxc6 *",
  },
  {
    id: 143,
    pgn: "[FEN \"rqb1r1k1/p2n1ppp/2pbpn2/1p6/3P4/2N1PN2/PPQBBPPP/2R2RK1 w - - 0 13\"]\n[ChapterName \"Chapter 101-150 - solution ex 143\"]\n13. Ne4! (13. Rfd1?! Bb7) 13... Nxe4 14. Qxe4 Bb7 15. Bd3 f5 16. Qh4 $16 *",
  },
  {
    id: 144,
    pgn: "[FEN \"3q1nk1/ppr1rppp/2p1bn2/3p4/3P1N2/2NBPP2/PP3QPP/4RR1K w - - 0 17\"]\n[ChapterName \"Chapter 101-150 - solution ex 144\"]\n17. e4 dxe4 18. fxe4 Rcd7 19. d5!? (19. h3 Rxd4? 20. Ncd5 $18) 19... cxd5 20. Bb5 Rc7 21. exd5 Bd7 (21... Bxd5? 22. Rd1 $18) 22. Be2 $16 *",
  },
  {
    id: 145,
    pgn: "[FEN \"rnq2rk1/p3pp1p/1p4p1/2pP4/4P3/2b2N2/P3QPPP/1RB2RK1 w - - 0 15\"]\n[ChapterName \"Chapter 101-150 - solution ex 145\"]\n15. e5! Qf5?! 16. Rb3 Ba5 17. Nh4 $18 *",
  },
  {
    id: 146,
    pgn: "[FEN \"r2q1rk1/1p1nppbp/2bp2p1/p7/2PBP3/1PN2P2/P2QB1PP/R4RK1 w - - 0 14\"]\n[ChapterName \"Chapter 101-150 - solution ex 146\"]\n14. Be3! *",
  },
  {
    id: 147,
    pgn: "[FEN \"3rr1k1/1p2qpp1/p1p3p1/8/PP1Pp3/4P3/2Q2PPP/1RR3K1 w - - 0 20\"]\n[ChapterName \"Chapter 101-150 - solution ex 147\"]\n20. b5 $16 *",
  },
  {
    id: 148,
    pgn: "[FEN \"r2qnrk1/p2p1ppp/bpn1p3/2p5/2PPPP2/P1PB4/4N1PP/R1BQ1RK1 b - - 0 11\"]\n[ChapterName \"Chapter 101-150 - solution ex 148\"]\n11... f5! *",
  },
  {
    id: 149,
    pgn: "[FEN \"r2qr1k1/pp1b1pb1/3p1n1p/2nP2p1/2p1P3/2N2P1P/PPB1NBP1/R2Q1RK1 b - - 0 16\"]\n[ChapterName \"Chapter 101-150 - solution ex 149\"]\n16... Nh5 $13 (16... b5?! 17. Nd4! $14) *",
  },
  {
    id: 150,
    pgn: "[FEN \"r2q1bk1/ppNb1r1p/3p1nn1/P2Pp3/1P2Ppp1/5P2/4BBPP/2RQNRK1 b - - 0 20\"]\n[ChapterName \"Chapter 101-150 - solution ex 150\"]\n20... g3! 21. hxg3 (21. Nxa8? Nh5! (21... gxf2+ 22. Rxf2 Qxa8)) 21... fxg3 (21... Nh5? 22. g4! Ng3 23. Nxa8 Qh4? 24. Bxa7 $18) 22. Bxg3 Nh5 23. Bf2 (23. Bh2? Bh6 24. Rc3 Bf4) 23... Ngf4 $36 24. Nxa8 Qg5 25. g4 Nh3+ 26. Kh1 N5f4 27. Bg3 Nxe2 28. Qxe2 Qxc1 $15 *",
  },
  {
    id: 151,
    pgn: "[FEN \"r2qk1nr/1p2bppp/p1npb3/4p3/2P1P3/2NB4/PP3PPP/RNBQ1RK1 b kq - 0 9\"]\n[ChapterName \"Chapter 151-200 - solution ex 151\"]\n9... Bg5! (9... Rc8 10. Na3 Nf6) (9... Nf6 10. Nd5 $14) 10. Nd2 Nf6 *",
  },
  {
    id: 152,
    pgn: "[FEN \"r1bqk2r/1p2bppp/p1n1p3/3n4/4N3/3B1N2/PPP2PPP/R1BQ1RK1 w kq - 0 10\"]\n[ChapterName \"Chapter 151-200 - solution ex 152\"]\n10. c4! $14 Nf6 (10... Ndb4?! 11. Bb1 $16) 11. Qe2 O-O 12. Rd1 Qc7 13. Bg5 Nxe4 14. Bxe7 Qxe7 15. Bxe4 $16 *",
  },
  {
    id: 153,
    pgn: "[FEN \"r1b1r1k1/pp3pbp/n1p2np1/4p3/2P1P3/2N1BN1P/PP2BPP1/R2R2K1 b - - 0 12\"]\n[ChapterName \"Chapter 151-200 - solution ex 153\"]\n12... Bf8 *",
  },
  {
    id: 154,
    pgn: "[FEN \"r3r1k1/1q2ppbp/1p1p2p1/p1nb4/2P1P3/PP2BP2/5QPP/1R1R1BK1 w - - 0 22\"]\n[ChapterName \"Chapter 151-200 - solution ex 154\"]\n22. cxd5 $16 *",
  },
  {
    id: 155,
    pgn: "[FEN \"rr4k1/4ppbp/q2p2p1/2pPn3/P3P3/1PN3PP/R1Q1RPK1/2B5 w - - 0 20\"]\n[ChapterName \"Chapter 151-200 - solution ex 155\"]\n20. Nb5! $16 c4!? *",
  },
  {
    id: 156,
    pgn: "[FEN \"r2qk2r/1pp2pp1/2np4/p1b5/2P2Pbp/P1NBP3/1PQB2PP/R4RK1 w kq - 0 14\"]\n[ChapterName \"Chapter 151-200 - solution ex 156\"]\n14. h3! $16 *",
  },
  {
    id: 157,
    pgn: "[FEN \"1rbqr1k1/1p3pnp/p2p1bp1/P1pPn3/4P3/2N1BN1P/1PQ1BPP1/R4RK1 w - - 0 17\"]\n[ChapterName \"Chapter 151-200 - solution ex 157\"]\n17. Nd2 $16 *",
  },
  {
    id: 158,
    pgn: "[FEN \"r1b2rk1/1p1nqppp/p1pbpn2/8/2BP4/2N1PN1P/PPQ2PP1/R1BR2K1 b - - 0 11\"]\n[ChapterName \"Chapter 151-200 - solution ex 158\"]\n11... b5 (11... c5 12. dxc5 Nxc5 13. a4 $14) 12. Bd3 c5 $10 13. Ne4 c4! 14. Nxd6 Qxd6 15. Bf1 Bb7 *",
  },
  {
    id: 159,
    pgn: "[FEN \"r4rk1/1bp1qppp/1p1p4/p1nPp3/2P1PP2/2N3P1/PP1Q2BP/2R2RK1 w - - 0 17\"]\n[ChapterName \"Chapter 151-200 - solution ex 159\"]\n17. f5 $14 *",
  },
  {
    id: 160,
    pgn: "[FEN \"rn2brk1/pp2q1pp/2pbpn2/3pNp2/2PP4/1P1BPP2/PBQ3PP/RN3RK1 b - - 0 11\"]\n[ChapterName \"Chapter 151-200 - solution ex 160\"]\n11... c5! (11... Nbd7 12. c5 Bc7 13. b4 a5 14. a3 $14) *",
  },
  {
    id: 161,
    pgn: "[FEN \"r1b2rk1/ppbnqpp1/2p2n1p/4p3/3P4/P1N1PN1P/BPQ2PP1/R1B2RK1 w - - 0 13\"]\n[ChapterName \"Chapter 151-200 - solution ex 161\"]\n13. Nh4! (13. Bd2 e4! 14. Nh4 Nb6 15. Ng6 Qd6 16. Ne5 Be6 $13) 13... Re8 (13... exd4 14. exd4 Qd6 15. g3 $16 Qxd4? 16. Be3) 14. Nf5 Qf8 15. Nb5! Bb8 (15... cxb5 16. Qxc7 $16) 16. Bd2 a5 17. Nc3 $14 *",
  },
  {
    id: 162,
    pgn: "[FEN \"r1bqkb1r/pp3ppp/2n1pn2/1Bpp4/4PP2/2N2N2/PPPP2PP/R1BQK2R w KQkq - 0 6\"]\n[ChapterName \"Chapter 151-200 - solution ex 162\"]\n6. Bxc6+! bxc6 7. d3 (7. Qe2?! c4!) (7. e5 Nd7 8. d3 (8. b3 Ba6 9. d3 c4)) 7... c4!? 8. e5 Nd7 9. d4 $14 *",
  },
  {
    id: 163,
    pgn: "[FEN \"r1bqr1k1/1p3ppp/p1n2n2/3p4/2pP4/P1P1PP2/2B1N1PP/R1BQ1RK1 w - - 0 13\"]\n[ChapterName \"Chapter 151-200 - solution ex 163\"]\n13. Ng3 (13. g4 h5!? $132) 13... Qa5 (13... h5! 14. h4!? $16) 14. Bd2 b5 15. e4 $18 *",
  },
  {
    id: 164,
    pgn: "[FEN \"r1bqk2r/5ppp/p1n1p3/1pnpP3/5P2/2N2N2/PPP2QPP/R3KB1R b KQkq - 0 11\"]\n[ChapterName \"Chapter 151-200 - solution ex 164\"]\n11... Qb6 (11... Ne4? 12. Nxe4 dxe4 13. Nd2 Qd4 14. c3 e3 15. cxd4 exf2+ 16. Kxf2 Nxd4 17. Ne4 $16) *",
  },
  {
    id: 165,
    pgn: "[FEN \"rnbq1rk1/1p3pbp/p2p2p1/3Pp2n/4P1P1/2NBBP2/PP1Q3P/R3K1NR b KQ - 0 11\"]\n[ChapterName \"Chapter 151-200 - solution ex 165\"]\n11... Nf4! 12. Bxf4? exf4 13. Qxf4 Nd7 14. Qxd6 Be5 15. Qa3 b5 $36 *",
  },
  {
    id: 166,
    pgn: "[FEN \"r2r2k1/1p3pbp/4pnp1/pB1P4/4P3/P4P2/P4KPP/3R2NR w - - 0 17\"]\n[ChapterName \"Chapter 151-200 - solution ex 166\"]\n17. d6 $14 *",
  },
  {
    id: 167,
    pgn: "[FEN \"2r2rk1/1p2bpp1/p2pbn1p/q3p3/4P2P/2NB1P2/PPP3PB/1K1RQ2R b - - 0 18\"]\n[ChapterName \"Chapter 151-200 - solution ex 167\"]\n18... Rxc3! 19. Qxc3 Qxa2+ 20. Kc1 d5! $19 (20... Rc8? 21. Qb4 $10) *",
  },
  {
    id: 168,
    pgn: "[FEN \"rnqr2k1/1bp1bpp1/1p3n1p/p2p4/3P1B2/PPN2NP1/2Q1PPBP/R2R2K1 w - - 0 15\"]\n[ChapterName \"Chapter 151-200 - solution ex 168\"]\n15. Nh4! $16 (15. Na4 Na6) (15. Ne5 $14) 15... g5? 16. Nf5 *",
  },
  {
    id: 169,
    pgn: "[FEN \"r1q2rk1/pb2bppp/1pp1pn2/8/2PP4/5NP1/PPQ2PBP/R1BR2K1 w - - 0 14\"]\n[ChapterName \"Chapter 151-200 - solution ex 169\"]\n14. c5! $14 *",
  },
  {
    id: 170,
    pgn: "[FEN \"2rq1rk1/pp1b1pbp/3p2p1/2pP3n/2B1P3/2N1BP2/PPQ3PP/R4RK1 b - - 0 16\"]\n[ChapterName \"Chapter 151-200 - solution ex 170\"]\n16... f5 (16... a6 17. a4 f5) (16... Bd4?! 17. Qd2 $14) 17. exf5 gxf5 $15 18. Rfe1 (18. f4 Re8) 18... Be5 $15 *",
  },
  {
    id: 171,
    pgn: "[FEN \"r2r2k1/pp1b1pb1/nn2p1pp/2p5/8/2NPBNP1/PP2PPBP/2R2RK1 w - - 0 14\"]\n[ChapterName \"Chapter 151-200 - solution ex 171\"]\n14. Nd2! $16 *",
  },
  {
    id: 172,
    pgn: "[FEN \"3r1rk1/2pbpqb1/np1p1npp/p2P1p2/2PB1N2/2N3P1/PP2PPBP/R2QR1K1 w - - 0 16\"]\n[ChapterName \"Chapter 151-200 - solution ex 172\"]\n16. e4! fxe4 17. Nxe4 g5 18. Ne6 $16 *",
  },
  {
    id: 173,
    pgn: "[FEN \"r1bq1rk1/pppn2b1/3p1pp1/3Pp2p/2P1P1nB/2N2N2/PP2BPPP/R2QK2R w KQ - 0 11\"]\n[ChapterName \"Chapter 151-200 - solution ex 173\"]\n11. Nd2 Nh6 12. f3 *",
  },
  {
    id: 174,
    pgn: "[FEN \"b1r2rk1/p2nbppp/2p1p3/q7/2PP1B2/5NP1/P1Q2PBP/R2R2K1 w - - 0 17\"]\n[ChapterName \"Chapter 151-200 - solution ex 174\"]\n17. c5! Nf6 18. Ne5 Nd5 19. Nc4 Qd8 20. Bd6! Bxd6 21. Nxd6 $18 *",
  },
  {
    id: 175,
    pgn: "[FEN \"rn2k2r/1pq1bppp/p2pbn2/4pP2/4P3/1NN5/PPP1B1PP/R1BQ1RK1 b kq - 0 10\"]\n[ChapterName \"Chapter 151-200 - solution ex 175\"]\n10... Bc4 *",
  },
  {
    id: 176,
    pgn: "[FEN \"1r2r1k1/3nppb1/nq1p2p1/2pP3p/4PB1P/P1N2NP1/1P1QRPK1/2R5 w - - 0 20\"]\n[ChapterName \"Chapter 151-200 - solution ex 176\"]\n20. e5! $18 dxe5 21. Nxe5 Nxe5 22. Bxe5 Bxe5 23. Rxe5 Qxb2 24. Qf4! $18 *",
  },
  {
    id: 177,
    pgn: "[FEN \"r1r3k1/1p1nppbp/p2pb1p1/3N4/P1P1P3/1P2BP2/3KB1PP/2R4R b - - 0 16\"]\n[ChapterName \"Chapter 151-200 - solution ex 177\"]\n16... Bxd5! 17. cxd5 Bb2! $14 *",
  },
  {
    id: 178,
    pgn: "[FEN \"rq3rk1/1bp1npp1/pb1p1n1p/1p1Pp3/4P3/1BP1BN1P/PP1N1PP1/R2QR1K1 w - - 0 14\"]\n[ChapterName \"Chapter 151-200 - solution ex 178\"]\n14. Bxb6 cxb6 $14 *",
  },
  {
    id: 179,
    pgn: "[FEN \"r2q1rk1/3nppbp/bn1p2p1/2pP4/4P3/2N2NPP/PP3PB1/R1BQR1K1 b - - 0 13\"]\n[ChapterName \"Chapter 151-200 - solution ex 179\"]\n13... Nc4! $17 *",
  },
  {
    id: 180,
    pgn: "[FEN \"2r1r1k1/1b1q1pb1/p2p1npp/1pp5/Pn1PP3/1PB2N1P/3N1PP1/RBQ1R1K1 w - - 0 20\"]\n[ChapterName \"Chapter 151-200 - solution ex 180\"]\n20. d5! $16 (20. dxc5?? Rxc5 $19) (20. Qb2? Nbd5! 21. exd5 Rxe1+ 22. Nxe1 b4 $17) *",
  },
  {
    id: 181,
    pgn: "[FEN \"r1r3k1/pp1bppbp/2n3p1/8/3PPP2/1B2B3/P3NKPP/2R4R b - - 0 16\"]\n[ChapterName \"Chapter 151-200 - solution ex 181\"]\n16... Na5 $132 *",
  },
  {
    id: 182,
    pgn: "[FEN \"2r1r1k1/pp1nbp1p/2pqb1p1/1P1p4/P2P4/1Q1BPN1P/4NPP1/R1R3K1 b - - 0 18\"]\n[ChapterName \"Chapter 151-200 - solution ex 182\"]\n18... c5! 19. dxc5 Nxc5 20. Qd1 Bf6 21. Nfd4 $10 *",
  },
  {
    id: 183,
    pgn: "[FEN \"r4rk1/1p1b2qp/p1nbp1p1/3p3n/N2P3B/5N2/PP3PPP/2RQRBK1 b - - 0 18\"]\n[ChapterName \"Chapter 151-200 - solution ex 183\"]\n18... Rxf3! 19. gxf3 (19. Qxf3? Qxd4!) 19... Nxd4 $17 *",
  },
  {
    id: 184,
    pgn: "[FEN \"2b1k1r1/2qnbpp1/p2ppn1p/8/1r1NPP2/2N1BBQ1/1PP3PP/2KRR3 b - - 0 16\"]\n[ChapterName \"Chapter 151-200 - solution ex 184\"]\n16... g5! 17. f5? (17. fxg5 hxg5 $15) 17... e5 18. Nb3 g4 19. Be2 Rxb3! (19... Nxe4 $17) 20. cxb3 Nxe4 $19 *",
  },
  {
    id: 185,
    pgn: "[FEN \"r2r2k1/pb2qpb1/1pp1p1p1/6Np/3PP1nP/P1N5/BPQ2PP1/3R1RK1 w - - 0 20\"]\n[ChapterName \"Chapter 151-200 - solution ex 185\"]\n20. e5! $16 *",
  },
  {
    id: 186,
    pgn: "[FEN \"r1bqkb1r/ppn2ppp/2p2n2/3p2B1/3P4/P1N2N2/1PQ1PPPP/R3KB1R b KQkq - 0 8\"]\n[ChapterName \"Chapter 151-200 - solution ex 186\"]\n8... g6! (8... Ne6 9. Bh4 Be7) 9. e3 (9. e4 dxe4 10. Nxe4 Be7 $10) 9... Bf5 10. Bd3 Bxd3 11. Qxd3 $10 *",
  },
  {
    id: 187,
    pgn: "[FEN \"r1bq1rk1/1p1nbppp/p1p1p3/2Pp4/3P4/2NBP1B1/PP3PPP/R2QK2R b KQ - 0 11\"]\n[ChapterName \"Chapter 151-200 - solution ex 187\"]\n11... e5! *",
  },
  {
    id: 188,
    pgn: "[FEN \"r1bqrbk1/p2n1pp1/2p4p/3p4/3B4/2N3P1/PP2PPBP/2RQ1RK1 w - - 0 15\"]\n[ChapterName \"Chapter 151-200 - solution ex 188\"]\n15. Na4 (15. e4? c5 $17) *",
  },
  {
    id: 189,
    pgn: "[FEN \"rr4k1/4ppbp/3p2p1/q1pPn3/4PB2/2N3PP/PP2QPK1/2R1R3 b - - 0 17\"]\n[ChapterName \"Chapter 151-200 - solution ex 189\"]\n17... Qa6! 18. Bxe5 Bxe5 19. Rc2 Qxe2 20. Rexe2 $44 *",
  },
  {
    id: 190,
    pgn: "[FEN \"qr4k1/r2nppbp/1n1p2p1/2pP4/4PB2/1PN2NPP/P1Q2PK1/R3R3 w - - 0 17\"]\n[ChapterName \"Chapter 151-200 - solution ex 190\"]\n17. a4! $16 (17. Re2 c4 18. b4? Ra3 $19) 17... c4 18. b4 Bxc3 19. Qxc3 Rxa4 20. Nd4! $18 *",
  },
  {
    id: 191,
    pgn: "[FEN \"r2q1r1k/1bp1bppp/p1np4/4p3/Q1N1P3/2PP1N2/1P3PPP/R1B1R1K1 b - - 0 15\"]\n[ChapterName \"Chapter 151-200 - solution ex 191\"]\n15... f5! 16. Ne3 (16. exf5 Rxf5 17. Ne3 Rxf3!? $15) 16... f4 (16... fxe4 17. dxe4 Qe8 $10) 17. Nd5 g5 $13 *",
  },
  {
    id: 192,
    pgn: "[FEN \"r1b2k1r/4bp1p/3ppp2/p1q5/1p2PP2/3B3Q/PPP1N1PP/1K1R3R b - - 0 17\"]\n[ChapterName \"Chapter 151-200 - solution ex 192\"]\n17... h5! 18. Rc1 (18. f5 a4 19. Nf4 Qe5 $17) 18... a4 (18... f5!? 19. exf5 exf5 $17) *",
  },
  {
    id: 193,
    pgn: "[FEN \"3r1rk1/p3qpb1/Pp1p1nbp/1Np2np1/3Pp3/1QP1P1B1/1P1NBPPP/R4RK1 b - - 0 20\"]\n[ChapterName \"Chapter 151-200 - solution ex 193\"]\n20... h5 21. Nc4! (21. dxc5?! bxc5 22. Nc4 d5! $17) 21... h4 22. Bxd6 Nxd6 23. Nbxd6! Rxd6 (23... cxd4 24. cxd4 Rxd6 25. Nxd6 Qxd6 26. Qb5! $132) 24. dxc5! (24. Nxd6? Qxd6 $17) 24... Re6 25. cxb6 axb6 $44 *",
  },
  {
    id: 194,
    pgn: "[FEN \"rnb1r1k1/pp2qpbp/2pp1np1/8/2PNP3/2N1BP2/PPQ1B1PP/R4RK1 b - - 0 11\"]\n[ChapterName \"Chapter 151-200 - solution ex 194\"]\n11... d5! 12. cxd5 cxd5 (12... Nxd5 13. Bf2 Nxc3 14. bxc3 $14) 13. Bd3 $10 (13. Bb5 Bd7 $10) *",
  },
  {
    id: 195,
    pgn: "[FEN \"rnbq1rk1/ppp3bp/3p2p1/3Ppp1n/2P1P3/2NB4/PP2NPPP/R1BQ1RK1 w - - 0 9\"]\n[ChapterName \"Chapter 151-200 - solution ex 195\"]\n9. exf5! (9. Ng3 Nf4! 10. exf5 Nxd3 11. Qxd3 gxf5 $132) 9... gxf5 10. f4 (10. Ng3 Nxg3 11. fxg3! $14) *",
  },
  {
    id: 196,
    pgn: "[FEN \"r1b2rk1/ppbnqppp/2p1pn2/2Pp4/3P4/2NBPN2/PPQ2PPP/R1B2RK1 w - - 0 10\"]\n[ChapterName \"Chapter 151-200 - solution ex 196\"]\n10. e4! dxe4 11. Nxe4 $16 h6 (11... e5? 12. Nxf6+ $18) 12. Re1 *",
  },
  {
    id: 197,
    pgn: "[FEN \"r2r2k1/pb2qppp/np3b2/2pp4/Q2P4/P1N1PNP1/1P1R1PBP/5RK1 b - - 0 15\"]\n[ChapterName \"Chapter 151-200 - solution ex 197\"]\n15... Nc7 (15... Nb8? 16. Ne5 $16) (15... c4 16. b3 $14 Nc5! (16... cxb3 17. Qxb3 $16) 17. dxc5 Bxc3 18. Rc2 Qf6 19. bxc4 d4 $14) 16. Rfd1 c4!? 17. Ne5! b5 (17... Bxe5? 18. dxe5 Qxe5 19. Qxc4! $18) 18. Qa5 (18. Nxb5? Bxe5 19. dxe5 Bc6 $19) 18... a6 $13 *",
  },
  {
    id: 198,
    pgn: "[FEN \"rq2r1k1/1b3ppp/2p2n2/pp2b3/8/P1N1P2P/1PQ1BPP1/1RBR2K1 w - - 0 17\"]\n[ChapterName \"Chapter 151-200 - solution ex 198\"]\n17. b4! (17. b3 b4 18. Na4 Ne4) *",
  },
  {
    id: 199,
    pgn: "[FEN \"1qr1rbk1/1b1n1p1p/pp1pp1p1/6Pn/2P1PP2/1PN1BN1P/P4Q2/1BR2RK1 b - - 0 22\"]\n[ChapterName \"Chapter 151-200 - solution ex 199\"]\n22... d5! (22... b5!? 23. cxb5 axb5 24. Nxb5 d5 $17) 23. cxd5 Nxf4 $17 *",
  },
  {
    id: 200,
    pgn: "[FEN \"r1bqr1k1/5pbp/3p1np1/1ppP4/4P3/2N3P1/1P3PBP/1RBQ1RK1 w - - 0 17\"]\n[ChapterName \"Chapter 151-200 - solution ex 200\"]\n17. b4! $15 *",
  },
  {
    id: 201,
    pgn: "[FEN \"r2qr1k1/pp1nbp1p/2p2np1/3p2B1/3P4/2N1PN2/PPQ2PPP/1R3RK1 b - - 0 13\"]\n[ChapterName \"Chapter 201-250 - solution ex 201\"]\n13... Ne4! 14. Nxe4 dxe4 15. Bxe7 Qxe7 16. Nd2 c5 $10 *",
  },
  {
    id: 202,
    pgn: "[FEN \"2r2rk1/1p1bbppp/1qn1p1n1/p2pP3/3P2P1/PP3N1P/1B1N1P2/R2QRBK1 b - - 0 16\"]\n[ChapterName \"Chapter 201-250 - solution ex 202\"]\n16... f6! $19 (16... f5 17. g5 $17) 17. Rc1 (17. exf6 Bxf6) 17... fxe5 18. dxe5 Bc5 19. Re2 Nf4 $19 *",
  },
  {
    id: 203,
    pgn: "[FEN \"r1bq1rk1/ppp2ppp/2nbpn2/8/2QP4/5NP1/PP1BPPBP/RN3RK1 b - - 0 9\"]\n[ChapterName \"Chapter 201-250 - solution ex 203\"]\n9... e5 10. dxe5 (10. d5 Ne7 11. Nc3 h6 12. Rfd1 a6 $13) 10... Nxe5 11. Nxe5 Bxe5 $10 *",
  },
  {
    id: 204,
    pgn: "[FEN \"r2r2k1/p2nppb1/1p5p/3P2p1/4P3/5BB1/q4PPP/1R1QR1K1 w - - 0 19\"]\n[ChapterName \"Chapter 201-250 - solution ex 204\"]\n19. e5! Rac8 (19... Nc5 20. d6 Rac8 21. Bd5 $18) 20. e6! fxe6 21. Rxe6 $18 *",
  },
  {
    id: 205,
    pgn: "[FEN \"r2qkb1r/5ppp/pn1pbn2/Np2p3/4P1P1/2N1BP2/PPPQ3P/R3KB1R b KQkq - 0 11\"]\n[ChapterName \"Chapter 201-250 - solution ex 205\"]\n11... b4! (11... d5 12. g5 d4 13. gxf6 dxe3 14. Qxd8+ Rxd8 15. fxg7 Bxg7 $15) 12. Ne2 d5 13. g5 Nfd7 $17 *",
  },
  {
    id: 206,
    pgn: "[FEN \"r3k2r/3bbpp1/pq1p3p/N2Pp3/1p4PP/5P2/PPPQ4/1K1R1B1R w kq - 0 18\"]\n[ChapterName \"Chapter 201-250 - solution ex 206\"]\n18. Nc6 Bxc6 19. dxc6 Qxc6 20. Qxb4 (20. b3 d5) 20... d5 (20... Qxf3 21. Qa4+) 21. Qb3 Rd8 22. c4 $36 *",
  },
  {
    id: 207,
    pgn: "[FEN \"r1b2rk1/2q2ppp/p1p1p3/2bp1P2/4P3/2N5/PPP3PP/R1BQ1R1K w - - 0 13\"]\n[ChapterName \"Chapter 201-250 - solution ex 207\"]\n13. f6! (13. Na4!? Bd6 14. f6! Rd8 $16) 13... Rd8 (13... g6 14. Na4! Bd6 15. e5! Bxe5 16. Qd2) 14. fxg7 $18 *",
  },
  {
    id: 208,
    pgn: "[FEN \"r1bq1rk1/ppp2pbp/n2p1np1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQ1RK1 b - - 0 8\"]\n[ChapterName \"Chapter 201-250 - solution ex 208\"]\n8... Nc5 9. Qc2 a5 10. Bg5 (10. a3? a4) 10... h6 11. Be3 b6 12. Nd2 Ng4!? $13 (12... Nh7 13. a3 f5) *",
  },
  {
    id: 209,
    pgn: "[FEN \"r2qkb1r/pb1n1pp1/1p1ppn1p/8/2PNPP2/2N3P1/PP4BP/R1BQR1K1 w kq - 0 12\"]\n[ChapterName \"Chapter 201-250 - solution ex 209\"]\n12. e5! Bxg2 13. exf6 Bb7 14. Rxe6+ fxe6 15. Qh5+ g6 16. Qxg6# { 1-0 White wins by checkmate. } *",
  },
  {
    id: 210,
    pgn: "[FEN \"r4rk1/p4pbp/3qp1p1/2R5/3PP3/4BQ1P/5PP1/5RK1 w - - 0 19\"]\n[ChapterName \"Chapter 201-250 - solution ex 210\"]\n19. e5! (19. Rd1 a5 $132) (19. d5 a5 $132) 19... Qd7 20. Ra1 $14 *",
  },
  {
    id: 211,
    pgn: "[FEN \"r1b2rk1/2qn1ppp/4p3/p1bpP2P/1p1B1P2/4Q3/PPP1N1P1/1K1R1B1R b - - 0 16\"]\n[ChapterName \"Chapter 201-250 - solution ex 211\"]\n16... Ba6 (16... a4 17. c3! Rb8 18. Rc1) (16... Bb7) 17. Bxc5 Nxc5 *",
  },
  {
    id: 212,
    pgn: "[FEN \"r1bq1rk1/1pp1npbp/3p2p1/p2Pp2n/1PP1P3/B1N2N2/P3BPPP/R2Q1RK1 w - - 0 11\"]\n[ChapterName \"Chapter 201-250 - solution ex 212\"]\n11. c5! (11. bxa5 b6!? 12. Bb4 (12. axb6!? Rxa3 13. Nb5 Ra8 14. bxc7 $14) 12... bxa5 13. Ba3 Nf4 14. c5 $14) 11... Nf4 12. b5 (12. bxa5 Rxa5 13. Bb4 Rxc5!? 14. Bxc5 dxc5) 12... b6 13. cxd6 cxd6 $16 *",
  },
  {
    id: 213,
    pgn: "[FEN \"1r1r2k1/4bpp1/p2pq2p/1p2p3/P1P5/1P1QBPP1/2R1P2P/3R2K1 w - - 0 26\"]\n[ChapterName \"Chapter 201-250 - solution ex 213\"]\n26. cxb5! axb5 27. a5 (27. axb5 d5) (27. Qd5 Qxd5 28. Rxd5 bxa4 29. bxa4 Rb3 30. Kf2 Bg5 $10) 27... d5 28. Bb6 $16 e4 29. Qe3!? *",
  },
  {
    id: 214,
    pgn: "[FEN \"r1bqr1k1/pp3pbp/1n4p1/n2Pp3/8/2N3P1/PP2NPBP/R1BQ1RK1 b - - 0 16\"]\n[ChapterName \"Chapter 201-250 - solution ex 214\"]\n16... Nac4 (16... Bf5 17. h3 h5 18. b3 e4 19. Be3 $14) *",
  },
  {
    id: 215,
    pgn: "[FEN \"r4rk1/pR3pbp/2n1p1p1/8/3PP1b1/4BN2/q3BPPP/3Q1RK1 w - - 0 15\"]\n[ChapterName \"Chapter 201-250 - solution ex 215\"]\n15. d5! exd5 (15... Rad8?! 16. d6 $16) (15... Rfd8?! 16. Rxf7! $18 exd5 17. Bb5 dxe4? 18. Rxg7+ Kxg7 19. Qc1 exf3 20. Qc3+ $18) 16. exd5 Rfd8 (16... Ne5?! 17. d6 $16) (16... Rad8?! 17. d6 $16) 17. d6 $14 (17. dxc6!? Rxd1 18. Bxd1) *",
  },
  {
    id: 216,
    pgn: "[FEN \"r1b2rk1/pp3pbp/2pp1np1/q3n3/2PNP3/2N3PP/PP3PB1/R1BQR1K1 w - - 0 12\"]\n[ChapterName \"Chapter 201-250 - solution ex 216\"]\n12. Bf1 (12. Qe2 Qc5!) *",
  },
  {
    id: 217,
    pgn: "[FEN \"r1bq1rk1/pppn1p1p/3b1pp1/8/2BP4/2N1PN2/PP3PPP/R2Q1RK1 b - - 0 9\"]\n[ChapterName \"Chapter 201-250 - solution ex 217\"]\n9... f5 (9... Kg7) (9... c5 10. Rc1) 10. e4 fxe4 11. Nxe4 Nf6 $10 (11... Be7?! 12. Re1 Nf6 13. Ne5 $14) *",
  },
  {
    id: 218,
    pgn: "[FEN \"r1b2rk1/ppq1bpp1/1np1pn1p/8/1PNPP3/P2B1N2/2Q2PPP/R1BR2K1 w - - 0 16\"]\n[ChapterName \"Chapter 201-250 - solution ex 218\"]\n16. Na5! (16. e5 Nfd5 17. Bd2 $18) *",
  },
  {
    id: 219,
    pgn: "[FEN \"rnbqkb1r/ppp2ppp/5n2/3p4/2PP4/5N2/PP3PPP/RNBQKB1R b KQkq - 0 5\"]\n[ChapterName \"Chapter 201-250 - solution ex 219\"]\n5... Bb4+! *",
  },
  {
    id: 220,
    pgn: "[FEN \"r2q1rk1/1p3pbp/pn1p1np1/2pP4/P1N1P3/2N5/1P2QPPP/R1B2RK1 w - - 0 14\"]\n[ChapterName \"Chapter 201-250 - solution ex 220\"]\n14. Ne3 (14. Na3?! Re8 $132 15. a5? Nbxd5 $19) 14... Re8 15. a5 $16 *",
  },
  {
    id: 221,
    pgn: "[FEN \"2rq1rk1/1p1nb2p/3p2p1/p2Ppp2/2P5/1Q2BP2/PP1N2PP/R4RK1 b - - 0 19\"]\n[ChapterName \"Chapter 201-250 - solution ex 221\"]\n19... Bg5 20. f4?! (20. Rae1 $15) 20... exf4 21. Bxf4 Nc5 22. Qg3 Bxf4 23. Qxf4 Qf6 24. b3 g5 $17 *",
  },
  {
    id: 222,
    pgn: "[FEN \"2rq2k1/1prnbpp1/p2p3p/P2PpP2/2P5/4BQ2/1P1N2PP/R1R4K b - - 0 21\"]\n[ChapterName \"Chapter 201-250 - solution ex 222\"]\n21... Bg5 (21... e4 22. Qe2! $16) 22. Bxg5! (22. b4 Bxe3 23. Qxe3 Qh4) (22. b3 Bxe3 23. Qxe3 Nf6 $10) 22... Qxg5 23. Ne4 Qe7 24. b3 Nf6 *",
  },
  {
    id: 223,
    pgn: "[FEN \"r1bqk2r/ppp1bpp1/2n2n1p/3p4/3P3B/2PB1N2/PP3PPP/RN1QK2R b KQkq - 0 8\"]\n[ChapterName \"Chapter 201-250 - solution ex 223\"]\n8... Nh5! 9. Bg3 (9. Bxe7 Qxe7+ 10. Qe2 Nf4 11. Qxe7+ Nxe7 12. Bf1 Bf5) *",
  },
  {
    id: 224,
    pgn: "[FEN \"rnbqk2r/1p2bp1p/p3p3/2p2p2/2PP4/2N2N2/PP3PPP/R2QKB1R w KQkq - 0 10\"]\n[ChapterName \"Chapter 201-250 - solution ex 224\"]\n10. d5 *",
  },
  {
    id: 225,
    pgn: "[FEN \"2r1n1k1/p2qnppp/1p2r3/3pP3/3P4/P2Q1PN1/1B2R1PP/3R2K1 w - - 0 21\"]\n[ChapterName \"Chapter 201-250 - solution ex 225\"]\n21. f4! g6! (21... Rec6 22. f5 $16) 22. f5! Nxf5 23. Nxf5 gxf5 24. Qxf5 $14 *",
  },
  {
    id: 226,
    pgn: "[FEN \"3rk2r/2q1bpp1/p2pbn1p/1p2p3/4P2B/P1N2P2/1PPQ2PP/1K1R1B1R w k - 0 17\"]\n[ChapterName \"Chapter 201-250 - solution ex 226\"]\n17. Bxf6 Bxf6 18. Nd5 Bxd5 19. Qxd5 $14 *",
  },
  {
    id: 227,
    pgn: "[FEN \"2b1r1k1/1p1nqpbp/2ppn1p1/8/1PPNPP2/r1N3PP/2Q2BB1/1R1R2K1 w - - 0 21\"]\n[ChapterName \"Chapter 201-250 - solution ex 227\"]\n21. Nde2! g5!? *",
  },
  {
    id: 228,
    pgn: "[FEN \"r2q1rk1/2p1bppp/p1n5/1pn1P2b/3p4/2P2N1P/PPB2PP1/R1BQRNK1 w - - 0 15\"]\n[ChapterName \"Chapter 201-250 - solution ex 228\"]\n15. Ng3 (15. g4 d3! 16. gxh5 dxc2 17. Qxc2 Qd5) 15... Bxf3 16. Qxf3 $14 *",
  },
  {
    id: 229,
    pgn: "[FEN \"r1b2rk1/2qn1ppp/p3p3/1pbpP3/3B1P1P/2N4R/PPPQ2P1/1K1R1B2 b - - 0 14\"]\n[ChapterName \"Chapter 201-250 - solution ex 229\"]\n14... b4 (14... Bb7 15. a3!?) 15. Na4 Bxd4 16. Qxd4 a5 17. h5 (17. Bb5) 17... h6!? *",
  },
  {
    id: 230,
    pgn: "[FEN \"r2qk2r/1b1nbp1p/pp1ppnp1/8/4P3/1NNB4/PPPBQPPP/4RRK1 w kq - 0 13\"]\n[ChapterName \"Chapter 201-250 - solution ex 230\"]\n13. Bh6! Bf8 14. Bxf8 Kxf8 15. f4 $14 *",
  },
  {
    id: 231,
    pgn: "[FEN \"r4rk1/3nqpbp/p2p1np1/P1pP4/4P3/1QN2P2/1P2BP1P/R1B1K2R b KQ - 0 14\"]\n[ChapterName \"Chapter 201-250 - solution ex 231\"]\n14... Nh5! 15. Ra4 (15. f4? Rab8 16. Qc2 Qh4 $19) 15... Be5 $17 *",
  },
  {
    id: 232,
    pgn: "[FEN \"r2qrbk1/1b1n1ppp/p1pp1n2/1p2pN2/4P3/PB1P1N1P/1PP2PP1/R1BQR1K1 w - - 0 15\"]\n[ChapterName \"Chapter 201-250 - solution ex 232\"]\n15. Nh2! $14 (15. g4 c5 $132) (15. d4? exd4 $19) *",
  },
  {
    id: 233,
    pgn: "[FEN \"r1br2k1/pp1nqpbp/2p3p1/P1p1p3/2N1P3/3P1N2/1PPB1PPP/R2QR1K1 b - - 0 12\"]\n[ChapterName \"Chapter 201-250 - solution ex 233\"]\n12... Nf8 13. Rb1 f6 (13... Qc7) 14. b4 Be6! (14... Ne6 15. bxc5 Nxc5 16. Bb4 $14) 15. Ne3 b6 (15... cxb4 $10) 16. axb6 axb6 17. bxc5 *",
  },
  {
    id: 234,
    pgn: "[FEN \"r2qr1k1/1bpn1pp1/p1np3p/1p1Np3/4P3/P1PPRN1P/BP3PP1/R2Q2K1 b - - 0 16\"]\n[ChapterName \"Chapter 201-250 - solution ex 234\"]\n16... Ne7 17. Nxe7+ Qxe7 $10 (17... Rxe7? 18. Nh4! $18) *",
  },
  {
    id: 235,
    pgn: "[FEN \"r2q1rk1/1pp2pp1/p1np1n1p/2b1p2b/4P3/1BPP1N1P/PP2QPP1/R1B1KN1R w KQ - 0 11\"]\n[ChapterName \"Chapter 201-250 - solution ex 235\"]\n11. g4! Bg6 12. Ng3 $16 (12. g5! hxg5 13. Bxg5 $18) *",
  },
  {
    id: 236,
    pgn: "[FEN \"r1b1kb1r/ppp1npp1/2p4p/4P3/8/2N1BN1P/PPP2PP1/R2R2K1 b kq - 0 12\"]\n[ChapterName \"Chapter 201-250 - solution ex 236\"]\n12... Ng6 (12... Be6 13. Nd4 $16) (12... a5 13. a3 Ng6 14. Nd4 Nxe5 15. Bf4 Nc4 16. Ndb5!! $16) *",
  },
  {
    id: 237,
    pgn: "[FEN \"r1b2rk1/p1q2pp1/1ppbpn1p/4N3/2PP4/3B2B1/PP2QPPP/R4RK1 w - - 0 17\"]\n[ChapterName \"Chapter 201-250 - solution ex 237\"]\n17. c5! (17. b4 c5 18. dxc5 bxc5 19. b5 $16) 17... Bxe5 (17... bxc5 18. dxc5 Bxc5 19. Ng6 $18) 18. Bxe5 Qd7 (18... Qd8 19. f4 $18) 19. Bxf6 gxf6 20. Qg4+ Kh8 21. Qf4 (21. Qh5 Kg7 22. Qg4+ Kh8 23. Qh5 Kg7 24. Qg4+ Kh8) 21... Kg7 22. Rfd1 $18 *",
  },
  {
    id: 238,
    pgn: "[FEN \"r1b1kb1r/2q2ppp/p3pn2/3n2B1/NpBN4/5P2/PPPQ2PP/2KR3R w kq - 0 14\"]\n[ChapterName \"Chapter 201-250 - solution ex 238\"]\n14. Bxd5! Nxd5 15. Rhe1 Bb7 16. Qe2! Qd6 17. f4! $18 (17. Kb1 $16) *",
  },
  {
    id: 239,
    pgn: "[FEN \"r2q1rk1/1b1nbppp/p2p4/3Pp3/P7/1NP1BP2/4B1PP/R2Q1R1K b - - 0 16\"]\n[ChapterName \"Chapter 201-250 - solution ex 239\"]\n16... Bg5 *",
  },
  {
    id: 240,
    pgn: "[FEN \"rnbq1rk1/pp2bppp/4pn2/2Pp4/3P4/2N2N2/PPQ2PPP/R1B1KB1R b KQ - 0 8\"]\n[ChapterName \"Chapter 201-250 - solution ex 240\"]\n8... b6! 9. b4 (9. cxb6 Qxb6 $15) 9... a5 (9... bxc5? 10. bxc5 $16) 10. Na4! axb4 (10... Nbd7 11. b5) 11. Nxb6 Ra5! 12. Nxc8 (12. Bd3 Ba6 13. O-O Bxd3 14. Qxd3 Ne4 $15) 12... Qxc8 13. Bd3 Nc6 14. O-O Qa8 $15 *",
  },
  {
    id: 241,
    pgn: "[FEN \"rnbqkb1r/1pp2ppp/p3pn2/3p4/2PP4/4PN2/PP1N1PPP/R1BQKB1R b KQkq - 0 5\"]\n[ChapterName \"Chapter 201-250 - solution ex 241\"]\n5... c5! $10 *",
  },
  {
    id: 242,
    pgn: "[FEN \"r1b4r/ppp1kppp/2p5/4Pn2/8/2N4P/PPP1NPP1/R4RK1 b - - 0 14\"]\n[ChapterName \"Chapter 201-250 - solution ex 242\"]\n14... h5 *",
  },
  {
    id: 243,
    pgn: "[FEN \"rn2k2r/pb2q1pp/1p1bpn2/3p1p2/3P4/1P1BPN2/PB3PPP/RNQ2RK1 w kq - 0 11\"]\n[ChapterName \"Chapter 201-250 - solution ex 243\"]\n11. Ba3! $14 Bxa3 (11... Nbd7 12. Bxd6 Qxd6) 12. Nxa3 $14 *",
  },
  {
    id: 244,
    pgn: "[FEN \"1q3rk1/3rppbp/p2p1np1/1p4B1/2P4Q/1PN2PP1/P4P1P/2RR2K1 w - - 0 18\"]\n[ChapterName \"Chapter 201-250 - solution ex 244\"]\n18. Nd5! (18. cxb5 axb5 19. Qb4 Rb7 $14) 18... Nxd5 (18... Qd8 19. Bxf6 Bxf6 20. Nxf6+ exf6 21. Qh6 $16) 19. cxd5 Rc7 20. Rc6 $16 *",
  },
  {
    id: 245,
    pgn: "[FEN \"2rq1rk1/1p2bppp/pn1pbn2/4p3/P3P3/2N2BP1/1PPN1P1P/R1BQR1K1 w - - 0 14\"]\n[ChapterName \"Chapter 201-250 - solution ex 245\"]\n14. Nf1! *",
  },
  {
    id: 246,
    pgn: "[FEN \"r1bq1rk1/1p1n2bn/p2p4/3Ppp2/7p/2N1B3/PP1QBPPP/2R2RKN w - - 0 16\"]\n[ChapterName \"Chapter 201-250 - solution ex 246\"]\n16. f4! (16. f3? f4 17. Bf2 h3) (16. Bh6?! Bxh6 17. Qxh6 Qf6 $15) 16... exf4 17. Bxf4 Ne5 18. Nf2 $14 *",
  },
  {
    id: 247,
    pgn: "[FEN \"1rbq1rk1/5ppp/p1np3b/1p1Np3/4P2P/2P3P1/PPN2P2/R2QKB1R w KQ - 0 15\"]\n[ChapterName \"Chapter 201-250 - solution ex 247\"]\n15. Bh3! Bxh3? (15... Be6 16. Ncb4 Nxb4 17. Nxb4 Qd7 18. Bxe6 fxe6 19. O-O a5 20. Nd3 Qc6 21. Qe2) 16. Rxh3 $14 *",
  },
  {
    id: 248,
    pgn: "[FEN \"1qr1k2r/3nbp2/p2pbnp1/Np2p3/4PP1p/2NBB2P/PPP2QP1/1K1RR3 w k - 0 18\"]\n[ChapterName \"Chapter 201-250 - solution ex 248\"]\n18. f5! gxf5 19. exf5 Bc4 20. Nxc4 bxc4 21. Be4 Nxe4 22. Nxe4 Nf6 23. Nxf6+ Bxf6 24. Ba7 Qc7 25. Rd5 $18 *",
  },
  {
    id: 249,
    pgn: "[FEN \"r1bq1rk1/1p4bp/p2p1pp1/2pPn2n/P3P3/2NB1N1P/1P1B1PP1/R2Q1RK1 w - - 0 14\"]\n[ChapterName \"Chapter 201-250 - solution ex 249\"]\n14. Be2! (14. Nxe5?! fxe5) 14... f5 15. Nxe5 Bxe5 16. Bxh5 gxh5 17. Bh6 $18 (17. Qxh5 f4 $16) *",
  },
  {
    id: 250,
    pgn: "[FEN \"2rr2k1/qb1nbpp1/pp1ppn1p/8/1PP5/P1N1PNB1/4BPPP/1QRR2K1 b - - 0 19\"]\n[ChapterName \"Chapter 201-250 - solution ex 250\"]\n19... d5! $10 (19... e5? 20. Nh4 $16) (19... Qb8 20. h3 $14) *",
  },
  {
    id: 251,
    pgn: "[FEN \"2rr2k1/ppq1bpp1/4pnp1/8/4n3/P1N1P3/1PQBBPPP/2RR2K1 w - - 0 18\"]\n[ChapterName \"Chapter 251-296 - solution ex 251\"]\n18. Be1! *",
  },
  {
    id: 252,
    pgn: "[FEN \"r4rk1/2p1b1pp/p1nqpn2/1p1pp3/4P3/P1PP1N2/1P1NQPPP/R1B2RK1 w - - 0 13\"]\n[ChapterName \"Chapter 251-296 - solution ex 252\"]\n13. b4! (13. a4?! b4 $10) 13... Rfd8 (13... a5 14. Bb2 a4? 15. c4!) 14. Rd1 dxe4 15. Nxe4 Nxe4 16. Qxe4 Qd5 17. Bb2 $14 *",
  },
  {
    id: 253,
    pgn: "[FEN \"r5k1/2nnppbp/rq1p2p1/2pP4/4PBP1/2N2N1P/PPQ1RPK1/R7 b - - 0 19\"]\n[ChapterName \"Chapter 251-296 - solution ex 253\"]\n19... Nb5 20. Nxb5 (20. a4 Nd4 21. Nxd4 cxd4 22. Nb5 Qb7! $15) 20... Qxb5 21. a3 Rb6 $44 *",
  },
  {
    id: 254,
    pgn: "[FEN \"r2qk2r/pp1nbppp/2p1pn2/6B1/3PN3/5N2/PPP1QPPP/2KR3R b kq - 0 10\"]\n[ChapterName \"Chapter 251-296 - solution ex 254\"]\n10... Nxe4 11. Bxe7 Nc3! 12. Bxd8 (12. bxc3 Qxe7 $17) 12... Nxe2+ 13. Kd2 Nxd4! $17 *",
  },
  {
    id: 255,
    pgn: "[FEN \"r2qk2r/5ppp/p2b1n2/3PpP2/6P1/4BQ2/pP2N2P/1K1R3R w kq - 0 20\"]\n[ChapterName \"Chapter 251-296 - solution ex 255\"]\n20. Ka1 $14 (20. Kxa2? Qa5+ 21. Kb1 Rb8 $19) *",
  },
  {
    id: 256,
    pgn: "[FEN \"q1r3k1/r1p1bppp/p3pn2/n2bN3/1p1P4/4P1P1/PP1N1PBP/R1R1BQK1 b - - 0 18\"]\n[ChapterName \"Chapter 251-296 - solution ex 256\"]\n18... c5 *",
  },
  {
    id: 257,
    pgn: "[FEN \"r4rk1/1pqnbpp1/p2p1n1p/4pP2/2b1P1PP/1NN5/PPP2RB1/R1BQ2K1 b - - 0 14\"]\n[ChapterName \"Chapter 251-296 - solution ex 257\"]\n14... Nh7! (14... h5!? 15. gxh5 d5 16. h6 $13) 15. g5 hxg5 16. hxg5 Bxg5 (16... Nxg5? 17. Qg4 f6 18. Be3 $16) 17. Bxg5 Nxg5 *",
  },
  {
    id: 258,
    pgn: "[FEN \"2rq1rk1/1bp1bppp/p3pn2/1p6/3P4/P3PNP1/1PQN1PBP/R4RK1 w - - 0 15\"]\n[ChapterName \"Chapter 251-296 - solution ex 258\"]\n15. b4! a5 16. Ne5! (16. Rfb1 axb4 17. axb4 Nd5) 16... Nd5?! (16... Bxg2 17. Kxg2 c6 $14) *",
  },
  {
    id: 259,
    pgn: "[FEN \"q1r3k1/r1pn1ppp/p2bpn2/Bp1b4/3P4/P3PNP1/1P1N1PBP/R1R2QK1 w - - 0 19\"]\n[ChapterName \"Chapter 251-296 - solution ex 259\"]\n19. b4! e5 20. dxe5 Bxe5 (20... Nxe5 21. Nxe5 Bxe5 22. Ra2! $14) 21. Nxe5 Nxe5 22. f3!? $14 *",
  },
  {
    id: 260,
    pgn: "[FEN \"r2qkb1r/1p3p2/pn1p1np1/Q2Pp2p/8/1N2BP2/PPP3PP/2KR1B1R b kq - 0 13\"]\n[ChapterName \"Chapter 251-296 - solution ex 260\"]\n13... Bh6! $10 *",
  },
  {
    id: 261,
    pgn: "[FEN \"r2q1rk1/1p2npbp/2n1b1p1/p1p1p3/2N5/P1NP2P1/1P2PPBP/R1BQ1RK1 w - - 0 14\"]\n[ChapterName \"Chapter 251-296 - solution ex 261\"]\n14. Bg5! f6 (14... Qc7 15. Na4! b5 (15... f6 16. Bd2 $14) 16. Nxc5 bxc4 17. Nxe6 fxe6 18. Bxe7 Nxe7 19. Bxa8 Rxa8 20. Rc1 Qb6 21. dxc4 Qxb2 22. c5 $14) 15. Be3 b6 16. Qa4 Bd7? 17. Qb3! *",
  },
  {
    id: 262,
    pgn: "[FEN \"rnr3k1/1pq1bppp/p2pbn2/4p1N1/4P3/1BN1B3/PPPQ1PPP/R4RK1 b - - 0 12\"]\n[ChapterName \"Chapter 251-296 - solution ex 262\"]\n12... Bc4 $10 (12... Bxb3?! 13. cxb3! $14) *",
  },
  {
    id: 263,
    pgn: "[FEN \"rn1qkb1r/p2p1ppp/bp2pn2/2p5/2PP4/5NP1/PPQ1PP1P/RNB1KB1R w KQkq - 0 6\"]\n[ChapterName \"Chapter 251-296 - solution ex 263\"]\n6. d5! (6. Bg2 Nc6) 6... exd5 7. cxd5 Bb7 8. Bg2 (8. e4 Qe7 9. Bg2) 8... Nxd5 *",
  },
  {
    id: 264,
    pgn: "[FEN \"rn1qk2r/1p2bppp/p2pbn2/4p1B1/4P3/1NNQ4/PPP1BPPP/R3K2R b KQkq - 0 9\"]\n[ChapterName \"Chapter 251-296 - solution ex 264\"]\n9... Nbd7 (9... O-O 10. Bxf6!?) *",
  },
  {
    id: 265,
    pgn: "[FEN \"r6r/pbp1kppp/1pp5/4Pn2/8/2N2N1P/PPP2PP1/R2R2K1 w - - 0 14\"]\n[ChapterName \"Chapter 251-296 - solution ex 265\"]\n14. g4! (14. Rd3 Rhd8 $15) 14... c5! 15. Nd5+ (15. Rd5!? Nh6 16. Rad1 Rhd8 17. Rxd8 Rxd8 18. Rxd8 Kxd8 19. Ng5) 15... Bxd5 16. Rxd5 Ke6 17. Rd2 Nd4 *",
  },
  {
    id: 266,
    pgn: "[FEN \"r1qbr1k1/1p1n1pp1/p1p1pnp1/2Pp4/1P1P4/2NBP2P/P4PPB/R2Q1RK1 w - - 0 15\"]\n[ChapterName \"Chapter 251-296 - solution ex 266\"]\n15. f4! b6 16. a3 (16. g4!?) 16... a5 17. Qc2 Qb7 $14 *",
  },
  {
    id: 267,
    pgn: "[FEN \"rr4k1/1q1nppbp/b2p1np1/2pP4/4P3/2N2NP1/PPQB1PBP/1R2R1K1 b - - 0 16\"]\n[ChapterName \"Chapter 251-296 - solution ex 267\"]\n16... Ng4! 17. Red1 Nge5 18. Ne1 Nc4 19. Bc1 Qb4! 20. Nd3 Qa5 *",
  },
  {
    id: 268,
    pgn: "[FEN \"b2r2k1/p1r1qpp1/7p/2p1p3/2N1P3/R4PP1/PP3RKP/2Q5 b - - 0 30\"]\n[ChapterName \"Chapter 251-296 - solution ex 268\"]\n30... f5! 31. exf5? (31. Re2?! fxe4 32. fxe4 Rd4 $17) 31... e4 32. fxe4? Qxe4+ 33. Kh3 Rd4 34. Ne3 Qe8! 35. g4 h5! $19 *",
  },
  {
    id: 269,
    pgn: "[FEN \"rnbqr1k1/pp3pbp/3p1np1/3P2B1/2p1P3/2N2N1P/PPB2PP1/R2QK2R b KQ - 0 11\"]\n[ChapterName \"Chapter 251-296 - solution ex 269\"]\n11... b5! (11... h6?! 12. Be3 b5 13. a3 Nbd7 14. O-O Nc5? 15. e5!) 12. a3 (12. Nxb5 Qa5+ 13. Nc3 Nxe4) (12. O-O b4 13. Nb5 $13) 12... Nbd7 13. O-O Nc5 $13 *",
  },
  {
    id: 270,
    pgn: "[FEN \"r1b2rk1/pp2bppp/2n1p3/q7/3PP3/P2B1N2/1B3PPP/R2QK2R w KQ - 0 12\"]\n[ChapterName \"Chapter 251-296 - solution ex 270\"]\n12. Kf1! b6 13. Qe2! $14 *",
  },
  {
    id: 271,
    pgn: "[FEN \"r3r1k1/1p2q2p/pnpn1pp1/1P1p4/P2P4/2NQPN1P/5PP1/1R2R1K1 b - - 0 21\"]\n[ChapterName \"Chapter 251-296 - solution ex 271\"]\n21... cxb5! (21... axb5 22. axb5 Nbc4 23. bxc6 bxc6 $14) 22. axb5 (22. a5 Nbc4 23. Nxd5 Qf7 $15) 22... a5 23. Nd2 f5!? $13 (23... a4 24. e4 $13) *",
  },
  {
    id: 272,
    pgn: "[FEN \"r2q1rk1/1p1nbp2/2p2np1/p2p3p/3P1B2/2NQP2P/PP2NPP1/R4RK1 w - - 0 14\"]\n[ChapterName \"Chapter 251-296 - solution ex 272\"]\n14. f3! $14 (14. Rad1 a4 15. f3 b5 16. e4 b4) *",
  },
  {
    id: 273,
    pgn: "[FEN \"r6r/1b2kppp/p1nb1n2/P3p3/1p6/1N2PN2/1P1BBPPP/R2R2K1 w - - 0 16\"]\n[ChapterName \"Chapter 251-296 - solution ex 273\"]\n16. Be1! $18 *",
  },
  {
    id: 274,
    pgn: "[FEN \"1r1q1rk1/2p1bppp/p2pbn2/n3p3/Pp2P3/2PP1N2/BP1N1PPP/R1BQR1K1 w - - 0 13\"]\n[ChapterName \"Chapter 251-296 - solution ex 274\"]\n13. Bxe6 (13. d4 Bxa2 14. Rxa2 exd4 15. cxd4 c5 $15) 13... fxe6 14. d4! bxc3 15. bxc3 exd4 16. cxd4 $16 *",
  },
  {
    id: 275,
    pgn: "[FEN \"2rq1rk1/1p2bppp/pn1pbn2/4p3/P3P3/2N3P1/1PPN1PBP/R1BQR1K1 w - - 0 13\"]\n[ChapterName \"Chapter 251-296 - solution ex 275\"]\n13. Nf1! $14 *",
  },
  {
    id: 276,
    pgn: "[FEN \"r3k2r/ppp1bpp1/2p1b3/4PnBp/8/1PN2N1P/P1P2PP1/3R1RK1 b kq - 0 13\"]\n[ChapterName \"Chapter 251-296 - solution ex 276\"]\n13... h4 *",
  },
  {
    id: 277,
    pgn: "[FEN \"rnbqr1k1/pp3pbp/2pp2p1/7n/2PNP3/2N2P2/PP2B1PP/R1BQ1R1K w - - 0 11\"]\n[ChapterName \"Chapter 251-296 - solution ex 277\"]\n11. g4! Nf6 12. Bf4 h5 13. Nf5!? *",
  },
  {
    id: 278,
    pgn: "[FEN \"r1b1k2r/pp2nppp/1qn1p3/2ppP3/3P1P2/8/PPPQN1PP/2KR1BNR b kq - 0 9\"]\n[ChapterName \"Chapter 251-296 - solution ex 278\"]\n9... c4! (9... Qa6 10. Kb1 c4!) *",
  },
  {
    id: 279,
    pgn: "[FEN \"r1b3k1/p1r2ppp/1ppq1n2/3p4/Q2P1N2/P3P1P1/1P3PBP/2R1R1K1 w - - 0 19\"]\n[ChapterName \"Chapter 251-296 - solution ex 279\"]\n19. f3! (19. Qb4!? Qd8) 19... Be6 (19... c5?! 20. e4) 20. e4 dxe4?! (20... Qd7 21. Nxe6 Qxe6 22. e5 Ne8 23. f4 $14) 21. fxe4 $16 *",
  },
  {
    id: 280,
    pgn: "[FEN \"r5k1/p2r1ppp/1p2bn2/3p4/4PN2/P5P1/1P4BP/2R1R1K1 w - - 0 24\"]\n[ChapterName \"Chapter 251-296 - solution ex 280\"]\n24. Nxe6! (24. exd5 Bf5!) 24... fxe6 25. Bh3 $18 *",
  },
  {
    id: 281,
    pgn: "[FEN \"r2q1rk1/1bp1npp1/pb1p1n1p/1p1P4/4P3/1B2BN1P/PP1N1PP1/R2QR1K1 b - - 0 14\"]\n[ChapterName \"Chapter 251-296 - solution ex 281\"]\n14... c6! (14... Bxe3?! 15. Rxe3) 15. dxc6 Nxc6 $10 *",
  },
  {
    id: 282,
    pgn: "[FEN \"r3rnk1/pp2qppp/2p1b3/3p3n/3PP3/2NB1P2/PPQ1N1PP/R4RK1 w - - 0 14\"]\n[ChapterName \"Chapter 251-296 - solution ex 282\"]\n14. e5! $16 g6 15. f4 Ng7 16. Ng3 f5 *",
  },
  {
    id: 283,
    pgn: "[FEN \"rnbq1rk1/1pp3b1/3p1npp/p2PpP2/2P5/2N2N1P/PP1BBPP1/R2QK2R b KQ - 0 12\"]\n[ChapterName \"Chapter 251-296 - solution ex 283\"]\n12... gxf5 (12... Bxf5 13. g4! Bd7) 13. Qc1! f4! 14. g3! e4! 15. Nh4 e3! 16. fxe3 fxg3 17. Ng6 *",
  },
  {
    id: 284,
    pgn: "[FEN \"r2q1rk1/2pnbppp/p3pn2/1p6/3PP2N/2N3P1/PPQB1PKP/R4R2 b - - 0 14\"]\n[ChapterName \"Chapter 251-296 - solution ex 284\"]\n14... c5 15. dxc5 Nxc5 $15 *",
  },
  {
    id: 285,
    pgn: "[FEN \"r2rb1k1/ppp1qpp1/4p2p/n7/3P4/2P1PN2/PQ2BPPP/R4RK1 w - - 0 16\"]\n[ChapterName \"Chapter 251-296 - solution ex 285\"]\n16. Qb4! Qxb4 17. cxb4 Nc6 18. Rab1 $14 *",
  },
  {
    id: 286,
    pgn: "[FEN \"r1bq1rk1/5ppp/p2p1n2/1pnP4/4PN2/1PN2P2/4B1PP/R2Q1RK1 b - - 0 15\"]\n[ChapterName \"Chapter 251-296 - solution ex 286\"]\n15... b4 16. Na4 (16. Nb5? Qb6 17. Kh1 g5!) 16... Nxa4 17. Rxa4 a5 $10 *",
  },
  {
    id: 287,
    pgn: "[FEN \"1rbq1rk1/3nbppp/2n1p3/p1ppP2P/1p6/3P1NP1/PPP2PBN/R1BQR1K1 b - - 0 13\"]\n[ChapterName \"Chapter 251-296 - solution ex 287\"]\n13... h6! (13... f5? 14. exf6 $16) (13... a4? 14. h6 g6 15. c4!? $16) 14. Ng4 *",
  },
  {
    id: 288,
    pgn: "[FEN \"r2qk2r/1p1nbpp1/2p2np1/p1Ppp3/3P4/P1N1P1P1/1P3PBP/1RBQK2R b Kkq - 0 12\"]\n[ChapterName \"Chapter 251-296 - solution ex 288\"]\n12... e4 (12... exd4 13. exd4) (12... b5 13. b4 e4 14. f3 exf3 15. Qxf3 $14) 13. b4 (13. f3? exf3 14. Qxf3 Nf8) 13... axb4 14. axb4 Nf8 15. b5 Ne6 16. Bd2 $13 *",
  },
  {
    id: 289,
    pgn: "[FEN \"r2q1rk1/1b2bppp/p2pp1P1/1p5P/2nNP3/P1N1B3/1PP1QP2/2KR3R b - - 0 17\"]\n[ChapterName \"Chapter 251-296 - solution ex 289\"]\n17... Bf6! $13 18. h6!? fxg6! 19. hxg7 (19. Nxe6?! Qe7 20. Nxf8 Bxc3 21. bxc3 Bxe4 $44) 19... Re8 20. Rh3! *",
  },
  {
    id: 290,
    pgn: "[FEN \"r2q1rk1/ppp2pp1/3pbn1p/8/3bP2B/1BNP1Q2/PPP3PP/R3KR2 w Q - 0 13\"]\n[ChapterName \"Chapter 251-296 - solution ex 290\"]\n13. Ne2! Bxb2 14. Rb1 Ba3 15. Bxe6! (15. Bxf6 Qxf6 16. Qxf6 gxf6 17. Rxf6 $16) 15... fxe6 16. d4 *",
  },
  {
    id: 291,
    pgn: "[FEN \"rnbq1rk1/pp1pppbp/5np1/2pP4/8/2N1PN2/PPP2PPP/R1BQKB1R w KQ - 0 6\"]\n[ChapterName \"Chapter 251-296 - solution ex 291\"]\n6. Bc4 *",
  },
  {
    id: 292,
    pgn: "[FEN \"r1bq1rk1/ppp1bppp/3p1n2/n3p3/P3P3/3P1N2/BPP2PPP/RNBQR1K1 b - - 0 8\"]\n[ChapterName \"Chapter 251-296 - solution ex 292\"]\n8... c5! *",
  },
  {
    id: 293,
    pgn: "[FEN \"r1b1k2r/pp3ppp/2nqpn2/2pp4/3P4/2P1PNP1/PP1N1PP1/R2QKB1R w KQkq - 0 9\"]\n[ChapterName \"Chapter 251-296 - solution ex 293\"]\n9. Bb5 Bd7 10. Bxc6 Bxc6 11. Ne5 $14 *",
  },
  {
    id: 294,
    pgn: "[FEN \"r1bqr1k1/pp1n1ppp/2pp1n2/4p3/1PPP4/P1Q1PN2/4BPPP/R1B1K2R b KQ - 0 12\"]\n[ChapterName \"Chapter 251-296 - solution ex 294\"]\n12... e4 13. Nd2 d5 $15 *",
  },
  {
    id: 295,
    pgn: "[FEN \"r1bq1rk1/ppppbppp/2n2n2/8/2PQ4/P1N1P3/1P2NPPP/R1B1KB1R w KQ - 0 8\"]\n[ChapterName \"Chapter 251-296 - solution ex 295\"]\n8. Qd1! $14 *",
  },
  {
    id: 296,
    pgn: "[FEN \"r2qr1k1/b2b1pp1/5nnp/1pp1p3/4P3/2P1NN1P/1PB2PP1/R1BQR1K1 w - - 0 18\"]\n[ChapterName \"Chapter 251-296 - solution ex 296\"]\n18. c4 $14 *",
  },
]

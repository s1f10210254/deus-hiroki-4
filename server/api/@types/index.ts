/* eslint-disable */
export type User = {
  id: string;
  email: string;
  name?: string | null | undefined;
  gamesPlayed: number;
  gamesWon: number;
  gamesLost: number;
  gamesTied: number;
};

export type Game = {
  id: number;
  moves: Move[];
  winnerId?: string | null | undefined;
  createdAt: string;
};

export type Move = {
  id: number;
  userId: string;
  moveType: MoveType;
  gameId: number;
  createdAt: string;
};

export type MoveInput = {
  userId: string;
  moveType: MoveType;
};

export type MoveType = 'ROCK' | 'PAPER' | 'SCISSORS';

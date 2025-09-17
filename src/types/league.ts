// League
export type League = {
  id: string;
  name: string;
  description: string;
  ownerId: string;
  size: number;
  weeks: number;
  startDate: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  leaguesToUsers: LeagueToUser[];
  loggedActivities: LoggedActivity[];
  matches: Match[];
};

export type InsertLeague = Omit<
  League,
  | "id"
  | "createdAt"
  | "updatedAt"
  | "leaguesToUsers"
  | "loggedActivities"
  | "matches"
>;
export type UpdateLeague = Omit<Partial<League>, "id"> & Pick<League, "id">;

// Match
export type Match = {
  id: string;
  leagueId: string;
  week: number;
  createdAt: string;
  updatedAt: string;
  matchesToUsers: MatchToUser[];
};

export type InsertMatch = Omit<
  Match,
  "id" | "createdAt" | "updatedAt" | "matchesToUsers"
>;

// MatchToUser
export type MatchToUser = {
  id: string;
  matchId: string;
  userId: string;
  teamIndex: number;
};

export type InsertMatchToUser = Omit<MatchToUser, "id">;

// LeagueToUser
export type LeagueToUser = {
  id: string;
  leagueId: string;
  userId: string;
  isBot: boolean;
  wins: number;
  losses: number;
};

export type InsertLeagueToUser = Omit<LeagueToUser, "id">;

// LoggedActivity
export type LoggedActivity = {
  id: string;
  leagueId: string;
  matchId: string;
  userId: string;
  activityType: string;
  duration: number;
  sets: number;
  reps: number;
  cardioPoints: number;
  strengthPoints: number;
  photoUrl: string | null;
  activityNote: string | null;
  createdAt: string;
  updatedAt: string;
};

export type InsertLoggedActivity = Omit<
  LoggedActivity,
  "id" | "createdAt" | "updatedAt"
>;

// LeagueMessage
export type LeagueMessage = {
  id: string;
  senderId: string;
  leagueId: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};

export type InsertLeagueMessage = Omit<
  LeagueMessage,
  "id" | "createdAt" | "updatedAt"
>;

// MatchMessage
export type MatchMessage = {
  id: string;
  senderId: string;
  matchId: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};

export type InsertMatchMessage = Omit<
  MatchMessage,
  "id" | "createdAt" | "updatedAt"
>;

// ActivityChallenge
export type ActivityChallenge = {
  id: string;
  leagueId: string;
  activityId: string;
  userId: string;
  challengeReason: string;
  challengeEndTime: string;
  challengeVotesFor: number;
  challengeVotesAgainst: number;
  createdAt: string;
  updatedAt: string;
};

export type InsertActivityChallenge = Omit<
  ActivityChallenge,
  "id" | "createdAt" | "updatedAt"
>;

// Create League Input (for API requests)
export type CreateLeagueInput = {
  name: string;
  description: string;
  size: number;
  weeks: number;
  startDate: string; // ISO date string
  slug?: string;
  ownerId?: string;
};

// Bot (for FitMatchBot maybe)
export type Bot = {
  id: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  username: string;
  activityAlgorithm: string;
  createdAt: string;
  updatedAt: string;
};

type ActivityType = "RUNNING" | "JOGGING" | "SPRINTS" | "CIRCUT_TRAINING" | "INTERVAL_TRAINING" | "LONG_DISTANCE_RUNNING" | "TENNIS" | "BASKETBALL" | "FOOTBALL" | "VOLLEYBALL" | "BADMINTON" | "YOGA" | "PILATES" | "CYCLING" | "SWIMMING" | "PICKLEBALL" | "GOLF" | "ROCK_CLIMBING" | "MARTIAL_ARTS" | "WALKING" | "HIIT" | "DANCE" | "STRENGTH_TRAINING" | "OTHER";
type activityFormula = "DURATION" | "SETSANDREPS";
type ActivityDefinition = {
    name: string;
    description: string;
    activityFormula: activityFormula;
    cardioMultipilier: number;
    strengthMultipilier: number;
};
declare const ActivityDefinitions: Record<ActivityType, ActivityDefinition>;
type LogActivityInput = {
    leagueId: string;
    matchId: string;
    activityType: ActivityType;
    duration: number;
    sets: number;
    reps: number;
    photoUrl: string;
    userId?: string;
    cardioPoints?: number;
    strengthPoints?: number;
    activityNote?: string;
};

type ApiErrorResponse = {
    message: string;
};
type FitMatchUser = {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    imageUrl: string;
    isBot: boolean;
};

type League = {
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
type InsertLeague = Omit<League, "id" | "createdAt" | "updatedAt" | "leaguesToUsers" | "loggedActivities" | "matches">;
type UpdateLeague = Omit<Partial<League>, "id"> & Pick<League, "id">;
type Match = {
    id: string;
    leagueId: string;
    week: number;
    createdAt: string;
    updatedAt: string;
    matchesToUsers: MatchToUser[];
};
type InsertMatch = Omit<Match, "id" | "createdAt" | "updatedAt" | "matchesToUsers">;
type MatchToUser = {
    id: string;
    matchId: string;
    userId: string;
    teamIndex: number;
};
type InsertMatchToUser = Omit<MatchToUser, "id">;
type LeagueToUser = {
    id: string;
    leagueId: string;
    userId: string;
    isBot: boolean;
    wins: number;
    losses: number;
};
type InsertLeagueToUser = Omit<LeagueToUser, "id">;
type LoggedActivity = {
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
type InsertLoggedActivity = Omit<LoggedActivity, "id" | "createdAt" | "updatedAt">;
type LeagueMessage = {
    id: string;
    senderId: string;
    leagueId: string;
    text: string;
    createdAt: string;
    updatedAt: string;
};
type InsertLeagueMessage = Omit<LeagueMessage, "id" | "createdAt" | "updatedAt">;
type MatchMessage = {
    id: string;
    senderId: string;
    matchId: string;
    text: string;
    createdAt: string;
    updatedAt: string;
};
type InsertMatchMessage = Omit<MatchMessage, "id" | "createdAt" | "updatedAt">;
type ActivityChallenge = {
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
type InsertActivityChallenge = Omit<ActivityChallenge, "id" | "createdAt" | "updatedAt">;
type Bot = {
    id: string;
    firstName: string;
    lastName: string;
    imageUrl: string;
    username: string;
    activityAlgorithm: string;
    createdAt: string;
    updatedAt: string;
};

export { type ActivityChallenge, type ActivityDefinition, ActivityDefinitions, type ActivityType, type ApiErrorResponse, type Bot, type FitMatchUser, type InsertActivityChallenge, type InsertLeague, type InsertLeagueMessage, type InsertLeagueToUser, type InsertLoggedActivity, type InsertMatch, type InsertMatchMessage, type InsertMatchToUser, type League, type LeagueMessage, type LeagueToUser, type LogActivityInput, type LoggedActivity, type Match, type MatchMessage, type MatchToUser, type UpdateLeague, type activityFormula };

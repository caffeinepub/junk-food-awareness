import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface QuizQuestion {
    id: bigint;
    question: string;
    fact: string;
    correct: bigint;
    options: Array<string>;
}
export interface backendInterface {
    getLeaderboard(): Promise<Array<[string, bigint, bigint]>>;
    getQuestions(): Promise<Array<QuizQuestion>>;
    getSiteVisits(): Promise<bigint>;
    incrementSiteVisits(): Promise<bigint>;
    submitScore(name: string, score: bigint): Promise<void>;
}

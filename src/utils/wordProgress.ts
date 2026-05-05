import type { QuestionType, WordProgress } from '../types';
export const emptyQuestionStats=():WordProgress['questionStats']=>({meaning:{seen:0,correct:0},recall:{seen:0,correct:0},spelling:{seen:0,correct:0},context:{seen:0,correct:0},synonym:{seen:0,correct:0}});
export const createWordProgress=(wordId:string):WordProgress=>({wordId,status:'new',mastery:0,timesSeen:0,timesCorrect:0,wrongCount:0,streakCorrect:0,questionStats:emptyQuestionStats()});
export const statKey=(t:QuestionType)=>t;

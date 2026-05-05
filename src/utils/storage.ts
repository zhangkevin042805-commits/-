import type { AppState } from '../types';
const K='ielts_arcane_sheet_v1';
export const defaultState=():AppState=>({userProfile:{name:'Vocabulary Scholar',className:'IELTS Scholar',xp:0,streak:0,attributes:{lexicon:8,recall:8,spelling:8,context:8,paraphrase:8,endurance:8}},wordProgress:{},sessionHistory:[],titles:[],trialHistory:[],settings:{dailyReview:30,dailyNew:15,dailyShadowMax:10}});
export const migrateStateIfNeeded=(raw:unknown):AppState=>({...defaultState(),...(raw as Partial<AppState>)});
export const loadState=():AppState=>{try{const x=localStorage.getItem(K);if(!x)return defaultState();return migrateStateIfNeeded(JSON.parse(x));}catch{return defaultState();}};
export const saveState=(s:AppState)=>localStorage.setItem(K,JSON.stringify(s));
export const resetState=()=>localStorage.removeItem(K);

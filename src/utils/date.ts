export const todayISO=()=>new Date().toISOString().slice(0,10);
export const addDays=(iso:string,d:number)=>{const x=new Date(iso);x.setDate(x.getDate()+d);return x.toISOString().slice(0,10)};

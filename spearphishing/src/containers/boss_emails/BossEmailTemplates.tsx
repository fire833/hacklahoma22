// import { Target } from "../targets/targets"

// Specifies a boss email template.
// export type BossEmail = {
//     Targets?: Target[],
    
// }

// returns a template on how thw boss be feeling.
export class BossEmailTemplate {
    //Email: BossEmail;
    Status: BossEmailStatus;

    constructor() {
       // this.Email = BossEmail;
        this.Status = BossEmailStatus.HappyWithWork;
    }
}

export enum BossEmailStatus {
    HappyWithWork,
    GonnaGetCanned,
    ListofHitsForDay,
}
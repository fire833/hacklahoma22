
// returns a template on how the boss be feeling.
export class BossEmailTemplate {
    //Email: BossEmail;
    Status: BossEmailStatus;

    constructor() {
        this.Status = BossEmailStatus.HappyWithWork;
    }
}

export enum BossEmailStatus {
    HappyWithWork,
    GonnaGetCanned,
    ListofHitsForDay,
}
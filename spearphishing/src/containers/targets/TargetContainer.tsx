import { AttackTypes } from './AttackTypes';
import './targets'
import { GlobalTargets } from './targets';

export const PullTargetFromInternet: boolean = false;

// Specifies a target type that should be unmarshalled from a json object.
export type Target = {

    // Public elements

    Name: string,
    Occupation: TargetOccupation,
    Age: number,
    // Male or female
    Gender: "male" | "female",
    // Specify the URL to get the image for this person, need to decide how this will be implemented.
    Picture: string,
    // Specify the default baseline trust of the target.
    Trust: number,

    // Private elements

    MoneyPayoutMin: number,
    MoneyPayoutRange: number,

    DataPayoutMin: number,
    DataPayoutRange: number,

    ResistantAttackTypes: AttackTypes[],
}

export function GetRandomTarget(): Target {
    let targets = require('./targets.json');
    let data = JSON.parse(targets);

    if (PullTargetFromInternet) {
        // let fetch()
        return GlobalTargets[0];
    } else {
        return GlobalTargets[Math.floor(Math.random() * GlobalTargets.length)];
    }
}

// target interactions that can be searched by/used for reference.
export enum TargetOccupation {
    Unemployed,
    Retired,
    BusinessPerson,
    BankingPerson,
    Cybersecurity,
    Accountant,
    SecurityResearcher,
    GroceryStoreBagger,
    Nurse,
    AirlinePilot,
    ArmySergeant,
    Professor,
    Actor,
}   
import { AttackTypes } from './AttackTypes';
import './targets'
import { GlobalUsers } from './targets';

export const PullUserFromInternet: boolean = false;

// Specifies a user type that should be unmarshalled from a json object.
export type Target = {

    // Public elements

    Name: string,
    Occupation: UserOccupation,
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

export function GetRandomUser(): Target {
    let users = require('./users.json');
    let data = JSON.parse(users);

    if (PullUserFromInternet) {
        // let fetch()
        return GlobalUsers[0];
    } else {
        return GlobalUsers[Math.floor(Math.random() * GlobalUsers.length)];
    }
}

// user interactions that can be searched by/used for reference.
export enum UserOccupation {
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
}   
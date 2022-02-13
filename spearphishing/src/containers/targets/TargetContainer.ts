import { AttackTypes } from './AttackTypes';
import './targets'
import { GlobalTargets } from './targets';

export const PullTargetFromInternet: boolean = false;

// user interactions that can be searched by/used for reference.

export enum TargetOccupation {
    Unemployed = "Unemployed",
    Retired = "Retired",
    BusinessPerson = "Business Person",
    BankingPerson = "Banking Person",
    Cybersecurity = "Cybersecurity",
    Accountant = "Accountant",
    SecurityResearcher = "Security Researcher",
    GroceryStoreBagger = "Grocery Store Bagger",
    Nurse = "Nurse",
    AirlinePilot = "Airline Pilot",
    ArmySergeant = "Army Sargeant",
    Professor = "Professor", // Public elements
    Actor = "Actor", // Specify the default baseline trust of the target.
    Developer = "Developer",
    SalesPerson = "Salesperson",
    GovernmentWorker = "Government Worker",
    Page = "Page",
}

// Specifies a user type that should be unmarshalled from a json object.
export type Target = {

    // Public elements

    Name: string,
    Occupation: TargetOccupation,
    Age: number,
    // Male or female
    Gender: "Male" | "Female",
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
    VulnerableAttackTypes: AttackTypes[],
}


export function GetRandomUser(): Target {
    return GlobalTargets[Math.floor(Math.random() * GlobalTargets.length)];
}

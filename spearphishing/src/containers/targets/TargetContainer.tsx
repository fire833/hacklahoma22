import './targets'
import { GlobalUsers } from './targets';

export const PullUserFromInternet: boolean = false;

// Specifies a user type that should be unmarshalled from a json object.
export class Target {
    Name: string;
    Occupation: UserOccupation = UserOccupation.Unemployed;
    Age: number;
    // Male or female
    Gender: string;
    // Specify the URL to get the image for this person, need to decide how this will be implemented.
    Picture: string;

    constructor() {
        this.Age = 1;
        this.Gender = "male";
        this.Name = "Silly McGilicuddy"
        this.Picture = "https://google.com"
    }
}

export function GetRandomUser(): Target {
    // let users = require('./users.json');
    // let data = JSON.parse(users);

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
    Securityresearcher,
    GroceryStoreBagger,
    Nurse,
    AirlinePilot,
    ArmySergeant,
}   
import { AttackTypes } from './AttackTypes';
import { Target, UserOccupation } from './TargetContainer'

export const GlobalUsers: Target[] = [{
    Gender: "male",
    Picture: "", // TBD
    Age: 25,
    Name: "Julia Childs",
    Occupation: UserOccupation.Accountant,
    DataPayoutMin: 1,
    DataPayoutRange: 1,
    Trust: 10,
    MoneyPayoutMin: 1,
    MoneyPayoutRange: 1,
    ResistantAttackTypes: [AttackTypes.AmazonVerifyAddress],
},
{
    Gender: "male",
    Picture: "", // TBD
    Age: 25,
    Name: "Kevin Wolfram",
    Occupation: UserOccupation.Accountant,
    DataPayoutMin: 1,
    DataPayoutRange: 1,
    Trust: 10,
    MoneyPayoutMin: 1,
    MoneyPayoutRange: 1,
    ResistantAttackTypes: [AttackTypes.AmazonVerifyAddress],
},];


export function GetRandomUser(): Target {
    // let users = require('./users.json');
    // let data = JSON.parse(users);

    if (false) {
        // let fetch()
        return GlobalUsers[0];
    } else {
        return GlobalUsers[Math.floor(Math.random() * GlobalUsers.length)];
    }
}

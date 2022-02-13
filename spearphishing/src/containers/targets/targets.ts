import { AttackTypes } from './AttackTypes';
import { Target, TargetOccupation } from './TargetContainer'

export const GlobalTargets: Target[] = [{
    Gender: "female",
    Picture: "", // TBD
    Age: 25,
    Name: "Julia Childs",
    Occupation: TargetOccupation.Accountant,
    DataPayoutMin: 1,
    DataPayoutRange: 1,
    Trust: 50,
    MoneyPayoutMin: 100,
    MoneyPayoutRange: 100,
    ResistantAttackTypes: [AttackTypes.NigerianPrince],
},
{
    Gender: "male",
    Picture: "", // TBD
    Age: 39,
    Name: "Dr. J",
    Occupation: TargetOccupation.Professor,
    DataPayoutMin: 4,
    DataPayoutRange: 4,
    Trust: 10,
    MoneyPayoutMin: 0,
    MoneyPayoutRange: 100,
    ResistantAttackTypes: [AttackTypes.TikTokVerifyAddress],
},
{
    Gender: "female",
    Picture: "", // TBD
    Age: 22,
    Name: "Zendaya",
    Occupation: TargetOccupation.Actor,
    DataPayoutMin: 2,
    DataPayoutRange: 2,
    Trust: 50,
    MoneyPayoutMin: 300,
    MoneyPayoutRange: 200,
    ResistantAttackTypes: [AttackTypes.BossWantsFileCheck, AttackTypes.RequestChildSupportPregnancy, AttackTypes.NigerianPrince],
},
{
    Gender: "female",
    Picture: "", // TBD
    Age: 39,
    Name: "Grandma Byrd",
    Occupation: TargetOccupation.Retired,
    DataPayoutMin: 0,
    DataPayoutRange: 1,
    Trust: 70,
    MoneyPayoutMin: 300,
    MoneyPayoutRange: 200,
    ResistantAttackTypes: [AttackTypes.TikTokVerifyAddress, AttackTypes.RequestChildSupportPregnancy, AttackTypes.BossWantsFileCheck],
},];


export function GetRandomUser(): Target {
    // let users = require('./users.json');
    // let data = JSON.parse(users);

    if (false) {
        // let fetch()
        return GlobalTargets[0];
    } else {
        return GlobalTargets[Math.floor(Math.random() * GlobalTargets.length)];
    }
}

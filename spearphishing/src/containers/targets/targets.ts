import { AttackTypes } from './AttackTypes';
import { Target, TargetOccupation } from './TargetContainer'

export const GlobalTargets: Target[] = [{
    Gender: "Female",
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
    VulnerableAttackTypes: []
},
{
    Gender: "Male",
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
    VulnerableAttackTypes: []
},
{
    Gender: "Female",
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
    VulnerableAttackTypes: []
},
{
    Gender: "Female",
    Picture: "", // TBD
    Age: 75,
    Name: "Grandma Byrd",
    Occupation: TargetOccupation.Retired,
    DataPayoutMin: 0,
    DataPayoutRange: 1,
    Trust: 70,
    MoneyPayoutMin: 300,
    MoneyPayoutRange: 200,
    ResistantAttackTypes: [AttackTypes.TikTokVerifyAddress, AttackTypes.RequestChildSupportPregnancy, AttackTypes.BossWantsFileCheck],
    VulnerableAttackTypes: []

},
{
    Gender: "Male",
    Picture: "", // TBD
    Age: 45,
    Name: "Linus Torvalds",
    Occupation: TargetOccupation.Developer,
    DataPayoutMin: 5,
    DataPayoutRange: 25,
    Trust: 10,
    MoneyPayoutMin: 50,
    MoneyPayoutRange: 100,
    ResistantAttackTypes: [AttackTypes.TikTokVerifyAddress, AttackTypes.RequestChildSupportPregnancy, AttackTypes.BossWantsFileCheck, AttackTypes.NigerianPrince],
    VulnerableAttackTypes: []
},
{
    Gender: "Male",
    Picture: "", // TBD
    Age: 67,
    Name: "Ken 'Mad Dog' Mattis",
    Occupation: TargetOccupation.ArmySergeant,
    DataPayoutMin: 50,
    DataPayoutRange: 200,
    Trust: 25,
    MoneyPayoutMin: 50,
    MoneyPayoutRange: 100,
    ResistantAttackTypes: [AttackTypes.TikTokVerifyAddress, AttackTypes.RequestChildSupportPregnancy, AttackTypes.NigerianPrince],
    VulnerableAttackTypes: []

},
{
    Gender: "Male",
    Picture: "", // TBD
    Age: 38,
    Name: "Seth Vargo",
    Occupation: TargetOccupation.Developer,
    DataPayoutMin: 5,
    DataPayoutRange: 15,
    Trust: 5,
    MoneyPayoutMin: 30,
    MoneyPayoutRange: 150,
    ResistantAttackTypes: [AttackTypes.TikTokVerifyAddress, AttackTypes.RequestChildSupportPregnancy, AttackTypes.NigerianPrince, AttackTypes.RelativeInPrison, AttackTypes.ThreatenPictureLeak],
    VulnerableAttackTypes: []
},
{
    Gender: "Female",
    Picture: "", // TBD
    Age: 22,
    Name: "Maya Olson",
    Occupation: TargetOccupation.BankingPerson,
    DataPayoutMin: 15,
    DataPayoutRange: 15,
    Trust: 30,
    MoneyPayoutMin: 30,
    MoneyPayoutRange: 150,
    ResistantAttackTypes: [AttackTypes.NigerianPrince, AttackTypes.RelativeInPrison, AttackTypes.ThreatenPictureLeak],
    VulnerableAttackTypes: []

},
{
    Gender: "Female",
    Picture: "", // TBD
    Age: 29,
    Name: "Scarlett Johansen",
    Occupation: TargetOccupation.Actor,
    DataPayoutMin: 5,
    DataPayoutRange: 15,
    Trust: 20,
    MoneyPayoutMin: 500,
    MoneyPayoutRange: 1500,
    ResistantAttackTypes: [AttackTypes.NigerianPrince, AttackTypes.RelativeInPrison, AttackTypes.ThreatenPictureLeak],
    VulnerableAttackTypes: []

},
{
    Gender: "Male",
    Picture: "", // TBD
    Age: 29,
    Name: "Arman Dadgar",
    Occupation: TargetOccupation.Developer,
    DataPayoutMin: 5,
    DataPayoutRange: 15,
    Trust: 20,
    MoneyPayoutMin: 50,
    MoneyPayoutRange: 100,
    ResistantAttackTypes: [AttackTypes.NigerianPrince, AttackTypes.RelativeInPrison, AttackTypes.ThreatenPictureLeak, AttackTypes.BossWantsFileCheck, AttackTypes.RelativeInPrison, AttackTypes.TikTokVerifyAddress],
    VulnerableAttackTypes: []
},
{
    Gender: "Female",
    Picture: "", // TBD
    Age: 31,
    Name: "Kelley Teabo",
    Occupation: TargetOccupation.Developer,
    DataPayoutMin: 6,
    DataPayoutRange: 22,
    Trust: 33,
    MoneyPayoutMin: 75,
    MoneyPayoutRange: 500,
    ResistantAttackTypes: [AttackTypes.NigerianPrince, AttackTypes.RelativeInPrison, AttackTypes.ThreatenPictureLeak, AttackTypes.BossWantsFileCheck, AttackTypes.RelativeInPrison, AttackTypes.TikTokVerifyAddress],
    VulnerableAttackTypes: []

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

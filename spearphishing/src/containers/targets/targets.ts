import { RefactoredAttackTypeList } from './AttackTypes';
import { Target, TargetOccupation } from './TargetContainer'


export const GlobalTargets: Target[] = [{
    Gender: "Female",
    Picture: "", // TBD
    Age: 25,
    Name: "Julia Childs",
    Occupation: TargetOccupation.Accountant,
    DataPayoutMin: 1,
    DataPayoutRange: 1,
    Trust: 60,
    MoneyPayoutMin: 100,
    MoneyPayoutRange: 100,
    ResistantAttackTypes: [RefactoredAttackTypeList.NigerianPrince],
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
    ResistantAttackTypes: [RefactoredAttackTypeList.TikTokVerifyAddress],
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
    ResistantAttackTypes: [RefactoredAttackTypeList.BossWantsFileCheck, RefactoredAttackTypeList.RequestChildSupportPregnancy, RefactoredAttackTypeList.NigerianPrince],
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
    Trust: 96,
    MoneyPayoutMin: 300,
    MoneyPayoutRange: 200,
    ResistantAttackTypes: [RefactoredAttackTypeList.TikTokVerifyAddress, RefactoredAttackTypeList.RequestChildSupportPregnancy, RefactoredAttackTypeList.BossWantsFileCheck],
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
    ResistantAttackTypes: [RefactoredAttackTypeList.TikTokVerifyAddress, RefactoredAttackTypeList.RequestChildSupportPregnancy, RefactoredAttackTypeList.BossWantsFileCheck, RefactoredAttackTypeList.NigerianPrince],
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
    Trust: 75,
    MoneyPayoutMin: 50,
    MoneyPayoutRange: 100,
    ResistantAttackTypes: [RefactoredAttackTypeList.TikTokVerifyAddress, RefactoredAttackTypeList.RequestChildSupportPregnancy, RefactoredAttackTypeList.NigerianPrince],
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
    ResistantAttackTypes: [RefactoredAttackTypeList.TikTokVerifyAddress, RefactoredAttackTypeList.RequestChildSupportPregnancy, RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.ThreatenPictureLeak],
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
    ResistantAttackTypes: [RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.ThreatenPictureLeak],
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
    Trust: 50,
    MoneyPayoutMin: 500,
    MoneyPayoutRange: 1500,
    ResistantAttackTypes: [RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.ThreatenPictureLeak],
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
    ResistantAttackTypes: [RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.ThreatenPictureLeak, RefactoredAttackTypeList.BossWantsFileCheck, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.TikTokVerifyAddress],
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
    Trust: 43,
    MoneyPayoutMin: 75,
    MoneyPayoutRange: 500,
    ResistantAttackTypes: [RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.ThreatenPictureLeak, RefactoredAttackTypeList.BossWantsFileCheck, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.TikTokVerifyAddress],
    VulnerableAttackTypes: []

},
{
    Gender: "Male",
    Picture: "", // TBD
    Age: 20,
    Name: "Matthew Carroll",
    Occupation: TargetOccupation.Unemployed,
    DataPayoutMin: 1,
    DataPayoutRange: 5,
    Trust: 1,
    MoneyPayoutMin: 25,
    MoneyPayoutRange: 100,
    ResistantAttackTypes: [RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.ThreatenPictureLeak, RefactoredAttackTypeList.BossWantsFileCheck, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.TikTokVerifyAddress],
    VulnerableAttackTypes: []
},
{
    Gender: "Male",
    Picture: "", // TBD
    Age: 20,
    Name: "Aaron Pierce",
    Occupation: TargetOccupation.Unemployed,
    DataPayoutMin: 1,
    DataPayoutRange: 5,
    Trust: 1,
    MoneyPayoutMin: 25,
    MoneyPayoutRange: 100,
    ResistantAttackTypes: [RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.ThreatenPictureLeak, RefactoredAttackTypeList.BossWantsFileCheck, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.TikTokVerifyAddress],
    VulnerableAttackTypes: []
},
{
    Gender: "Male",
    Picture: "", // TBD
    Age: 19,
    Name: "Kendall Tauser",
    Occupation: TargetOccupation.Developer,
    DataPayoutMin: 1,
    DataPayoutRange: 5,
    Trust: 1,
    MoneyPayoutMin: 25,
    MoneyPayoutRange: 100,
    ResistantAttackTypes: [RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.ThreatenPictureLeak, RefactoredAttackTypeList.BossWantsFileCheck, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.TikTokVerifyAddress],
    VulnerableAttackTypes: []
},
{
    Gender: "Female",
    Picture: "", // TBD
    Age: 83,
    Name: "Grandma Pidgin",
    Occupation: TargetOccupation.Retired,
    DataPayoutMin: 1,
    DataPayoutRange: 5,
    Trust: 90,
    MoneyPayoutMin: 250,
    MoneyPayoutRange: 1000,
    ResistantAttackTypes: [RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.ThreatenPictureLeak, RefactoredAttackTypeList.BossWantsFileCheck, RefactoredAttackTypeList.TikTokVerifyAddress],
    VulnerableAttackTypes: [RefactoredAttackTypeList.RelativeInPrison]
},
{
    Gender: "Male",
    Picture: "", // TBD
    Age: 77,
    Name: "Bill Gates",
    Occupation: TargetOccupation.Retired,
    DataPayoutMin: 50,
    DataPayoutRange: 50,
    Trust: 5,
    MoneyPayoutMin: 1000,
    MoneyPayoutRange: 5000,
    ResistantAttackTypes: [RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.RequestChildSupportPregnancy],
    VulnerableAttackTypes: []
},
{
    Gender: "Female",
    Picture: "", // TBD
    Age: 57,
    Name: "Phyllis Vance",
    Occupation: TargetOccupation.SalesPerson,
    DataPayoutMin: 1,
    DataPayoutRange: 5,
    Trust: 35,
    MoneyPayoutMin: 25,
    MoneyPayoutRange: 100,
    ResistantAttackTypes: [RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.TikTokVerifyAddress],
    VulnerableAttackTypes: [RefactoredAttackTypeList.RelativeInPrison]
},
{
    Gender: "Male",
    Picture: "", // TBD
    Age: 56,
    Name: "Michael Scott",
    Occupation: TargetOccupation.Unemployed,
    DataPayoutMin: 5,
    DataPayoutRange: 10,
    Trust: 99,
    MoneyPayoutMin: 100,
    MoneyPayoutRange: 250,
    ResistantAttackTypes: [],
    VulnerableAttackTypes: [RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.ThreatenPictureLeak, RefactoredAttackTypeList.BossWantsFileCheck, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.TikTokVerifyAddress]
},
{
    Gender: "Female",
    Picture: "", // TBD
    Age: 58,
    Name: "Lesley Knope",
    Occupation: TargetOccupation.GovernmentWorker,
    DataPayoutMin: 50,
    DataPayoutRange: 250,
    Trust: 47,
    MoneyPayoutMin: 100,
    MoneyPayoutRange: 250,
    ResistantAttackTypes: [RefactoredAttackTypeList.BossWantsFileCheck, RefactoredAttackTypeList.BankResetPassword],
    VulnerableAttackTypes: [RefactoredAttackTypeList.RelativeInPrison]
},
{
    Gender: "Male",
    Picture: "", // TBD
    Age: 70,
    Name: "Ron Swanson",
    Occupation: TargetOccupation.GovernmentWorker,
    DataPayoutMin: 1,
    DataPayoutRange: 5,
    Trust: 5,
    MoneyPayoutMin: 100,
    MoneyPayoutRange: 250,
    ResistantAttackTypes: [RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.ThreatenPictureLeak, RefactoredAttackTypeList.BossWantsFileCheck, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.TikTokVerifyAddress],
    VulnerableAttackTypes: []
},
{
    Gender: "Male",
    Picture: "", // TBD
    Age: 45,
    Name: "Tom Brady",
    Occupation: TargetOccupation.Retired,
    DataPayoutMin: 1,
    DataPayoutRange: 5,
    Trust: 99,
    MoneyPayoutMin: 500,
    MoneyPayoutRange: 10000,
    ResistantAttackTypes: [RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.BossWantsFileCheck, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.TikTokVerifyAddress],
    VulnerableAttackTypes: []
},
{
    Gender: "Male",
    Picture: "", // TBD
    Age: 150,
    Name: "Kenneth Parcel",
    Occupation: TargetOccupation.Page,
    DataPayoutMin: 1,
    DataPayoutRange: 5,
    Trust: 99,
    MoneyPayoutMin: 100,
    MoneyPayoutRange: 250,
    ResistantAttackTypes: [RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.ThreatenPictureLeak, RefactoredAttackTypeList.BossWantsFileCheck, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.TikTokVerifyAddress],
    VulnerableAttackTypes: []
},
{
    Gender: "Male",
    Picture: "", // TBD
    Age: 70,
    Name: "Marty McFly",
    Occupation: TargetOccupation.Retired,
    DataPayoutMin: 1,
    DataPayoutRange: 5,
    Trust: 5,
    MoneyPayoutMin: 100,
    MoneyPayoutRange: 250,
    ResistantAttackTypes: [RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.ThreatenPictureLeak, RefactoredAttackTypeList.BossWantsFileCheck, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.TikTokVerifyAddress],
    VulnerableAttackTypes: []
},
{
    Gender: "Female",
    Picture: "", // TBD
    Age: 55,
    Name: "Lorraine Halmler",
    Occupation: TargetOccupation.Cybersecurity,
    DataPayoutMin: 1,
    DataPayoutRange: 5,
    Trust: 45,
    MoneyPayoutMin: 50,
    MoneyPayoutRange: 150,
    ResistantAttackTypes: [RefactoredAttackTypeList.RequestChildSupportPregnancy, RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.ThreatenPictureLeak, RefactoredAttackTypeList.BossWantsFileCheck, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.TikTokVerifyAddress],
    VulnerableAttackTypes: []
},
{
    Gender: "Female",
    Picture: "", // TBD
    Age: 27,
    Name: "Tracy Jimenez",
    Occupation: TargetOccupation.Page,
    DataPayoutMin: 10,
    DataPayoutRange: 15,
    Trust: 60,
    MoneyPayoutMin: 100,
    MoneyPayoutRange: 250,
    ResistantAttackTypes: [RefactoredAttackTypeList.RequestChildSupportPregnancy, RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.ThreatenPictureLeak, RefactoredAttackTypeList.BossWantsFileCheck],
    VulnerableAttackTypes: []
},
{
    Gender: "Female",
    Picture: "", // TBD
    Age: 24,
    Name: "Theresa Carpenter",
    Occupation: TargetOccupation.AirlinePilot,
    DataPayoutMin: 1,
    DataPayoutRange: 5,
    Trust: 20,
    MoneyPayoutMin: 20,
    MoneyPayoutRange: 150,
    ResistantAttackTypes: [ RefactoredAttackTypeList.RequestChildSupportPregnancy, RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.ThreatenPictureLeak, RefactoredAttackTypeList.BossWantsFileCheck, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.TikTokVerifyAddress],
    VulnerableAttackTypes: []
},
{
    Gender: "Male",
    Picture: "", // TBD
    Age: 29,
    Name: "Derrick Baker",
    Occupation: TargetOccupation.SalesPerson,
    DataPayoutMin: 1,
    DataPayoutRange: 5,
    Trust: 95,
    MoneyPayoutMin: 20,
    MoneyPayoutRange: 150,
    ResistantAttackTypes: [RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.ThreatenPictureLeak, RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.TikTokVerifyAddress],
    VulnerableAttackTypes: [RefactoredAttackTypeList.BossWantsFileCheck]
},
{
    Gender: "Male",
    Picture: "", // TBD
    Age: 25,
    Name: "Tracy Sanders",
    Occupation: TargetOccupation.Developer,
    DataPayoutMin: 5,
    DataPayoutRange: 30,
    Trust: 10,
    MoneyPayoutMin: 100,
    MoneyPayoutRange: 150,
    ResistantAttackTypes: [],
    VulnerableAttackTypes: [RefactoredAttackTypeList.BossWantsFileCheck]
},
{
    Gender: "Male",
    Picture: "", // TBD
    Age: 18,
    Name: "Will Smith",
    Occupation: TargetOccupation.GroceryStoreBagger,
    DataPayoutMin: 3,
    DataPayoutRange: 10,
    Trust: 85,
    MoneyPayoutMin: 90,
    MoneyPayoutRange: 150,
    ResistantAttackTypes: [RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.BankResetPassword],
    VulnerableAttackTypes: [RefactoredAttackTypeList.BossWantsFileCheck, RefactoredAttackTypeList.TikTokVerifyAddress, RefactoredAttackTypeList.ThreatenPictureLeak]
},
{
    Gender: "Female",
    Picture: "", // TBD
    Age: 21,
    Name: "Monica Wilsson",
    Occupation: TargetOccupation.SalesPerson,
    DataPayoutMin: 3,
    DataPayoutRange: 10,
    Trust: 31,
    MoneyPayoutMin: 95,
    MoneyPayoutRange: 130,
    ResistantAttackTypes: [RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.BankResetPassword],
    VulnerableAttackTypes: [RefactoredAttackTypeList.BossWantsFileCheck, RefactoredAttackTypeList.TikTokVerifyAddress, RefactoredAttackTypeList.ThreatenPictureLeak]
},
{
    Gender: "Female",
    Picture: "", // TBD
    Age: 33,
    Name: "Theresa Williams",
    Occupation: TargetOccupation.BusinessPerson,
    DataPayoutMin: 3,
    DataPayoutRange: 10,
    Trust: 75,
    MoneyPayoutMin: 150,
    MoneyPayoutRange: 500,
    ResistantAttackTypes: [RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.BankResetPassword],
    VulnerableAttackTypes: [RefactoredAttackTypeList.BossWantsFileCheck, RefactoredAttackTypeList.ThreatenPictureLeak]
},
{
    Gender: "Male",
    Picture: "", // TBD
    Age: 41,
    Name: "Sheldon Cooper",
    Occupation: TargetOccupation.Professor,
    DataPayoutMin: 3,
    DataPayoutRange: 10,
    Trust: 15,
    MoneyPayoutMin: 150,
    MoneyPayoutRange: 500,
    ResistantAttackTypes: [RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.BankResetPassword, RefactoredAttackTypeList.BossWantsFileCheck, RefactoredAttackTypeList.ThreatenPictureLeak, RefactoredAttackTypeList.TikTokVerifyAddress, RefactoredAttackTypeList.RequestChildSupportPregnancy],
    VulnerableAttackTypes: []
},
{
    Gender: "Male",
    Picture: "", // TBD
    Age: 44,
    Name: "Malcolm Watson",
    Occupation: TargetOccupation.GovernmentWorker,
    DataPayoutMin: 3,
    DataPayoutRange: 10,
    Trust: 55,
    MoneyPayoutMin: 150,
    MoneyPayoutRange: 500,
    ResistantAttackTypes: [RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.BankResetPassword, RefactoredAttackTypeList.BossWantsFileCheck, RefactoredAttackTypeList.ThreatenPictureLeak, RefactoredAttackTypeList.TikTokVerifyAddress, RefactoredAttackTypeList.RequestChildSupportPregnancy],
    VulnerableAttackTypes: []
},
{
    Gender: "Male",
    Picture: "", // TBD
    Age: 49,
    Name: "Sherlock Holmes",
    Occupation: TargetOccupation.GovernmentWorker,
    DataPayoutMin: 50,
    DataPayoutRange: 200,
    Trust: 51,
    MoneyPayoutMin: 150,
    MoneyPayoutRange: 500,
    ResistantAttackTypes: [RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.BankResetPassword, RefactoredAttackTypeList.BossWantsFileCheck, RefactoredAttackTypeList.ThreatenPictureLeak, RefactoredAttackTypeList.TikTokVerifyAddress, RefactoredAttackTypeList.RequestChildSupportPregnancy],
    VulnerableAttackTypes: []
},
{
    Gender: "Male",
    Picture: "", // TBD
    Age: 24,
    Name: "Matthew Thomas",
    Occupation: TargetOccupation.BusinessPerson,
    DataPayoutMin: 25,
    DataPayoutRange: 30,
    Trust: 60,
    MoneyPayoutMin: 150,
    MoneyPayoutRange: 350,
    ResistantAttackTypes: [RefactoredAttackTypeList.BossWantsFileCheck, RefactoredAttackTypeList.ThreatenPictureLeak, RefactoredAttackTypeList.TikTokVerifyAddress, RefactoredAttackTypeList.RequestChildSupportPregnancy],
    VulnerableAttackTypes: [RefactoredAttackTypeList.RelativeInPrison, RefactoredAttackTypeList.NigerianPrince, RefactoredAttackTypeList.BankResetPassword]
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

(window as any).globaltargets = GlobalTargets;

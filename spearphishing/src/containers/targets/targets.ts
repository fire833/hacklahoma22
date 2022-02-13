import { AttackTypes } from './AttackTypes';
import { Target, UserOccupation } from './TargetContainer'

export const GlobalUsers: Target[] = [{
    Gender: "male",
    Picture: "", // TBD
    Age: 25,
    Name: "Kevin Wolfram",
    Occupation: UserOccupation.Accountant,
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
    Occupation: UserOccupation.Professor,
    DataPayoutMin: 4,
    DataPayoutRange: 4,
    Trust: 10,
    MoneyPayoutMin: 0,
    MoneyPayoutRange: 100,
    ResistantAttackTypes: [AttackTypes.TikTokVerifyAddress],
},];


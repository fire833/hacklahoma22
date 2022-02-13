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


import { IncomingEmail } from "../../inbox/inboxSlice";

import "./EmailAvatar.css";

interface EmailAvatarProps {
    email: IncomingEmail,
    children?: any
}

export function EmailAvatar(props: EmailAvatarProps) {

    // https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
    function generateUniqueGradientFor(sender: String){
        function mulberry32(a: number) {
            return function() {
              var t = a += 0x6D2B79F5;
              t = Math.imul(t ^ t >>> 15, t | 1);
              t ^= t + Math.imul(t ^ t >>> 7, t | 61);
              return ((t ^ t >>> 14) >>> 0) / 4294967296;
            }
        }


        // https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
        function hashString(str: string) {
            var hash = 0, i, chr;
            if (str.length === 0) return hash;
            for (i = 0; i < str.length; i++) {
              chr   = str.charCodeAt(i);
              hash  = ((hash << 5) - hash) + chr;
              hash |= 0; // Convert to 32bit integer
            }
            return hash;
          };

        let rand = mulberry32(hashString(props.email.senderName) +  542354354)

        let hsl1 = [Math.floor(rand() * 360) + "deg", (50 + Math.floor(rand() * 20)) + "%", (50 + Math.floor(30 * rand())) + "%"];
        let hsl2 = [Math.floor(rand() * 360) + "deg", (50 + Math.floor(rand() * 20)) + "%", (50 + Math.floor(30 * rand())) + "%"];


        function step(pct: number){

        }

        let grad = `linear-gradient(
            ${Math.floor(rand() * 360)}deg,
            hsl(${hsl1[0]} ${hsl1[1]} ${hsl1[2]}) 0%,
            hsl(${hsl2[0]} ${hsl2[1]} ${hsl2[2]}) 100%
        )`;
        
        return grad;

    }

    console.log(generateUniqueGradientFor(""));

    function getInitials(name: string){
        let split = name.split(" ");

        if(split.length == 1){
            return split[0].substring(0, 2).toUpperCase();
        }else{
            return (split[0].charAt(0) + split[1].charAt(0)).toUpperCase();
        }
    }

    return (
        <div className="senderIcon" style={{
            backgroundImage: generateUniqueGradientFor("")
        }}>
            <p>{getInitials(props.email.senderName)}</p>
        </div>
        )
}
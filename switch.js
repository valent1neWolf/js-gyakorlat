let grade = 85;


switch (true) {
    case grade >=90:
        console.log("You did great!");
        break;

        case grade >=80:
            console.log("You did good!");
            break;    

            case grade >=70:
                console.log("You did okey!");
                break;

                case grade >=60:
                    console.log("You ... passed");
                    break;

                    case grade <90:
                        console.log("You FAILED!");
                        break;
    default:
        console.log(grade, "is not a point!");
        
}

// switch (grade.toUpperCase()) {
//     case "A":
//         console.log("You did great!");
//         break;

//         case "B":
//             console.log("You did good!");
//             break;    

//             case "C":
//                 console.log("You did okey!");
//                 break;

//                 case "D":
//                     console.log("You ... passed");
//                     break;

//                     case "F":
//                         console.log("You FAILED!");
//                         break;
//     default:
//         console.log(grade, "is not a letter grade!");
        
// }
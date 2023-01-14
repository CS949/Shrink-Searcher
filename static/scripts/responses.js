function getBotResponse(input) {
  if (input == "Hi") {
    return "Hi there\nWhat are you looking for?\n1.help 2.Contact immediately";
  } else if (input == "1") {
    return "What's Your problem?\n a.Mental issue  b.physical issue";
  } else if (input == "2") {
    return "Wait For a min ";
  } else if (input == "a") {
    return "Doc1";
  }

  // Simple responses
  if (input == "hello") {
    return "Hello there!";
  } else if (input == "goodbye") {
    return "Talk to you later!";
  } else {
    return "Try asking something else!";
  }
}
// var Fil1 = [];
// var Fil2 = [];
// var Fil3 = [];
// let doc = [
//   {
//     Name: "Ameera Andrade",
//     Specialization_1: "Counselling Psychologist",
//     Specialization_2: "Child Psychologist",
//   },
//   {
//     Name: "Jack WhiteHall",
//     Specialization_1: "Clinical Psychologist",
//     Specialization_3: "Queer Friendly",
//   },
//   {
//     Name: "Melwina Gomes",
//     Specialization_1: "Clinical Psychologist",
//     Specialization_2: "Child Psychologist",
//     Specialization_3: "Queer Friendly",
//   },
//   {
//     Name: "Krutika Gaikwad",
//     Specialization_1: "Clinical Psychologist",
//     Specialization_2: "Child Psychologist",
//   },
//   { Name: "Lauren Thomas", Specialization_1: "Clinical Psychologist" },
//   {
//     Name: "Ben Buffet",
//     Specialization_1: "Counselling Psychologist",
//     Specialization_3: "Queer Friendly",
//   },
//   {
//     Name: "Susan Saran",
//     Specialization_1: "Clinical Psychologist",
//     Specialization_3: "Queer Friendly",
//   },
//   {
//     Name: "Quinn Lockley",
//     Specialization_1: "Counselling Psychologist",
//     Specialization_2: "Child Psychologist",
//   },
//   {
//     Name: "Steven Grant",
//     Specialization_1: "Clinical Psychologist",
//     Specialization_2: "Child Psychologist",
//   },
//   {
//     Name: "Maya Johnson",
//     Specialization_1: "Counselling Psychologist",
//     Specialization_3: "Queer Friendly",
//   },
// ];

// function mix() {
//   for (let i = 0; i < doc.length; i++) {
//     let element = doc[i];
//     Fil1.push(element);
//   }
//   return Fil1;
// }
// let output = doc.find(
//   (doc) => doc.Specialization_1 === "Clinical Psychologist"
// );
// console.log(output);
// function Clinical_re() {
//   for (let i = 0; i < doc.length; i++) {
//     let element = doc[i];
//     if (element.Specialization_1 == "Clinical Psychologist") {
//       Fil1.push(element);
//     }
//   }
//   return Fil1;
// }

// function Counselling_re() {
//   for (let i = 0; i < doc.length; i++) {
//     let element = doc[i];
//     if (element.Specialization_1 == "Counselling Psychologist") {
//       Fil1.push(element);
//     }
//   }
//   return Fil1;
// }
// // Counselling();
// // console.log(Fil1);

// function Age_re(cou) {
//   if (cou == 1) {
//     for (let i = 0; i < Fil1.length; i++) {
//       let element = Fil1[i];
//       if (element.Specialization_2 == "Child Psychologist") {
//         Fil2.push(element);
//       }
//     }
//     console.log(Fil2);
//     return Fil2;
//   }
//   else{
//     return Fil1;
//   }
// }

// function Gender_re() {
//   for (let i = 0; i < Fil2.length; i++) {
//     let element = Fil2[i];
//     if (element.Specialization_3 == "Queer Friendly") {
//       Fil3.push(element);
//     }
//   }
//   return Fil3;
// }

// function last() {
//   return Fil3;
// }

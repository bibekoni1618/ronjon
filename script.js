// Question no 03
// GPA, CGPA, GRADE function for result publishing
// Ans to the qustion no .03
function getGpa(mark) {
  let gpa;
  if (mark >= 0 && mark < 33) {
    gpa = 0;
  } else if (mark >= 33 && mark < 40) {
    gpa = 1;
  } else if (mark >= 40 && mark < 50) {
    gpa = 2;
  } else if (mark >= 50 && mark < 60) {
    gpa = 3;
  } else if (mark >= 60 && mark < 70) {
    gpa = 3.5;
  } else if (mark >= 70 && mark < 80) {
    gpa = 4;
  } else if (mark >= 80 && mark <= 100) {
    gpa = 5;
  } else {
    gpa = "invalid";
  }
  console.log(mark);
  return gpa;
}

function getCgpa(name, ban, eng, math, phy, che, dharmo) {
  // individual gpa
  let ban_gpa = getGpa(ban);
  let ban_eng = getGpa(eng);
  let ban_math = getGpa(math);
  let ban_phy = getGpa(phy);
  let ban_che = getGpa(che);
  let ban_dharmo = getGpa(dharmo);
  let cgpa;
  if (
    ban >= 33 &&
    eng >= 33 &&
    math >= 33 &&
    phy >= 33 &&
    che >= 33 &&
    dharmo >= 33
  ) {
    cgpa = (ban_gpa + ban_eng + ban_math + ban_phy + ban_che + ban_dharmo) / 6;
  } else {
    cgpa = 0;
  }

  return `
  Hi ${name} Your cgpa is
    Bangla=${ban}/GPA=${ban_gpa}
    English=${eng}/GPA=${ban_eng}
    Mathmatics=${math}/GPA=${ban_math}
    Physics=${phy}/GPA=${ban_phy}
    Chemistry=${che}/GPA=${ban_che}
    Dharmo=${dharmo}/GPA=${ban_dharmo}
    =====================================
    Final Cgpa=${cgpa}
    Total marks=parsInt${ban}+parsInt${eng}
    `;
}
console.log(getCgpa("Monoronjon", 50, 98, 60, 40, 80, 55));
console.log(getCgpa("Asraf", 77, 98, 83, 40, 99, 73));
console.log(getCgpa("Bably", 44, 35, 83, 80, 99, 93));

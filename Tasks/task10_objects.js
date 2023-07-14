
const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
          js: '20%',
          php: '10%'
      },
      exp: '1 month'
  },
  showAgeAndLangs: function (plan) {
    const {age} = plan;
    const {languages} = plan.skills;
    let str = `Мне ${age} и я владею языками: `;
    languages.forEach(function (lang) {
      str += `${lang.toUpperCase()} `;
    });
    return str
  }
};

//Task 1
function showExperience(plan) {
  let experience = plan.skills.exp;
  return experience
  // const {exp} = plan.skills;
  // return exp;
}

console.log(showExperience(personalPlanPeter));

//Task 2
function showProgrammingLangs(plan) {
  let str = '';
  const {programmingLangs} = plan.skills;
  for (let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
  }
  return str
}

console.log(showProgrammingLangs(personalPlanPeter));

//Task 3
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));





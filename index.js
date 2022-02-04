
const file = document.getElementById('file');
const btn = document.getElementById('btn');
const txt = document.getElementById('txt');

btn.addEventListener("click", function() {
    file.click();
});

function getHighestPair(emp) {
    console.log(emp);
    let couple = {};
    let days = {};
    if (emp)
      emp.forEach((el1) => {
       
        emp.slice(emp.indexOf(el1) + 1, emp.length).forEach((el2) => {
          if (el1[0] !== el2[0]) {
            const firstDate = new Date(el1[2]);
            const lastDate = el1[3] === "NULL" ? new Date() : new Date(el1[3]);
            const firstDate2 = new Date(el2[2]);
            const lastDate2 = el2[3] === "NULL" ? new Date() : new Date(el2[3]);
  
            if (el1[1] === el2[1]) {
              if (firstDate <= lastDate2 && firstDate2 <= lastDate) {
                const start = firstDate <= firstDate2 ? firstDate2 : firstDate;
                const end = lastDate <= lastDate2 ? lastDate : lastDate2;
                if (end >= firstDate2) {
                  const diffTime = Math.abs(end - start);
                  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                  const x = `${el1[0]}${el2[0]}`;
  
                  if (!days[x]) Object.assign(days, { [x]: 0 });
                  days[x] = 1 * days[x] + diffDays;
  
                  if (!couple[x]) Object.assign(couple, { [x]: [] });
                  couple[x] = [...couple[x], [el1[0], el2[0], el1[1], diffDays]];
                }
              }
            }
          }
        });
      });
    return couple[
      Object.keys(days).reduce((a, b) =>
        days[a] > days[b] ? a : b
      )
    ];
  }

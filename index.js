console.log('funguju!');


const updateSkill = (id, uroven) => {
  const progress = document.querySelector(`#${id} .skill__progress`)
  const value = document.querySelector(`#${id} .skill__value`)
  value.textContent = `${uroven} / 100`
  progress.style.width = `${uroven}%`
}

const html = Number(prompt("Vyjádřete svoji úroveň v HTML číslem od nuly do sta."))
const css = Number(prompt("Vyjádřete svoji úroveň v CSS číslem od nuly do sta."))
const js = Number(prompt("Vyjádřete svoji úroveň v JavaScriptu číslem od nuly do sta."))

updateSkill("skill1", html)
updateSkill("skill2", css)
updateSkill("skill3", js)

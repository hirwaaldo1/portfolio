 function getSkills(setSkills: any,url:string|undefined) {
    fetch(`${url}/skills`)
    .then((response) => response.json())
    .then((json) => {
      setSkills(json);
    })
    .catch((error) => {
      console.log(error);
    });
}
function addSkilltoDb(skill: any, url: string|undefined) {
  fetch(`${url}/skills`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(skill),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
    .catch((error) => {
      console.log(error);
    });
}
function deleteSkilltoDb(id: number, url: string|undefined) {
  fetch(`${url}/skills/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
    .catch((error) => {
      console.log(error);
    });
}
export {getSkills,addSkilltoDb,deleteSkilltoDb};
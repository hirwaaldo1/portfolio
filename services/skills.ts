import supabase from "@/libs/superbase";

 function getSkills(setSkills: any,url:string|undefined) {
    let skills = supabase.from('skills').select("*").is("isDeleted",false);
    skills.then((data) => {
      if(data.error === null){
        setSkills(data.data);
         console.log(data.data);
      }else{
        console.log(data.error);
      }
    })
  
}
function addSkilltoDb (skill: any , setSkills: any , allskills: any) {
 let getSkill = supabase.from('skills').insert([{ name: skill.name }]).select();
 console.log(getSkill);
  getSkill.then((data) => {
    if(data.error === null){
        setSkills([...allskills, ...data.data]);
      }else{
        console.log(data.error);
      }
  });
}
async function deleteSkilltoDb(id: number, url: string|undefined) {
  const { data, error } = await supabase
  .from('skills')
  .update({ isDeleted: "true" })
  .eq('id', id)
  if(error === null){
    console.log(data);
  }else{
    console.log(error);
  }
}
export {getSkills,addSkilltoDb,deleteSkilltoDb};
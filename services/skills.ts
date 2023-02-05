import supabase from "@/libs/superbase";
 function getSkills(setSkills: any,url:string|undefined) {
    let skills = supabase.from('skills').select("*").is("isDeleted",false);
    skills.then((data) => {
      if(data.error === null){
        setSkills(data.data);
      }else{
        console.log(data.error);
      }
    })
}
async function addSkilltoDb (skill: any, url: string|undefined) {
  const { data, error } = await supabase
  .from('skills')
  .insert([{ name: skill.name }], { upsert: true })
  if(error === null){
    console.log(data);
  }else{
    console.log(error);
  }
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
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import El1 from "../src/DataBase/Elementary1.json";
import El2 from "../src/DataBase/Elementary2.json";
import El3 from "../src/DataBase/Elementary3.json";
import El4 from "../src/DataBase/Elementary4.json";
import El5 from "../src/DataBase/Elementary5.json";
import El6 from "../src/DataBase/Elementary6.json";

export const searchGrade=(word:string[]):string[]=>{
  const DB=[El1,El2,El3,El4,El5,El6];
  const res=[]
  for (let i=0,length=word.length;i<length;i++){
    let validator:number=0
    for(let index=0,len=DB.length ;index<len;index++){
      DB[index].learnedWords.includes(word[i]) && res.push(`"${word[i]}"は${DB[index].grade}で習います`) & validator++
    }
    validator || res.push(`"${word[i]}"は小学生で習いません`)
  }
  return res
}
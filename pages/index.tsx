import Image from 'next/image'
import { searchGrade } from './api/ElementaryAPI'
import { ChangeEvent, FormEvent, useState } from 'react'



export default function Home() {
  const [texts,setTexts]=useState<string>("")
  const [result,setResult]=useState<string[]>([])

  const onSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const wordList=texts.replace(/\s+/ug,"/").split("/");
    const res=searchGrade(wordList)
    setResult(res);
    setTexts("");
    console.log(wordList)
  }
  console.log(texts)
  console.log(result)
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <form onSubmit={(e)=>onSubmit(e)}>
        <p>スペースで区切って入力してください</p>
        <input type="text" className='p-2 box-border m-2' value={texts} onChange={e=>setTexts(e.target.value)} />
        <button type='submit' className='bg-gray-500 hover:bg-gray-400 text-white rounded px-4 py-2 m-2'>送信</button>
      </form>
        <div>
        <ul>
          {result.length ? (
            <p>以下に結果を表示します</p>):(
            <p>未入力</p>
          )}
          <br/>
          {result.map((res,index)=>(
            <li key={index}>
              <p>{res}</p>
            </li>
          )
          )}        
        </ul>
      </div>
    </main>
  )
}

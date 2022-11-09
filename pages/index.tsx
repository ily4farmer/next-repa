import axios from 'axios'
import { useState } from 'react'
import Layout from '../components/Layout/Layout'

export default function Home() {
  const [name, setName] = useState<string>('')
  const [list, setList] = useState<any>([])

  const send = async() => {
    await axios.post('http://localhost:5700/api/user/', {name: name})
    const res = await (await axios.get('http://localhost:5700/api/user/')).data
    setList(res)
    console.log(res);
  }

  return (
    <Layout>
      <div className="container">
        <div className="bg-text rounded-lg text-base text-center">
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
          <button onClick={send}>Send request</button>
          <ul>
            {list.map((el: any) => <li key={el.id}>{el.name}</li>)}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

import {useEffect, useState} from 'react'

function About() {
  const[repos, setRepos] = useState([])
  const[search, setSearch] = useState('')
  useEffect(() => {
    fetch('https://api.github.com/users/dodohv/repos')
    .then(response => response.json())
    .then(data => setRepos(data))
  }, [])
  
  useEffect(() => {
    setFilteredRepos(repos.filter(repo => repo.name.includes(search)));
  }, [search])

  return (
    <div>
      <input
      name ="Buscar"
      type = "text"
      placeholder="Buscar"
      onChange={e => setSearch(e.target.value)}
      value ={search}
      />

      <ul>
        {repos.map(repo =>{
          return (
            <li key={repo.name}>
              {repo.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default About
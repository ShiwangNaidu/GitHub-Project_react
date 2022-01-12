import { useState } from 'react'
//import RepoDetails from "../components/RepoDetails";
import { fetchUser, fetchUserRepo } from '../services'
import styles from '../styles/App.module.css'
import Card from './Card'

let userList = []
export default function RepoComponent() {
  // this state will have the github user handle
  const [handle, setHandle] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setData] = useState(null)

  let repo
  // const [pageNumber, setPageNumber] = useState(0);
  //const [totalPages, setTotalPages] = useState(0);

  // useEffect(() => {}, [pageNumber, repoData]);

  //const pages = new Array(totalPages).fill(null).map((v, i) => i);

  // handle search button
  const handleSearch = async (e, i = 0) => {
    e.preventDefault()
    // setPageNumber(i);
    try {
      if (!handle) return
      // here we'll be making a network request, so we'll display progress here
      setIsLoading(true)
      // get the value from the state and make a get request to the Github API
      console.log(userList)
      console.log(userList.includes(handle))
      if (!userList.includes(handle)) {
        console.log('fetched from git')
        repo = await fetchUser(handle)
        userList.push(repo.userName)
        console.log(userList)
        setIsLoading(false)
      } else {
        console.log('fetched from db')
        console.log(userList)
        repo = await fetchUserRepo(handle)
        userList.push(repo.userName)
        console.log(userList)
        setIsLoading(false)
      }
      //console.log(repo)
      setIsLoading(false)
      setData(repo)
      //setTotalPages(total);
    } catch (error) {
      console.log(error)
      console.log('this works')
      userList.push(handle)
      setIsLoading(false)
      console.log(userList)
    }
  }

  return (
    <>
      <div className={styles.app}>
        <input
          className={styles.search}
          id="filled-basic"
          placeholder="User Name"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
        />
        {!isLoading ? (
          <button className={styles.button} onClick={handleSearch}>
            Fetch
          </button>
        ) : (
          <p>Loading...</p>
        )}
        {userData && (
          <Card
            userName={userData?.userName}
            image={userData?.image}
            followers={userData?.followers}
            following={userData?.following}
            numberOfRepos={userData?.numberOfRepos}
            memberSince={userData?.memberSince}
            html_url={userData?.html_url}
          />
        )}
      </div>
    </>
  )
}

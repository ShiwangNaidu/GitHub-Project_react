import { useState } from 'react'
import { fetchUser } from '../services'
import styles from '../styles/App.module.css'
import Card from './Card'

export default function UserComponent() {
  // this state will have the github user handle
  const [handle, setHandle] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  // const [isError, setError] = useState(null);
  const [userData, setData] = useState(null)
  // handle search button
  const handleSearch = async (e) => {
    e.preventDefault()
    try {
      if (!handle) return
      // here we'll be making a network request, so we'll display progress here
      setIsLoading(true)
      // get the value from the state and make a get request to the Github API
      const data = await fetchUser(handle)
      console.log(data)
      //  UIdata=data;
      // const data2 = await fetchUserRepo(handle);
      // console.log(data2)
      setIsLoading(false)
      setData(data)
      // console.log(userData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className={styles.app}>
        <input
          className={styles.search}
          id="filled-basic"
          placeholder="User Name"
          type={'text'}
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

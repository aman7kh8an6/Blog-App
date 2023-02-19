import React from 'react'
import Post from './Post'

const Feeds = () => {
  return (
    <div className='feed'>
      <Post 
        person={{
          name: 'Aman Khan', 
          imageUrl: 'https://icon-library.com/images/person-png-icon/person-png-icon-29.jpg', 
          dt: 'Jan 30,2023'
        }}
        post_detail={{
          id: 123,
          title: "Props in ReactJs", 
          post_img: 'https://www.datocms-assets.com/45470/1631110818-logo-react-js.png?fm=webp',
          desc: "You can tell that engineering interviews are broken because there is a burgeoning industry that’s sprung up around interview prep. Services such as AlgoExpert, Interview Kickstart, Coderbyte, HackerRank, and of course LeetCode promise to help you ace the coding interview. Engineers with many years of experience writing code professionally are turning to these services to help them succeed. I know because I just did so myself.But why? Prospective employers want programmers to do jobs similar to the ones they’ve already succeeded in. Doesn’t the work itself prepare you for the work? The problem is that many companies aren’t testing whether candidates have the skills to do the job. Instead, they make candidates do algorithmic coding challenges. These challenges are distinct enough from actual engineering work that even seasoned practitioners study for them every time they change jobs. What a waste!"
        }} 
        />
      {/* <Post />
      <Post />
      <Post />
      <Post />
      <Post /> */}
    </div>
  )
}

export default Feeds
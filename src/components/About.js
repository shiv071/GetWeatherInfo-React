import React from 'react'

const About = (props) => {
  return (
    <div className='container' style={{fontSize: '2rem',color:props.mode==='dark'?'white':'black'}}>
      <div className="mx-5">
        <p>As a self-motivated and hardworking fresher seeking a challenging
          opportunity in web development, I am eager to apply my technical
          knowledge and intelligence to drive the growth of the organization. With a
          solid understanding of technical concepts, I am highly motivated to learn
          and grow in the ever-evolving world of IT. <br /><br />React out to my  profiles -</p>
        <p>Github:- <a target='_blank' rel='noreferrer' href="https://www.github.com/shiv071">https://www.github.com/shiv071</a></p>
        <p>LinkedIn:- <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/shivesh-kumar-rai-7b4a071ab/">https://www.linkedin.com/in/shivesh-kumar-rai-7b4a071ab/</a></p>
      </div>
    </div>
  )
}

export default About
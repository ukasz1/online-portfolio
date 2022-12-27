const AboutMe = ({ actualTab }) => {

  return (
    <div className={`about ${(actualTab === 0) ? 'active-tab' : null}`}>
      <div className="title">
        <h1>About me</h1>
        <div className="underline underline-about"></div>
      </div>
      <article className="about-article">
        <p>My name is Łukasz Mitkowski, and I am a web designer with a technical and economic education. <span className="stressed">I am currently working at Samsung R&D Institute Poland.</span></p><br />
        <p>I am interested in front-end development - React, JS, HTML and all that goes with it. Exploring Javascript is very interesting and exciting for me. I find that language very powerful. I like to know, how the world around me works, so I am also interested in back-end: Node, MongoDB. In the future I would like to be a full-stack developer.
        </p><br />
        <p>For last months I intensively expand my knowledge and create my own projects. In my opinion, there is no other way to be a good developer. I have also done some courses and small projects under the guidance of John Smilga on Udemy that I found extremely useful for my studying. However, making own projects is the most important for me.</p><br />
        <p>Please do not hesitate to visit my <a href="https://github.com/ukasz1" target="_blank" rel="noreferrer">GitHub</a> profile. I also encourage you to see my online project and my certificates - click above. If you want to see the progress of my chess application please follow this <a href="https://www.youtube.com/watch?v=iV2be-UNH8U&ab_channel=Mulder" target="_blank" rel="noreferrer">YouTube link</a>.</p>
      </article>
    </div>
  )
}

export default AboutMe;

const AboutMe = ({ actualTab }) => {

  return (
    <div className={`about ${(actualTab === 0) ? 'active-tab' : null}`}>
      <div className="title">
        <h1>About me</h1>
        <div className="underline underline-about"></div>
      </div>
      <article className="about-article">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat efficitur felis nec vestibulum. Nam non metus luctus, vehicula quam quis, consectetur elit. Curabitur nec leo nec mauris pretium vestibulum. Sed quis ex in sapien laoreet sodales ut id turpis. Nam purus nisi, semper et pellentesque ut, fermentum nec lacus. Nam tempor, dui vulputate placerat vulputate, velit sapien porttitor lectus, sed cursus ipsum nisi sed risus.
        </p><br />

        <p>Curabitur vel egestas lacus, quis vehicula quam. Aenean facilisis vulputate metus, fermentum bibendum justo efficitur et. Morbi hendrerit ipsum leo, ac lacinia magna lobortis et. Proin luctus lectus fermentum suscipit condimentum. Vestibulum est ante, suscipit vel dapibus sit amet, ullamcorper vitae orci. Vivamus in risus gravida, viverra nunc at, porta neque.</p>
      </article>
    </div>
  )
}

export default AboutMe;

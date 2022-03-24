import certificates from './certificates';

const Achievements = () => {
  return (
    <div className="projects">
      <h1>My Certificates</h1>
      <article>
        <table>
          {certificates.map(item => {
            const { name, icon, issuedBy, link, number } = item
            return (
              <tr>
                <td><a href={link}>{name}</a></td>
                <td>{issuedBy} {icon}</td>
                <td>{number}</td>
              </tr>
            )
          })}
        </table>

      </article>

    </div>
  )
}

export default Achievements;
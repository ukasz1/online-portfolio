import certificates from '../data/certificates';

const Achievements = ({ actualTab }) => {
  return (
    <div className={`achievements ${(actualTab === 2) ? 'active-tab' : null}`}>
      <Title />
      <Certificates />
    </div>
  )
}
const Title = () => {
  return (
    <div className='title'>
      <h1>My Certificates</h1>
      <div className='underline underline-cert'></div>
    </div>
  )
}
const Certificates = () => {
  return (
    <section className='certificates-container'>
      <table>
        <tbody>
          {certificates.map(item => {
            const { id, name, icon, issuedBy, link, number } = item;
            return (
              <tr key={id} className='certificate-item'>
                <td><a href={link} target="_blank" rel="noreferrer">{name}</a>
                  {number ? <small> ({number})</small> : null}
                </td>
                <td>{issuedBy} {icon}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}


export { Achievements };
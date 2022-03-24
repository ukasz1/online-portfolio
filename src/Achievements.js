import certificates from './certificates';
import { FaAngleDoubleRight } from 'react-icons/fa'

const Achievements = () => {
  return (
    <div className="projects">
      <div className='title'>
        <h1>My Certificates</h1>
        <div className='underline underline-cert'></div>
      </div>
      <section className='certificates-container'>
        <table>
          <tbody>
            {certificates.map(item => {
              const { id, name, icon, issuedBy, link, number } = item;
              return (
                <tr key={id} className='certificate-item'>
                  <td><a href={link}>{name}</a></td>
                  <td>{issuedBy} {icon}</td>
                  <td>{number}</td>
                </tr>
              )
            })}

          </tbody>

        </table>
      </section>
    </div>
  )
}

export default Achievements;
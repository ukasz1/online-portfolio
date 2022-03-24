import certificates from './certificates';
import { FaAngleDoubleRight } from 'react-icons/fa'

const Achievements = () => {
  return (
    <div className="projects">
      <h1>My Certificates</h1>
      <div className='certificates-container'>
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
      </div>
    </div>
  )
}

export default Achievements;
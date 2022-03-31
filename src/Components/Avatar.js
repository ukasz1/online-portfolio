import avatar from '../images/avatar-photo.jpg';

const Avatar = () => {
  return (
    <div className='avatar-frame'>
      <img src={avatar} alt="avatar" className="avatar" />
    </div>
  )
}

export default Avatar;
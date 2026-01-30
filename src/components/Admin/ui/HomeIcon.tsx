import { IoHome } from 'react-icons/io5'

export const HomeIcon = () => {
  return (
    <>
      <IoHome
        size={20}
        color="#532755"
        className="home-icon--light"
      />
      <IoHome
        size={20}
        color="#faa98c"
        className="home-icon--dark"
      />
    </>
  )
}

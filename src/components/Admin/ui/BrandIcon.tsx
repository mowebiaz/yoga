import { IoHome } from 'react-icons/io5'

export const BrandIcon = () => {
  return (
    <>
      <IoHome
        size={20}
        color="#532755"
        className="brand-icon--light"
      />
      <IoHome
        size={20}
        color="#faa98c"
        className="brand-icon--dark"
      />
    </>
  )
}

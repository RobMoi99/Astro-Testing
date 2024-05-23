

const Card = (props:{children:React.ReactNode,header:string,className:string}) => {
    const {children, header,className} = props
  return (
    <div className={`relative z-20 bg-white shadow-lg rounded-lg mx-auto my-8 font-semibold text-lg p-12 ${className}`}>
        <h2 className=' text-2xl mb-4 font-bold'>{header}</h2>
        {children}
    </div>
  )
}

export default Card
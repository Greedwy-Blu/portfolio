import  JSX  from "react"

export  const  Modal = ({ isOpen, setModalOpen, children }) => {

  if (isOpen) {
  return(

<div>


<div>
          <div style={{ cursor: 'pointer'}} onClick={setModalOpen}>
            x
          </div>
          <div>{children}</div>
          <button onClick={setModalOpen}>Fechar</button>
</div>


</div>

  )

  }

}
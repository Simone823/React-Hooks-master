import React from 'react'

function Modal({modalContent, modalState, toggleModal}) {
  return (
    <section className={`modal-section ${modalState ? 'show-modal' : ''}`}>
        {/* modal content */}
        <div className='container modal-content bg-white'>
            <h4>{modalContent || 'Sono un Modal'}</h4>
            <button type='button' className='button delete-button' onClick={toggleModal}>x</button>
        </div>
    </section>
  )
}

export default Modal
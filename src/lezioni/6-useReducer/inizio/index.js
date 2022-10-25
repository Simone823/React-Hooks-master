import React, {useReducer} from "react";

// import modal
import Modal from './Modal';

const Index = () => {
  // reducer
  const reducer = (state, action) => {
    // if action open modal
    if(action.type === 'open-modal') {
      return {
        ...state,
        isOpenModal: true,
        modalContent: action.payload
      }
    }

    // if action type close modal
    if(action.type === 'close-modal') {
      return {
        ...state,
        isOpenModal: false
      }
    }

    // return state
    return state;
  }

  // initial state
  const initialState = {
    isOpenModal: false,
    modalContent: '',
  }

  // state dispatch use reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // open modal
  const openModal = () => (e) => {
    // dispatch type open modal
    dispatch({type: 'open-modal', payload: 'Nuovo Modal'});
  }

  // close modal
  const closeModal = () => (e) => {
    // dispacth type close modal
    dispatch({type: 'close-modal'});
  }


  return (
    <div>
      <h2>Use Reducer Component</h2>

      {/* btn  open modal*/}
      <button onClick={openModal()} type="button" className="btn btn-info">
        Mostra modal
      </button>

      {/* modal */}
      <Modal modalContent={state.modalContent} modalState={state.isOpenModal} closeModal={closeModal()} />
    </div>
  );
};

export default Index;

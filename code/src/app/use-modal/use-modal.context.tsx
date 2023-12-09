import React, { createContext, Dispatch, useReducer, ReactNode } from 'react';

export enum Actions {
  Edit = 'EDIT',
  Inspiration = 'INSPIRATION',
  AddResources = 'ADD_RESOURCES',
  AddMoodboards = 'ADD_MOODBOARDS',
  Developments = 'DEVELOPMENTS',
  Reset = 'RESET',
}

enum ModalType {
  Edit,
  Inspiration,
  AddResources,
  AddMoodboards,
  Developments,
}

interface ModalState {
  modal?: ModalType;
}

interface ModalContextProps {
  isEditModalOpen: boolean;
  showEditModal: () => void;
  resetModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

const reducer = (state: ModalState, action: Actions): ModalState => {
  switch (action) {
    case Actions.Edit:
      return { ...state, modal: ModalType.Edit };
    case Actions.Inspiration:
      return { ...state, modal: ModalType.Inspiration };
    case Actions.AddResources:
      return { ...state, modal: ModalType.AddResources };
    case Actions.AddMoodboards:
      return { ...state, modal: ModalType.AddMoodboards };
    case Actions.Developments:
      return { ...state, modal: ModalType.Developments };
    case Actions.Reset:
      return { ...state, modal: undefined };
    default:
      return state;
  }
};

interface ModalProviderProps {
  children: ReactNode;
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});
  const { modal } = state;

  const isEditModalOpen = modal === ModalType.Edit;

  const showEditModal = () => {
    dispatch(Actions.Edit);
  };

  const resetModal = () => {
    dispatch(Actions.Reset);
  };

  const provider = {
    isEditModalOpen,
    showEditModal,
    resetModal,
  };

  return (
    <ModalContext.Provider value={provider}>{children}</ModalContext.Provider>
  );
};

// Create a custom hook to use the context
const useModalContext = () => {
  const context = React.useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within an ModalProvider');
  }
  return context;
};

export { ModalProvider, useModalContext };

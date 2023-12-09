import React, { createContext, useReducer, ReactNode } from 'react';

enum Actions {
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

type Modal = {
  type?: ModalType;
  views?: ModalType[];
};

interface ModalState {
  modal?: ModalType;
}

interface ModalContextProps {
  isEditOpen: boolean;
  isInspirationOpen: boolean;
  isAddResourcesOpen: boolean;
  isAddMoodboardsOpen: boolean;
  isDevelopmentsOpen: boolean;
  showEdit: () => void;
  showInspiration: () => void;
  showAddResources: () => void;
  showAddMoodboards: () => void;
  showDevelopments: () => void;
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

  const isEditOpen = modal === ModalType.Edit;

  const showEdit = () => {
    dispatch(Actions.Edit);
  };

  const isInspirationOpen = modal === ModalType.Inspiration;

  const showInspiration = () => {
    dispatch(Actions.Inspiration);
  };

  const isAddResourcesOpen = modal === ModalType.AddResources;

  const showAddResources = () => {
    dispatch(Actions.AddResources);
  };

  const isAddMoodboardsOpen = modal === ModalType.AddMoodboards;

  const showAddMoodboards = () => {
    dispatch(Actions.AddMoodboards);
  };

  const isDevelopmentsOpen = modal === ModalType.Developments;

  const showDevelopments = () => {
    dispatch(Actions.Developments);
  };

  const resetModal = () => {
    dispatch(Actions.Reset);
  };

  const provider = {
    isEditOpen,
    isInspirationOpen,
    isAddResourcesOpen,
    isAddMoodboardsOpen,
    isDevelopmentsOpen,
    showEdit,
    showInspiration,
    showAddResources,
    showAddMoodboards,
    showDevelopments,
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

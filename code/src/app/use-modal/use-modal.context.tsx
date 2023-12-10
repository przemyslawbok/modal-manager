import React, { createContext, useReducer, ReactNode } from 'react';
import { ModalParams, ModalType, ModalVariant } from './data';
import { getParamsObject } from './utils/get-params-object';

interface ModalState {
  modal: ModalParams;
}

interface ModalContextProps {
  modalVariant?: ModalVariant;
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

const reducer = (state: ModalState, params: ModalParams): ModalState => {
  return { ...state, modal: { ...params } };
};

interface ModalProviderProps {
  config: ModalParams[];
  children: ReactNode;
}

const ModalProvider: React.FC<ModalProviderProps> = ({ config, children }) => {
  const [state, dispatch] = useReducer(reducer, {
    modal: {},
  });
  const { type, variant } = state.modal;

  const isEditOpen = type === ModalType.Edit;

  const showEdit = () => {
    dispatch(getParamsObject(ModalType.Edit, config));
  };

  const isInspirationOpen = type === ModalType.Inspiration;

  const showInspiration = () => {
    dispatch(getParamsObject(ModalType.Inspiration, config));
  };

  const isAddResourcesOpen = type === ModalType.AddResources;

  const showAddResources = () => {
    dispatch(getParamsObject(ModalType.AddResources, config));
  };

  const isAddMoodboardsOpen = type === ModalType.AddMoodboards;

  const showAddMoodboards = () => {
    dispatch(getParamsObject(ModalType.AddMoodboards, config));
  };

  const isDevelopmentsOpen = type === ModalType.Developments;

  const showDevelopments = () => {
    dispatch(getParamsObject(ModalType.Developments, config));
  };

  const resetModal = () => {
    dispatch({});
  };

  const provider = {
    modalVariant: variant,
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

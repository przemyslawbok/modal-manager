import React, { createContext, useReducer, ReactNode } from 'react';
import { getParamsObject } from './utils/get-params-object';
import { InspirationView, ModalType, ModalVariant } from '@/data/enums';
import { Modal, View } from '@/data/modal';
import { reducer } from './utils/reducer';

interface ModalContextProps {
  title?: string;
  modalVariant?: ModalVariant;
  modalViews?: View[];
  currentView?: string;
  isEditOpen: boolean;
  isInspirationOpen: boolean;
  isDevelopmentsOpen: boolean;
  showEdit: () => void;
  showInspiration: () => void;
  showDevelopments: () => void;
  resetModal: () => void;
  showAddResources: () => void;
  showAddMoodboards: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

interface ModalProviderProps {
  configs: Modal[];
  children: ReactNode;
}

const ModalProvider: React.FC<ModalProviderProps> = ({ configs, children }) => {
  const [state, dispatch] = useReducer(reducer, {
    modal: {},
  });
  const { title, type, variant, currentView, views } = state.modal;

  const isEditOpen = type === ModalType.Edit;

  const showEdit = () => {
    dispatch(getParamsObject(ModalType.Edit, configs));
  };

  const isInspirationOpen = type === ModalType.Inspiration;

  const showInspiration = () => {
    dispatch(
      getParamsObject(
        ModalType.Inspiration,
        configs,
        InspirationView.Inspiration
      )
    );
  };

  const isDevelopmentsOpen = type === ModalType.Developments;

  const showDevelopments = () => {
    dispatch(getParamsObject(ModalType.Developments, configs));
  };

  const showAddResources = () => {
    dispatch(
      getParamsObject(
        ModalType.Inspiration,
        configs,
        InspirationView.AddResources
      )
    );
  };

  const showAddMoodboards = () => {
    dispatch(
      getParamsObject(
        ModalType.Inspiration,
        configs,
        InspirationView.AddMoodboards
      )
    );
  };

  const getCurrentView = () => {
    //TODO: add error handling when set parameters are not in config
    const config = configs.find((config) => config.type === type);
    const view = config?.views?.find((view) => view.view === currentView);

    return view?.view;
  };

  const resetModal = () => {
    dispatch({});
  };

  const provider = {
    title,
    modalVariant: variant,
    modalViews: views,
    currentView: getCurrentView(),
    isEditOpen,
    isInspirationOpen,
    isDevelopmentsOpen,
    showEdit,
    showInspiration,
    showDevelopments,
    resetModal,
    showAddResources,
    showAddMoodboards,
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

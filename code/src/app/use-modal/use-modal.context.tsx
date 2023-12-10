import React, { createContext, useReducer, ReactNode } from 'react';
import {
  InspirationViews,
  ModalParams,
  ModalType,
  ModalVariant,
  ViewParams,
} from './data';
import { getParamsObject } from './utils/get-params-object';

interface ModalState {
  modal: ModalParams;
}

interface ModalContextProps {
  title?: string;
  modalVariant?: ModalVariant;
  modalViews?: ViewParams[];
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

const reducer = (state: ModalState, params: ModalParams): ModalState => {
  return { ...state, modal: { ...params } };
};

interface ModalProviderProps {
  configs: ModalParams[];
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
        InspirationViews.Inspiration
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
        InspirationViews.AddResources
      )
    );
  };

  const showAddMoodboards = () => {
    dispatch(
      getParamsObject(
        ModalType.Inspiration,
        configs,
        InspirationViews.AddMoodboards
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

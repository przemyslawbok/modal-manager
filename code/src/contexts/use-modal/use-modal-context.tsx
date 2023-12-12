import React, {
  createContext,
  useReducer,
  ReactNode,
  createElement,
  Fragment,
} from 'react';
import { getParamsObject } from './utils/get-params-object';
import { ViewForInspiration, ModalType, ModalVariant } from '@/data/enums';
import { Modal, ModalConfig } from '@/data/modal';
import { reducer } from './utils/reducer';
import { User } from '@/data/user';

interface ModalContextProps {
  title?: string;
  modalVariant?: ModalVariant;
  currentView?: string;
  isEditOpen: boolean;
  isInspirationOpen: boolean;
  isDevelopmentsOpen: boolean;
  isBackButtonVisible: boolean;
  showEdit: () => void;
  showInspiration: () => void;
  showDevelopments: () => void;
  showAddResources: () => void;
  showAddMoodboards: () => void;
  resetModal: () => void;
  showInitialView: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

interface ModalProviderProps {
  user?: User;
  configs: Modal[];
  children: ReactNode;
}

const ModalProvider: React.FC<ModalProviderProps> = ({
  user,
  configs,
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    modal: {},
  });

  const { title, type, variant, currentView, views } = state.modal;

  const isEditOpen = type === ModalType.Edit;
  const isDevelopmentsOpen = type === ModalType.Developments;
  const isInspirationOpen = type === ModalType.Inspiration;

  const showEdit = () => {
    dispatch(getParamsObject(ModalType.Edit, configs, user));
  };

  const showDevelopments = () => {
    dispatch(getParamsObject(ModalType.Developments, configs, user));
  };

  const showInspiration = () => {
    dispatch(
      getParamsObject(
        ModalType.Inspiration,
        configs,
        user,
        ViewForInspiration.Inspiration
      )
    );
  };

  const showAddResources = () => {
    dispatch(
      getParamsObject(
        ModalType.Inspiration,
        configs,
        user,
        ViewForInspiration.AddResources
      )
    );
  };

  const showAddMoodboards = () => {
    dispatch(
      getParamsObject(
        ModalType.Inspiration,
        configs,
        user,
        ViewForInspiration.AddMoodboards
      )
    );
  };

  const showInitialView = () => {
    const initialView = views ? views[0].view : undefined;
    if (type && initialView)
      dispatch(getParamsObject(type, configs, user, initialView));
  };

  const resetModal = () => {
    dispatch({});
  };

  const getCurrentView = () => {
    //TODO: add error handling when set parameters are not in config
    const config = configs.find((config) => config.type === type);
    const view = config?.views?.find((view) => view.view === currentView);

    return view?.view;
  };

  const getModalsFromConfigs = () => {
    return configs.map(({ modalComponent }: ModalConfig, index) => (
      <Fragment key={index}>
        {modalComponent && createElement(modalComponent)}
      </Fragment>
    ));
  };

  const isInitialViewCurrent = () => {
    const initialView = views ? views[0].view : undefined;
    return initialView !== currentView;
  };

  const provider = {
    title,
    modalVariant: variant,
    currentView: getCurrentView(),
    isEditOpen,
    isInspirationOpen,
    isDevelopmentsOpen,
    isBackButtonVisible: isInitialViewCurrent(),
    showEdit,
    showInspiration,
    showDevelopments,
    showAddResources,
    showAddMoodboards,
    resetModal,
    showInitialView,
  };

  return (
    <ModalContext.Provider value={provider}>
      {children}
      {getModalsFromConfigs()}
    </ModalContext.Provider>
  );
};

const useModalContext = () => {
  const context = React.useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within an ModalProvider');
  }
  return context;
};

export { ModalProvider, useModalContext };

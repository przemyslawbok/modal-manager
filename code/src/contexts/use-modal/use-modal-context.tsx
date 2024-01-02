import React, {
  createContext,
  useReducer,
  ReactNode,
  createElement,
  Fragment,
} from 'react';
import { getParamsObject } from './utils/get-params-object';
import { ContentType, ModalVariant } from '@/data/enums';
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
    current: {},
  });

  const { title, type, variant, currentView, views } = state.current;

  const isEditOpen = type === ContentType.Edit;
  const isDevelopmentsOpen = type === ContentType.Developments;
  const isInspirationOpen = type === ContentType.Inspiration;

  const showEdit = () => {
    dispatch(getParamsObject(ContentType.Edit, configs, user));
  };

  const showDevelopments = () => {
    dispatch(getParamsObject(ContentType.Developments, configs, user));
  };

  const showInspiration = () => {
    dispatch(
      getParamsObject(
        ContentType.Inspiration,
        configs,
        user,
        ContentType.Inspiration
      )
    );
  };

  const showAddResources = () => {
    dispatch(
      getParamsObject(
        ContentType.Inspiration,
        configs,
        user,
        ContentType.ResourcesView
      )
    );
  };

  const showAddMoodboards = () => {
    dispatch(
      getParamsObject(
        ContentType.Inspiration,
        configs,
        user,
        ContentType.MoodboardsView
      )
    );
  };

  const showInitialView = () => {
    const initialView = views ? views[0] : undefined;
    if (type && initialView)
      dispatch(getParamsObject(type, configs, user, initialView));
  };

  const resetModal = () => {
    dispatch({});
  };

  const getCurrentView = () => {
    //TODO: add error handling when set parameters are not in config
    const config = configs.find((config) => config.type === type);
    const view = config?.views?.find((view) => view === currentView);

    return view;
  };

  const getModalsFromConfigs = () => {
    return configs.map(({ modalComponent }: ModalConfig, index) => (
      <Fragment key={index}>
        {modalComponent && createElement(modalComponent)}
      </Fragment>
    ));
  };

  const isInitialViewCurrent = () => {
    const initialView = views ? views[0] : undefined;
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

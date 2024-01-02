import React, {
  createContext,
  ReactNode,
  createElement,
  Fragment,
} from 'react';
import { getParamsObject } from './utils/get-params-object';
import { ContentType, ModalVariant } from '@/data/enums';
import { User } from '@/data/user';
import { CustomContentConfig, CustomPageConfig } from '@/data/types';

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
  config: CustomPageConfig;
  children: ReactNode;
}

const ModalProvider: React.FC<ModalProviderProps> = ({
  user,
  config,
  children,
}) => {
  // const { title, type, variant, currentView, views } = state.current;

  // const isEditOpen = type === ContentType.Edit;
  // const isDevelopmentsOpen = type === ContentType.Developments;
  // const isInspirationOpen = type === ContentType.Inspiration;

  // const showEdit = () => {
  //   dispatch(getParamsObject(ContentType.Edit, config, user));
  // };

  // const showDevelopments = () => {
  //   dispatch(getParamsObject(ContentType.Developments, config, user));
  // };

  // const showInspiration = () => {
  //   dispatch(
  //     getParamsObject(
  //       ContentType.Inspiration,
  //       config,
  //       user,
  //       ContentType.Inspiration
  //     )
  //   );
  // };

  // const showAddResources = () => {
  //   dispatch(
  //     getParamsObject(
  //       ContentType.Inspiration,
  //       config,
  //       user,
  //       ContentType.ResourcesView
  //     )
  //   );
  // };

  // const showAddMoodboards = () => {
  //   dispatch(
  //     getParamsObject(
  //       ContentType.Inspiration,
  //       config,
  //       user,
  //       ContentType.MoodboardsView
  //     )
  //   );
  // };

  // const showInitialView = () => {
  //   const initialView = views ? views[0] : undefined;
  //   if (type && initialView)
  //     dispatch(getParamsObject(type, config, user, initialView));
  // };

  // const resetModal = () => {
  //   dispatch({});
  // };

  // const getCurrentView = () => {
  //   //TODO: add error handling when set parameters are not in config
  //   const foundConfig = config.find((cfg) => cfg.type === type);
  //   const view = foundConfig?.views?.find((view) => view === currentView);

  //   return view;
  // };

  const getModalsFromConfigs = () => {
    return config.contents.map(({ content }: CustomContentConfig, index) => (
      <Fragment key={index}>{content && createElement(content)}</Fragment>
    ));
  };

  // const isInitialViewCurrent = () => {
  //   const initialView = views ? views[0] : undefined;
  //   return initialView !== currentView;
  //};

  const provider = {
    // title,
    // modalVariant: variant,
    // currentView: getCurrentView(),
    // isEditOpen,
    // isInspirationOpen,
    // isDevelopmentsOpen,
    // isBackButtonVisible: isInitialViewCurrent(),
    // showEdit,
    // showInspiration,
    // showDevelopments,
    // showAddResources,
    // showAddMoodboards,
    // resetModal,
    // showInitialView,
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

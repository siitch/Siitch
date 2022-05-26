// Modified https://github.com/Qeepsake/react-navigation-overlay
import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { InteractionManager } from "react-native";
import { Overlay } from "./overlay";
import Modal from "react-native-modal";

export const ReactNavigationOverlay = ({ style, animationIn="slideInUp", animationOut="slideOutDown", onModalHide, ...props }) => {
  const thisRef = React.createRef();
  const ComponentJsxRef = useRef(null);
  const [componentPropsRef, setComponentPropsRef] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  /** Effects */
  useEffect(() => {
    if(currentSurpriseModal !== null) {
      global.occupied = true
    } else {
      Overlay.register(thisRef)
    }
    return () => {
      global.occupied = false
    }
  }, []);
  useImperativeHandle(thisRef, () => ({
    show: (component, props = {}) => {
      InteractionManager.runAfterInteractions(() => {
        ComponentJsxRef.current = component;
        setComponentPropsRef(props);
        setIsVisible(true)
      });
    },
    close: () => {
      setIsVisible(false);
    },
  }));


  if(ComponentJsxRef.current) {
    return (
      <Modal
        isVisible={isVisible}
        style={[{ flex: 1, margin: 0 }, style]}
        animationIn={animationIn}
        animationOut={animationOut}
        onModalHide={() => {
          ComponentJsxRef.current = null;
          setComponentPropsRef({});
          if(onModalHide) onModalHide();
        }}
        hasBackdrop={false}
        {...props}
      >
        <ComponentJsxRef.current {...componentPropsRef} />
      </Modal>
    );
  }

  return null;
};

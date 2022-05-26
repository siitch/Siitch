// Modified https://github.com/Qeepsake/react-navigation-overlay
let OverlayRef = null;

export const Overlay = {
  register: (ref) => {
    OverlayRef = ref.current;
    global.currentSurpriseModal = ref.current
  },
  show: (component, props) => {
    OverlayRef.show(component, props);
  },
  close: () => {
    OverlayRef.close();
  }
};

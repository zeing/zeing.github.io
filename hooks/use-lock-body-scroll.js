import * as React from "react"


// Hook
const useLockBodyScroll = (active) => {
  React.useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (active) {
      // Get original body overflow
      // Prevent scrolling on mount
      document.body.style.overflow = 'hidden';
    }
    // Re-enable scrolling when component unmounts
    return () => document.body.style.overflow = originalStyle;

  }, [active]); // Empty array ensures effect is only run on mount and unmount
}

export default useLockBodyScroll
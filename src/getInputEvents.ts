type MutableRefObject<T> = {
  current: T;
};

/**
 * Get events from an input element.
 * @param ref Input element reference
 */
const getInputEvents = (ref: MutableRefObject<HTMLInputElement | null>) => {
  const element = ref.current;
  return {
    select: () => {
      if (!element) return false;
      setTimeout(() => {
        element.select();
      }, 100);
      return true;
    },
    focus: () => {
      if (!element) return false;

      element.focus();
      return true;
    },
    setValue: (value: string) => {
      if (!element) return false;

      const lastValue = element.value;
      element.value = value;
      const event = new Event('input', { bubbles: true });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const tracker = (element as any)._valueTracker;
      if (tracker) {
        tracker.setValue(lastValue);
      }
      element.dispatchEvent(event);
      return true;
    },
  };
};

export default getInputEvents;

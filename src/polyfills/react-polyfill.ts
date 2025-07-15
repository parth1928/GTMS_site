// React 18 polyfills for older browsers
if (!globalThis.Event || !globalThis.EventTarget) {
  // Polyfill for browsers without Event or EventTarget
  class EventTarget {
    listeners = {};
    addEventListener(type: string, callback: Function) {
      if (!(type in this.listeners)) {
        this.listeners[type] = [];
      }
      this.listeners[type].push(callback);
    }
    removeEventListener(type: string, callback: Function) {
      if (!(type in this.listeners)) return;
      const stack = this.listeners[type];
      for (let i = 0, l = stack.length; i < l; i++) {
        if (stack[i] === callback) {
          stack.splice(i, 1);
          return;
        }
      }
    }
    dispatchEvent(event: Event) {
      if (!(event.type in this.listeners)) return true;
      const stack = [...this.listeners[event.type]];
      for (let i = 0, l = stack.length; i < l; i++) {
        stack[i].call(this, event);
      }
      return !event.defaultPrevented;
    }
  }

  // @ts-ignore
  globalThis.EventTarget = EventTarget;
}

// Ensure Promise is available
if (typeof Promise === 'undefined') {
  throw new Error('Browser does not support Promise. Please use a polyfill for Promise.');
}

// Ensure requestAnimationFrame is available
if (typeof requestAnimationFrame === 'undefined') {
  let lastTime = 0;
  (window as any).requestAnimationFrame = function(callback: FrameRequestCallback): number {
    const currTime = new Date().getTime();
    const timeToCall = Math.max(0, 16 - (currTime - lastTime));
    const id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
  
  (window as any).cancelAnimationFrame = function(id: number) {
    clearTimeout(id);
  };
}

// WeakRef polyfill if needed
if (typeof WeakRef === 'undefined') {
  // @ts-ignore
  globalThis.WeakRef = class WeakRef<T extends object> {
    private ref: T;
    constructor(target: T) {
      this.ref = target;
    }
    deref(): T | undefined {
      return this.ref;
    }
  };
}

export {};

// Name: Scroll Intensity
// ID: mousescroll
// Description: Get the magnitude of the scroll wheel.
// By: AKAKingMrReeis <https://scratch.mit.edu/users/AKAKingMrReeis/>
// Original:
// License: MPL-2.0
(function(Scratch) {
  'use strict';

  class MouseScrollExtension {
    constructor() {
      this.scrollDelta = 0;
      this._resetTimeout = null;

      // Use document instead of window for better compatibility in iframes
      document.addEventListener('wheel', (e) => {
        // e.deltaY: Positive is down, Negative is up
        this.scrollDelta = e.deltaY;

        // Clear existing timeout to ensure the value stays while scrolling
        clearTimeout(this._resetTimeout);

        // Reset to 0 after 100ms of inactivity
        this._resetTimeout = setTimeout(() => {
          this.scrollDelta = 0;
        }, 100);
      }, { passive: true });
    }

    getInfo() {
      return {
        id: 'mousescroll',
        name: 'Mouse Scroll',
        color1: '#5cb1d6',
        blocks: [
          {
            opcode: 'getScrollIntensity',
            blockType: Scratch.BlockType.REPORTER,
            text: 'scroll intensity'
          }
        ]
      };
    }

    getScrollIntensity() {
      return this.scrollDelta;
    }
  }

  Scratch.extensions.register(new MouseScrollExtension());
})(Scratch);

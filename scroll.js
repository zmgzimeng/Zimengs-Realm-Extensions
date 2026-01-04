class MouseScrollExtension {
  constructor() {
    this.scrollDelta = 0;

    // Listen for the wheel event on the entire window
    window.addEventListener('wheel', (e) => {
      // e.deltaY is positive when scrolling down, negative when scrolling up
      this.scrollDelta = e.deltaY;
      
      // Optional: Reset the value after a short delay so it doesn't stay stuck
      // Remove the code below if you want the "last scroll" to persist.
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.scrollDelta = 0;
      }, 50); 
    }, { passive: true });
  }

  getInfo() {
    return {
      id: 'mousescroll',
      name: 'Mouse Scroll',
      blocks: [
        {
          opcode: 'getScrollIntensity',
          blockType: Scratch.BlockType.REPORTER,
          text: 'scroll intensity',
        }
      ]
    };
  }

  getScrollIntensity() {
    return this.scrollDelta;
  }
}

Scratch.extensions.register(new MouseScrollExtension());

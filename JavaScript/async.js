// the Browser APIs

// When the thread ran into a browser API methods
// it pushed it into the Event stack
// It will not push it to global execution context until it it is empty.

// Callback queue

// after an browser api is finished it is pushed to callback queue until call stack is empty.

// Event loop
// It keeps checking call stack if it is is empty. if it is, pop from callback queue into the call stack.

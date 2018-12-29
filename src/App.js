import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'

import { theme } from "./theme";
import { Message  } from './container'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Message />
      </ThemeProvider>
    );
  }
}

export default App;

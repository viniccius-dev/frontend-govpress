import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

import { AppRoutes } from "./routes";

import AppTheme from './styles/shared-theme-material-ui/AppTheme';
import { chartsCustomizations } from './styles/shared-theme-material-ui/customizations/charts';
import { dataGridCustomizations } from './styles/shared-theme-material-ui/customizations/dataGridCustomizations';
import { treeViewCustomizations } from './styles/shared-theme-material-ui/customizations/treeView';
import { muiTheme } from "./styles/materialTheme";

const xThemeComponents = {
    ...chartsCustomizations,
    ...dataGridCustomizations,
    ...treeViewCustomizations,
    ...muiTheme
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppTheme themeComponents={xThemeComponents}>
        <GlobalStyles />
        <AppRoutes />
      </AppTheme>
    </ThemeProvider>
  </React.StrictMode>
)

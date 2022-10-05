import 'styled-components';

declare module 'styled-components' {
  export type DefaultThemeType = {

    backgroundColor: {
      main: string;
      secondary: string;
      footer: string;
    };

    btnColor: {
      main: string;
      secondary: string;
    };

    textColor: {
      main: string;
      secondary: string;
      btnMain: string;
    };
  };
}

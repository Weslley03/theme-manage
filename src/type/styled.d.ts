import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme{
        name: string;
        colors: {
            primary: string;
            secundary: string;
            ligthGray: string;
            backgroundColor: string;
            textColor: string;
        }
    }
}
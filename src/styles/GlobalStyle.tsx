'use client';

import { Global, css } from '@emotion/react';

export const GlobalStyle = () => (
  <Global
    styles={css`
      /* ===== Fonts ===== */
      @font-face {
        font-family: 'Spoqa Han Sans Neo';
        src: url('/fonts/SpoqaHanSansNeo_TTF_subset/SpoqaHanSansNeo-Thin.woff')
          format('woff');
        font-weight: 100;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Spoqa Han Sans Neo';
        src: url('/fonts/SpoqaHanSansNeo_TTF_subset/SpoqaHanSansNeo-Light.woff')
          format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Spoqa Han Sans Neo';
        src: url('/fonts/SpoqaHanSansNeo_TTF_subset/SpoqaHanSansNeo-Regular.woff')
          format('woff');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Spoqa Han Sans Neo';
        src: url('/fonts/SpoqaHanSansNeo_TTF_subset/SpoqaHanSansNeo-Medium.woff')
          format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Spoqa Han Sans Neo';
        src: url('/fonts/SpoqaHanSansNeo_TTF_subset/SpoqaHanSansNeo-Bold.woff')
          format('woff');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }

      *,
      *::before,
      *::after {
        margin: 0;
        box-sizing: border-box;
        padding: 0;
      }

      html,
      body {
        width: 100%;
        height: 100%;
      }

      body {
        font-family: 'Spoqa Han Sans Neo';
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      img,
      picture,
      video,
      canvas,
      svg {
        display: block;
        max-width: 100%;
      }

      input,
      button,
      textarea,
      select {
        font: inherit;
      }

      button {
        background: none;
        border: none;
        cursor: pointer;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      ul,
      ol {
        list-style: none;
      }
    `}
  />
);

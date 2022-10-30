import React from 'react';
import Document from 'next/document';
import { jss, SheetsRegistry, JssProvider, createGenerateId } from 'react-jss';
import globalPlugin from 'jss-global';
import { CookiesProvider } from 'react-cookie';

export default class JssDocument extends Document {
  static async getInitialProps(ctx) {
    const registry = new SheetsRegistry();
    const generateId = createGenerateId();
    jss.use(globalPlugin());
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({
      enhanceApp: (App) => (props) => (
        <JssProvider
          registry={registry}
          generateId={generateId}
        >
          <CookiesProvider>
            <App {...props} />
          </CookiesProvider>
        </JssProvider>
      ),
    });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <React.Fragment>
          {initialProps.styles}
          <style id="server-side-styles">{registry.toString()}</style>
        </React.Fragment>
      ),
    };
  }
}

import React, { Fragment } from 'react';
import escapeHTML from 'escape-html';
import { Text } from 'slate';
import { format as formatSlug } from '../../utilities/formatSlug'

const serialize = (children: any, codeAsPre: boolean = false, tagResultSpanWithId: boolean = false): React.ReactElement[] => children.map((node, i) => {

  if (node.text) {
    
    let text = tagResultSpanWithId ?
      <span id={formatSlug(node.text)} dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
      : <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />;

    

    if (node.bold) {
      text = (
        <strong key={i}>
          {text}
        </strong>
      );
    }

    if (node.code) {
      if (codeAsPre) {
        text = (
          <pre key={i}>
            {text}
          </pre>
        )
      } else {
        text = (
          <code key={i}>
            {text}
          </code>
        );
      }
    }

    if (node.italic) {
      text = (
        <em key={i}>
          {text}
        </em>
      );
    }

    if (node.underline) {
      text = (
        <span
          style={{ textDecoration: 'underline' }}
          key={i}
        >
          {text}
        </span>
      );
    }

    if (node.strikethrough) {
      text = (
        <span
          style={{ textDecoration: 'line-through' }}
          key={i}
        >
          { text}
        </span>
      );
    }

    return (
      <Fragment key={i}>
        {text}
      </Fragment>
    );
  }

  if (!node) {
    return null;
  }

  switch (node.type) {
    case 'h1':
      return (
        <h1 key={i}>
          {serialize(node.children, codeAsPre, true)}
        </h1>
      );
    case 'h2':
      return (
        <h2 key={i}>
          {serialize(node.children, codeAsPre, true)}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={i}>
          {serialize(node.children, codeAsPre, true)}
        </h3>
      );
    case 'h4':
      return (
        <h4 key={i}>
          {serialize(node.children, codeAsPre, true)}
        </h4>
      );
    case 'h5':
      return (
        <h5 key={i}>
          {serialize(node.children, codeAsPre, true)}
        </h5>
      );
    case 'h6':
      return (
        <h6 key={i}>
          {serialize(node.children, codeAsPre, true)}
        </h6>
      );
    case 'quote':
      return (
        <blockquote key={i}>
          {serialize(node.children, codeAsPre)}
        </blockquote>
      );
    case 'ul':
      return (
        <ul key={i}>
          {serialize(node.children, codeAsPre)}
        </ul>
      );
    case 'ol':
      return (
        <ol key={i}>
          {serialize(node.children, codeAsPre)}
        </ol>
      );
    case 'li':
      return (
        <li key={i}>
          {serialize(node.children, codeAsPre)}
        </li>
      );
    case 'link':
      return (
        <a
          href={escapeHTML(node.url)}
          key={i}
        >
          {serialize(node.children, codeAsPre)}
        </a>
      );

    default:
      return (
        <p key={i}>
          {serialize(node.children, codeAsPre)}
        </p>
      );
  }
});

export default serialize;

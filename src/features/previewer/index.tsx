import React from 'react';
import Parser from 'html-react-parser';
import { parseMarkdown } from '../../../lib/parse-markdown';
import { useAppSelector } from '../../app/hooks';
import { selectMarkdown } from '../markdown/markdownSlice';
import Block from '../../components/block';

const Preview = () => {
  const markdown = useAppSelector(selectMarkdown);
  const parsedMarkdown: string = parseMarkdown(markdown);

  return (
    <Block title="Preview">
      <div className="p-4" id="preview">
        {Parser(parsedMarkdown)}
      </div>
    </Block>
  );
};

export default Preview;

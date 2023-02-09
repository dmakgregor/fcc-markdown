import React, { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectMarkdown, setMarkdown } from '../markdownSlice';
import Block from '../../../components/block';

const Editor = () => {
  const dispatch = useAppDispatch();
  const markdown = useAppSelector(selectMarkdown);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target?.value;
    dispatch(setMarkdown(value));
  };

  return (
    <Block customClasses="w-11/12" title="Editor">
      <textarea rows={20} className="w-full bg-transparent" id="editor" onChange={onChange}>
        {markdown}
      </textarea>
    </Block>
  );
};

export default Editor;

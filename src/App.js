import './App.css';
import { useState } from 'react';
import RichTextEditor from 'react-rte';
import ImageInput from './ImageInput';
import cyberpunkLogo from './media/Cyberpunk2077-black.png';
import cdprLogo from './media/CDProjektRed.svg';

const toolbarConfig = {
  // Optionally specify the groups to display (displayed in the order listed).
  display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
  INLINE_STYLE_BUTTONS: [
    { label: 'Bold', style: 'BOLD' },
    { label: 'Italic', style: 'ITALIC' },
    { label: 'Underline', style: 'UNDERLINE' }
  ],
  BLOCK_TYPE_DROPDOWN: [
    { label: 'Normal', style: 'unstyled' },
    { label: 'Heading Large', style: 'header-one' },
    { label: 'Heading Medium', style: 'header-two' },
    { label: 'Heading Small', style: 'header-three' }
  ]
};

function App() {
  const [text, setText] = useState(RichTextEditor.createEmptyValue());
  return (
    <main className="App">
      <ImageInput
        default={cyberpunkLogo}
        style={{ height:"13.5%", alignSelf: "flex-start" }}
      />
      <RichTextEditor
        value={text}
        onChange={setText}
        autoFocus={true}
        placeholder="Write your very own delay message here"
        toolbarConfig={toolbarConfig}
        rootStyle={{
          fontFamily: 'inherit',
          background: 'none',
          border: 'none',
          maxHeight: '75%'
        }}
        toolbarClassName="TextToolbar"
        toolbarStyle={{ border: 'none' }}
        editorClassName="TextEditor"
        editorStyle={{ fontSize: '1.85em' }}
        toolbarOnBottom={true}
      />
      <ImageInput
        default={cdprLogo}
        style={{ height: "11.5%", alignSelf: "flex-end" }}
      />
    </main>
  );
}

export default App;

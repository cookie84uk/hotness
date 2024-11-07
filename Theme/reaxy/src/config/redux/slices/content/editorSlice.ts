// src/features/editorSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EditorState {
  htmlContent: string;
}

const initialState: EditorState = {
  htmlContent: '',
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setHtmlContent: (state, action: PayloadAction<string>) => {
      state.htmlContent = action.payload;
    },
    formatText: (state, action: PayloadAction<string>) => {
      state
      const selection = window.getSelection();
      const range = selection?.getRangeAt(0);

      if (range) {
        const span = document.createElement('span');
        span.classList.add(action.payload);
        range.surroundContents(span);
      }
    },
  },
});

export const { setHtmlContent, formatText } = editorSlice.actions;

export default editorSlice.reducer;

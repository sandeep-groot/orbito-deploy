import React from "react"
import {
  Editor,
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js"
import draftToHtml from "draftjs-to-html"
import "draft-js/dist/Draft.css"
import {
  wrapper_class,
  editor_class,
  toolbar_class,
  border,
} from "./index.module.css"

export default function AppEditor({ editorState, setEditorState }) {
  // React.useEffect(() => {
  //   const blocksFromHTML = convertFromHTML(`${draftInfo}`)
  //   const state = ContentState.createFromBlockArray(
  //     blocksFromHTML.contentBlocks,
  //     blocksFromHTML.entityMap
  //   )

  //   const updatedState = EditorState.createWithContent(state)
  //   setEditorState(updatedState)
  // }, [draftInfo])

  // React.useEffect(() => {
  //   const rawContentState = convertToRaw(editorState.getCurrentContent())
  //   const markup = draftToHtml(rawContentState)
  //   setDraftInfo(markup)
  //   // console.log("editorState raw :>> ", editorState)
  // }, [editorState])

  return (
    <div className={`${border}`}>
      <Editor
        // wrapperClassName={`${wrapper_class}`}
        // editorClassName={`${editor_class}`}
        // toolbarClassName={`${toolbar_class}`}
        editorState={editorState}
        onChange={setEditorState}
      />
    </div>
  )
}

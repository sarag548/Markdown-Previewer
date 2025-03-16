import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom/client";
import {marked} from "https://esm.sh/marked";

class MarkdownPreviewer extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      input: defaultText,
      preview: ''
    }
    
    this.handleChange = this.handleChange.bind(this);
 }
  
  handleChange(event){
    this.setState({
      input: event.target.value,
      preview: marked.parse(event.target.value)
    });
  }
  componentDidMount(){
this.setState({
  preview: marked.parse(this.state.input)
})
const editorWrapper = document.getElementById("editorWrapper");
const previewWrapper = document.getElementById("previewWrapper");
const editorText = document.getElementById("editor");
const previewText = document.getElementById("preview");
const editorArrow = document.getElementById("editorArrow");
const previewArrow = document.getElementById("previewArrow")
let isEditorMaximized = false;
let isPreviewMaximized = false;

editorArrow.addEventListener("click", function() {
  if (isEditorMaximized) {
    editorText.classList.remove("editorMaximize");
    previewWrapper.classList.remove("hide");
    editorArrow.classList.add("fa-arrows-alt");
    editorArrow.classList.remove("fa-compress");
    isEditorMaximized = false;
  } else {
    editorText.classList.add("editorMaximize");
    previewWrapper.classList.add("hide");
    editorArrow.classList.remove("fa-arrows-alt");
    editorArrow.classList.add("fa-compress");
    isEditorMaximized = true;
  }
});
       
previewArrow.addEventListener("click", function() {
  if (isPreviewMaximized) {
    previewText.classList.remove("previewMaximize");
    editorWrapper.classList.remove("hide")
    previewArrow.classList.add("fa-arrows-alt");
    previewArrow.classList.remove("fa-compress");
    isPreviewMaximized = false;
  } else {
    previewText.classList.add("previewMaximize");
    editorWrapper.classList.add("hide");
    previewArrow.classList.remove("fa-arrows-alt");
    previewArrow.classList.add("fa-compress");
    isPreviewMaximized = true;
  }
});
  }
    
  render(){
    return(
       <div>
        <div id="editorWrapper">
          <div className="editor toolbar">
            <i className="fas fa-web-awesome"></i>
            Editor
            <i id="editorArrow" className="fa fa-arrows-alt"></i>
          </div>
          <textArea onChange={this.handleChange} value={this.state.input} id="editor"> {this.state.input}
          </textArea>
        </div>
        <div id="previewWrapper">
          <div className="preview toolbar">
            <i className="fas fa-web-awesome"></i>
            Previewer
            <i id="previewArrow" className="fa fa-arrows-alt"></i>
          </div>
          <div id="preview" dangerouslySetInnerHTML={{ __html: this.state.preview}} >
          </div>
        </div>
      </div>
    )
  }
}

const defaultText = `# This is a heading!

## Here is a sub heading 

This is a [link](https://www.google.com) to Google's Homepage

\`\`\`
// this is a function:

function square(number) {
  return number * number;
}
\`\`\`

Here is inline code \`<div></div>\`

This is a list
- Item1
* Item2 

This is **bold**

>This is a blockquote

Lastly, here is an image ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MarkdownPreviewer />);

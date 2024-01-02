"use client";
import React, { useState } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

export default function page() {
  const [markdown, setMarkdown] = useState("Deafualt Header text");

  const handleEditorChange = ({ text }) => {
    setMarkdown(text);
  };

  const mdParser = new MarkdownIt(); // Define mdParser here

  return (
    <div className="flex gap-4">
      <div className="flex-1 border border-gray-300 rounded p-4">
        <MdEditor
          value={markdown}
          style={{ height: "400px" }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={handleEditorChange}
        />
      </div>
      {/* <div className="flex-1 border border-gray-300 rounded p-4">
        <div dangerouslySetInnerHTML={{ __html: mdParser.render(markdown) }} />
      </div> */}
    </div>
  );
}

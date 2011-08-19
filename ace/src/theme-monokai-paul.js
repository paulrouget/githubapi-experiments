define("ace/theme/monokai-paul",["require","exports","module"],function(a,b,c){var d=a("pilot/dom"),e=".ace-monokai .ace_editor {\n  border: 2px solid rgb(159, 159, 159);\n}\n\n.ace-monokai .ace_editor.ace_focus {\n  border: 2px solid #327fbd;\n}\n\n.ace-monokai .ace_gutter {\n  width: 26px;\n  background: black;\n  color: #CCC;\n  overflow : hidden;\n}\n\n.ace-monokai .ace_gutter-layer {\n  width: 100%;\n  text-align: right;\n}\n\n.ace-monokai .ace_gutter-layer .ace_gutter-cell {\n  padding-right: 6px;\n}\n\n.ace-monokai .ace_print_margin {\n  width: 1px;\n  background: #e8e8e8;\n}\n\n.ace-monokai .ace_scroller {\n  background-color: #272822;\n}\n\n.ace-monokai .ace_text-layer {\n  cursor: text;\n  color: #F8F8F2;\n}\n\n.ace-monokai .ace_cursor {\n  border-left: 2px solid #F8F8F0;\n}\n\n.ace-monokai .ace_cursor.ace_overwrite {\n  border-left: 0px;\n  border-bottom: 1px solid #F8F8F0;\n}\n \n.ace-monokai .ace_marker-layer .ace_selection {\n  background: #49483E;\n}\n\n.ace-monokai .ace_marker-layer .ace_step {\n  background: rgb(198, 219, 174);\n}\n\n.ace-monokai .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid #49483E;\n}\n\n.ace-monokai .ace_marker-layer .ace_active_line {\n  background: #49483E;\n}\n\n       \n.ace-monokai .ace_invisible {\n  color: #49483E;\n}\n\n.ace-monokai .ace_keyword {\n  color:#F92672;\n}\n\n.ace-monokai .ace_keyword.ace_operator {\n  \n}\n\n.ace-monokai .ace_constant {\n  \n}\n\n.ace-monokai .ace_constant.ace_language {\n  color:#AE81FF;\n}\n\n.ace-monokai .ace_constant.ace_library {\n  \n}\n\n.ace-monokai .ace_constant.ace_numeric {\n  color:#AE81FF;\n}\n\n.ace-monokai .ace_invalid {\n  color:#F8F8F0;\nbackground-color:#F92672;\n}\n\n.ace-monokai .ace_invalid.ace_illegal {\n  \n}\n\n.ace-monokai .ace_invalid.ace_deprecated {\n  color:#F8F8F0;\nbackground-color:#AE81FF;\n}\n\n.ace-monokai .ace_support {\n  \n}\n\n.ace-monokai .ace_support.ace_function {\n  color:#66D9EF;\n}\n\n.ace-monokai .ace_function.ace_buildin {\n  \n}\n\n.ace-monokai .ace_string {\n  color:#E6DB74;\n}\n\n.ace-monokai .ace_string.ace_regexp {\n  \n}\n\n.ace-monokai .ace_comment {\n  color:#75715E;\n}\n\n.ace-monokai .ace_comment.ace_doc {\n  \n}\n\n.ace-monokai .ace_comment.ace_doc.ace_tag {\n  \n}\n\n.ace-monokai .ace_variable {\n  \n}\n\n.ace-monokai .ace_variable.ace_language {\n  \n}\n\n.ace-monokai .ace_xml_pe {\n  \n}";d.importCssString(e),b.cssClass="ace-monokai"})
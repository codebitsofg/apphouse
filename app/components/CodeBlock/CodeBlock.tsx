import { Highlight, themes } from "prism-react-renderer";
import { Container } from "./CodeBlock.styles";

interface CodeBlockProps {
  code: string;
}
const CodeBlock = ({ code }: CodeBlockProps) => {
  return (
    <Container>
      <Highlight theme={themes.jettwaveDark} code={code} language="tsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            style={{
              ...style,
              backgroundColor: "transparent",
              fontStyle: "italic",
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Container>
  );
};

export default CodeBlock;

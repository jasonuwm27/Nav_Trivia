import { useRef, useEffect } from 'react';

// Renders text that may contain $...$ LaTeX fragments using KaTeX.
// Plain text passes through unchanged; only $-wrapped segments are rendered as math.
function LatexText({ text, className }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !window.katex) return;

    // Split on $...$ groups, keeping delimiters as capture group
    const parts = text.split(/(\$[^$]+\$)/g);
    ref.current.innerHTML = '';

    parts.forEach((part) => {
      if (part.startsWith('$') && part.endsWith('$')) {
        const latex = part.slice(1, -1);
        const span = document.createElement('span');
        window.katex.render(latex, span, { throwOnError: false, displayMode: false });
        ref.current.appendChild(span);
      } else {
        ref.current.appendChild(document.createTextNode(part));
      }
    });
  }, [text]);

  return <span ref={ref} className={className}>{text}</span>;
}

export default LatexText;

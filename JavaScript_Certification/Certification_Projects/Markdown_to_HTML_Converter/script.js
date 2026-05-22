const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

const headingRegex = /^\s*(#{1,3})\s+(.+)$/gm;
const imgRegex = /!\[([^\]]+)\]\(([^)]+)\)/g;
const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
const boldRegex = /(\*\*|__)([\s\S]+?)\1/g;
const italicRegex = /(\*|_)([\s\S]+?)\1/g;

function convertMarkdown() {
  const text = markdownInput.value || "";

  let html = text;

  html = html.replace(
    headingRegex,
    (m, hashes, title) =>
      `<h${hashes.length}>${title.trim()}</h${hashes.length}>`,
  );

  const blockquoteRegex = /^\s*>\s+(.+)$/gm;
  html = html.replace(
    blockquoteRegex,
    (m, content) => `<blockquote>${content.trim()}</blockquote>`,
  );

  html = html.replace(
    imgRegex,
    (m, alt, src) => `<img alt="${alt}" src="${src}">`,
  );

  html = html.replace(
    linkRegex,
    (m, txt, url) => `<a href="${url}">${txt}</a>`,
  );

  html = html.replace(
    boldRegex,
    (m, wrapper, inner) => `<strong>${inner}</strong>`,
  );

  html = html.replace(italicRegex, (m, wrapper, inner) => `<em>${inner}</em>`);

  const lines = html.split(/\r?\n/);
  const blocks = [];
  for (let i = 0; i < lines.length; ) {
    if (!lines[i].trim()) {
      i++;
      continue;
    }
    const block = [];
    while (i < lines.length && lines[i].trim()) {
      block.push(lines[i]);
      i++;
    }
    blocks.push(block);
  }

  const singleTagRE =
    /^<([a-zA-Z][\w-]*)\b[^>]*>([\s\S]*)<\/\1>$|^<([a-zA-Z][\w-]*)\b[^>]*\/?\s*>$/;

  const out = blocks.map((block) => {
    const processed = block.map((l) => l.trim());
    if (processed.length === 1) {
      const line = processed[0];
      if (singleTagRE.test(line)) return line;
      return `<p>${line.replace(/\n/g, "<br>")}</p>`;
    }

    const allSingleTags = processed.every((l) => singleTagRE.test(l));
    if (allSingleTags) return processed.join("");
    return `<p>${processed.join("<br>")}</p>`;
  });

  html = out.join("\n");

  if (htmlOutput) htmlOutput.textContent = html;
  const sanitized =
    typeof sanitizeHTML === "function" ? sanitizeHTML(html) : html;
  if (preview) {
    preview.innerHTML = "";
    const tpl = document.createElement("template");
    tpl.innerHTML = sanitized;
    Array.from(tpl.content.childNodes).forEach((node) =>
      preview.appendChild(node),
    );
  }

  return html;
}

markdownInput.addEventListener("input", () => {
  convertMarkdown();
});

function sanitizeHTML(str) {
  const template = document.createElement("template");
  template.innerHTML = str;
  template.content.querySelectorAll("script").forEach((el) => el.remove());
  template.content.querySelectorAll("*").forEach((el) => {
    [...el.attributes].forEach((attr) => {
      if (/^on/i.test(attr.name)) el.removeAttribute(attr.name);
      if (
        (attr.name === "href" || attr.name === "src") &&
        attr.value &&
        attr.value.trim().toLowerCase().startsWith("javascript:")
      ) {
        el.removeAttribute(attr.name);
      }
    });
  });
  return template.innerHTML;
}

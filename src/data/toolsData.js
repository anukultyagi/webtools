import QRGenerator from "../Pages/Tools/QRGenerator";
import MarkdownEditor from "../Pages/Tools/MarkdownEditor";

export const tools = [
  {
    id: 1,
    title: "QR Code Generator",
    slug: "free-qr-code-generator",
    path: "/tools/free-qr-code-generator",
    component: QRGenerator,
    showInNavbar: true,
    description: "Generate QR codes instantly",
    category: "Generators",
    metaTitle: "Free QR Code Generator | WebTools",
    metaDesc: "Generate custom QR codes instantly. Add logos, customize colors, corner styles and download in PNG, SVG or JPG.",
  },

  {
    id: 2,
    title: "Markdown Editor",
    slug: "free-markdown-editor",
    path: "/tools/free-markdown-editor",
    component: MarkdownEditor,
    showInNavbar: true,
    description: "Write markdown easily",
    category: "Developer",
  },
];

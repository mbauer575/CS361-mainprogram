import './layout.css'
import 'rsuite/dist/rsuite.min.css';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>File converter</h1>
        </header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/upload">Upload</a></li>
            <li><a href="/view">View</a></li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
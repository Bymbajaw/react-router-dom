import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Css,
  CSShome,
  CSShowto,
  CSSintroduction,
  CSSselector,
  CSSsyntax,
  Html,
  HTMLbasic,
  HTMLeditors,
  HTMLelements,
  HTMLhome,
  HTMLintroduction,
  Java,
  JAVAgetstarted,
  JAVAhome,
  JAVAintro,
  JAVAoutput,
  JS,
  JAVAsyntax,
  JShome,
  JSintroduction,
  JSoutput,
  JSstatements,
  JSwhereto,
  Python,
  PYTHONcomments,
  PYTHONgetstarted,
  PYTHONhome,
  PYTHONintro,
  PYTHONsyntax,
  BookLayout,
  BookList,
  Book,
  BookNew
} from "./pages/index";

function App() {
  return (
    <div className="container">
      <header>
        <nav className="bg-liht navbar navbar-expand-lg">
          <ul className="navbar-nav  ">
            <li className="nav-item">
              <a className="nav-link" href="/html">
                HTML
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/css">
                CSS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/javascript">
                JAVASCRIPT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/python">
                PYTHON
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/java">
                JAVA
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/books">
                BOOK
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route exact path="/html/*" element={<Html />}>
          <Route path="home" element={<HTMLhome />} />
          <Route path="introduction" element={<HTMLintroduction />} />
          <Route path="editors" element={<HTMLeditors />} />
          <Route path="basic" element={<HTMLbasic />} />
          <Route path="elements" element={<HTMLelements />} />
        </Route>
        <Route path="/css/*" element={<Css />}>
          <Route path="home" element={<CSShome />} />
          <Route path="introduction" element={<CSSintroduction />} />
          <Route path="syntax" element={<CSSsyntax />} />
          <Route path="selector" element={<CSSselector />} />
          <Route path="howto" element={<CSShowto />} />
        </Route>
        <Route path="/javascript/*" element={<JS />}>
          <Route path="home" element={<JShome />} />
          <Route path="introduction" element={<JSintroduction />} />
          <Route path="whereto" element={<JSwhereto />} />
          <Route path="output" element={<JSoutput />} />
          <Route path="statements" element={<JSstatements />} />
        </Route>
        <Route path="/python" element={<Python />}>
          <Route path="home" element={<PYTHONhome />} />
          <Route path="intro" element={<PYTHONintro />} />
          <Route path="getstarted" element={<PYTHONgetstarted />} />
          <Route path="syntax" element={<PYTHONsyntax />} />
          <Route path="comments" element={<PYTHONcomments />} />
        </Route>
        <Route path="/java" element={<Java />}>
          <Route path="home" element={<JAVAhome />} />
          <Route path="intro" element={<JAVAintro />} />
          <Route path="getstarted" element={<JAVAgetstarted />} />
          <Route path="syntax" element={<JAVAsyntax />} />
          <Route path="output" element={<JAVAoutput />} />
        </Route>
        <Route path="/books" element= {<BookLayout />}>
          <Route index element = {<BookList />}/>
          <Route path="/books/:id" element={<Book />}/>
          <Route path="/books/new" element={<BookNew />}/>
        </Route>
      </Routes>
      <footer>2023</footer>
    </div>
  );
}

export default App;

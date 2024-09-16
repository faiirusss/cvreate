import { Button } from "./Button.jsx";
import "../styles/Header.css";

export function Header({ onTogglePreview, onFillExampleCV }) {
  return (
    <header>
      <div className="content-margin header_inner">
        <div>
          <h1>CVreate</h1>          
        </div>
        <nav className="header_nav">
          <ul>
            <li className="header_nav-item">
              <Button
                content="Edit CV"
                onClick={() => onTogglePreview(false)}
                extraClasses="simple"
              />
            </li>
            <li className="header_nav-item">
              <Button
                content="Preview CV"
                onClick={() => onTogglePreview(true)}
                extraClasses="simple"
              />
            </li>
            <li className="header_nav-item">
              <Button
                variant="sec"
                content="Fill Example CV"
                onClick={() => {
                  const userAnswer = window.confirm(
                    "Are you sure you want to load the example CV?, this will erase all the data you have entered and can't be undone."
                  );
                  if (userAnswer) onFillExampleCV();
                }}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
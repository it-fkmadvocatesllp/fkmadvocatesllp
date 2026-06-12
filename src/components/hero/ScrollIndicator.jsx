import './ScrollIndicator.css';

const ScrollIndicator = () => (
  <div className="scroll-indicator" aria-hidden="true">
    <span className="scroll-indicator__text">Scroll</span>
    <span className="scroll-indicator__line" />
  </div>
);

export default ScrollIndicator;

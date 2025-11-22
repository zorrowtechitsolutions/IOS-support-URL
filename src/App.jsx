
export function App  () {
  return (
    <div className="support-container">
      <h1>Hosta Health Care Support</h1>
      <p>We're here to help you! Please choose the best way to contact us based on your issue.</p>

      <div className="contact-option">
        <h2>📧 Email Support</h2>
        <p>For the quickest response, please send us an email directly. We'll get back to you as soon as possible.</p>
        <p><strong>Email Address:</strong> <a href="mailto:hostahealthcare@gmail.com">hostahealthcare@gmail.com</a></p>
      </div>

      <div className="contact-option">
        <h2>❓ Frequently Asked Questions (FAQ)</h2>
        <p>You might find an instant answer to your question in our FAQ section.</p>
        <p><a href="https://zorrowtechitsolutions.github.io/Hosta-Privacy-Policy" target="_blank" rel="noopener noreferrer">View our FAQ Page</a></p>
      </div>

      <div className="contact-option">
        <h2>🐛 Reporting a Bug</h2>
        <p>If you found a bug, please include the following in your email:</p>
        <ul>
          <li>Your device model (e.g., iPhone 15 Pro)</li>
          <li>iOS Version (e.g., iOS 17.4.1)</li>
          <li>Steps to reproduce the issue</li>
          <li>Screenshot</li>
        </ul>
      </div>

      <p className="thank-you"><strong>Thank you for using Hosta Health Care!</strong></p>
    </div>
  );
};


// web/app/en/guide/page.tsx
export default function GuideEN() {
  return (
    <div className="pageShell">
      <section className="section">
        <div className="container">
          <div className="guideWrap">
            <div className="guideCard">
              <h1 className="guideTitle">User Guide</h1>

              <h2 className="guideH2">Preparing Your ECG Image</h2>
              <ul className="guideChecklist">
                <li>Ensure the ECG printout is placed on a flat, well-lit surface</li>
                <li>Capture the image from directly above to avoid distortion</li>
                <li>Make sure all ECG leads are visible and clear</li>
                <li>Use high-resolution images (minimum 1200×800 pixels recommended)</li>
              </ul>

              <h2 className="guideH2">Upload Process</h2>
              <ol className="guideSteps">
                <li>Navigate to the ECG Analysis page</li>
                <li>Click the upload area or drag and drop your ECG image</li>
                <li>Supported formats: PNG, JPG, JPEG, PDF</li>
                <li>Maximum file size: 10MB</li>
                <li>Review the preview to ensure image quality</li>
                <li>Click “Analyze ECG” to start the AI analysis</li>
              </ol>

              <h2 className="guideH2">Understanding Results</h2>

              <div className="resultBox resultBox--ok">
                <div className="resultBox__title">Normal Risk</div>
                <div className="resultBox__text">
                  ECG shows regular heart rhythm with no significant abnormalities detected.
                </div>
              </div>

              <div className="resultBox resultBox--warn">
                <div className="resultBox__title">Warning</div>
                <div className="resultBox__text">
                  Potential irregularities detected. Consultation with a cardiologist recommended.
                </div>
              </div>

              <div className="resultBox resultBox--danger">
                <div className="resultBox__title">High Risk</div>
                <div className="resultBox__text">
                  Significant abnormalities detected. Immediate medical attention advised.
                </div>
              </div>

              <h2 className="guideH2">Best Practices</h2>
              <div className="bestBox">
                <ul className="bestList">
                  <li>Always use recent ECG images (within the last 30 days)</li>
                  <li>Ensure patient information is removed for privacy</li>
                  <li>Do not rely solely on AI results for medical decisions</li>
                  <li>Consult healthcare professionals for interpretation</li>
                  <li>Keep a record of all analyses for medical reference</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

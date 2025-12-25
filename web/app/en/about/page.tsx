export default function AboutPageEN() {
  return (
    <div className="pageShell">
      <section className="section">
        <div className="container">
          <div className="aboutWrap">
            <div className="aboutCard">
              <h1 className="aboutTitle">About CardioAI</h1>
              <p className="aboutLead">
                CardioAI is an advanced artificial intelligence platform designed to assist healthcare
                professionals in the early detection of cardiovascular diseases through electrocardiogram
                (ECG) analysis.
              </p>

              <div className="aboutBlock">
                <h2 className="aboutH3">Our Technology</h2>
                <p className="aboutText">
                  Our deep learning model has been trained on thousands of verified ECG samples, enabling it
                  to identify subtle patterns and abnormalities that may indicate various cardiac conditions.
                  The system provides confidence scoring to support screening decisions.
                </p>
              </div>

              <div className="aboutBlock">
                <h2 className="aboutH3">Research Background</h2>
                <p className="aboutText">
                  This project is developed as part of university research in biomedical AI and machine learning
                  applications in healthcare. Our goal is to make cardiac screening more accessible and efficient
                  while supporting medical professionals in providing better patient care.
                </p>
              </div>

              <div className="aboutNote" role="note">
                <div className="aboutNote__label">Important Note:</div>
                <div className="aboutNote__text">
                  CardioAI is a research demonstration tool and should not replace professional medical
                  diagnosis. All results should be reviewed by qualified healthcare providers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

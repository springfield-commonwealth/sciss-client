import Link from "next/link";

const SessionInfo = ({
  linkTitle,
  link,
  ctaTitle = "Start Your Summer at SCISS",
  ctaDescription = "Join students from around the world for an unforgettable experience",
}) => {
  return (
    <section className="sciss-cta">
      <div className="sciss-cta__inner">
        <div className="sciss-cta__group">
          <div className="sciss-contact">
            <div className="sciss-contact__header">
              <h1 className="sciss-contact__heading">{ctaTitle}</h1>
              <p className="sciss-contact__intro">{ctaDescription}</p>
            </div>
            <div className="sciss-contact__cta-wrapper">
              <Link href="/apply" className="btn sciss-btn">
                Apply Now
              </Link>
            </div>
            <div className="sciss-contact__list">
              <Link href="/contact-us/" className="sciss-contact__info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="svg-size"
                >
                  <g data-name="Group 490" transform="translate(-165 -396)">
                    <rect
                      className="theme-icon-bg"
                      width="24"
                      height="24"
                      fill="#0c0c0c"
                      data-name="Rectangle 118"
                      rx="12"
                      transform="translate(165 396)"
                    ></rect>
                    <g
                      className="theme-icon-content-stroke"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="square"
                      strokeWidth="2"
                      data-name="Group 465"
                    >
                      <path
                        d="M176.242 412.485l4.243-4.243"
                        data-name="Line 1"
                      ></path>
                      <path
                        d="M180.484 408.243L176.242 404"
                        data-name="Line 3"
                      ></path>
                    </g>
                  </g>
                </svg>
                <span>Contact us</span>
              </Link>
              <Link
                href="mailto:info@sciss.edu"
                className="sciss-contact__info"
              >
                <svg
                  className="sciss-icon-email"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"
                  ></path>
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m22 6-10 7L2 6"
                  ></path>
                </svg>
                <span>Email us</span>
              </Link>
              <Link href="tel:+1-413-782-1300" className="sciss-contact__info">
                <svg
                  className="sciss-icon-phone"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92Z"
                  ></path>
                </svg>
                <span>Call us</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="sciss-cta__group">
          <div className="sciss-session-wrapper">
            <div className="sciss-session-grid">
              <div className="sciss-session">
                <div className="sciss-session__item">
                  <div className="sciss-session__details">
                    <div className="sciss-session__term">session 1</div>
                    <div className="sciss-session__date">
                      June 15 - July 5, 2026
                    </div>
                  </div>
                </div>
              </div>
              <div className="sciss-session">
                <div className="sciss-session__item">
                  <div className="sciss-session__details">
                    <div className="sciss-session__term">session 2</div>
                    <div className="sciss-session__date">
                      July 8 - July 28, 2026
                    </div>
                  </div>
                </div>
              </div>
              <div className="sciss-session">
                <div className="sciss-session__item">
                  <div className="sciss-session__details">
                    <div className="sciss-session__term">full summer</div>
                    <div className="sciss-session__date">
                      June 15 - August 21, 2026
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sciss-session__btn-wrapper">
              <Link href="/tuitions-and-fees/" className="btn sciss-btn">
                Price and Cover
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionInfo;

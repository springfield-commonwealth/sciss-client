import { useEffect, useState } from "react";

const CountdownModal = ({ isOpen, onClose, targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();

      if (difference <= 0) {
        setIsExpired(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="countdown-modal-backdrop" onClick={onClose} />

      {/* Modal */}
      <div className="countdown-modal">
        {/* Close Button */}
        <button
          className="countdown-modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Content */}
        <div className="countdown-modal__content">
          {/* Header */}
          <div className="countdown-modal__header">
            <div className="countdown-modal__badge">Summer 2026</div>
            <h2 className="countdown-modal__title">
              Give Your Child <br />
              <span className="countdown-modal__title-highlight">
                A Summer That Counts
              </span>
            </h2>
            <p className="countdown-modal__subtitle">
              Session 1 starts in:
            </p>
          </div>

          {/* Countdown Timer */}
          {!isExpired ? (
            <div className="countdown-modal__timer">
              <div className="countdown-modal__time-block">
                <div className="countdown-modal__time-value">{timeLeft.days}</div>
                <div className="countdown-modal__time-label">Days</div>
              </div>
              <div className="countdown-modal__time-separator">:</div>
              <div className="countdown-modal__time-block">
                <div className="countdown-modal__time-value">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <div className="countdown-modal__time-label">Hours</div>
              </div>
              <div className="countdown-modal__time-separator">:</div>
              <div className="countdown-modal__time-block">
                <div className="countdown-modal__time-value">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <div className="countdown-modal__time-label">Minutes</div>
              </div>
              <div className="countdown-modal__time-separator">:</div>
              <div className="countdown-modal__time-block">
                <div className="countdown-modal__time-value">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
                <div className="countdown-modal__time-label">Seconds</div>
              </div>
            </div>
          ) : (
            <div className="countdown-modal__expired">
              <span className="countdown-modal__expired-icon">🎉</span>
              <p className="countdown-modal__expired-text">
                Session is now open!
              </p>
            </div>
          )}

          {/* Session Details */}
          <div className="countdown-modal__details">
            <div className="countdown-modal__detail">
              <span className="countdown-modal__detail-icon">📅</span>
              <div>
                <div className="countdown-modal__detail-label">Session 1</div>
                <div className="countdown-modal__detail-value">
                  June 29 - July 18
                </div>
              </div>
            </div>
            <div className="countdown-modal__detail">
              <span className="countdown-modal__detail-icon">📅</span>
              <div>
                <div className="countdown-modal__detail-label">Session 2</div>
                <div className="countdown-modal__detail-value">
                  July 20 - August 8
                </div>
              </div>
            </div>
            <div className="countdown-modal__detail">
              <span className="countdown-modal__detail-icon">⭐</span>
              <div>
                <div className="countdown-modal__detail-label">
                  Early Bird Deadline
                </div>
                <div className="countdown-modal__detail-value">April 1st</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="countdown-modal__actions">
            <a href="/apply" className="btn btn--primary btn--large">
              Apply Now
            </a>
            <a
              href="/program-overview"
              className="btn btn--secondary btn--large"
            >
              Learn More
            </a>
          </div>

          {/* Footer note */}
          <p className="countdown-modal__footer-note">
            Limited spots available • Grades 4-12
          </p>
        </div>
      </div>
    </>
  );
};

export default CountdownModal;


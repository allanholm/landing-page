import "./CookieConsent.scss";

export default function CookieConsent() {
  return(
    <div className="overlay">
      <section className="cookieConsentModal">
        <header className="cookieConsentModal__header">
          <h1>Hvad bruger vi cookies til?</h1>
        </header>

        <article className="cookieConsentModal__content">
          <table>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" id="cookie__necessary" disabled checked />
                  <label className="consentToggle" htmlFor="cookie__necessary"/>
                </td>
                <td>
                  <p>Tillad alle nødvendige cookies. Dette er cookies som er nødvendige for at denne webapplikation virker korrekt. Der foregår ingen sporing ved hjælp af denne slags cookie.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" id="cookie__analytics"/>
                  <label className="consentToggle" htmlFor="cookie__analytics"/>
                </td>
                <td>
                  <p>Tillad analytics. Vi bruger tredjepartcookies fra Google til at spore og lave statistik over vores besøgende. Dette gør vi for at forbedre din oplevelse på vores hjemmeside.</p>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="content__buttons">
            <button className="buttons__button">
              Tillad valgte
            </button>
            <button className="buttons__button buttons__button--highlight">
              Tillad alle
            </button>
          </div>
        </article>
      </section>
    </div>
  );
}
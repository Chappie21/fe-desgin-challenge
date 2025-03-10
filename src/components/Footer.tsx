import '../styles/components/Footer.css'
import { paymentMethods, socialNetworks, companyData } from '../mock'

export const Footer = () => {

  const year: number = new Date().getFullYear();

  return (
    <footer>

      {/* Payment methods */}
      <section className="payment-method-section">
        {
          paymentMethods.map((method, index) => (
            <img key={index} src={method.image} alt={method.name} />
          ))
        }
        <span>and 50+ more</span>
      </section>
      <section className="information-section">

        {/* Social networks */}
        <article className="information-section-socials">
          {
            socialNetworks.map((social, index) => (
                <a key={index} href={social.url} className={social.name} target="_blank">
                {<social.icon />}
                </a>
            ))
          }
        </article>

        {/* About company */}
        <article className="information-section-company ">

          <div className="colum-information logo">
            <img src="https://chicksgold.com/logo/chicks-logo-large.svg" alt="Logo" />
            <a href="mailto:support@chicksgold.com">support@chicksgold.com</a>
          </div>

          {/* Company Data */}
          {
            companyData.map((companyData, index) => (
              <div key={index} className="colum-information-desktop">
                <h3>{companyData.title}</h3>
                <ul>
                  {
                    companyData.childrens.map((info, index) => (
                      <li key={index}>
                        {info}
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }

          {/* Company Data mobile */}
          <div className="colum-information-mobile">
            {
              companyData.map((companyData, index) => (
                <details key={index} className="colum-information-details">
                  <summary>{companyData.title}</summary>
                  <ul>
                    {
                      companyData.childrens.map((info, index) => (
                        <li key={index}>
                          {info}
                        </li>
                      ))
                    }
                  </ul>
                </details>
              ))
            }
          </div>

          {/* rating */}
          <div className="colum-information rating">
            <div>
              {
                new Array(5).fill(undefined).map((_, index) => (
                  <img key={index} src="https://chicksgold.com/home/star_full.svg" alt="start" />
                ))
              }
            </div>
            <span>Trustpilot Reviews</span>
          </div>

        </article>

        {/* @Copyrigth */}
        <article className="information-section-copyright">
          <small>© 2017 - {year} Chicksgold.com. All Rights Reserved</small>
        </article>

      </section>
    </footer>
  )
}

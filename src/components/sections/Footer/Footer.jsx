import './Footer.scss'

function Footer() {

  return (
    <>
    <footer className="footer center">
        <div>
            <a className="logo" href="index.html">
                GeoPortal.
            </a>
            <p className="footer-sub">
                Вся информация представлена на портале исключительно в научно-образовательных и ознакомительных целях.
            </p>
        </div>
        <div className="footer-contacts">
            <div className="footer-contacts-phone">
                <a href="tel:+79145628638" className="footer-contacts-svg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 35 31"
                        fill="none"
                    >
                        <path
                        id="path"
                        d="M32.87 12.89C33.09 11.54 33.02 10.16 32.65 8.83C32.17 7.07 31.17 5.4 29.65 4.03C28.14 2.66 26.3 1.75 24.37 1.31C22.9 0.97 21.38 0.91 19.89 1.11"
                        stroke="#E55C22"
                        strokeOpacity={1.0}
                        strokeWidth="2.500000"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        />
                        <path
                        id="path"
                        d="M26.2 12.25C26.44 10.8 25.95 9.28 24.72 8.16C23.49 7.05 21.81 6.6 20.21 6.81"
                        stroke="#E55C22"
                        strokeOpacity={1.0}
                        strokeWidth="2.500000"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        />
                        <path
                        id="path"
                        d="M10.34 4.3L12.49 7.81C12.77 8.27 12.78 8.83 12.52 9.3L10.45 13.05C10.45 13.05 11.05 15.85 13.56 18.13C16.07 20.41 19.15 20.95 19.15 20.95L23.29 19.07C23.81 18.83 24.42 18.84 24.93 19.1L28.81 21.06C29.36 21.34 29.71 21.87 29.71 22.45L29.71 26.5C29.71 28.55 27.6 30.04 25.45 29.38C21.04 28.03 14.18 25.46 9.84 21.51C5.5 17.57 2.66 11.35 1.17 7.34C0.44 5.39 2.08 3.48 4.35 3.48L8.81 3.48C9.44 3.48 10.03 3.79 10.34 4.3Z"
                        stroke="#E55C22"
                        strokeOpacity={1.0}
                        strokeWidth="2.500000"
                        strokeLinejoin="round"
                        />
                    </svg>
                </a>
                <a href="tel:+79145628638" className="footer-contacts-text">+7(914)562-86-38</a>
            </div>
            <div className="footer-contacts-tg">
                <a href="https://t.me/ssweeettieee" className="footer-contacts-svg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 32 27"
                        fill="none"
                    >
                        <path
                        id="path"
                        d="M29.27 0.23C29.27 0.23 32.23 -0.92 31.98 1.88C31.9 3.03 31.16 7.07 30.58 11.44L28.61 24.39C28.61 24.39 28.44 26.28 26.96 26.61C25.48 26.94 23.26 25.46 22.85 25.13C22.52 24.88 16.69 21.17 14.63 19.36C14.05 18.86 13.4 17.87 14.71 16.72L23.35 8.48C24.33 7.49 25.32 5.18 21.21 7.98L9.7 15.81C9.7 15.81 8.38 16.64 5.91 15.9L0.57 14.25C0.57 14.25 -1.4 13.01 1.97 11.77C10.19 7.9 20.3 3.94 29.27 0.23Z"
                        fill="#E55C22"
                        fillOpacity={1.0}
                        fillRule="nonzero"
                        />
                    </svg>
                </a>
                <a href="https://t.me/ssweeettieee" className="footer-contacts-text">@ssweeettieee</a>
            </div>
            <div className="footer-contacts-email">
                <a href="mailto:sochenkoalena@mail.ru" className="footer-contacts-svg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 35 25"
                        fill="none"
                    >
                        <path
                        id="path"
                        d="M33 22.78L33 11.89L33 1L17 1L1 1L1 11.89L1 22.78L33 22.78Z"
                        stroke="#E55C22"
                        strokeOpacity={1.0}
                        strokeWidth="2.500000"
                        strokeLinejoin="round"
                        />
                        <path
                        id="path"
                        d="M1 1L17 11.89L33 1"
                        stroke="#E55C22"
                        strokeOpacity={1.0}
                        strokeWidth="2.500000"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        />
                        <path
                        id="path"
                        d="M17 1L1 1L1 11.89"
                        stroke="#E55C22"
                        strokeOpacity={1.0}
                        strokeWidth="2.500000"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        />
                        <path
                        id="path"
                        d="M33 11.89L33 1L17 1"
                        stroke="#E55C22"
                        strokeOpacity={1.0}
                        strokeWidth="2.500000"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        />
                    </svg>
                </a>
                <a href="mailto:sochenkoalena@mail.ru" className="footer-contacts-text">sochenko.as@dvfu.ru</a>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
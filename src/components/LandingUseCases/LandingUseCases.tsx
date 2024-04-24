import styles from './landing-usecases.module.scss';

const cases = [
  {
    title: 'Intuitive wallet onboarding & recovery',
    copy: 'Enable users to create and back up their wallets⁠—EOA, MPC, or AA⁠—using social recovery, passkeys, and other user-friendly authentication methods.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.item__icon}
        viewBox="0 0 32 33"
        fill="none"
      >
        <path
          d="M3.03067 8.02148C4.1258 7.05287 5.53797 6.51922 7 6.52148H25C26.5213 6.52148 27.9107 7.08815 28.9693 8.02148C28.8475 7.05473 28.377 6.16569 27.6462 5.52125C26.9153 4.87682 25.9744 4.52131 25 4.52148H7C6.02561 4.52131 5.08466 4.87682 4.35381 5.52125C3.62296 6.16569 3.15247 7.05473 3.03067 8.02148ZM3.03067 12.0215C4.1258 11.0529 5.53797 10.5192 7 10.5215H25C26.5213 10.5215 27.9107 11.0882 28.9693 12.0215C28.8475 11.0547 28.377 10.1657 27.6462 9.52125C26.9153 8.87682 25.9744 8.52131 25 8.52148H7C6.02561 8.52131 5.08466 8.87682 4.35381 9.52125C3.62296 10.1657 3.15247 11.0547 3.03067 12.0215ZM7 12.5215C5.93913 12.5215 4.92172 12.9429 4.17157 13.6931C3.42143 14.4432 3 15.4606 3 16.5215V24.5215C3 25.5824 3.42143 26.5998 4.17157 27.3499C4.92172 28.1001 5.93913 28.5215 7 28.5215H25C26.0609 28.5215 27.0783 28.1001 27.8284 27.3499C28.5786 26.5998 29 25.5824 29 24.5215V16.5215C29 15.4606 28.5786 14.4432 27.8284 13.6931C27.0783 12.9429 26.0609 12.5215 25 12.5215H20C19.7348 12.5215 19.4804 12.6268 19.2929 12.8144C19.1054 13.0019 19 13.2563 19 13.5215C19 14.3171 18.6839 15.0802 18.1213 15.6428C17.5587 16.2054 16.7956 16.5215 16 16.5215C15.2044 16.5215 14.4413 16.2054 13.8787 15.6428C13.3161 15.0802 13 14.3171 13 13.5215C13 13.2563 12.8946 13.0019 12.7071 12.8144C12.5196 12.6268 12.2652 12.5215 12 12.5215H7Z"
          fill="url(#paint0_linear_554_22350)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_554_22350"
            x1="16"
            y1="5"
            x2="14.1824"
            y2="28.8615"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFAA7F" />
            <stop offset="0.489583" stopColor="#FF844F" />
            <stop offset="1" stopColor="#FF4205" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Unique token-gated experiences',
    copy: 'Craft exclusive access, content, and experiences for your community members, tailored to the digital assets they own.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.item__icon}
        viewBox="0 0 32 33"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0003 6.52148C12.2175 6.52153 12.4289 6.59234 12.6024 6.72322C12.7758 6.85409 12.9019 7.03789 12.9616 7.24682L14.0456 11.0415C14.279 11.8587 14.7169 12.603 15.3178 13.2039C15.9188 13.8049 16.663 14.2428 17.4803 14.4762L21.2749 15.5602C21.4837 15.62 21.6674 15.7461 21.7981 15.9196C21.9288 16.093 21.9995 16.3043 21.9995 16.5215C21.9995 16.7387 21.9288 16.95 21.7981 17.1234C21.6674 17.2968 21.4837 17.423 21.2749 17.4828L17.4803 18.5668C16.663 18.8002 15.9188 19.2381 15.3178 19.8391C14.7169 20.44 14.279 21.1843 14.0456 22.0015L12.9616 25.7962C12.9018 26.0049 12.7756 26.1886 12.6022 26.3193C12.4287 26.4501 12.2174 26.5208 12.0003 26.5208C11.7831 26.5208 11.5718 26.4501 11.3983 26.3193C11.2249 26.1886 11.0987 26.0049 11.0389 25.7962L9.95492 22.0015C9.72152 21.1843 9.28366 20.44 8.68269 19.8391C8.08172 19.2381 7.33748 18.8002 6.52026 18.5668L2.72559 17.4828C2.5168 17.423 2.33315 17.2968 2.20242 17.1234C2.07169 16.95 2.00098 16.7387 2.00098 16.5215C2.00098 16.3043 2.07169 16.093 2.20242 15.9196C2.33315 15.7461 2.5168 15.62 2.72559 15.5602L6.52026 14.4762C7.33748 14.2428 8.08172 13.8049 8.68269 13.2039C9.28366 12.603 9.72152 11.8587 9.95492 11.0415L11.0389 7.24682C11.0986 7.03789 11.2247 6.85409 11.3982 6.72322C11.5716 6.59234 11.783 6.52153 12.0003 6.52148ZM24.0003 2.52148C24.2233 2.52136 24.4401 2.59584 24.616 2.73307C24.7918 2.8703 24.9168 3.0624 24.9709 3.27882L25.3149 4.66015C25.6296 5.91348 26.6083 6.89215 27.8616 7.20682L29.2429 7.55082C29.4598 7.60453 29.6524 7.72929 29.79 7.90522C29.9277 8.08114 30.0025 8.2981 30.0025 8.52148C30.0025 8.74487 29.9277 8.96183 29.79 9.13775C29.6524 9.31368 29.4598 9.43844 29.2429 9.49215L27.8616 9.83615C26.6083 10.1508 25.6296 11.1295 25.3149 12.3828L24.9709 13.7642C24.9172 13.981 24.7924 14.1736 24.6165 14.3113C24.4406 14.4489 24.2236 14.5237 24.0003 14.5237C23.7769 14.5237 23.5599 14.4489 23.384 14.3113C23.2081 14.1736 23.0833 13.981 23.0296 13.7642L22.6856 12.3828C22.5317 11.7674 22.2135 11.2053 21.765 10.7568C21.3164 10.3082 20.7544 9.99 20.1389 9.83615L18.7576 9.49215C18.5408 9.43844 18.3481 9.31368 18.2105 9.13775C18.0728 8.96183 17.998 8.74487 17.998 8.52148C17.998 8.2981 18.0728 8.08114 18.2105 7.90522C18.3481 7.72929 18.5408 7.60453 18.7576 7.55082L20.1389 7.20682C20.7544 7.05297 21.3164 6.73475 21.765 6.28618C22.2135 5.83762 22.5317 5.27558 22.6856 4.66015L23.0296 3.27882C23.0837 3.0624 23.2087 2.8703 23.3846 2.73307C23.5604 2.59584 23.7772 2.52136 24.0003 2.52148ZM22.0003 20.5215C22.2103 20.5214 22.415 20.5874 22.5854 20.7101C22.7558 20.8329 22.8832 21.0062 22.9496 21.2055L23.4749 22.7828C23.6749 23.3788 24.1416 23.8482 24.7389 24.0468L26.3163 24.5735C26.5149 24.6402 26.6875 24.7676 26.8099 24.9376C26.9322 25.1077 26.998 25.312 26.998 25.5215C26.998 25.731 26.9322 25.9352 26.8099 26.1053C26.6875 26.2754 26.5149 26.4028 26.3163 26.4695L24.7389 26.9962C24.1429 27.1962 23.6736 27.6628 23.4749 28.2602L22.9483 29.8375C22.8816 30.0361 22.7542 30.2088 22.5841 30.3311C22.414 30.4534 22.2098 30.5192 22.0003 30.5192C21.7907 30.5192 21.5865 30.4534 21.4164 30.3311C21.2463 30.2088 21.1189 30.0361 21.0523 29.8375L20.5256 28.2602C20.4274 27.9659 20.262 27.6985 20.0427 27.4791C19.8233 27.2597 19.5559 27.0944 19.2616 26.9962L17.6843 26.4695C17.4856 26.4028 17.313 26.2754 17.1907 26.1053C17.0683 25.9352 17.0025 25.731 17.0025 25.5215C17.0025 25.312 17.0683 25.1077 17.1907 24.9376C17.313 24.7676 17.4856 24.6402 17.6843 24.5735L19.2616 24.0468C19.8576 23.8468 20.3269 23.3802 20.5256 22.7828L21.0523 21.2055C21.1186 21.0064 21.2458 20.8333 21.4159 20.7105C21.586 20.5878 21.7905 20.5216 22.0003 20.5215Z"
          fill="url(#paint0_linear_554_22348)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_554_22348"
            x1="16"
            y1="3"
            x2="23.5728"
            y2="31.3808"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFAA7F" />
            <stop offset="0.489583" stopColor="#FF844F" />
            <stop offset="1" stopColor="#FF4205" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Automated credential issuance',
    copy: 'Issue tamper-proof, verifiable credentials programmatically at scale, based on on-chain or off-chain conditions.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.item__icon}
        viewBox="0 0 33 33"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.33301 5.52148C5.27214 5.52148 4.25473 5.94291 3.50458 6.69306C2.75444 7.4432 2.33301 8.46062 2.33301 9.52148V23.5215C2.33301 24.5824 2.75444 25.5998 3.50458 26.3499C4.25473 27.1001 5.27214 27.5215 6.33301 27.5215H26.333C27.3939 27.5215 28.4113 27.1001 29.1614 26.3499C29.9116 25.5998 30.333 24.5824 30.333 23.5215V9.52148C30.333 8.46062 29.9116 7.4432 29.1614 6.69306C28.4113 5.94291 27.3939 5.52148 26.333 5.52148H6.33301ZM11.833 9.52148C11.0374 9.52148 10.2743 9.83756 9.71169 10.4002C9.14908 10.9628 8.83301 11.7258 8.83301 12.5215C8.83301 13.3171 9.14908 14.0802 9.71169 14.6428C10.2743 15.2054 11.0374 15.5215 11.833 15.5215C12.6287 15.5215 13.3917 15.2054 13.9543 14.6428C14.5169 14.0802 14.833 13.3171 14.833 12.5215C14.833 11.7258 14.5169 10.9628 13.9543 10.4002C13.3917 9.83756 12.6287 9.52148 11.833 9.52148ZM6.66901 21.1255C7.05731 20.0683 7.76072 19.1558 8.68421 18.5112C9.6077 17.8666 10.7068 17.5209 11.833 17.5209C12.9592 17.5209 14.0583 17.8666 14.9818 18.5112C15.9053 19.1558 16.6087 20.0683 16.997 21.1255C17.0801 21.352 17.0785 21.6009 16.9925 21.8264C16.9065 22.0518 16.7419 22.2385 16.529 22.3522C15.0836 23.1221 13.4707 23.5237 11.833 23.5215C10.1953 23.5237 8.5824 23.1221 7.13701 22.3522C6.92414 22.2385 6.75952 22.0518 6.67351 21.8264C6.5875 21.6009 6.5859 21.352 6.66901 21.1255ZM20.333 11.5215C20.0678 11.5215 19.8134 11.6268 19.6259 11.8144C19.4384 12.0019 19.333 12.2563 19.333 12.5215C19.333 12.7867 19.4384 13.0411 19.6259 13.2286C19.8134 13.4161 20.0678 13.5215 20.333 13.5215H25.333C25.5982 13.5215 25.8526 13.4161 26.0401 13.2286C26.2277 13.0411 26.333 12.7867 26.333 12.5215C26.333 12.2563 26.2277 12.0019 26.0401 11.8144C25.8526 11.6268 25.5982 11.5215 25.333 11.5215H20.333ZM19.333 16.5215C19.333 16.2563 19.4384 16.0019 19.6259 15.8144C19.8134 15.6268 20.0678 15.5215 20.333 15.5215H25.333C25.5982 15.5215 25.8526 15.6268 26.0401 15.8144C26.2277 16.0019 26.333 16.2563 26.333 16.5215C26.333 16.7867 26.2277 17.0411 26.0401 17.2286C25.8526 17.4161 25.5982 17.5215 25.333 17.5215H20.333C20.0678 17.5215 19.8134 17.4161 19.6259 17.2286C19.4384 17.0411 19.333 16.7867 19.333 16.5215ZM20.333 19.5215C20.0678 19.5215 19.8134 19.6268 19.6259 19.8144C19.4384 20.0019 19.333 20.2563 19.333 20.5215C19.333 20.7867 19.4384 21.0411 19.6259 21.2286C19.8134 21.4161 20.0678 21.5215 20.333 21.5215H25.333C25.5982 21.5215 25.8526 21.4161 26.0401 21.2286C26.2277 21.0411 26.333 20.7867 26.333 20.5215C26.333 20.2563 26.2277 20.0019 26.0401 19.8144C25.8526 19.6268 25.5982 19.5215 25.333 19.5215H20.333Z"
          fill="url(#paint0_linear_554_22352)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_554_22352"
            x1="16"
            y1="6"
            x2="15.6897"
            y2="31.4597"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFAA7F" />
            <stop offset="0.489583" stopColor="#FF844F" />
            <stop offset="1" stopColor="#FF4205" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Streamlined DeFi automation',
    copy: 'Unlock new DeFi experiences, such as limit orders and liquidity loss prevention, with conditional transaction execution and off-chain triggers.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.item__icon}
        viewBox="0 0 33 33"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.1536 2.64821C20.3488 2.75687 20.502 2.92778 20.5888 3.13368C20.6755 3.33958 20.6909 3.5686 20.6323 3.78421L17.9763 13.5215H27.6669C27.8618 13.5216 28.0524 13.5785 28.2154 13.6854C28.3783 13.7923 28.5065 13.9445 28.5841 14.1232C28.6617 14.302 28.6854 14.4995 28.6523 14.6916C28.6192 14.8836 28.5306 15.0618 28.3976 15.2042L14.3976 30.2042C14.2451 30.3679 14.0421 30.4758 13.8211 30.5105C13.6001 30.5453 13.3738 30.5049 13.1784 30.3959C12.9831 30.2868 12.8299 30.1154 12.7435 29.909C12.657 29.7027 12.6423 29.4733 12.7016 29.2575L15.3576 19.5215H5.66693C5.47205 19.5215 5.28142 19.4646 5.11847 19.3577C4.95552 19.2508 4.82736 19.0986 4.74974 18.9198C4.67212 18.7411 4.64842 18.5435 4.68156 18.3515C4.71469 18.1595 4.80322 17.9813 4.93626 17.8389L18.9363 2.83887C19.0888 2.67573 19.2915 2.56833 19.5121 2.53377C19.7327 2.49922 19.9585 2.5395 20.1536 2.64821Z"
          fill="url(#paint0_linear_554_22367)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_554_22367"
            x1="19"
            y1="3"
            x2="13.4672"
            y2="33.9941"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFAA7F" />
            <stop offset="0.489583" stopColor="#FF844F" />
            <stop offset="1" stopColor="#FF4205" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Native cross-chain swaps',
    copy: 'Use Lit to seamlessly transfer assets and data across chain, without relying on a centralized bridge or intermediary.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.item__icon}
        viewBox="0 0 33 33"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.33301 16.5215C3.33301 9.34148 9.15301 3.52148 16.333 3.52148C23.513 3.52148 29.333 9.34148 29.333 16.5215C29.333 23.7015 23.513 29.5215 16.333 29.5215C9.15301 29.5215 3.33301 23.7015 3.33301 16.5215ZM17.0401 7.81438C17.2277 8.00191 17.333 8.25627 17.333 8.52148V9.61082C18.1686 9.75134 18.9562 10.0973 19.625 10.6175L20.1783 11.0575C20.3861 11.2224 20.5198 11.4632 20.5501 11.7267C20.5803 11.9903 20.5046 12.2551 20.3397 12.4628C20.1747 12.6706 19.934 12.8043 19.6704 12.8345C19.4069 12.8648 19.1421 12.7891 18.9343 12.6242L18.381 12.1842C18.0783 11.9442 17.7197 11.7695 17.333 11.6602V15.6002C18.2113 15.7324 19.0444 16.0755 19.761 16.6002C20.7543 17.3455 21.333 18.3922 21.333 19.5215C21.333 20.6508 20.7543 21.6975 19.761 22.4428C19.0442 22.9669 18.2111 23.3095 17.333 23.4415V24.5215C17.333 24.7867 17.2277 25.0411 17.0401 25.2286C16.8526 25.4161 16.5982 25.5215 16.333 25.5215C16.0678 25.5215 15.8134 25.4161 15.6259 25.2286C15.4384 25.0411 15.333 24.7867 15.333 24.5215V23.4428C14.4637 23.3028 13.6157 22.9762 12.905 22.4428L11.733 21.5628C11.5208 21.4037 11.3806 21.1668 11.3431 20.9042C11.3056 20.6417 11.3739 20.375 11.533 20.1628C11.6921 19.9506 11.929 19.8104 12.1916 19.7729C12.3216 19.7543 12.454 19.7615 12.5812 19.7941C12.7084 19.8267 12.828 19.884 12.933 19.9628L14.105 20.8428C14.4724 21.1106 14.8901 21.3015 15.333 21.4042V17.4335C14.5103 17.2882 13.7103 16.9588 13.041 16.4255C12.0903 15.6708 11.557 14.6268 11.557 13.5215C11.557 12.4175 12.0903 11.3722 13.0397 10.6175C13.7087 10.0966 14.4968 9.75019 15.333 9.60948V8.52148C15.333 8.25627 15.4384 8.00191 15.6259 7.81438C15.8134 7.62684 16.0678 7.52148 16.333 7.52148C16.5982 7.52148 16.8526 7.62684 17.0401 7.81438ZM15.3326 11.6575C14.9473 11.7681 14.5873 11.9428 14.2846 12.1828C13.7593 12.6001 13.5566 13.0908 13.5566 13.5215C13.5566 13.9521 13.7593 14.4428 14.2846 14.8601C14.5962 15.1019 14.9523 15.28 15.3326 15.3841V11.6575ZM17.3326 17.6388V21.4041C17.7755 21.302 18.1931 21.1102 18.5606 20.8428C19.13 20.4161 19.3326 19.9281 19.3326 19.5215C19.3326 19.1148 19.13 18.6268 18.5606 18.2001C18.218 17.9428 17.7953 17.7521 17.3326 17.6388Z"
          fill="url(#paint0_linear_554_22354)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_554_22354"
            x1="11.5"
            y1="4"
            x2="16.8786"
            y2="36.2702"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFAA7F" />
            <stop offset="0.489583" stopColor="#FF844F" />
            <stop offset="1" stopColor="#FF4205" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Open data marketplaces',
    copy: 'Facilitate transparent and secure data exchanges between individuals and organizations, enabling users to monetize or share their data on their terms.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.item__icon}
        viewBox="0 0 33 33"
        fill="none"
      >
        <path
          d="M16.667 15.5215C23.2937 15.5215 28.667 12.6108 28.667 9.02148C28.667 5.43215 23.2937 2.52148 16.667 2.52148C10.0403 2.52148 4.66699 5.43215 4.66699 9.02148C4.66699 12.6108 10.0403 15.5215 16.667 15.5215Z"
          fill="url(#paint0_linear_554_22369)"
        />
        <path
          d="M26.1043 15.3763C23.587 16.7403 20.247 17.5217 16.667 17.5217C13.087 17.5217 9.74566 16.7403 7.22966 15.3763C6.30321 14.8844 5.45155 14.2631 4.70033 13.531C4.67899 13.6923 4.66699 13.8563 4.66699 14.0217C4.66699 17.611 10.0403 20.5217 16.667 20.5217C23.2937 20.5217 28.667 17.611 28.667 14.0217C28.667 13.8563 28.655 13.6923 28.6337 13.531C27.8825 14.2631 27.0308 14.8845 26.1043 15.3763Z"
          fill="url(#paint1_linear_554_22369)"
        />
        <path
          d="M16.667 22.5217C20.247 22.5217 23.587 21.7403 26.1043 20.3763C27.0308 19.8845 27.8825 19.2631 28.6337 18.531C28.655 18.6923 28.667 18.8563 28.667 19.0217C28.667 22.611 23.2937 25.5217 16.667 25.5217C10.0403 25.5217 4.66699 22.611 4.66699 19.0217C4.66699 18.8563 4.67899 18.6923 4.70033 18.531C5.45154 19.2631 6.3032 19.8844 7.22966 20.3763C9.74566 21.7403 13.087 22.5217 16.667 22.5217Z"
          fill="url(#paint2_linear_554_22369)"
        />
        <path
          d="M26.1043 25.3763C23.587 26.7403 20.247 27.5217 16.667 27.5217C13.087 27.5217 9.74566 26.7403 7.22966 25.3763C6.3032 24.8845 5.45154 24.2631 4.70033 23.531C4.67899 23.6923 4.66699 23.8563 4.66699 24.0217C4.66699 27.611 10.0403 30.5217 16.667 30.5217C23.2937 30.5217 28.667 27.611 28.667 24.0217C28.667 23.8563 28.655 23.6923 28.6337 23.531C27.8825 24.2631 27.0308 24.8845 26.1043 25.3763Z"
          fill="url(#paint3_linear_554_22369)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_554_22369"
            x1="9"
            y1="3"
            x2="16.97"
            y2="31.0085"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFAA7F" />
            <stop offset="0.489583" stopColor="#FF844F" />
            <stop offset="1" stopColor="#FF4205" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_554_22369"
            x1="9"
            y1="3"
            x2="16.97"
            y2="31.0085"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFAA7F" />
            <stop offset="0.489583" stopColor="#FF844F" />
            <stop offset="1" stopColor="#FF4205" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_554_22369"
            x1="9"
            y1="3"
            x2="16.97"
            y2="31.0085"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFAA7F" />
            <stop offset="0.489583" stopColor="#FF844F" />
            <stop offset="1" stopColor="#FF4205" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_554_22369"
            x1="9"
            y1="3"
            x2="16.97"
            y2="31.0085"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFAA7F" />
            <stop offset="0.489583" stopColor="#FF844F" />
            <stop offset="1" stopColor="#FF4205" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

const LandingUseCases = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>Versatile and Simple Tools for Any Use Case</h2>
          <p className={styles.subtitle}>
            Lit is designed to seamlessly integrate into your existing stack,
            enabling a diverse range of use cases, from private web3 social to DeFi automation to &rdquo;Wallet-as-a-Service&rdquo; infrastructure and beyond.
          </p>
        </div>
        <div className={styles.grid}>
          {cases.map((item, index) => (
            <div className={styles.item} key={index}>
              {item.icon}
              <h6 className={styles.item__title}>{item.title}</h6>
              <p className={styles.item__copy}>{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingUseCases;

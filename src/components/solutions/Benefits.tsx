import React, { useRef } from "react";
import { H4, P } from "../global/Typography";
import Divider from "../global/Divider";
import Image from "next/image";
import benefits from "@images/benefits.png";
import newWhyUs from "@images/new-why-us.png";
import { title } from "process";

const creditScoreBenefitItems = [
  {
    title: "Enhanced Decision Making",
    description:
      "Make well-informed lending decisions with a comprehensive understanding of each borrower's credit risk. Our solution provides deeper insights into borrower behavior and potential.",
    Icon: (
      <svg
        width="37"
        height="36"
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23 24C28.799 24 33.5 19.299 33.5 13.5C33.5 7.70101 28.799 3 23 3C17.201 3 12.5 7.70101 12.5 13.5C12.5 19.299 17.201 24 23 24Z"
          stroke="#0BE781"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M14 33C19.799 33 24.5 28.299 24.5 22.5C24.5 16.701 19.799 12 14 12C8.20101 12 3.5 16.701 3.5 22.5C3.5 28.299 8.20101 33 14 33Z"
          stroke="#0BE781"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </svg>
    ),
  },
  {
    title: "Increased Inclusivity",
    description:
      "Assess creditworthiness for individuals who may be overlooked by traditional credit scoring models by leveraging alternative data. Promote financial inclusion and expand your customer base.",
    Icon: (
      <svg
        width="37"
        height="36"
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.5011 10.74C27.4111 10.725 27.3061 10.725 27.2161 10.74C25.1461 10.665 23.4961 8.97 23.4961 6.87C23.4961 4.725 25.2211 3 27.3661 3C29.5111 3 31.2361 4.74 31.2361 6.87C31.2211 8.97 29.5711 10.665 27.5011 10.74Z"
          stroke="#0BE781"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.9552 21.6602C28.0102 22.0052 30.2752 21.6452 31.8652 20.5802C33.9802 19.1702 33.9802 16.8602 31.8652 15.4502C30.2602 14.3852 27.9652 14.0252 25.9102 14.3852"
          stroke="#0BE781"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.45375 10.74C9.54375 10.725 9.64875 10.725 9.73875 10.74C11.8088 10.665 13.4587 8.97 13.4587 6.87C13.4587 4.725 11.7338 3 9.58875 3C7.44375 3 5.71875 4.74 5.71875 6.87C5.73375 8.97 7.38375 10.665 9.45375 10.74Z"
          stroke="#0BE781"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.0002 21.6602C8.94515 22.0052 6.68016 21.6452 5.09016 20.5802C2.97516 19.1702 2.97516 16.8602 5.09016 15.4502C6.69516 14.3852 8.99015 14.0252 11.0452 14.3852"
          stroke="#0BE781"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18.4972 21.9431C18.4072 21.9281 18.3022 21.9281 18.2122 21.9431C16.1422 21.8681 14.4922 20.1731 14.4922 18.0731C14.4922 15.9281 16.2172 14.2031 18.3622 14.2031C20.5072 14.2031 22.2322 15.9431 22.2322 18.0731C22.2172 20.1731 20.5672 21.8831 18.4972 21.9431Z"
          stroke="#0BE781"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.1331 26.6691C12.0181 28.0791 12.0181 30.3891 14.1331 31.7991C16.5331 33.4041 20.4631 33.4041 22.8631 31.7991C24.9781 30.3891 24.9781 28.0791 22.8631 26.6691C20.4781 25.0791 16.5331 25.0791 14.1331 26.6691Z"
          stroke="#0BE781"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Data Privacy and Security",
    description:
      "Ensure the highest level of data privacy and security with our robust data protection measures. We comply with all relevant regulations and standards to protect borrower information.",
    Icon: (
      <svg
        width="37"
        height="36"
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.2333 3.34484L8.74828 6.16484C7.02328 6.80984 5.61328 8.84984 5.61328 10.6798V21.8248C5.61328 23.5948 6.78328 25.9198 8.20828 26.9848L14.6583 31.7998C16.7733 33.3898 20.2533 33.3898 22.3683 31.7998L28.8183 26.9848C30.2433 25.9198 31.4133 23.5948 31.4133 21.8248V10.6798C31.4133 8.83484 30.0033 6.79484 28.2783 6.14984L20.7933 3.34484C19.5183 2.87984 17.4783 2.87984 16.2333 3.34484Z"
          stroke="#0BE781"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.0742 17.8045L16.4892 20.2195L22.9392 13.7695"
          stroke="#0BE781"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];
const fraudBenefitItems = [
  {
    title: "Enhanced Security",
    description:
      "Protect your business and customers with cutting-edge fraud detection technology.",
    Icon: (
      <svg
        width="37"
        height="36"
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.2333 3.34484L8.74828 6.16484C7.02328 6.80984 5.61328 8.84984 5.61328 10.6798V21.8248C5.61328 23.5948 6.78328 25.9198 8.20828 26.9848L14.6583 31.7998C16.7733 33.3898 20.2533 33.3898 22.3683 31.7998L28.8183 26.9848C30.2433 25.9198 31.4133 23.5948 31.4133 21.8248V10.6798C31.4133 8.83484 30.0033 6.79484 28.2783 6.14984L20.7933 3.34484C19.5183 2.87984 17.4783 2.87984 16.2333 3.34484Z"
          stroke="#0BE781"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.0742 17.8045L16.4892 20.2195L22.9392 13.7695"
          stroke="#0BE781"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Reduced Fraud Losses",
    description:
      "Minimize financial losses by identifying and stopping fraud early.",
    Icon: (
      <svg
        width="37"
        height="36"
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.5016 34.1402C16.8666 34.1402 15.2466 33.6602 13.9716 32.7152L7.52156 27.9002C5.81156 26.6252 4.47656 23.9552 4.47656 21.8402V10.6802C4.47656 8.37016 6.17156 5.91016 8.34656 5.10016L15.8316 2.29516C17.3166 1.74016 19.6566 1.74016 21.1416 2.29516L28.6266 5.10016C30.8016 5.91016 32.4966 8.37016 32.4966 10.6802V21.8252C32.4966 23.9552 31.1616 26.6102 29.4516 27.8852L23.0016 32.7002C21.7566 33.6602 20.1366 34.1402 18.5016 34.1402ZM16.6266 4.41016L9.14156 7.21516C7.86656 7.69516 6.74156 9.31516 6.74156 10.6952V21.8402C6.74156 23.2652 7.74656 25.2602 8.87156 26.1002L15.3216 30.9152C17.0466 32.2052 19.9566 32.2052 21.6966 30.9152L28.1466 26.1002C29.2866 25.2452 30.2766 23.2652 30.2766 21.8402V10.6802C30.2766 9.31516 29.1516 7.69516 27.8766 7.20016L20.3916 4.39516C19.3716 4.03516 17.6316 4.03516 16.6266 4.41016Z"
          fill="#0BE781"
        />
        <path
          d="M21.7267 21.2853C21.4417 21.2853 21.1567 21.1803 20.9317 20.9553L14.5567 14.5803C14.1217 14.1453 14.1217 13.4253 14.5567 12.9903C14.9917 12.5553 15.7117 12.5553 16.1467 12.9903L22.5217 19.3653C22.9567 19.8003 22.9567 20.5203 22.5217 20.9553C22.2967 21.1653 22.0117 21.2853 21.7267 21.2853Z"
          fill="#0BE781"
        />
        <path
          d="M15.2736 21.3439C14.9886 21.3439 14.7036 21.2389 14.4786 21.0139C14.0436 20.5789 14.0436 19.8589 14.4786 19.4239L20.8536 13.0489C21.2886 12.6139 22.0086 12.6139 22.4436 13.0489C22.8786 13.4839 22.8786 14.2039 22.4436 14.6389L16.0686 21.0139C15.8586 21.2389 15.5586 21.3439 15.2736 21.3439Z"
          fill="#0BE781"
        />
      </svg>
    ),
  },
  {
    title: "Operational Efficiency",
    description:
      "Automate fraud detection processes, freeing up your team to focus on other critical tasks.",
    Icon: (
      <svg
        width="37"
        height="36"
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.5 21.125C16.775 21.125 15.375 19.725 15.375 18C15.375 16.275 16.775 14.875 18.5 14.875C20.225 14.875 21.625 16.275 21.625 18C21.625 19.725 20.225 21.125 18.5 21.125ZM18.5 16.125C17.4667 16.125 16.625 16.9667 16.625 18C16.625 19.0333 17.4667 19.875 18.5 19.875C19.5333 19.875 20.375 19.0333 20.375 18C20.375 16.9667 19.5333 16.125 18.5 16.125Z"
          fill="#0BE781"
        />
        <path
          d="M21.1763 26.4932C21.0013 26.4932 20.8263 26.4682 20.6513 26.4265C20.1346 26.2849 19.7013 25.9599 19.4263 25.5015L19.3263 25.3349C18.8346 24.4849 18.1596 24.4849 17.668 25.3349L17.5763 25.4932C17.3013 25.9599 16.868 26.2932 16.3513 26.4265C15.8263 26.5682 15.2846 26.4932 14.8263 26.2182L13.393 25.3932C12.8846 25.1015 12.518 24.6265 12.3596 24.0515C12.2096 23.4765 12.2846 22.8849 12.5763 22.3765C12.818 21.9515 12.8846 21.5682 12.743 21.3265C12.6013 21.0849 12.243 20.9432 11.7513 20.9432C10.5346 20.9432 9.54297 19.9515 9.54297 18.7349V17.2682C9.54297 16.0515 10.5346 15.0599 11.7513 15.0599C12.243 15.0599 12.6013 14.9182 12.743 14.6765C12.8846 14.4349 12.8263 14.0515 12.5763 13.6265C12.2846 13.1182 12.2096 12.5182 12.3596 11.9515C12.5096 11.3765 12.8763 10.9015 13.393 10.6099L14.8346 9.78487C15.7763 9.22654 17.018 9.55154 17.5846 10.5099L17.6846 10.6765C18.1763 11.5265 18.8513 11.5265 19.343 10.6765L19.4346 10.5182C20.0013 9.55154 21.243 9.22654 22.193 9.79321L23.6263 10.6182C24.1346 10.9099 24.5013 11.3849 24.6596 11.9599C24.8096 12.5349 24.7346 13.1265 24.443 13.6349C24.2013 14.0599 24.1346 14.4432 24.2763 14.6849C24.418 14.9265 24.7763 15.0682 25.268 15.0682C26.4846 15.0682 27.4763 16.0599 27.4763 17.2765V18.7432C27.4763 19.9599 26.4846 20.9515 25.268 20.9515C24.7763 20.9515 24.418 21.0932 24.2763 21.3349C24.1346 21.5765 24.193 21.9599 24.443 22.3849C24.7346 22.8932 24.818 23.4932 24.6596 24.0599C24.5096 24.6349 24.143 25.1099 23.6263 25.4015L22.1846 26.2265C21.868 26.4015 21.5263 26.4932 21.1763 26.4932ZM18.5013 23.4099C19.243 23.4099 19.9346 23.8765 20.4096 24.7015L20.5013 24.8599C20.6013 25.0349 20.768 25.1599 20.968 25.2099C21.168 25.2599 21.368 25.2349 21.5346 25.1349L22.9763 24.3015C23.193 24.1765 23.3596 23.9682 23.4263 23.7182C23.493 23.4682 23.4596 23.2099 23.3346 22.9932C22.8596 22.1765 22.8013 21.3349 23.168 20.6932C23.5346 20.0515 24.293 19.6849 25.243 19.6849C25.7763 19.6849 26.2013 19.2599 26.2013 18.7265V17.2599C26.2013 16.7349 25.7763 16.3015 25.243 16.3015C24.293 16.3015 23.5346 15.9349 23.168 15.2932C22.8013 14.6515 22.8596 13.8099 23.3346 12.9932C23.4596 12.7765 23.493 12.5182 23.4263 12.2682C23.3596 12.0182 23.2013 11.8182 22.9846 11.6849L21.543 10.8599C21.1846 10.6432 20.7096 10.7682 20.493 11.1349L20.4013 11.2932C19.9263 12.1182 19.2346 12.5849 18.493 12.5849C17.7513 12.5849 17.0596 12.1182 16.5846 11.2932L16.493 11.1265C16.2846 10.7765 15.818 10.6515 15.4596 10.8599L14.018 11.6932C13.8013 11.8182 13.6346 12.0265 13.568 12.2765C13.5013 12.5265 13.5346 12.7849 13.6596 13.0015C14.1346 13.8182 14.193 14.6599 13.8263 15.3015C13.4596 15.9432 12.7013 16.3099 11.7513 16.3099C11.218 16.3099 10.793 16.7349 10.793 17.2682V18.7349C10.793 19.2599 11.218 19.6932 11.7513 19.6932C12.7013 19.6932 13.4596 20.0599 13.8263 20.7015C14.193 21.3432 14.1346 22.1849 13.6596 23.0015C13.5346 23.2182 13.5013 23.4765 13.568 23.7265C13.6346 23.9765 13.793 24.1765 14.0096 24.3099L15.4513 25.1349C15.6263 25.2432 15.8346 25.2682 16.0263 25.2182C16.2263 25.1682 16.393 25.0349 16.5013 24.8599L16.593 24.7015C17.068 23.8849 17.7596 23.4099 18.5013 23.4099Z"
          fill="#0BE781"
        />
        <path
          d="M22.325 33.63C21.83 33.63 21.365 33.3 21.23 32.79C21.065 32.19 21.425 31.575 22.04 31.41C28.13 29.805 32.375 24.285 32.375 17.985C32.375 10.335 26.15 4.11 18.5 4.11C12.005 4.11 7.745 7.905 5.75 10.2H10.16C10.775 10.2 11.285 10.71 11.285 11.325C11.285 11.94 10.79 12.465 10.16 12.465H3.515C3.44 12.465 3.305 12.45 3.2 12.42C3.065 12.375 2.945 12.315 2.84 12.24C2.705 12.15 2.6 12.03 2.525 11.895C2.45 11.76 2.39 11.595 2.375 11.43C2.375 11.385 2.375 11.355 2.375 11.31V4.5C2.375 3.885 2.885 3.375 3.5 3.375C4.115 3.375 4.625 3.885 4.625 4.5V8.085C7.07 5.46 11.675 1.875 18.5 1.875C27.395 1.875 34.625 9.105 34.625 18C34.625 25.32 29.69 31.74 22.61 33.6C22.52 33.615 22.415 33.63 22.325 33.63Z"
          fill="#0BE781"
        />
        <path
          d="M17.435 34.095C17.405 34.095 17.375 34.08 17.36 34.08C15.74 33.975 14.15 33.615 12.65 33.03C12.215 32.865 11.915 32.43 11.93 31.965C11.93 31.83 11.96 31.695 12.005 31.575C12.23 31.005 12.905 30.72 13.46 30.93C14.765 31.44 16.13 31.74 17.51 31.845C18.095 31.875 18.56 32.385 18.56 32.985L18.545 33.045C18.515 33.63 18.02 34.095 17.435 34.095ZM9.17 30.87C8.915 30.87 8.675 30.78 8.465 30.63C7.205 29.61 6.095 28.425 5.195 27.105C5.06 26.91 4.985 26.7 4.985 26.475C4.985 26.1 5.165 25.755 5.48 25.545C5.975 25.2 6.695 25.335 7.04 25.815C7.04 25.83 7.04 25.83 7.04 25.83C7.055 25.845 7.07 25.875 7.085 25.89C7.865 27.015 8.81 28.02 9.875 28.86C10.13 29.07 10.295 29.385 10.295 29.73C10.295 29.985 10.22 30.24 10.055 30.45C9.83 30.72 9.515 30.87 9.17 30.87ZM4.16 23.55C3.665 23.55 3.23 23.235 3.095 22.77C2.615 21.225 2.375 19.62 2.375 18V17.985C2.39 17.37 2.885 16.875 3.5 16.875C4.115 16.875 4.625 17.385 4.625 18C4.625 19.41 4.835 20.79 5.24 22.095C5.27 22.215 5.285 22.32 5.285 22.44C5.285 22.92 4.97 23.355 4.49 23.505C4.385 23.535 4.28 23.55 4.16 23.55Z"
          fill="#0BE781"
        />
      </svg>
    ),
  },
  {
    title: "Scalability",
    description:
      "Our solution scales with your business, providing robust fraud protection as you grow.",
    Icon: (
      <svg
        width="37"
        height="36"
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 11.625C31.385 11.625 30.875 11.115 30.875 10.5V5.625H26C25.385 5.625 24.875 5.115 24.875 4.5C24.875 3.885 25.385 3.375 26 3.375H32C32.615 3.375 33.125 3.885 33.125 4.5V10.5C33.125 11.115 32.615 11.625 32 11.625Z"
          fill="#0BE781"
        />
        <path
          d="M23.0002 14.6252C22.7152 14.6252 22.4302 14.5202 22.2052 14.2952C21.7702 13.8602 21.7702 13.1402 22.2052 12.7052L31.2052 3.70516C31.6402 3.27016 32.3602 3.27016 32.7952 3.70516C33.2302 4.14016 33.2302 4.86024 32.7952 5.29524L23.7952 14.2952C23.5702 14.5202 23.2852 14.6252 23.0002 14.6252Z"
          fill="#0BE781"
        />
        <path
          d="M11 32.625H5C4.385 32.625 3.875 32.115 3.875 31.5V25.5C3.875 24.885 4.385 24.375 5 24.375C5.615 24.375 6.125 24.885 6.125 25.5V30.375H11C11.615 30.375 12.125 30.885 12.125 31.5C12.125 32.115 11.615 32.625 11 32.625Z"
          fill="#0BE781"
        />
        <path
          d="M5.0002 32.6252C4.7152 32.6252 4.43016 32.5202 4.20516 32.2952C3.77016 31.8602 3.77016 31.1402 4.20516 30.7052L13.2052 21.7052C13.6402 21.2702 14.3602 21.2702 14.7952 21.7052C15.2302 22.1402 15.2302 22.8602 14.7952 23.2952L5.79524 32.2952C5.57024 32.5202 5.2852 32.6252 5.0002 32.6252Z"
          fill="#0BE781"
        />
        <path
          d="M3.80002 22.125C3.27502 22.125 2.80996 21.75 2.70496 21.225C2.49496 20.175 2.375 19.08 2.375 18C2.375 9.105 9.605 1.875 18.5 1.875C19.595 1.875 20.69 1.97996 21.755 2.20496C22.37 2.32496 22.76 2.92496 22.64 3.52496C22.52 4.13996 21.905 4.515 21.32 4.41C20.405 4.23 19.46 4.125 18.515 4.125C10.865 4.125 4.64001 10.35 4.64001 18C4.64001 18.93 4.73002 19.875 4.92502 20.775C5.04502 21.39 4.65498 21.975 4.03998 22.095C3.94998 22.125 3.87502 22.125 3.80002 22.125Z"
          fill="#0BE781"
        />
        <path
          d="M18.5015 34.1245C17.4065 34.1245 16.3115 34.0195 15.2465 33.7945C14.6315 33.6745 14.2415 33.0745 14.3615 32.4745C14.4815 31.8595 15.0965 31.4844 15.6815 31.5894C16.5965 31.7694 17.5415 31.8745 18.4865 31.8745C26.1365 31.8745 32.3615 25.6495 32.3615 17.9995C32.3615 17.0695 32.2715 16.1395 32.0915 15.2245C31.9715 14.6095 32.3616 14.0245 32.9766 13.9045C33.5766 13.7845 34.1766 14.1744 34.2966 14.7894C34.5066 15.8394 34.6115 16.9195 34.6115 17.9995C34.6265 26.8945 27.3965 34.1245 18.5015 34.1245Z"
          fill="#0BE781"
        />
      </svg>
    ),
  },
];

const SingleBenefit = ({
  items,
}: {
  items: { title: string; description: string; Icon: JSX.Element }[];
}) => {
  return (
    <div className="mt-14 space-y-12 px-6 md:px-0">
      {items.map((item, index) => (
        <div key={index} className="flex gap-6">
          <div>{item.Icon}</div>
          <div className="space-y-4">
            <h6 className="text-lg font-semibold text-primaryGreen lg:text-xl lg:font-bold">
              {item.title}
            </h6>
            <P className="!text-base !font-normal !text-white/70">
              {item.description}
            </P>
          </div>
        </div>
      ))}
    </div>
  );
};

const Benefits = ({ type }: { type: string }) => {
  const isCreditScoring = type === "credit-risk-score";
  const dataItems = isCreditScoring
    ? creditScoreBenefitItems
    : fraudBenefitItems;
  return (
    <section className="relative mb-14 bg-primaryBlack pt-20 lg:mb-24 lg:py-28 lg:text-center">
      {/* <div className='w-fit hidden lg:block h-fit absolute top-0 left-0  '>
				<svg width="100" height="95" viewBox="0 0 100 95" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.00110788 0.218966L100.001 -0.000102199C100.115 51.9179 55.4389 94.0978 0.207031 94.2188L0.00110788 0.218966Z" fill="#0BE781" />
				</svg>

			</div> */}

      <div className="container mx-auto items-center gap-32 space-y-20 xl:flex xl:space-y-0 xl:text-left">
        <div className="lg:flex-1">
          <H4 className="px-6 !text-offWhite sm:px-0">
            <span className="text-primaryGreen">Benefits</span> of our solution
          </H4>
          <Divider height={12} />
          <div className="mx-auto lg:w-5/6 lg:text-left xl:mx-0">
            <SingleBenefit items={dataItems} />
          </div>
        </div>

        <Image
          src={benefits}
          alt="people typing on laptop"
          className="mx-auto md:flex-1"
        />
      </div>

      {/* <div className='w-fit hidden lg:block h-fit absolute bottom-10 right-0  '>
				<svg width="48" height="63" viewBox="0 0 48 63" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5.50764e-06 -3.8147e-06L0 63L48 31.4956L5.50764e-06 -3.8147e-06Z" fill="#12B74A" />
				</svg>
			</div> */}
    </section>
  );
};

export default Benefits;

import React from 'react'
import { H4, P } from '../global/Typography'
import Divider from '../global/Divider'
import customer1 from '@images/customer1.png'
import Image from 'next/image'

const ClientFeedback = () => {
	return (
    <div className="px-4 pb-32 lg:pb-40">
      {/* <div className='grid md:grid-cols-2 grid-cols-1 gap-32 max-w-6xl mx-auto items-center'> */}
      <div className="mx-auto max-w-6xl items-center gap-20 md:flex">
        <div className="mx-auto max-w-lg text-center md:w-2/5 lg:text-left">
          <H4 className="">
            What <span className="text-primaryGreen">our clients</span> say
            about us
          </H4>
          <Divider height={48} />
          <div className="hidden gap-4 md:flex">
            <button className="flex h-16 w-16 items-center justify-center rounded-lg bg-buttonGray">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27 16H5"
                  stroke="#011556"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 7L5 16L14 25"
                  stroke="#011556"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <button className="flex h-16 w-16 items-center justify-center rounded-lg bg-primaryGreen/15">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.2928 25.7071C17.1054 25.5196 17.0001 25.2652 17.0001 25C17.0001 24.7348 17.1054 24.4805 17.2928 24.2929L24.5858 17H5C4.73478 17 4.48043 16.8947 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16C4 15.7348 4.10536 15.4805 4.29289 15.2929C4.48043 15.1054 4.73478 15 5 15H24.5858L17.2928 7.70712C17.2 7.61425 17.1263 7.50401 17.0761 7.38268C17.0258 7.26135 17 7.1313 17 6.99998C17 6.86866 17.0259 6.73862 17.0761 6.61729C17.1264 6.49596 17.2 6.38573 17.2929 6.29287C17.3858 6.20001 17.496 6.12636 17.6173 6.07611C17.7387 6.02586 17.8687 5.99999 18 6C18.1314 6.00001 18.2614 6.02588 18.3827 6.07614C18.5041 6.1264 18.6143 6.20007 18.7072 6.29293L27.7072 15.2929C27.7104 15.2962 27.7131 15.2998 27.7163 15.3031C27.7361 15.3233 27.7552 15.3441 27.7732 15.366C27.7832 15.3782 27.792 15.3911 27.8014 15.4037C27.8115 15.4173 27.822 15.4306 27.8315 15.4447C27.8412 15.4592 27.8497 15.4743 27.8586 15.4893C27.8664 15.5023 27.8746 15.5151 27.8818 15.5286C27.8898 15.5436 27.8967 15.5591 27.9039 15.5744C27.9107 15.5887 27.9178 15.6027 27.9238 15.6173C27.9299 15.6321 27.9349 15.6472 27.9403 15.6623C27.9459 15.678 27.952 15.6936 27.9569 15.7097C27.9614 15.7247 27.9647 15.7399 27.9685 15.755C27.9727 15.7715 27.9773 15.7879 27.9806 15.8047C27.9841 15.8221 27.9861 15.8397 27.9887 15.8572C27.9908 15.872 27.9936 15.8864 27.995 15.9013C27.9983 15.9342 28 15.9671 28 16C28 16.033 27.9983 16.0659 27.995 16.0987C27.9936 16.1136 27.9908 16.1281 27.9887 16.1428C27.9862 16.1604 27.9841 16.1779 27.9806 16.1954C27.9773 16.2122 27.9727 16.2285 27.9685 16.245C27.9647 16.2602 27.9614 16.2754 27.9569 16.2903C27.952 16.3064 27.9459 16.322 27.9403 16.3378C27.9349 16.3528 27.9299 16.3679 27.9238 16.3827C27.9178 16.3973 27.9106 16.4113 27.9039 16.4256C27.8967 16.4409 27.8898 16.4564 27.8818 16.4715C27.8746 16.4849 27.8664 16.4977 27.8586 16.5108C27.8497 16.5257 27.8412 16.5409 27.8315 16.5554C27.822 16.5695 27.8115 16.5828 27.8014 16.5963C27.792 16.6089 27.7832 16.6219 27.7732 16.6341C27.7549 16.6563 27.7354 16.6775 27.7153 16.6981C27.7124 16.701 27.7101 16.7042 27.7072 16.7071L18.7072 25.7071C18.6143 25.8 18.504 25.8736 18.3827 25.9239C18.2614 25.9742 18.1313 26 18 26C17.8687 26 17.7386 25.9742 17.6173 25.9239C17.496 25.8736 17.3857 25.8 17.2928 25.7071Z"
                  fill="#011556"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative space-y-[14px] rounded-2xl border-[6px] border-primaryGreen p-4 md:w-3/5 lg:space-y-8 lg:border-8 lg:p-12">
          {/* stars */}
          <div className="flex gap-2">
            {[...Array(5)].map((_, index) => (
              <>
                <svg
                  key={index}
                  width="36"
                  height="32"
                  viewBox="0 0 36 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden lg:block"
                >
                  <path
                    d="M19.4424 0.994252C18.8001 -0.112665 17.2016 -0.11267 16.5593 0.994252L12.0359 8.78977C11.7186 9.33657 11.1701 9.70972 10.545 9.80414L2.06785 11.0845C0.64405 11.2996 0.144618 13.0972 1.25346 14.0159L7.56861 19.2479C8.15318 19.7323 8.42805 20.4962 8.28605 21.2419L6.6341 29.9172C6.37296 31.2885 7.81261 32.3541 9.04785 31.7037L17.0302 27.5006C17.6378 27.1807 18.3639 27.1807 18.9715 27.5006L26.9538 31.7037C28.1891 32.3541 29.6287 31.2885 29.3676 29.9172L27.7156 21.2419C27.5736 20.4962 27.8485 19.7323 28.4331 19.2479L34.7482 14.0159C35.857 13.0972 35.3576 11.2996 33.9338 11.0845L25.4566 9.80414C24.8315 9.70972 24.2831 9.33657 23.9658 8.78977L19.4424 0.994252Z"
                    fill="#FF8800"
                  />
                </svg>
                <svg
                  key={index}
                  width="16"
                  height="16"
                  viewBox="0 0 36 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:hidden"
                >
                  <path
                    d="M19.4424 0.994252C18.8001 -0.112665 17.2016 -0.11267 16.5593 0.994252L12.0359 8.78977C11.7186 9.33657 11.1701 9.70972 10.545 9.80414L2.06785 11.0845C0.64405 11.2996 0.144618 13.0972 1.25346 14.0159L7.56861 19.2479C8.15318 19.7323 8.42805 20.4962 8.28605 21.2419L6.6341 29.9172C6.37296 31.2885 7.81261 32.3541 9.04785 31.7037L17.0302 27.5006C17.6378 27.1807 18.3639 27.1807 18.9715 27.5006L26.9538 31.7037C28.1891 32.3541 29.6287 31.2885 29.3676 29.9172L27.7156 21.2419C27.5736 20.4962 27.8485 19.7323 28.4331 19.2479L34.7482 14.0159C35.857 13.0972 35.3576 11.2996 33.9338 11.0845L25.4566 9.80414C24.8315 9.70972 24.2831 9.33657 23.9658 8.78977L19.4424 0.994252Z"
                    fill="#FF8800"
                  />
                </svg>
              </>
            ))}
          </div>

          {/* Desktop */}
          <P className="hidden lg:block">
            Mixed feelings but adequate results. Pros: technical skills &
            Intuition about colors, fonts, & layout styles. Cons: Communication,
            English, Detail Orientation, Creativity, Following the Brief (Style
            guide, sample website, text requested). Off the mark 2 day delivery,
            and 5-days of revision for one landing (good) page.
          </P>

          {/* Mobile */}
          <P className="lg:hidden">
            Data analysis software is a type of software tool used for data
            analysis and reporting. It is designed to help businesses,
            organizations.
          </P>

          <div className="flex w-fit items-center justify-between gap-3">
            <div>
              <Image src={customer1} alt="customer" />
            </div>
            <div>
              <P className="leading-6 !text-inputLabel">Arlene McCoy</P>
              <P className="leading-6">Golio</P>
            </div>
          </div>

          <div className="absolute bottom-2 right-0 ml-auto mr-2 w-fit md:mr-10">
            <svg
              width="48"
              height="32"
              viewBox="0 0 104 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:hidden"
            >
              <path
                opacity="0.2"
                d="M43.875 58.5H16.25C15.388 58.5 14.5614 58.1576 13.9519 57.5481C13.3424 56.9386 13 56.112 13 55.25V29.25C13 28.388 13.3424 27.5614 13.9519 26.9519C14.5614 26.3424 15.388 26 16.25 26H40.625C41.487 26 42.3136 26.3424 42.9231 26.9519C43.5326 27.5614 43.875 28.388 43.875 29.25V58.5Z"
                fill="#0BE781"
              />
              <path
                opacity="0.2"
                d="M91 58.5H63.375C62.513 58.5 61.6864 58.1576 61.0769 57.5481C60.4674 56.9386 60.125 56.112 60.125 55.25V29.25C60.125 28.388 60.4674 27.5614 61.0769 26.9519C61.6864 26.3424 62.513 26 63.375 26H87.75C88.612 26 89.4386 26.3424 90.0481 26.9519C90.6576 27.5614 91 28.388 91 29.25V58.5Z"
                fill="#0BE781"
              />
              <path
                d="M43.875 58.5H16.25C15.388 58.5 14.5614 58.1576 13.9519 57.5481C13.3424 56.9386 13 56.112 13 55.25V29.25C13 28.388 13.3424 27.5614 13.9519 26.9519C14.5614 26.3424 15.388 26 16.25 26H40.625C41.487 26 42.3136 26.3424 42.9231 26.9519C43.5326 27.5614 43.875 28.388 43.875 29.25V65C43.875 69.3098 42.163 73.443 39.1155 76.4905C36.068 79.538 31.9348 81.25 27.625 81.25"
                stroke="#0BE781"
                stroke-width="6.70968"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M91 58.5H63.375C62.513 58.5 61.6864 58.1576 61.0769 57.5481C60.4674 56.9386 60.125 56.112 60.125 55.25V29.25C60.125 28.388 60.4674 27.5614 61.0769 26.9519C61.6864 26.3424 62.513 26 63.375 26H87.75C88.612 26 89.4386 26.3424 90.0481 26.9519C90.6576 27.5614 91 28.388 91 29.25V65C91 69.3098 89.288 73.443 86.2405 76.4905C83.193 79.538 79.0598 81.25 74.75 81.25"
                stroke="#0BE781"
                stroke-width="6.70968"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            {/* Mobile */}
            <svg
              width="104"
              height="104"
              viewBox="0 0 104 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block"
            >
              <path
                opacity="0.2"
                d="M43.875 58.5H16.25C15.388 58.5 14.5614 58.1576 13.9519 57.5481C13.3424 56.9386 13 56.112 13 55.25V29.25C13 28.388 13.3424 27.5614 13.9519 26.9519C14.5614 26.3424 15.388 26 16.25 26H40.625C41.487 26 42.3136 26.3424 42.9231 26.9519C43.5326 27.5614 43.875 28.388 43.875 29.25V58.5Z"
                fill="#0BE781"
              />
              <path
                opacity="0.2"
                d="M91 58.5H63.375C62.513 58.5 61.6864 58.1576 61.0769 57.5481C60.4674 56.9386 60.125 56.112 60.125 55.25V29.25C60.125 28.388 60.4674 27.5614 61.0769 26.9519C61.6864 26.3424 62.513 26 63.375 26H87.75C88.612 26 89.4386 26.3424 90.0481 26.9519C90.6576 27.5614 91 28.388 91 29.25V58.5Z"
                fill="#0BE781"
              />
              <path
                d="M43.875 58.5H16.25C15.388 58.5 14.5614 58.1576 13.9519 57.5481C13.3424 56.9386 13 56.112 13 55.25V29.25C13 28.388 13.3424 27.5614 13.9519 26.9519C14.5614 26.3424 15.388 26 16.25 26H40.625C41.487 26 42.3136 26.3424 42.9231 26.9519C43.5326 27.5614 43.875 28.388 43.875 29.25V65C43.875 69.3098 42.163 73.443 39.1155 76.4905C36.068 79.538 31.9348 81.25 27.625 81.25"
                stroke="#0BE781"
                stroke-width="6.70968"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M91 58.5H63.375C62.513 58.5 61.6864 58.1576 61.0769 57.5481C60.4674 56.9386 60.125 56.112 60.125 55.25V29.25C60.125 28.388 60.4674 27.5614 61.0769 26.9519C61.6864 26.3424 62.513 26 63.375 26H87.75C88.612 26 89.4386 26.3424 90.0481 26.9519C90.6576 27.5614 91 28.388 91 29.25V65C91 69.3098 89.288 73.443 86.2405 76.4905C83.193 79.538 79.0598 81.25 74.75 81.25"
                stroke="#0BE781"
                stroke-width="6.70968"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="md:hidden">
          <Divider height={48} />
          <div className="mx-auto flex w-fit gap-4">
            <button className="flex h-16 w-16 items-center justify-center rounded-lg bg-buttonGray">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27 16H5"
                  stroke="#011556"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 7L5 16L14 25"
                  stroke="#011556"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <button className="flex h-16 w-16 items-center justify-center rounded-lg bg-primaryGreen/15">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.2928 25.7071C17.1054 25.5196 17.0001 25.2652 17.0001 25C17.0001 24.7348 17.1054 24.4805 17.2928 24.2929L24.5858 17H5C4.73478 17 4.48043 16.8947 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16C4 15.7348 4.10536 15.4805 4.29289 15.2929C4.48043 15.1054 4.73478 15 5 15H24.5858L17.2928 7.70712C17.2 7.61425 17.1263 7.50401 17.0761 7.38268C17.0258 7.26135 17 7.1313 17 6.99998C17 6.86866 17.0259 6.73862 17.0761 6.61729C17.1264 6.49596 17.2 6.38573 17.2929 6.29287C17.3858 6.20001 17.496 6.12636 17.6173 6.07611C17.7387 6.02586 17.8687 5.99999 18 6C18.1314 6.00001 18.2614 6.02588 18.3827 6.07614C18.5041 6.1264 18.6143 6.20007 18.7072 6.29293L27.7072 15.2929C27.7104 15.2962 27.7131 15.2998 27.7163 15.3031C27.7361 15.3233 27.7552 15.3441 27.7732 15.366C27.7832 15.3782 27.792 15.3911 27.8014 15.4037C27.8115 15.4173 27.822 15.4306 27.8315 15.4447C27.8412 15.4592 27.8497 15.4743 27.8586 15.4893C27.8664 15.5023 27.8746 15.5151 27.8818 15.5286C27.8898 15.5436 27.8967 15.5591 27.9039 15.5744C27.9107 15.5887 27.9178 15.6027 27.9238 15.6173C27.9299 15.6321 27.9349 15.6472 27.9403 15.6623C27.9459 15.678 27.952 15.6936 27.9569 15.7097C27.9614 15.7247 27.9647 15.7399 27.9685 15.755C27.9727 15.7715 27.9773 15.7879 27.9806 15.8047C27.9841 15.8221 27.9861 15.8397 27.9887 15.8572C27.9908 15.872 27.9936 15.8864 27.995 15.9013C27.9983 15.9342 28 15.9671 28 16C28 16.033 27.9983 16.0659 27.995 16.0987C27.9936 16.1136 27.9908 16.1281 27.9887 16.1428C27.9862 16.1604 27.9841 16.1779 27.9806 16.1954C27.9773 16.2122 27.9727 16.2285 27.9685 16.245C27.9647 16.2602 27.9614 16.2754 27.9569 16.2903C27.952 16.3064 27.9459 16.322 27.9403 16.3378C27.9349 16.3528 27.9299 16.3679 27.9238 16.3827C27.9178 16.3973 27.9106 16.4113 27.9039 16.4256C27.8967 16.4409 27.8898 16.4564 27.8818 16.4715C27.8746 16.4849 27.8664 16.4977 27.8586 16.5108C27.8497 16.5257 27.8412 16.5409 27.8315 16.5554C27.822 16.5695 27.8115 16.5828 27.8014 16.5963C27.792 16.6089 27.7832 16.6219 27.7732 16.6341C27.7549 16.6563 27.7354 16.6775 27.7153 16.6981C27.7124 16.701 27.7101 16.7042 27.7072 16.7071L18.7072 25.7071C18.6143 25.8 18.504 25.8736 18.3827 25.9239C18.2614 25.9742 18.1313 26 18 26C17.8687 26 17.7386 25.9742 17.6173 25.9239C17.496 25.8736 17.3857 25.8 17.2928 25.7071Z"
                  fill="#011556"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientFeedback
interface CalenderProps {}

export default function Calender(props: CalenderProps) {
  return (
    <div className="relative flex h-[1117px] w-[1728px] items-center overflow-clip bg-white pr-[1419px]">
      <div className="font-arial text-white">
        <div className="relative flex h-full w-full justify-center bg-[#208F3A] pb-[928px] pt-[100px]">
          <div className="absolute left-[18px] top-[212px] flex h-[305px] w-[42px] flex-col items-center justify-between gap-[63px]">
            <div className="flex w-full flex-col gap-[63px]">
              <div className="h-[29px] w-9">
                <svg
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 36 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 12.6 14.5 C 16.577 14.5 19.8 11.255 19.8 7.25 C 19.8 3.246 16.577 0 12.6 0 C 8.623 0 5.4 3.246 5.4 7.25 C 5.4 11.255 8.623 14.5 12.6 14.5 Z M 17.64 16.313 H 16.701 C 15.452 16.89 14.063 17.219 12.6 17.219 C 11.138 17.219 9.754 16.89 8.499 16.313 H 7.56 C 3.386 16.313 0 19.722 0 23.925 V 26.281 C 0 27.782 1.209 29 2.7 29 H 22.5 C 23.991 29 25.2 27.782 25.2 26.281 V 23.925 C 25.2 19.722 21.814 16.313 17.64 16.313 Z M 35.809 9.04 L 34.245 7.448 C 33.986 7.182 33.564 7.182 33.3 7.443 L 27.405 13.333 L 24.846 10.739 C 24.587 10.473 24.165 10.473 23.901 10.733 L 22.32 12.314 C 22.056 12.574 22.056 12.999 22.314 13.265 L 26.91 17.927 C 27.169 18.193 27.591 18.193 27.855 17.932 L 35.803 9.991 C 36.062 9.725 36.068 9.3 35.809 9.04 Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="h-[33px] w-[42px] flex-grow">
                <svg
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 42 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 32.55 14.438 C 27.327 14.438 23.1 18.589 23.1 23.719 C 23.1 28.849 27.327 33 32.55 33 C 37.773 33 42 28.849 42 23.719 C 42 18.589 37.773 14.438 32.55 14.438 Z M 36.75 24.124 C 36.75 24.468 36.463 24.75 36.113 24.75 H 32.138 C 31.787 24.75 31.501 24.468 31.501 24.124 V 19.189 C 31.501 18.845 31.787 18.563 32.138 18.563 H 32.963 C 33.313 18.563 33.6 18.845 33.6 19.189 V 22.688 H 36.113 C 36.463 22.688 36.75 22.969 36.75 23.313 V 24.124 Z M 32.55 12.375 C 32.904 12.375 33.254 12.396 33.6 12.427 V 9.281 C 33.6 7.631 32.13 6.188 30.45 6.188 H 25.2 V 3.094 C 25.2 1.444 23.73 0 22.05 0 H 11.55 C 9.87 0 8.4 1.444 8.4 3.094 V 6.188 H 3.15 C 1.47 6.188 0 7.631 0 9.281 V 14.438 H 25.93 C 27.807 13.143 30.087 12.375 32.55 12.375 Z M 21 6.188 H 12.6 V 4.125 H 21 V 6.188 Z M 21.448 20.625 H 13.65 C 13.07 20.625 12.6 20.164 12.6 19.594 V 16.5 H 0 V 25.781 C 0 27.431 1.47 28.875 3.15 28.875 H 22.275 C 21.466 27.326 21 25.576 21 23.719 C 21 22.645 21.163 21.61 21.448 20.625 Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="h-[27px] w-10">
                <svg
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 40 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 38.333 0 H 6.111 C 5.191 0 4.444 0.756 4.444 1.688 V 2.25 H 1.667 C 0.746 2.25 0 3.006 0 3.938 V 23.063 C 0 25.237 1.741 27 3.889 27 H 36.667 C 38.508 27 40 25.489 40 23.625 V 1.688 C 40 0.756 39.254 0 38.333 0 Z M 3.889 23.625 C 3.742 23.625 3.6 23.566 3.496 23.46 C 3.392 23.355 3.333 23.212 3.333 23.063 V 5.625 H 4.444 V 23.063 C 4.444 23.212 4.386 23.355 4.282 23.46 C 4.178 23.566 4.036 23.625 3.889 23.625 Z M 20.278 22.5 H 9.722 C 9.262 22.5 8.889 22.122 8.889 21.656 V 21.094 C 8.889 20.628 9.262 20.25 9.722 20.25 H 20.278 C 20.738 20.25 21.111 20.628 21.111 21.094 V 21.656 C 21.111 22.122 20.738 22.5 20.278 22.5 Z M 34.722 22.5 H 24.167 C 23.707 22.5 23.333 22.122 23.333 21.656 V 21.094 C 23.333 20.628 23.707 20.25 24.167 20.25 H 34.722 C 35.182 20.25 35.556 20.628 35.556 21.094 V 21.656 C 35.556 22.122 35.182 22.5 34.722 22.5 Z M 20.278 15.75 H 9.722 C 9.262 15.75 8.889 15.372 8.889 14.906 V 14.344 C 8.889 13.878 9.262 13.5 9.722 13.5 H 20.278 C 20.738 13.5 21.111 13.878 21.111 14.344 V 14.906 C 21.111 15.372 20.738 15.75 20.278 15.75 Z M 34.722 15.75 H 24.167 C 23.707 15.75 23.333 15.372 23.333 14.906 V 14.344 C 23.333 13.878 23.707 13.5 24.167 13.5 H 34.722 C 35.182 13.5 35.556 13.878 35.556 14.344 V 14.906 C 35.556 15.372 35.182 15.75 34.722 15.75 Z M 34.722 9 H 9.722 C 9.262 9 8.889 8.622 8.889 8.156 V 5.344 C 8.889 4.878 9.262 4.5 9.722 4.5 H 34.722 C 35.182 4.5 35.556 4.878 35.556 5.344 V 8.156 C 35.556 8.622 35.182 9 34.722 9 Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="h-[27px] w-9">
              <svg
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 36 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 23.4 18 H 26.1 C 26.55 18 27 17.55 27 17.1 V 7.65 C 27 7.2 26.55 6.75 26.1 6.75 H 23.4 C 22.95 6.75 22.5 7.2 22.5 7.65 V 17.1 C 22.5 17.55 22.95 18 23.4 18 Z M 30.15 18 H 32.85 C 33.3 18 33.75 17.55 33.75 17.1 V 0.9 C 33.75 0.45 33.3 0 32.85 0 H 30.15 C 29.7 0 29.25 0.45 29.25 0.9 V 17.1 C 29.25 17.55 29.7 18 30.15 18 Z M 9.9 18 H 12.6 C 13.05 18 13.5 17.55 13.5 17.1 V 12.15 C 13.5 11.7 13.05 11.25 12.6 11.25 H 9.9 C 9.45 11.25 9 11.7 9 12.15 V 17.1 C 9 17.55 9.45 18 9.9 18 Z M 16.65 18 H 19.35 C 19.8 18 20.25 17.55 20.25 17.1 V 3.15 C 20.25 2.7 19.8 2.25 19.35 2.25 H 16.65 C 16.2 2.25 15.75 2.7 15.75 3.15 V 17.1 C 15.75 17.55 16.2 18 16.65 18 Z M 34.875 22.5 H 4.5 V 1.125 C 4.5 0.503 3.997 0 3.375 0 H 1.125 C 0.503 0 0 0.503 0 1.125 V 24.75 C 0 25.992 1.008 27 2.25 27 H 34.875 C 35.497 27 36 26.497 36 25.875 V 23.625 C 36 23.003 35.497 22.5 34.875 22.5 Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="absolute left-5 top-[37px] flex h-[34px] w-[211px] items-center justify-between gap-[43px] text-left font-bold">
            <div className="h-[27px] w-[31px]">
              <svg
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 31 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 1.107 4.959 H 29.893 C 30.504 4.959 31 4.466 31 3.857 V 1.102 C 31 0.493 30.504 0 29.893 0 H 1.107 C 0.496 0 0 0.493 0 1.102 V 3.857 C 0 4.466 0.496 4.959 1.107 4.959 Z M 1.107 15.98 H 29.893 C 30.504 15.98 31 15.486 31 14.878 V 12.122 C 31 11.514 30.504 11.02 29.893 11.02 H 1.107 C 0.496 11.02 0 11.514 0 12.122 V 14.878 C 0 15.486 0.496 15.98 1.107 15.98 Z M 1.107 27 H 29.893 C 30.504 27 31 26.507 31 25.898 V 23.143 C 31 22.534 30.504 22.041 29.893 22.041 H 1.107 C 0.496 22.041 0 22.534 0 23.143 V 25.898 C 0 26.507 0.496 27 1.107 27 Z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="h-[34px] w-[137px] flex-grow text-3xl">MASCOM</p>
          </div>
          <div className="h-full w-full bg-[#246132] pb-[27px] pl-[13px] pr-[111px] pt-[25px] text-left font-bold">
            <div className="flex h-full w-full items-center justify-between gap-5">
              <div className="h-[37px] w-[37px]">
                <svg
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_4_222)">
                    <path
                      d="M 18.01 11.579 L 6.167 21.334 V 31.861 C 6.167 32.134 6.275 32.395 6.468 32.588 C 6.66 32.781 6.922 32.889 7.194 32.889 L 14.393 32.87 C 14.664 32.869 14.925 32.76 15.116 32.567 C 15.308 32.375 15.415 32.114 15.415 31.843 V 25.694 C 15.415 25.422 15.524 25.16 15.716 24.968 C 15.909 24.775 16.171 24.667 16.443 24.667 H 20.554 C 20.827 24.667 21.088 24.775 21.281 24.968 C 21.474 25.16 21.582 25.422 21.582 25.694 V 31.838 C 21.582 31.973 21.608 32.107 21.659 32.232 C 21.711 32.357 21.786 32.471 21.882 32.567 C 21.977 32.663 22.091 32.739 22.216 32.79 C 22.341 32.842 22.475 32.869 22.61 32.869 L 29.806 32.889 C 30.078 32.889 30.34 32.781 30.532 32.588 C 30.725 32.395 30.833 32.134 30.833 31.861 V 21.326 L 18.993 11.579 C 18.854 11.467 18.68 11.406 18.501 11.406 C 18.323 11.406 18.149 11.467 18.01 11.579 Z M 36.717 18.209 L 31.347 13.783 V 4.885 C 31.347 4.681 31.266 4.485 31.121 4.34 C 30.977 4.196 30.781 4.114 30.576 4.114 H 26.979 C 26.775 4.114 26.579 4.196 26.434 4.34 C 26.29 4.485 26.208 4.681 26.208 4.885 V 9.549 L 20.457 4.818 C 19.905 4.364 19.213 4.115 18.498 4.115 C 17.783 4.115 17.091 4.364 16.539 4.818 L 0.279 18.209 C 0.201 18.274 0.136 18.353 0.089 18.442 C 0.041 18.532 0.012 18.63 0.002 18.731 C-0.007 18.831 0.003 18.933 0.033 19.03 C 0.063 19.127 0.111 19.217 0.176 19.295 L 1.814 21.286 C 1.878 21.364 1.958 21.429 2.047 21.477 C 2.137 21.524 2.235 21.554 2.335 21.564 C 2.436 21.573 2.538 21.563 2.635 21.533 C 2.732 21.504 2.822 21.455 2.9 21.391 L 18.01 8.946 C 18.149 8.833 18.323 8.772 18.501 8.772 C 18.68 8.772 18.854 8.833 18.993 8.946 L 34.103 21.391 C 34.181 21.455 34.271 21.504 34.368 21.534 C 34.465 21.563 34.566 21.574 34.667 21.564 C 34.768 21.555 34.866 21.525 34.955 21.478 C 35.045 21.431 35.124 21.366 35.189 21.288 L 36.827 19.297 C 36.891 19.218 36.939 19.128 36.969 19.03 C 36.998 18.933 37.008 18.831 36.998 18.73 C 36.988 18.629 36.958 18.531 36.91 18.442 C 36.862 18.352 36.796 18.273 36.717 18.209 Z"
                      fill="#FFFBFB"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_222">
                      <rect width="37" height="37" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="h-[29px] w-32 flex-grow text-[25px]">Tổng quan</p>
            </div>
          </div>
          <div className="absolute right-[23px] top-[216px] flex h-[120px] w-[216px] flex-col justify-between gap-[62px] text-left font-normal">
            <p className="h-[29px] w-[195px] text-[25px]">Quản lý tài khoản</p>
            <p className="h-[29px] w-[216px] text-[25px]">Quản lý chấm công</p>
          </div>
          <div className="absolute right-[37px] top-[403px] flex h-[116px] w-[195px] flex-col justify-between gap-[58px] text-left font-normal">
            <p className="h-[29px] w-[169px] text-[25px]">Quản lý đơn từ</p>
            <p className="h-[29px] w-[195px] text-[25px]">Báo cáo thống kê</p>
          </div>
          <div className="absolute bottom-[508px] left-[19px] flex h-[29px] w-[166px] items-center justify-between gap-4 text-center font-normal">
            <div className="h-[27px] w-[35px]">
              <svg
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 35 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 34.516 14.694 L 22.848 26.505 C 21.807 27.559 20.001 26.821 20.001 25.31 V 18.561 H 10.556 C 9.632 18.561 8.889 17.809 8.889 16.874 V 10.125 C 8.889 9.19 9.632 8.438 10.556 8.438 H 20.001 V 1.689 C 20.001 0.184 21.8 -0.561 22.848 0.494 L 34.516 12.304 C 35.162 12.965 35.162 14.034 34.516 14.694 Z M 13.334 26.153 V 23.341 C 13.334 22.877 12.959 22.498 12.501 22.498 H 6.667 C 5.438 22.498 4.445 21.493 4.445 20.248 V 6.75 C 4.445 5.506 5.438 4.501 6.667 4.501 H 12.501 C 12.959 4.501 13.334 4.121 13.334 3.657 V 0.845 C 13.334 0.381 12.959 0.001 12.501 0.001 H 6.667 C 2.986 0.001 0 3.024 0 6.75 V 20.248 C 0 23.974 2.986 26.997 6.667 26.997 H 12.501 C 12.959 26.997 13.334 26.617 13.334 26.153 Z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="h-[29px] w-[115px] flex-grow text-[25px]">Đăng xuất</p>
          </div>
        </div>
      </div>
      <div className="font-arial text-left font-bold text-[#0A0909]">
        <p className="absolute left-[345px] top-10 h-[34px] w-[154px] text-3xl">Tổng quan</p>
      </div>
      <div className="font-arial w-full text-left font-normal text-[#ABA5A5]">
        <div className="absolute left-[351px] top-[117px] flex h-[67px] w-[997px] gap-[0]">
          <div className="flex h-full flex-grow items-center justify-between gap-[55px] rounded-[5px] bg-white py-3.5 pl-[33px] pr-[578px] [box-shadow-width:1px] [box-shadow:0px_0px_0px_1px_rgba(217,_217,_217,_1)_inset]">
            <div className="h-[37px] w-[37px]">
              <svg
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 36.497 31.989 L 29.291 24.785 C 28.966 24.46 28.525 24.279 28.063 24.279 H 26.885 C 28.88 21.728 30.065 18.52 30.065 15.03 C 30.065 6.727 23.336 0 15.032 0 C 6.728 0 0 6.727 0 15.03 C 0 23.332 6.728 30.06 15.032 30.06 C 18.523 30.06 21.732 28.875 24.283 26.88 V 28.058 C 24.283 28.521 24.464 28.961 24.789 29.286 L 31.994 36.491 C 32.674 37.17 33.772 37.17 34.444 36.491 L 36.49 34.446 C 37.169 33.766 37.169 32.668 36.497 31.989 Z M 15.032 24.279 C 9.923 24.279 5.782 20.146 5.782 15.03 C 5.782 9.921 9.916 5.781 15.032 5.781 C 20.142 5.781 24.283 9.914 24.283 15.03 C 24.283 20.139 20.149 24.279 15.032 24.279 Z"
                  fill="black"
                />
              </svg>
            </div>
            <p className="h-[29px] w-[294px] flex-grow text-[25px]">Tìm kiếm ngày chấm công</p>
          </div>
          <div className="ml-[-898px] h-[41px] w-[0] outline outline-2 outline-[#E7E8EA]" />
        </div>
      </div>
      <div className="font-arial w-full text-left">
        <div className="absolute right-11 top-[18px] flex h-[163px] w-[213px] flex-col items-center justify-between gap-[17px]">
          <div className="flex w-full items-center justify-between gap-[101px] font-bold text-black">
            <div className="relative flex w-8 items-end justify-end pb-[31px] pl-[26px]">
              <div className="absolute inset-[0]">
                <svg
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 32 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 16 37 C 18.523 37 20.569 34.93 20.569 32.375 H 11.431 C 11.431 34.93 13.477 37 16 37 Z M 31.385 26.181 C 30.005 24.681 27.423 22.424 27.423 15.031 C 27.423 9.416 23.531 4.921 18.284 3.819 V 2.313 C 18.284 1.036 17.261 0 16 0 C 14.739 0 13.716 1.036 13.716 2.313 V 3.819 C 8.469 4.921 4.577 9.416 4.577 15.031 C 4.577 22.424 1.995 24.681 0.615 26.181 C 0.186 26.647 -0.004 27.204 4.938e-05 27.75 C 0.008 28.935 0.927 30.063 2.293 30.063 H 29.707 C 31.073 30.063 31.993 28.935 32 27.75 C 32.004 27.204 31.814 26.647 31.385 26.181 Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="relative h-1.5 w-1.5 rounded-full bg-[#FF0B0B]" />
            </div>
            <div className="flex h-full flex-grow items-end justify-end bg-[#F5CA2E] pb-[17px] pl-[22px] pr-[15px] pt-6 drop-shadow-lg">
              <p className="h-[39px] w-[43px] text-3xl">TP</p>
            </div>
          </div>
          <div className="flex w-full items-center justify-between gap-4 rounded-[5px] bg-[#208F3A] py-[15px] pl-4 pr-5 font-normal text-white drop-shadow-lg [box-shadow-width:1px] [box-shadow:0px_0px_0px_1px_rgba(32,_143,_58,_1)_inset]">
            <div className="h-[35px] w-[31px]">
              <svg
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 31 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 0 31.719 C 0 33.53 1.488 35 3.321 35 H 27.679 C 29.512 35 31 33.53 31 31.719 V 13.125 H 0 V 31.719 Z M 4.429 18.594 C 4.429 17.992 4.927 17.5 5.536 17.5 H 12.179 C 12.788 17.5 13.286 17.992 13.286 18.594 V 25.156 C 13.286 25.758 12.788 26.25 12.179 26.25 H 5.536 C 4.927 26.25 4.429 25.758 4.429 25.156 V 18.594 Z M 27.679 4.375 H 24.357 V 1.094 C 24.357 0.492 23.859 0 23.25 0 H 21.036 C 20.427 0 19.929 0.492 19.929 1.094 V 4.375 H 11.071 V 1.094 C 11.071 0.492 10.573 0 9.964 0 H 7.75 C 7.141 0 6.643 0.492 6.643 1.094 V 4.375 H 3.321 C 1.488 4.375 0 5.845 0 7.656 V 10.938 H 31 V 7.656 C 31 5.845 29.512 4.375 27.679 4.375 Z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="h-[29px] w-[130px] flex-grow text-[25px]">Chọn tháng</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="absolute left-[423px] top-72 h-[25px] w-[25px] bg-[#00000000]" />
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[42px] right-[43px] h-[140px] w-[193px] pb-[86px] pl-[26px] pr-[125px] pt-2.5">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 194 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 0.629 1.437 H 192.511 V 136 C 192.511 138.485 190.497 140.5 188.011 140.5 H 0.629 V 1.437 Z"
                fill="#F5F5F5"
                stroke="#E7E8EA"
              />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">4</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[42px] right-[234px] h-[140px] w-48 pb-[86px] pl-[21px] pr-[130px] pt-2.5">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 193 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0.941 1.437 H 192.317 V 140.5 H 0.941 V 1.437 Z" fill="#F5F5F5" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">3</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[42px] right-[425px] h-[140px] w-48 pb-[86px] pl-[26px] pr-[124px] pt-2.5">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 194 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 1.253 1.437 H 192.629 V 140.5 H 1.253 V 1.437 Z" fill="#F5F5F5" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">2</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[42px] right-[616px] h-[140px] w-48 pb-[86px] pl-[26px] pr-[124px] pt-2.5">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 193 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0.565 1.437 H 191.94 V 140.5 H 0.565 V 1.437 Z" fill="#F5F5F5" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">1</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[42px] left-[729px] h-[140px] w-48 border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[135px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 193 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0.876 1.437 H 192.252 V 140.5 H 0.876 V 1.437 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">31</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[42px] left-[539px] h-[140px] w-48 border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[135px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 194 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 1.188 1.437 H 192.564 V 140.5 H 1.188 V 1.437 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">30</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[42px] left-[348px] h-[140px] w-48 border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[135px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 193 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 0.5 1.437 H 191.876 V 140.5 H 5 C 2.515 140.5 0.5 138.485 0.5 136 V 1.437 Z"
                fill="white"
                stroke="#E7E8EA"
              />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">29</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[180px] right-[43px] h-[140px] w-[193px] border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[136px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 194 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0.629 1.061 H 192.511 V 140.124 H 0.629 V 1.061 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">28</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[180px] right-[234px] h-[140px] w-48 border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[135px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 193 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0.941 1.061 H 192.317 V 140.124 H 0.941 V 1.061 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">27</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[180px] right-[425px] h-[140px] w-48 border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[135px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 194 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 1.253 1.061 H 192.629 V 140.124 H 1.253 V 1.061 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">26</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[180px] right-[616px] h-[140px] w-48 border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[135px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 193 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0.565 1.061 H 191.94 V 140.124 H 0.565 V 1.061 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">25</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[180px] left-[729px] h-[140px] w-48 border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[135px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 193 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0.876 1.061 H 192.252 V 140.124 H 0.876 V 1.061 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">24</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[180px] left-[539px] h-[140px] w-48 border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[135px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 194 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 1.188 1.061 H 192.564 V 140.124 H 1.188 V 1.061 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">23</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[180px] left-[348px] h-[140px] w-48 border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[135px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 193 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0.5 1.061 H 191.876 V 140.124 H 0.5 V 1.061 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">22</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[319px] right-[43px] h-[140px] w-[193px] border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[136px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 194 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0.629 0.686 H 192.511 V 139.749 H 0.629 V 0.686 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">21</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[319px] right-[234px] h-[140px] w-48 border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[135px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 193 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0.941 0.686 H 192.317 V 139.749 H 0.941 V 0.686 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">20</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[319px] right-[425px] h-[140px] w-48 border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[135px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 194 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 1.253 0.686 H 192.629 V 139.749 H 1.253 V 0.686 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">19</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[319px] right-[616px] h-[140px] w-48 border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[135px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 193 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0.565 0.686 H 191.94 V 139.749 H 0.565 V 0.686 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">18</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[319px] left-[729px] h-[140px] w-48 border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[135px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 193 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0.876 0.686 H 192.252 V 139.749 H 0.876 V 0.686 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">17</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[319px] left-[539px] h-[140px] w-48 border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[135px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 194 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 1.188 0.686 H 192.564 V 139.749 H 1.188 V 0.686 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">16</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[319px] left-[348px] h-[140px] w-48 border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[135px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 193 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0.5 0.686 H 191.876 V 139.749 H 0.5 V 0.686 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">15</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[457px] right-[43px] h-[140px] w-[193px] border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[136px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 194 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0.629 1.31 H 192.511 V 140.373 H 0.629 V 1.31 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">14</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[457px] right-[234px] h-[140px] w-48 border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[135px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 193 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0.941 1.31 H 192.317 V 140.373 H 0.941 V 1.31 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">13</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[457px] right-[425px] h-[140px] w-48 border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[135px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 194 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 1.253 1.31 H 192.629 V 140.373 H 1.253 V 1.31 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">12</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[457px] right-[616px] h-[140px] w-48 border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[135px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 193 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0.565 1.31 H 191.94 V 140.373 H 0.565 V 1.31 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">11</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[457px] left-[729px] h-[140px] w-48 border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[135px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 193 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0.876 1.31 H 192.252 V 140.373 H 0.876 V 1.31 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[42px] text-xl uppercase">10</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[457px] left-[539px] h-[140px] w-48 border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[155px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 194 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 1.188 1.31 H 192.564 V 140.373 H 1.188 V 1.31 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[22px] text-xl uppercase">9</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute bottom-[457px] left-[348px] h-[140px] w-48 border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[155px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 193 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0.5 1.31 H 191.876 V 140.373 H 0.5 V 1.31 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[22px] text-xl uppercase">8</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute right-[43px] top-[381px] h-[140px] w-[193px] border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[156px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 194 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0.629 0.935 H 192.511 V 139.998 H 0.629 V 0.935 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[22px] text-xl uppercase">7</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute right-[234px] top-[381px] h-[140px] w-48 border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[155px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 193 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0.941 0.935 H 192.317 V 139.998 H 0.941 V 0.935 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[22px] text-xl uppercase">6</p>
        </div>
      </div>
      <div className="font-roboto_mono w-full text-left font-bold text-black">
        <div className="absolute right-[425px] top-[381px] h-[140px] w-48 border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[155px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 194 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 1.253 0.935 H 192.629 V 139.998 H 1.253 V 0.935 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative inline h-11 w-[22px] text-xl uppercase">5</p>
        </div>
      </div>
      <div className="w-full font-bold">
        <div className="absolute right-[616px] top-[381px] h-[140px] w-48 border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-5 pl-2.5 pr-3 pt-[99px] [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 193 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0.565 0.935 H 191.94 V 139.998 H 0.565 V 0.935 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="font-roboto_mono absolute left-[15px] top-2.5 inline h-11 w-[22px] text-left text-xl uppercase text-black">
            4
          </p>
          <p className="font-arial relative inline h-[21px] w-[170px] text-center text-lg text-[#01A01A]">Tăng ca - Làm thêm</p>
          <p className="font-arial absolute right-9 top-[50px] inline h-[35px] w-[93px] text-left text-[29px] uppercase text-black">
            1.35
          </p>
          <p className="font-arial absolute left-9 top-[21px] inline h-[21px] w-[109px] text-left text-lg uppercase text-[#696767]">
            08:23 - 20:15
          </p>
          <div className="absolute right-4 top-[22px] h-5 w-5">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 10 0 C 4.476 0 0 4.476 0 10 C 0 15.524 4.476 20 10 20 C 15.524 20 20 15.524 20 10 C 20 4.476 15.524 0 10 0 Z M 12.302 14.117 L 8.746 11.532 C 8.621 11.44 8.548 11.294 8.548 11.141 V 4.355 C 8.548 4.089 8.766 3.871 9.032 3.871 H 10.968 C 11.234 3.871 11.452 4.089 11.452 4.355 V 9.907 L 14.012 11.77 C 14.23 11.927 14.274 12.23 14.117 12.448 L 12.98 14.012 C 12.823 14.226 12.52 14.274 12.302 14.117 Z"
                fill="#696767"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full font-bold">
        <div className="absolute left-[729px] top-[381px] h-[140px] w-48 border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[86px] pl-[15px] pr-[155px] pt-2.5 [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 193 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0.876 0.935 H 192.252 V 139.998 H 0.876 V 0.935 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="font-roboto_mono relative inline h-11 w-[22px] text-left text-xl uppercase text-black">3</p>
          <p className="font-arial absolute bottom-[17px] right-[75px] inline h-[21px] w-[41px] text-center text-lg text-[#F52E2E]">
            Nghỉ
          </p>
          <div className="absolute right-3.5 top-7 h-5 w-5">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 10 0 C 4.476 0 0 4.476 0 10 C 0 15.524 4.476 20 10 20 C 15.524 20 20 15.524 20 10 C 20 4.476 15.524 0 10 0 Z M 12.302 14.117 L 8.746 11.532 C 8.621 11.44 8.548 11.294 8.548 11.141 V 4.355 C 8.548 4.089 8.766 3.871 9.032 3.871 H 10.968 C 11.234 3.871 11.452 4.089 11.452 4.355 V 9.907 L 14.012 11.77 C 14.23 11.927 14.274 12.23 14.117 12.448 L 12.98 14.012 C 12.823 14.226 12.52 14.274 12.302 14.117 Z"
                fill="#696767"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full font-bold">
        <div className="absolute left-[539px] top-[381px] flex h-[140px] w-48 items-center justify-end border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] py-[53px] pl-16 pr-[35px] [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 194 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 1.188 0.935 H 192.564 V 139.998 H 1.188 V 0.935 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="font-roboto_mono absolute left-[15px] top-2.5 h-11 w-[22px] text-left text-xl uppercase text-black">2</p>
          <div className="font-arial absolute inset-x-[0] bottom-[17px] mx-auto flex h-[21px] w-[154px] items-center justify-center bg-[#F5CA2E] text-center text-[#F5CA2E]">
            <p className="h-[21px] w-[154px] text-lg">Đi muộn - Về sớm</p>
          </div>
          <p className="font-arial relative h-[35px] w-[93px] text-left text-[29px] uppercase text-black">0.84</p>
          <div className="font-arial absolute right-[15px] top-6 flex h-[21px] w-[140px] items-center justify-between gap-[11px] text-left text-[#696767]">
            <p className="h-[21px] w-[109px] flex-grow text-lg uppercase">08:45 - 17:15</p>
            <div className="h-5 w-5">
              <svg
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 10 0 C 4.476 0 0 4.476 0 10 C 0 15.524 4.476 20 10 20 C 15.524 20 20 15.524 20 10 C 20 4.476 15.524 0 10 0 Z M 12.302 14.117 L 8.746 11.532 C 8.621 11.44 8.548 11.294 8.548 11.141 V 4.355 C 8.548 4.089 8.766 3.871 9.032 3.871 H 10.968 C 11.234 3.871 11.452 4.089 11.452 4.355 V 9.907 L 14.012 11.77 C 14.23 11.927 14.274 12.23 14.117 12.448 L 12.98 14.012 C 12.823 14.226 12.52 14.274 12.302 14.117 Z"
                  fill="#696767"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-left font-bold">
        <div className="absolute left-[348px] top-[381px] flex h-[140px] w-48 items-end justify-end border-solid border-[#331111] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-[51px] pl-[42px] pr-2.5 pt-6 opacity-10 [border-bottom-width:undefined]">
          <div className="absolute inset-[0] opacity-10">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 193 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path opacity="0.1" d="M 0.5 0.935 H 191.876 V 139.998 H 0.5 V 0.935 Z" fill="white" stroke="#331111" />
            </svg>
          </div>
          <div className="font-arial relative flex h-full w-full justify-between gap-[11px]">
            <div className="flex h-full flex-grow flex-col items-center justify-between gap-[9px]">
              <p className="h-[21px] w-[109px] text-lg uppercase text-[#696767]">08:23 - 17:45</p>
              <p className="h-[35px] w-[17px] text-3xl uppercase text-black">1</p>
            </div>
            <div className="h-5 w-5">
              <svg
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 10 0 C 4.476 0 0 4.476 0 10 C 0 15.524 4.476 20 10 20 C 15.524 20 20 15.524 20 10 C 20 4.476 15.524 0 10 0 Z M 12.302 14.117 L 8.746 11.532 C 8.621 11.44 8.548 11.294 8.548 11.141 V 4.355 C 8.548 4.089 8.766 3.871 9.032 3.871 H 10.968 C 11.234 3.871 11.452 4.089 11.452 4.355 V 9.907 L 14.012 11.77 C 14.23 11.927 14.274 12.23 14.117 12.448 L 12.98 14.012 C 12.823 14.226 12.52 14.274 12.302 14.117 Z"
                  fill="#696767"
                />
              </svg>
            </div>
          </div>
          <p className="font-roboto_mono absolute left-[15px] top-2.5 h-11 w-[22px] text-xl uppercase text-black">1</p>
        </div>
      </div>
      <div className="">
        <div className="absolute right-[43px] top-[316px] h-[68px] w-[193px]">
          <svg
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 194 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 0.629 1.122 H 192.511 V 67.622 H 0.629 V 1.122 Z" fill="white" stroke="#E7E8EA" />
          </svg>
        </div>
      </div>
      <div className="font-arial text-center font-bold text-[#246132]">
        <p className="absolute right-[43px] top-[334px] h-[30px] w-48 text-[22px] uppercase">chủ nhật</p>
      </div>
      <div className="">
        <div className="absolute right-[234px] top-[316px] h-[68px] w-[193px]">
          <svg
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 194 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 0.941 1.122 H 192.823 V 67.622 H 0.941 V 1.122 Z" fill="white" stroke="#E7E8EA" />
          </svg>
        </div>
      </div>
      <div className="font-arial text-center font-bold text-[#246132]">
        <p className="absolute right-[234px] top-[334px] h-[30px] w-48 text-[22px] uppercase">Thứ bảy</p>
      </div>
      <div className="">
        <div className="absolute right-[424px] top-[316px] h-[68px] w-[193px]">
          <svg
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 194 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 1.253 1.122 H 193.135 V 67.622 H 1.253 V 1.122 Z" fill="white" stroke="#E7E8EA" />
          </svg>
        </div>
      </div>
      <div className="font-arial text-center font-bold text-[#246132]">
        <p className="absolute right-[425px] top-[334px] h-[30px] w-48 text-[22px] uppercase">Thứ sáu</p>
      </div>
      <div className="">
        <div className="absolute right-[615px] top-[316px] h-[68px] w-[193px]">
          <svg
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 193 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 0.565 1.122 H 192.447 V 67.622 H 0.565 V 1.122 Z" fill="white" stroke="#E7E8EA" />
          </svg>
        </div>
      </div>
      <div className="font-arial text-center font-bold text-[#246132]">
        <p className="absolute right-[616px] top-[334px] h-[30px] w-48 text-[22px] uppercase">Thứ năm</p>
      </div>
      <div className="font-arial w-full text-center font-bold text-[#246132]">
        <div className="absolute left-[729px] top-[316px] flex h-[68px] w-[193px] items-center justify-center border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] py-[19px] [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 194 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0.876 1.122 H 192.758 V 67.622 H 0.876 V 1.122 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative h-[30px] w-48 text-[22px] uppercase">Thứ tư</p>
        </div>
      </div>
      <div className="">
        <div className="absolute left-[539px] top-[316px] h-[68px] w-[193px]">
          <svg
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 194 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 1.188 1.122 H 193.07 V 67.622 H 1.188 V 1.122 Z" fill="white" stroke="#E7E8EA" />
          </svg>
        </div>
      </div>
      <div className="font-arial text-center font-bold text-[#246132]">
        <p className="absolute left-[539px] top-[334px] h-[30px] w-48 text-[22px] uppercase">Thứ Ba</p>
      </div>
      <div className="font-arial w-full text-center font-bold text-[#246132]">
        <div className="absolute left-[348px] top-[316px] flex h-[68px] w-[193px] items-center justify-center border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] py-[19px] [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 193 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0.5 1.122 H 192.382 V 67.622 H 0.5 V 1.122 Z" fill="white" stroke="#E7E8EA" />
            </svg>
          </div>
          <p className="relative h-[30px] w-48 text-[22px] uppercase">Thứ hai</p>
        </div>
      </div>
      <div className="font-arial w-full text-center font-normal">
        {/* <div className="absolute right-[43px] top-[200px] flex h-[116px] w-[1337px] items-end justify-end border-solid border-[#E7E8EA] border-l-[undefined] border-r-[undefined] border-t-[undefined] pb-1.5 pl-[3px] pt-[21px] [border-bottom-width:undefined]">
          <div className="absolute inset-[0]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 1337 117"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 1336.5 5.755 V 116.429 H 0.511 V 5.755 C 0.511 3.269 2.526 1.255 5.011 1.255 H 684.258 H 1332 C 1334.49 1.255 1336.5 3.269 1336.5 5.755 Z"
                fill="#E7E8EA"
                stroke="#E7E8EA"
              />
            </svg>
          </div>
          <div className="relative h-full w-full bg-gray pb-[18px] pl-[520px] pr-[572px] pt-[47px]">
            <p className="inline h-[25px] w-[241px] text-[22px] text-black">01/03/2023 - 31/03/2023</p>
            <p className="absolute inset-y-[0] right-[344px] my-auto inline h-[69px] w-9 text-[60px] text-[#ABA5A5]">{">"}</p>
            <p className="absolute inset-y-[0] left-[341px] my-auto inline h-[69px] w-9 text-[60px] text-[#ABA5A5]">{">"}</p>
          </div>
        </div> */}
      </div>
      <div className="w-full">
        <div className="absolute bottom-2.5 right-[670px] flex h-3.5 w-[41px] items-center justify-between gap-[13px]">
          <div className="h-3.5 w-3.5 flex-grow rounded-full bg-[#ABA5A5]" />
          <div className="h-3.5 w-3.5 flex-grow rounded-full bg-[#E7E8EA]" />
        </div>
      </div>
      <div className="w-full">
        <div className="absolute right-[740px] top-[312px] h-[25px] w-[25px] bg-[#00000000]" />
      </div>
    </div>
  );
}

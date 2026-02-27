import svgPaths from "./svg-2gcwh4cunv";

function InputFieldWithLink({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative w-full">{children}</div>
    </div>
  );
}

function Input({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#151621] relative rounded-[6px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#393a4b] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[13px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type LinkTextProps = {
  text: string;
};

function LinkText({ text }: LinkTextProps) {
  return (
    <div className="content-stretch flex h-[22px] items-center relative shrink-0">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#858699] text-[13px]">{text}</p>
    </div>
  );
}
type LabelTextProps = {
  text: string;
};

function LabelText({ text }: LabelTextProps) {
  return (
    <div className="content-stretch flex items-start pl-[2px] py-[4px] relative shrink-0">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d2d3e0] text-[13px]">{text}</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="로그인">
      <div className="bg-[#0b0b16] h-[774px] relative shrink-0 w-[1440px]" data-name="body">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bg-black border-0 border-[#262626] border-solid h-[630px] left-0 top-0 w-[1440px]" data-name="div">
            <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#262626] border-solid h-[630px] left-[496px] top-[97px] w-[448px]" data-name="div">
              <div className="absolute bg-[rgba(0,0,0,0)] content-stretch flex flex-col gap-[8px] items-center left-0 px-[97px] top-0 w-[448px]" data-name="div">
                <div aria-hidden="true" className="absolute border-0 border-[#262626] border-solid inset-0 pointer-events-none" />
                <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[36px] text-center text-white w-full whitespace-pre-wrap">로그인</p>
                <p className="font-['Pretendard:Regular',sans-serif] h-[16px] leading-[normal] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] text-center w-full whitespace-pre-wrap">계정에 로그인하여 ScreenFlow를 시작하세요</p>
              </div>
              <div className="absolute bg-[rgba(17,24,39,0.5)] content-stretch flex flex-col gap-[24px] items-start left-0 p-[25px] rounded-[12px] top-[96px] w-[448px]" data-name="div">
                <div aria-hidden="true" className="absolute border border-[#374151] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]" />
                <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="form">
                  <div aria-hidden="true" className="absolute border-0 border-[#262626] border-solid inset-0 pointer-events-none" />
                  <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full">
                    <InputFieldWithLink>
                      <LabelText text="이메일" />
                      <Input>
                        <LinkText text="name@example.com" />
                        <div className="content-stretch flex flex-[1_0_0] h-[22px] items-center min-h-px min-w-px" data-name="Content" />
                      </Input>
                    </InputFieldWithLink>
                    <InputFieldWithLink>
                      <LabelText text="비밀번호" />
                      <Input>
                        <LinkText text="비밀번호를 입력하세요" />
                        <div className="content-stretch flex flex-[1_0_0] h-[22px] items-center min-h-px min-w-px" data-name="Content" />
                      </Input>
                    </InputFieldWithLink>
                  </div>
                  <div className="bg-[#575bc7] relative rounded-[4px] shrink-0 w-full" data-name="Buttons">
                    <div aria-hidden="true" className="absolute border border-[#575bc7] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.09)]" />
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center px-[14px] py-[13px] relative w-full">
                        <p className="font-['Pretendard:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[15px] text-white">로그인</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[rgba(0,0,0,0)] h-[20px] relative shrink-0 w-full" data-name="div">
                  <div aria-hidden="true" className="absolute border-0 border-[#262626] border-solid inset-0 pointer-events-none" />
                  <div className="absolute bg-[rgba(0,0,0,0)] border-[#4b5563] border-solid border-t h-px left-0 top-[9.5px] w-[170.906px]" data-name="div" />
                  <p className="absolute font-['Pretendard:Regular',sans-serif] h-[16px] leading-[14px] left-[186.91px] not-italic text-[#9ca3af] text-[14px] top-[2px] w-[25px] whitespace-pre-wrap">또는</p>
                  <div className="absolute bg-[rgba(0,0,0,0)] border-[#4b5563] border-solid border-t h-px left-[227.11px] top-[9.5px] w-[170.906px]" data-name="div" />
                </div>
                <div className="bg-[rgba(0,0,0,0)] h-[48px] relative shrink-0 w-full" data-name="div">
                  <div aria-hidden="true" className="absolute border-0 border-[#262626] border-solid inset-0 pointer-events-none" />
                  <div className="absolute bg-white border-0 border-[#262626] border-solid h-[48px] left-0 rounded-[4px] top-0 w-[398px]" data-name="button">
                    <div className="absolute content-stretch flex items-center justify-center left-[141.56px] size-[20px] top-[14px]" data-name="svg">
                      <div className="relative shrink-0 size-[20px]" data-name="Frame">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="Frame">
                            <path d="M20 20H0V0H20V20Z" stroke="var(--stroke-0, #262626)" />
                            <path d={svgPaths.p30690780} fill="var(--fill-0, #4285F4)" id="Vector" />
                            <path d={svgPaths.p15764280} fill="var(--fill-0, #34A853)" id="Vector_2" />
                            <path d={svgPaths.p22ffb080} fill="var(--fill-0, #FBBC05)" id="Vector_3" />
                            <path d={svgPaths.p11c26d00} fill="var(--fill-0, #EA4335)" id="Vector_4" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] h-[19px] leading-[normal] left-[213.06px] not-italic text-[16px] text-black text-center top-[14px] w-[87px] whitespace-pre-wrap">구글로 로그인</p>
                  </div>
                </div>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#262626] border-solid font-['Pretendard:Regular',sans-serif] h-[48px] left-0 not-italic text-[14px] text-center top-[540px] w-[448px] whitespace-pre-wrap" data-name="div">
                <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal h-[16px] leading-[0] left-[224.52px] text-[0px] text-black top-[2px] w-[160px]">
                  <span className="leading-[14px] text-[#9ca3af]">계정이 없으신가요?</span>
                  <span className="leading-[14px] text-[#6c79ff]">{` 회원가입`}</span>
                </p>
                <p className="-translate-x-1/2 absolute h-[16px] leading-[14px] left-[224.23px] text-[#6b7280] top-[30px] w-[105px]">← 홈으로 돌아가기</p>
              </div>
            </div>
            <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#262626] border-solid h-[28px] left-[24px] top-[24px] w-[108.625px]" data-name="div" />
          </div>
          <div className="absolute left-0 top-0 w-[1440px]" data-name="gnb">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between px-[56px] py-[16px] relative w-full">
                <div className="content-stretch flex gap-[50px] items-center relative shrink-0">
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[19.375px] not-italic relative shrink-0 text-[19.375px] text-white">logo</p>
                  <div className="content-stretch flex gap-[23px] items-center shrink-0" />
                </div>
                <div className="content-stretch flex gap-[32px] items-center shrink-0" />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-0 border-[#262626] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}
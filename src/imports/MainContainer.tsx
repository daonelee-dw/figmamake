import svgPaths from "./svg-ic7a6xx30s";
type CardLikesContainerTextProps = {
  text: string;
};

function CardLikesContainerText({ text }: CardLikesContainerTextProps) {
  return (
    <div className="bg-[#aeaeae] content-stretch flex flex-col h-[18px] items-center justify-between p-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[8px] text-black">{text}</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[42.71%_17.72%_42.71%_17.7%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9167 2.91667">
        <g id="Group">
          <path d={svgPaths.p1c18bf80} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p7bf32c0} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p3cba200} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}
type TabContainerTextProps = {
  text: string;
};

function TabContainerText({ text }: TabContainerTextProps) {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[1000px] shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">{text}</p>
    </div>
  );
}

export default function MainContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Main Container">
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Header Container">
        <div className="bg-white relative shrink-0 w-full" data-name="Header Top Row">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[20px] py-[16px] relative w-full">
              <div className="content-stretch flex gap-[25px] items-center relative shrink-0" data-name="Logo Container">
                <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">Logo</p>
                <div className="h-[15px] shrink-0 w-[140px]" data-name="Menu Container" />
              </div>
              <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">로그인</p>
            </div>
          </div>
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="Title Container">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[57px] items-center px-[100px] py-[64px] relative w-full">
              <div className="content-stretch flex flex-col gap-[14px] items-center relative shrink-0 w-full" data-name="Title and Subtitle Container">
                <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[32px] text-black text-center w-[min-content] whitespace-pre-wrap">타이틀이 들어갑니다</p>
              </div>
              <div className="bg-[#646464] content-stretch flex h-[56px] items-center justify-center px-[32px] py-[16px] relative rounded-[1000px] shrink-0 w-[197px]" data-name="CTA Button Container">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-white">CTA button</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[116px] items-center justify-center relative shrink-0 w-full" data-name="Content Container">
        <div className="relative shrink-0 w-full" data-name="Tabs Container">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[100px] py-[16px] relative w-full">
              <div className="bg-[#646464] content-stretch flex gap-[10px] items-center p-px relative rounded-[100px] shrink-0" data-name="Tabs Inner Container">
                <div className="bg-white content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[1000px] shrink-0" data-name="Tab Container">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">Tab01</p>
                </div>
                <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[1000px] shrink-0" data-name="Tab Container">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white">Tab02</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Tabs Inner Container">
                <TabContainerText text="Tab01" />
                <TabContainerText text="Tab01" />
                <TabContainerText text="Tab01" />
                <TabContainerText text="Tab01" />
              </div>
              <div className="h-[37px] rounded-[100px] shrink-0 w-[179px]" data-name="Tabs Inner Container" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[62px] items-center justify-center relative shrink-0 w-full" data-name="Cards Container">
          <div className="content-center flex flex-wrap gap-[29px] items-center justify-center relative shrink-0 w-full" data-name="Cards Row">
            <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[8px] relative rounded-[8px] shrink-0 w-[189px]" data-name="Card Container">
              <div className="bg-[#a9a9a9] h-[141px] rounded-[4px] shrink-0 w-full" data-name="Card Image" />
              <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full" data-name="Card Text Container">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[147px]" data-name="Card Text Inner Container">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Card Date Container">
                    <div className="bg-[#a9a9a9] rounded-[1000px] shrink-0 size-[17px]" data-name="Card Date Icon" />
                    <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-black">5 일전</p>
                  </div>
                  <div className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[11px] text-black w-[min-content] whitespace-pre-wrap">
                    <p className="mb-0">텍스트를 두 줄까지 적어주세요</p>
                    <p>두번째 줄까지 이렇게 꽉 찹니다.</p>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Card Actions Container">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="proicons:more">
                    <Group />
                  </div>
                  <CardLikesContainerText text="67" />
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[8px] relative rounded-[8px] shrink-0 w-[189px]" data-name="Card Container">
              <div className="bg-[#a9a9a9] h-[141px] rounded-[4px] shrink-0 w-full" data-name="Card Image" />
              <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full" data-name="Card Text Container">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[147px]" data-name="Card Text Inner Container">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Card Date Container">
                    <div className="bg-[#a9a9a9] rounded-[1000px] shrink-0 size-[17px]" data-name="Card Date Icon" />
                    <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-black">5 일전</p>
                  </div>
                  <div className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[11px] text-black w-[min-content] whitespace-pre-wrap">
                    <p className="mb-0">텍스트를 두 줄까지 적어주세요</p>
                    <p>두번째 줄까지 이렇게 꽉 찹니다.</p>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Card Actions Container">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="proicons:more">
                    <Group />
                  </div>
                  <CardLikesContainerText text="67" />
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[8px] relative rounded-[8px] shrink-0 w-[189px]" data-name="Card Container">
              <div className="bg-[#a9a9a9] h-[141px] rounded-[4px] shrink-0 w-full" data-name="Card Image" />
              <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full" data-name="Card Text Container">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[147px]" data-name="Card Text Inner Container">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Card Date Container">
                    <div className="bg-[#a9a9a9] rounded-[1000px] shrink-0 size-[17px]" data-name="Card Date Icon" />
                    <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-black">5 일전</p>
                  </div>
                  <div className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[11px] text-black w-[min-content] whitespace-pre-wrap">
                    <p className="mb-0">텍스트를 두 줄까지 적어주세요</p>
                    <p>두번째 줄까지 이렇게 꽉 찹니다.</p>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Card Actions Container">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="proicons:more">
                    <Group />
                  </div>
                  <CardLikesContainerText text="67" />
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[8px] relative rounded-[8px] shrink-0 w-[189px]" data-name="Card Container">
              <div className="bg-[#a9a9a9] h-[141px] rounded-[4px] shrink-0 w-full" data-name="Card Image" />
              <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full" data-name="Card Text Container">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[147px]" data-name="Card Text Inner Container">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Card Date Container">
                    <div className="bg-[#a9a9a9] rounded-[1000px] shrink-0 size-[17px]" data-name="Card Date Icon" />
                    <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-black">5 일전</p>
                  </div>
                  <div className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[11px] text-black w-[min-content] whitespace-pre-wrap">
                    <p className="mb-0">텍스트를 두 줄까지 적어주세요</p>
                    <p>두번째 줄까지 이렇게 꽉 찹니다.</p>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Card Actions Container">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="proicons:more">
                    <Group />
                  </div>
                  <CardLikesContainerText text="67" />
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[8px] relative rounded-[8px] shrink-0 w-[189px]" data-name="Card Container">
              <div className="bg-[#a9a9a9] h-[141px] rounded-[4px] shrink-0 w-full" data-name="Card Image" />
              <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full" data-name="Card Text Container">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[147px]" data-name="Card Text Inner Container">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Card Date Container">
                    <div className="bg-[#a9a9a9] rounded-[1000px] shrink-0 size-[17px]" data-name="Card Date Icon" />
                    <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-black">5 일전</p>
                  </div>
                  <div className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[11px] text-black w-[min-content] whitespace-pre-wrap">
                    <p className="mb-0">텍스트를 두 줄까지 적어주세요</p>
                    <p>두번째 줄까지 이렇게 꽉 찹니다.</p>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Card Actions Container">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="proicons:more">
                    <Group />
                  </div>
                  <CardLikesContainerText text="67" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-center flex flex-wrap gap-[29px] items-center justify-center relative shrink-0 w-full" data-name="Cards Row">
            <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[8px] relative rounded-[8px] shrink-0 w-[189px]" data-name="Card Container">
              <div className="bg-[#a9a9a9] h-[141px] rounded-[4px] shrink-0 w-full" data-name="Card Image" />
              <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full" data-name="Card Text Container">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[147px]" data-name="Card Text Inner Container">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Card Date Container">
                    <div className="bg-[#a9a9a9] rounded-[1000px] shrink-0 size-[17px]" data-name="Card Date Icon" />
                    <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-black">5 일전</p>
                  </div>
                  <div className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[11px] text-black w-[min-content] whitespace-pre-wrap">
                    <p className="mb-0">텍스트를 두 줄까지 적어주세요</p>
                    <p>두번째 줄까지 이렇게 꽉 찹니다.</p>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Card Actions Container">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="proicons:more">
                    <Group />
                  </div>
                  <CardLikesContainerText text="67" />
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[8px] relative rounded-[8px] shrink-0 w-[189px]" data-name="Card Container">
              <div className="bg-[#a9a9a9] h-[141px] rounded-[4px] shrink-0 w-full" data-name="Card Image" />
              <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full" data-name="Card Text Container">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[147px]" data-name="Card Text Inner Container">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Card Date Container">
                    <div className="bg-[#a9a9a9] rounded-[1000px] shrink-0 size-[17px]" data-name="Card Date Icon" />
                    <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-black">5 일전</p>
                  </div>
                  <div className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[11px] text-black w-[min-content] whitespace-pre-wrap">
                    <p className="mb-0">텍스트를 두 줄까지 적어주세요</p>
                    <p>두번째 줄까지 이렇게 꽉 찹니다.</p>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Card Actions Container">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="proicons:more">
                    <Group />
                  </div>
                  <CardLikesContainerText text="67" />
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[8px] relative rounded-[8px] shrink-0 w-[189px]" data-name="Card Container">
              <div className="bg-[#a9a9a9] h-[141px] rounded-[4px] shrink-0 w-full" data-name="Card Image" />
              <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full" data-name="Card Text Container">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[147px]" data-name="Card Text Inner Container">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Card Date Container">
                    <div className="bg-[#a9a9a9] rounded-[1000px] shrink-0 size-[17px]" data-name="Card Date Icon" />
                    <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-black">5 일전</p>
                  </div>
                  <div className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[11px] text-black w-[min-content] whitespace-pre-wrap">
                    <p className="mb-0">텍스트를 두 줄까지 적어주세요</p>
                    <p>두번째 줄까지 이렇게 꽉 찹니다.</p>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Card Actions Container">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="proicons:more">
                    <Group />
                  </div>
                  <CardLikesContainerText text="67" />
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[8px] relative rounded-[8px] shrink-0 w-[189px]" data-name="Card Container">
              <div className="bg-[#a9a9a9] h-[141px] rounded-[4px] shrink-0 w-full" data-name="Card Image" />
              <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full" data-name="Card Text Container">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[147px]" data-name="Card Text Inner Container">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Card Date Container">
                    <div className="bg-[#a9a9a9] rounded-[1000px] shrink-0 size-[17px]" data-name="Card Date Icon" />
                    <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-black">5 일전</p>
                  </div>
                  <div className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[11px] text-black w-[min-content] whitespace-pre-wrap">
                    <p className="mb-0">텍스트를 두 줄까지 적어주세요</p>
                    <p>두번째 줄까지 이렇게 꽉 찹니다.</p>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Card Actions Container">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="proicons:more">
                    <Group />
                  </div>
                  <CardLikesContainerText text="67" />
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[8px] relative rounded-[8px] shrink-0 w-[189px]" data-name="Card Container">
              <div className="bg-[#a9a9a9] h-[141px] rounded-[4px] shrink-0 w-full" data-name="Card Image" />
              <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full" data-name="Card Text Container">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[147px]" data-name="Card Text Inner Container">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Card Date Container">
                    <div className="bg-[#a9a9a9] rounded-[1000px] shrink-0 size-[17px]" data-name="Card Date Icon" />
                    <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-black">5 일전</p>
                  </div>
                  <div className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[11px] text-black w-[min-content] whitespace-pre-wrap">
                    <p className="mb-0">텍스트를 두 줄까지 적어주세요</p>
                    <p>두번째 줄까지 이렇게 꽉 찹니다.</p>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Card Actions Container">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="proicons:more">
                    <Group />
                  </div>
                  <CardLikesContainerText text="67" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
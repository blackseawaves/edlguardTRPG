document.addEventListener("DOMContentLoaded", () => {
    // =================================================================================
    // 1. 기존 런처 팝업 및 게이지 애니메이션 로직
    // =================================================================================
    const btn = document.getElementById("gameStartBtn");
    const modal = document.getElementById("launcherModal");
    const closeBtn = document.getElementById("closeBtn");
    const bar1 = document.getElementById("bar1");
    const bar2 = document.getElementById("bar2");
    const p1 = document.getElementById("p1");
    const p2 = document.getElementById("p2");

    btn.addEventListener("click", () => {
        modal.classList.remove("hidden");
        modal.classList.add("flex");

        let c = 0,
            t = 0;
        const i = setInterval(() => {
            c += 10;
            if (c > 100) {
                c = 0;
                t += 10;
            }

            bar1.style.width = c + "%";
            p1.innerText = c + "%";
            bar2.style.width = t + "%";
            p2.innerText = t + "%";

            if (t >= 100) {
                clearInterval(i);
                setTimeout(() => {
                    modal.classList.add("hidden");
                    modal.classList.remove("flex");
                }, 500);
            }
        }, 150);
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    });

    // =================================================================================
    // 2. 네비게이션 드롭다운 메뉴용 최종 통합 데이터베이스 (v7.0.0 무결성 락)
    // =================================================================================
    const contentModal = document.getElementById("contentModal");
    const contentCloseBtn = document.getElementById("contentCloseBtn");
    const contentTitle = document.getElementById("contentTitle");
    const contentBody = document.getElementById("contentBody");
    const menuItems = document.querySelectorAll(".menu-item");

    const menuData = {
        // -----------------------------------------------------------------------------
        // ■ [CATEGORY 01] 게임소개 분파
        // -----------------------------------------------------------------------------
        "intro-play": {
            title: "핵심 게임 시스템 매트릭스 (v7.0.0 Locked)",
            body: `<div class="space-y-4 text-sm">
                    <div class="p-3 bg-red-950/20 border border-red-950 rounded">
                        <p class="font-bold text-red-400 text-base">⚙️ 차원 파편화 로어 (The World Splitting)</p>
                        <p class="text-xs text-gray-400 mt-1">하이엘프 지배층의 치명적 마법 실험 오류로 영토가 조각난 세계선입니다[cite: 1, 3]. 구역의 메인 지배자(보스)를 소멸시키기 전까지는 다음 차원 통행 노드가 절대 개방되지 않는 가혹한 인과율에 묶여 있습니다[cite: 1].</p>
                    </div>
                    <div class="p-3 bg-neutral-900 border border-neutral-800 rounded">
                        <p class="font-bold text-orange-400">🎲 삼중 선택지 & 주관식 [돌발행동] 시스템</p>
                        <p class="text-xs mt-1 text-gray-300">표준 연산지 1~3 외에도 유저가 원하는 전술이나 파괴적 행위를 주관식 텍스트로 직접 입력할 수 있습니다[cite: 1]. 시스템은 돌발행동 선언의 타당성을 실시간 계산해 전용 난이도(DC) 판정 주사위를 격발합니다[cite: 1].</p>
                    </div>
                    <div class="p-3 bg-neutral-900 border border-neutral-800 rounded">
                        <p class="font-bold text-blue-400">🛡️ 보스 공격 자동 방어 프로토콜</p>
                        <p class="text-xs mt-1 text-gray-300">전투 중 유저의 공격 턴이 끝나면, 사용자가 고르지 않아도 시스템 엔진이 캐릭터 스텟 수치에 맞춰 자동으로 주사위를 가동합니다[cite: 1]. 근력(STR)이 높으면 자동으로 [근력 방어/패링], 민첩(DEX)이 높으면 [민첩 회피/슬라이딩] 연산을 수행합니다[cite: 1].</p>
                    </div>
                   </div>`,
        },
        "intro-map": {
            title: "액트별 맵 구성도 및 핵심 마을 기능 명세",
            body: `<div class="space-y-4 text-sm text-xs">
                    <div class="p-3 bg-neutral-900 border border-neutral-800 rounded space-y-2">
                        <p class="font-bold text-yellow-500 text-sm">⛲ 제1막: 오리진 광장 허브 & 마물 기갑병 본거지[cite: 3]</p>
                        <p class="text-gray-300"><strong>• 구조:</strong> 오리진 중앙 광장 노점을 중심으로 주점, 서점, 주둔지, 공방, 고대 대장간이 바퀴살 구조로 매칭[cite: 1].</p>
                        <p class="text-gray-400"><strong>• 마을 핵심 기능:</strong> [풍요의 달 주점] 카드 마스터 파산 시 듀얼리스트 해금[cite: 1]. [고대 대장간] 장인 토르간을 통해 레인저 총기 과열 패널티 연마 및 파스칼 장갑 약점 리포트 컴파일 공정 가동[cite: 1]. [잡화점] 카운터용 화염주/소이탄 골드 상시 구매 보급[cite: 1]. [중앙 우물 수색] 실패 시 히든보스 네파포비 조우 분기[cite: 1].</p>
                        <p class="text-gray-300"><strong>• 진입로:</strong> 하이오크 군락지(잡몹 처치 시 골드 자동 루팅) ➡️ 중기갑병 오크의 초소 게이트 ➡️ 주조 공장 중심부[cite: 1].</p>
                    </div>
                    <div class="p-3 bg-blue-950/20 border border-blue-900/40 rounded space-y-2">
                        <p class="font-bold text-blue-400 text-sm">🌊 제2막: 정령의 장벽 및 하수구 구역 (인간 종족 패널티 적용)[cite: 1]</p>
                        <p class="text-gray-300"><strong>• 구조:</strong> 진실의 호수 ➡️ 신비의 수로 ➡️ 물의 신전 ➡️ [최종 아레나] 수령 종지부 대 콜로세움[cite: 1].</p>
                        <p class="text-gray-400"><strong>• 맵 전술 기믹:</strong> 인간 종족 존재 시 상점 단가 3배 폭등 (용인족/금속기술사는 전면 면제)[cite: 1]. [진실의 호수] 영혼 질문 실패 시 10턴간 파티 전체 스킬 봉인[cite: 1]. [신비의 수로] 주사위 미달 시 고수압 분사로 파티 전원 -2 HP 강제 감산[cite: 1]. [물의 신전] 선인/중립은 도전자 패스하나 악인 카르마 파티는 강제 중간보스전 격발[cite: 1].</p>
                    </div>
                    <div class="p-3 bg-red-950/20 border border-red-900/40 rounded space-y-2">
                        <p class="font-bold text-orange-400 text-sm">🌋 제3막: 심연의 화산대 및 용왕의 안식처 (CON 화독 디버프 상시 가동)[cite: 1]</p>
                        <p class="text-gray-300"><strong>• 구조:</strong> 1~2계층(대장장이 마을/광산) ➡️ 3~4계층(불의 신전/용인족 군락) ➡️ 5계층(태양의 대신전 본선 회랑) ➡️ [최종 아레나] 8계층 심연의 마그마 대제단[cite: 1].</p>
                        <p class="text-gray-400"><strong>• 맵 전술 기믹:</strong> 탐색 전진 시마다 체질 주사위 실패 시 화상 각인 및 능력치 감산[cite: 1]. [1~2계층] 드워프 해방 시 티타늄/미스릴 원석 파밍 및 히든 대장간 해금[cite: 1]. [7계층 비밀 보물의 방] 트레저 헌터 whtjs02 경쟁 레이드 격발[cite: 1].</p>
                    </div>
                    <div class="p-3 bg-purple-950/20 border border-purple-900/40 rounded space-y-2">
                        <p class="font-bold text-purple-400 text-sm">🌌 제4막: 암흑의 심연 및 마왕의 옥좌 (무중력 난기류 시공간 변형)[cite: 1]</p>
                        <p class="text-gray-300"><strong>• 구조:</strong> 1~2계층(멸망한 엘프 숲) ➡️ 3~5계층(연합군 캠프) ➡️ 6~8계층(암흑 지하 감옥) ➡️ 9계층(마왕의 대 회랑) ➡️ [최종 아레나] 10계층 공허 아레나[cite: 1].</p>
                        <p class="text-gray-400"><strong>• 맵 전술 기믹:</strong> 이동 시 DEX 주사위 실패 시 행동력 -2 및 5 피해[cite: 1]. [6~8계층] 난민 3턴 타임어택 탈출 성공 시 마왕 4페이즈 차단 유물 [고뇌의 쇠사슬] 확정 루팅[cite: 1]. [9계층] 소탕 결산 시 카리아 복귀 컷신 출력[cite: 1].</p>
                    </div>
                   </div>`,
        },
        "intro-maker": {
            title: "에델가드 연대기 시스템 디렉터",
            body: `<div class="p-4 bg-neutral-900 border border-neutral-800 rounded text-sm text-center space-y-2">
                    <p class="text-base font-bold text-red-500 tracking-widest">👑 SYSTEM MASTER DIRECTORY</p>
                    <p class="text-white text-lg font-bold">남 찬 우 (GM)</p>
                    <p class="text-xs text-gray-400">"에델가드 세계관의 절대적 창조자이자 시나리오 및 전막의 리얼타임 연산 제어 총괄 디렉터입니다[cite: 1]. 모든 물리 법칙과 주사위 인과율 세션은 시스템 마스터 정본 시트를 절대적 기준점으로 삼아 가동됩니다[cite: 1]."</p>
                   </div>`,
        },

        // -----------------------------------------------------------------------------
        // ■ [CATEGORY 02] 직업소개 분파 (3:4 비율 완벽 결착)
        // -----------------------------------------------------------------------------
        "class-base": {
            title: "에델가드 연대기 ── 12대 기본 클래스 아카이브 (3:4)",
            body: `<div class="space-y-6 text-xs">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-3 bg-neutral-900/60 border border-neutral-800 rounded flex gap-4 items-center">
                            <div class="w-21 h-28 bg-neutral-800 border border-neutral-700 flex-shrink-0 overflow-hidden rounded relative aspect-[3/4]">
                                <img src="class/바바리안.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                <div class="hidden absolute inset-0 text-[10px] text-gray-500 items-center justify-center text-center p-1 bg-neutral-950">3:4 IMG</div>
                            </div>
                            <div class="flex-1 space-y-1">
                                <p class="font-bold text-white text-sm">01. 바바리안 <span class="text-[10px] text-red-400 font-normal">| HP: 25→48</span></p>
                                <p class="text-yellow-500 font-bold text-[10px]">[패시브: 그냥 하면 된다]</p>
                                <p class="text-gray-400 leading-relaxed">[포효] 적 방어 -2 디버프. 적의 면역 장막을 완전히 파쇄 무시하고 트루 대미지를 직격시킵니다[cite: 1, 3].</p>
                            </div>
                        </div>

                        <div class="p-3 bg-neutral-900/60 border border-neutral-800 rounded flex gap-4 items-center">
                            <div class="w-21 h-28 bg-neutral-800 border border-neutral-700 flex-shrink-0 overflow-hidden rounded relative aspect-[3/4]">
                                <img src="class/전사.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                <div class="hidden absolute inset-0 text-[10px] text-gray-500 items-center justify-center text-center p-1 bg-neutral-950">3:4 IMG</div>
                            </div>
                            <div class="flex-1 space-y-1">
                                <p class="font-bold text-white text-sm">02. 전사 <span class="text-[10px] text-red-400 font-normal">| HP: 20→45</span></p>
                                <p class="text-yellow-500 font-bold text-[10px]">[패시브: 근성으로 버티기]</p>
                                <p class="text-gray-400 leading-relaxed">사망 치명타 피격 시 피 1로 생존 후 1턴간 무적[cite: 1]. 무기에 무작위 5대 원소 속성을 인포트하는 인챈트 구동[cite: 1].</p>
                            </div>
                        </div>

                        <div class="p-3 bg-neutral-900/60 border border-neutral-800 rounded flex gap-4 items-center">
                            <div class="w-21 h-28 bg-neutral-800 border border-neutral-700 flex-shrink-0 overflow-hidden rounded relative aspect-[3/4]">
                                <img src="class/무투가.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                <div class="hidden absolute inset-0 text-[10px] text-gray-500 items-center justify-center text-center p-1 bg-neutral-950">3:4 IMG</div>
                            </div>
                            <div class="flex-1 space-y-1">
                                <p class="font-bold text-white text-sm">03. 무투가 <span class="text-[10px] text-red-400 font-normal">| HP: 35→40</span></p>
                                <p class="text-yellow-500 font-bold text-[10px]">[패시브: 그림자 연격]</p>
                                <p class="text-gray-400 leading-relaxed">평타/스킬 발동 시 턴 소모 없이 동일 기술 1회 자동 재격발[cite: 1]. 강력한 위력의 [원투 펀치] 연사[cite: 1].</p>
                            </div>
                        </div>

                        <div class="p-3 bg-neutral-900/60 border border-neutral-800 rounded flex gap-4 items-center">
                            <div class="w-21 h-28 bg-neutral-800 border border-neutral-700 flex-shrink-0 overflow-hidden rounded relative aspect-[3/4]">
                                <img src="class/로그.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                <div class="hidden absolute inset-0 text-[10px] text-gray-500 items-center justify-center text-center p-1 bg-neutral-950">3:4 IMG</div>
                            </div>
                            <div class="flex-1 space-y-1">
                                <p class="font-bold text-white text-sm">04. 로그 <span class="text-[10px] text-red-400 font-normal">| HP: 13→25</span></p>
                                <p class="text-yellow-500 font-bold text-[10px]">[패시브: 어쩌다 보니 기습]</p>
                                <p class="text-gray-400 leading-relaxed">이동/후퇴 시 은폐 기습 3배 참격 발동[cite: 1]. 적의 액션 턴 타이밍에 체력 30%를 날려버리는 [암살] 보유[cite: 1].</p>
                            </div>
                        </div>

                        <div class="p-3 bg-neutral-900/60 border border-neutral-800 rounded flex gap-4 items-center">
                            <div class="w-21 h-28 bg-neutral-800 border border-neutral-700 flex-shrink-0 overflow-hidden rounded relative aspect-[3/4]">
                                <img src="class/궁수.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                <div class="hidden absolute inset-0 text-[10px] text-gray-500 items-center justify-center text-center p-1 bg-neutral-950">3:4 IMG</div>
                            </div>
                            <div class="flex-1 space-y-1">
                                <p class="font-bold text-white text-sm">05. 궁수 <span class="text-[10px] text-red-400 font-normal">| HP: 14→30</span></p>
                                <p class="text-yellow-500 font-bold text-[10px]">[패시브: 심안의 저격]</p>
                                <p class="text-gray-400 leading-relaxed">사거리 감산 페널티 영구 면제. 적 타격 시 2턴간 실명/기절 유발 및 민첩 계수 ×3 화력 투사[cite: 1].</p>
                            </div>
                        </div>

                        <div class="p-3 bg-neutral-900/60 border border-neutral-800 rounded flex gap-4 items-center">
                            <div class="w-21 h-28 bg-neutral-800 border border-neutral-700 flex-shrink-0 overflow-hidden rounded relative aspect-[3/4]">
                                <img src="class/레인저.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                <div class="hidden absolute inset-0 text-[10px] text-gray-500 items-center justify-center text-center p-1 bg-neutral-950">3:4 IMG</div>
                            </div>
                            <div class="flex-1 space-y-1">
                                <p class="font-bold text-white text-sm">06. 레인저 <span class="text-[10px] text-red-400 font-normal">| HP: 15→26</span></p>
                                <p class="text-yellow-500 font-bold text-[10px]">[패시브: 탄환 우연 결합]</p>
                                <p class="text-gray-400 leading-relaxed">화기 사격 시 15% 가변 확률로 3대 원소 복합 대폭발 사출[cite: 1]. 마도 유탄 광역 피해를 주는 [수류탄 투척][cite: 1].</p>
                            </div>
                        </div>

                        <div class="p-3 bg-neutral-900/60 border border-neutral-800 rounded flex gap-4 items-center">
                            <div class="w-21 h-28 bg-neutral-800 border border-neutral-700 flex-shrink-0 overflow-hidden rounded relative aspect-[3/4]">
                                <img src="class/마법사.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                <div class="hidden absolute inset-0 text-[10px] text-gray-500 items-center justify-center text-center p-1 bg-neutral-950">3:4 IMG</div>
                            </div>
                            <div class="flex-1 space-y-1">
                                <p class="font-bold text-white text-sm">07. 마법사 <span class="text-[10px] text-red-400 font-normal">| HP: 15→28</span></p>
                                <p class="text-yellow-500 font-bold text-[10px]">[패시브: 마력 과부하]</p>
                                <p class="text-gray-400 leading-relaxed">주문 대미지 즉시 2배 복리 폭증 가동[cite: 1]. 주사위 롤링 연산 없이 확정 선제 고정 대미지를 주는 [매직미사일][cite: 1].</p>
                            </div>
                        </div>

                        <div class="p-3 bg-neutral-900/60 border border-neutral-800 rounded flex gap-4 items-center">
                            <div class="w-21 h-28 bg-neutral-800 border border-neutral-700 flex-shrink-0 overflow-hidden rounded relative aspect-[3/4]">
                                <img src="class/소환법사.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                <div class="hidden absolute inset-0 text-[10px] text-gray-500 items-center justify-center text-center p-1 bg-neutral-950">3:4 IMG</div>
                            </div>
                            <div class="flex-1 space-y-1">
                                <p class="font-bold text-white text-sm">08. 소환법사 <span class="text-[10px] text-red-400 font-normal">| HP: 11→21</span></p>
                                <p class="text-yellow-500 font-bold text-[10px]">[패시브: 폭주하는 물량]</p>
                                <p class="text-gray-400 leading-relaxed">소환수 시전 시 코스트 없이 동일 개체 2마리 자동 무상 복사[cite: 1]. 소환수를 부수어 자가 치유하는 [소환수 희생][cite: 1].</p>
                            </div>
                        </div>

                        <div class="p-3 bg-neutral-900/60 border border-neutral-800 rounded flex gap-4 items-center">
                            <div class="w-21 h-28 bg-neutral-800 border border-neutral-700 flex-shrink-0 overflow-hidden rounded relative aspect-[3/4]">
                                <img src="class/이교도.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                <div class="hidden absolute inset-0 text-[10px] text-gray-500 items-center justify-center text-center p-1 bg-neutral-950">3:4 IMG</div>
                            </div>
                            <div class="flex-1 space-y-1">
                                <p class="font-bold text-white text-sm">09. 이교도 <span class="text-[10px] text-red-400 font-normal">| HP: 10→27</span></p>
                                <p class="text-yellow-500 font-bold text-[10px]">[패시브: 혼돈의 가로채기]</p>
                                <p class="text-gray-400 leading-relaxed">적 우두머리의 이로운 인과율 버프 하이재킹 가로채기. 적의 DEX/INT 신경망을 마비시키는 저주 진 구사[cite: 1].</p>
                            </div>
                        </div>

                        <div class="p-3 bg-neutral-900/60 border border-neutral-800 rounded flex gap-4 items-center">
                            <div class="w-21 h-28 bg-neutral-800 border border-neutral-700 flex-shrink-0 overflow-hidden rounded relative aspect-[3/4]">
                                <img src="class/마령술사.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                <div class="hidden absolute inset-0 text-[10px] text-gray-500 items-center justify-center bg-neutral-950">3:4 IMG</div>
                            </div>
                            <div class="flex-1 space-y-1">
                                <p class="font-bold text-white text-sm">10. 마령술사 <span class="text-[10px] text-red-400 font-normal">| HP: 18→38</span></p>
                                <p class="text-yellow-500 font-bold text-[10px]">[패시브: 심안의 홀림]</p>
                                <p class="text-gray-400 leading-relaxed">기본 유혹 스킬 대성공 시 보스 제외 전장 적 전체 1턴 광기 팀킬 유발[cite: 1]. 메이지 저격 카운터 탑재[cite: 1].</p>
                            </div>
                        </div>

                        <div class="p-3 bg-neutral-900/60 border border-neutral-800 rounded flex gap-4 items-center col-span-1 md:col-span-2">
                            <div class="w-21 h-28 bg-neutral-800 border border-neutral-700 flex-shrink-0 overflow-hidden rounded relative aspect-[3/4]">
                                <img src="class/종말예언자.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                <div class="hidden absolute inset-0 text-[10px] text-gray-500 items-center justify-center text-center p-1 bg-neutral-950">3:4 IMG</div>
                            </div>
                            <div class="flex-1 space-y-1">
                                <p class="font-bold text-red-500 text-sm">11. 종말예언자 <span class="text-[10px] text-red-400 font-normal">| 전 액트 70 HP 규격외 고정</span></p>
                                <p class="text-yellow-500 font-bold text-[10px]">[패시브: 인과율 파괴]</p>
                                <p class="text-gray-400 leading-relaxed">최고위 궁극기 제약 전면 해킹 패쇄. [마살](민첩다이스 ×2배 피해), [칼의 군무](고정 8도트 피해 장막), [순보](인과율 카운터 30 물리피해) 연산 엔진 가동[cite: 1].</p>
                            </div>
                        </div>
                    </div>
                   </div>`,
        },
        "class-sub": {
            title: "에델가드 연대기 ── 클래스별 고유 서브클래스 도감 (가로 드래그 3:4)",
            body: `<div class="space-y-4 text-xs">
                    <div class="p-3 bg-neutral-900 border border-neutral-800 rounded">
                        <p class="font-bold text-yellow-500 text-sm">🔄 파티 내 동일 계열 서브클래스 상주 제한 프로토콜</p>
                        <p class="mt-1 text-gray-400 leading-relaxed">가로 스크롤 영역을 마우스로 잡고 양옆으로 슬라이드 밀어서 탐색할 수 있습니다. 서브 카드 내부의 일러스트 썸네일 역시 정밀한 3:4 비율 제어 로직이 적용되어 있습니다.</p>
                    </div>

                    <div class="w-full flex gap-4 overflow-x-auto pb-4 pt-2 snap-x scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-transparent">
                        
                        <div class="w-[280px] flex-shrink-0 bg-neutral-900/80 border border-neutral-800 p-3 rounded snap-start space-y-3">
                            <p class="font-bold text-white text-sm border-b border-neutral-800 pb-1">⚔️ 1. 바바리안 파생</p>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/용기사.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[용기사]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">드래곤 피해 1.5배, STR+2</p></div>
                            </div>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/라그나로크.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[라그나로크]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">[거인의 액스텀프] 최소 7보장</p></div>
                            </div>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/스파르탄.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[스파르탄]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">고정 5댐, 1턴 확정 기절다운</p></div>
                            </div>
                        </div>

                        <div class="w-[280px] flex-shrink-0 bg-neutral-900/80 border border-neutral-800 p-3 rounded snap-start space-y-3">
                            <p class="font-bold text-white text-sm border-b border-neutral-800 pb-1">🛡️ 2. 전사 파생</p>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/성기사.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[성기사]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">전체 방어주사위+1, CHA+2</p></div>
                            </div>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/마검사.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[마검사]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">물리 타격에 INT 보정 트루뎀가산</p></div>
                            </div>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/왕실기사.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[왕실기사]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">[명역의 결투] 도발 및 방어+3</p></div>
                            </div>
                        </div>

                        <div class="w-[280px] flex-shrink-0 bg-neutral-900/80 border border-neutral-800 p-3 rounded snap-start space-y-3">
                            <p class="font-bold text-white text-sm border-b border-neutral-800 pb-1">👊 3. 무투가 파생</p>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/챔피언.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[챔피언]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">연속 격타 성공 시 다이스보정 누적</p></div>
                            </div>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/주먹왕 랄프.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[주먹왕 랄프]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">장갑/실드 크래킹 분쇄기, 최소 6댐</p></div>
                            </div>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/야쿠자.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[야쿠자]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">피격 대미지의 50% 고정 확정 반격</p></div>
                            </div>
                        </div>

                        <div class="w-[280px] flex-shrink-0 bg-neutral-900/80 border border-neutral-800 p-3 rounded snap-start space-y-3">
                            <p class="font-bold text-white text-sm border-b border-neutral-800 pb-1">🗡️ 4. 로그 파생</p>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/도적.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[도적]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">[소매치기] 눈값비례 자원 강탈</p></div>
                            </div>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/팬텀.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[팬텀]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">회피/선공권 주사위 상시 +3 보정</p></div>
                            </div>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/암살자.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[암살자]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">독속성 부여, 치명타 시 피해 3배증폭</p></div>
                            </div>
                        </div>

                        <div class="w-[280px] flex-shrink-0 bg-neutral-900/80 border border-neutral-800 p-3 rounded snap-start space-y-3">
                            <p class="font-bold text-white text-sm border-b border-neutral-800 pb-1">🏹 5. 궁수 파생</p>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/총검사.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[총검사]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">근접 패널티 면제 및 소총연계 참격</p></div>
                            </div>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/이도류검사.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[이도류 검사]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">[질풍 사선참] 장갑무시 총 10 연타</p></div>
                            </div>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/로빈후드.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[로빈후드]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">범위 적 전체 명중 주사위 패널티-3</p></div>
                            </div>
                        </div>

                        <div class="w-[280px] flex-shrink-0 bg-neutral-900/80 border border-neutral-800 p-3 rounded snap-start space-y-3">
                            <p class="font-bold text-white text-sm border-b border-neutral-800 pb-1">🦅 6. 레인저 파생</p>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/거너.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[거너]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">명중 판정 +2, DEX 보정치+1 가산</p></div>
                            </div>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/런처.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[런처]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">[중화기 폭격] D20 + STR 광역 데미지</p></div>
                            </div>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/메카닉.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[메카닉]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">[게이볼그 펀치] 35 고정 방무대미지</p></div>
                            </div>
                        </div>

                        <div class="w-[280px] flex-shrink-0 bg-neutral-900/80 border border-neutral-800 p-3 rounded snap-start space-y-3">
                            <p class="font-bold text-white text-sm border-b border-neutral-800 pb-1">🔮 7. 마법사 파생</p>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/불법사.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[불법사]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">화염 1.5배, 3의 화상도트피해 유발</p></div>
                            </div>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/얼음법사.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[얼음법사]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">[절대 영도] 적 공속 및 DEX -3 감산</p></div>
                            </div>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/용언사용자.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[용언 사용자]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">모든 영창 판정 D20 다이스 상시 +2</p></div>
                            </div>
                        </div>

                        <div class="w-[280px] flex-shrink-0 bg-neutral-900/80 border border-neutral-800 p-3 rounded snap-start space-y-3">
                            <p class="font-bold text-white text-sm border-b border-neutral-800 pb-1">👹 8. 소환법사 파생</p>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/정령사.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[정령사]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">소환수 개체 공격/최대체력 +50%</p></div>
                            </div>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/네크로맨서.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[네크로맨서]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">[유골 폭발] 노코스트 광역 독피해</p></div>
                            </div>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/마물술사.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[마물술사]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">심연 낙인 대상 향해 소환수 대미지+4</p></div>
                            </div>
                        </div>

                        <div class="w-[280px] flex-shrink-0 bg-neutral-900/80 border border-neutral-800 p-3 rounded snap-start space-y-3">
                            <p class="font-bold text-white text-sm border-b border-neutral-800 pb-1">🧪 9. 이교도 파생</p>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/흑마법사.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[흑마법사]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">HP 5 깎고 고정 15 암흑트루마법피해</p></div>
                            </div>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/연금술사.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[연금술사]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">촉매 불안정투척, 50% 확률 화상/기절</p></div>
                            </div>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/무당.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[무당]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">제어저항 및 면역다이스 대성공률+15%</p></div>
                            </div>
                        </div>

                        <div class="w-[280px] flex-shrink-0 bg-neutral-900/80 border border-neutral-800 p-3 rounded snap-start space-y-3">
                            <p class="font-bold text-white text-sm border-b border-neutral-800 pb-1">👁️ 10. 마령술사 파생</p>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/구미호.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[구미호]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">고유 매혹오라 강화, 유혹다이스 +3</p></div>
                            </div>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/서큐버스.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[서큐버스]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">수컷 마물 정신제어 시 강력한 불리 감산</p></div>
                            </div>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/타천사.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-yellow-400 text-[11px]">[타천사]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">[정기 소멸] 피해량 100% 흡수치유</p></div>
                            </div>
                        </div>

                        <div class="w-[280px] flex-shrink-0 bg-neutral-900/80 border border-neutral-800 p-3 rounded snap-start space-y-3">
                            <p class="font-bold text-orange-400 text-sm border-b border-neutral-800 pb-1">⚙️ 특화. 금속기술사</p>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/금속기바알.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-blue-400 text-[11px]">[바알 (번개)]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">DEX+3 상시, 번개가르기 3x5 연타</p></div>
                            </div>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/금속기아스타로트.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-orange-400 text-[11px]">[아스타로트 (불)]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">STR+3 상시, 가상 HP 20 및 화상반격</p></div>
                            </div>
                            <div class="bg-black/40 p-2 border border-neutral-800 rounded flex gap-3 items-center">
                                <div class="w-12 h-16 bg-neutral-900 border border-neutral-700 rounded overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                                    <img src="subclass/금속기아몬.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950">3:4</div>
                                </div>
                                <div class="flex-1 min-w-0"><p class="font-bold text-purple-400 text-[11px]">[아몬 (거신)]</p><p class="text-[10px] text-gray-400 mt-0.5 truncate">4막 전고 30m 거신 완전실체화 해금</p></div>
                            </div>
                        </div>

                    </div>
                   </div>`,
        },
        "class-hidden": {
            title: "에델가드 연대기 ── 최상위 히든 & 통합 언락 클래스 총람 (3:4)",
            body: `<div class="space-y-4 text-xs">
                    <div class="p-3 bg-purple-950/20 border border-purple-900/40 rounded">
                        <p class="font-bold text-purple-400 text-sm">👑 최상위 및 단일 통합 언락 직업군 전역 규칙</p>
                        <p class="mt-1 text-gray-300 leading-relaxed">캠페인 초반 캐릭터 메이킹이나 올랜덤 다이스 풀에서는 절대 출현하지 않는 특권 자산입니다. 모험 중 하드코어한 스텟 조건, 주사위 판정, 특정 보스 격멸 인과율을 충족한 상태에서 유저의 명시적인 수락 선언이 있어야만 영혼의 궤적을 변격 융합하여 전직할 수 있습니다.</p>
                    </div>

                    <!-- 12대 히든/통합 직업 그리드 카드 레이아웃 -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        
                        <!-- 01. 드래곤본 - 카리아의 그릇 -->
                        <div class="bg-neutral-900/80 border border-neutral-800 rounded p-3 flex flex-col justify-between space-y-3">
                            <div class="w-full bg-neutral-800 border border-neutral-700 overflow-hidden rounded relative aspect-[3/4]">
                                <img src="cha/드래곤본 카리아.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                <div class="hidden absolute inset-0 text-xs text-gray-500 items-center justify-center bg-neutral-950">3:4 IMAGE SLOT</div>
                            </div>
                            <div class="space-y-1">
                                <p class="font-bold text-yellow-400 text-sm">01. 드래곤본 (카리아) <span class="text-[10px] text-red-400 font-normal">[40 HP]</span></p>
                                <p class="text-gray-400 text-[11px]"><strong>스텟:</strong> STR+3, DEX+3 가산[cite: 1]</p>
                                <p class="text-gray-400 leading-relaxed text-[11px]">NPC 카리아 배틀 시련 완수 전직. 패시브 [용의 철갑] 및 궁극기 [드래곤모드] 활성화[cite: 1].</p>
                            </div>
                        </div>

                        <!-- 02. 드래곤본 - 롱기누스의 정수 -->
                        <div class="bg-neutral-900/80 border border-neutral-800 rounded p-3 flex flex-col justify-between space-y-3">
                            <div class="w-full bg-neutral-800 border border-neutral-700 overflow-hidden rounded relative aspect-[3/4]">
                                <img src="cha/드래곤본 롱기누스.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                <div class="hidden absolute inset-0 text-xs text-gray-500 items-center justify-center bg-neutral-950">3:4 IMAGE SLOT</div>
                            </div>
                            <div class="space-y-1">
                                <p class="font-bold text-yellow-400 text-sm">02. 드래곤본 (롱기누스) <span class="text-[10px] text-red-400 font-normal">[55 HP]</span></p>
                                <p class="text-gray-400 text-[11px]"><strong>스텟:</strong> INT+5, CHA+5 가산, DEX-2 페널티[cite: 1]</p>
                                <p class="text-gray-400 leading-relaxed text-[11px]">3막 최종전 용왕과의 일기토 다이스 성공 후 정수 완전 흡수. 신살창 해금[cite: 1].</p>
                            </div>
                        </div>

                        <!-- 03. 독성 구속자 -->
                        <div class="bg-neutral-900/80 border border-neutral-800 rounded p-3 flex flex-col justify-between space-y-3">
                            <div class="w-full bg-neutral-800 border border-neutral-700 overflow-hidden rounded relative aspect-[3/4]">
                                <img src="cha/독성 구속자.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                <div class="hidden absolute inset-0 text-xs text-gray-500 items-center justify-center bg-neutral-950">3:4 IMAGE SLOT</div>
                            </div>
                            <div class="space-y-1">
                                <p class="font-bold text-yellow-400 text-sm">03. 독성 구속자 <span class="text-[10px] text-red-400 font-normal">[32 HP]</span></p>
                                <p class="text-gray-400 leading-relaxed text-[11px]">1막 광장 구석 5% 독립 확률 독성 벌레 인카운터 체질 변이 성공[cite: 1].</p>
                            </div>
                        </div>

                        <!-- 04. 듀얼리스트 -->
                        <div class="bg-neutral-900/80 border border-neutral-800 rounded p-3 flex flex-col justify-between space-y-3">
                            <div class="w-full bg-neutral-800 border border-neutral-700 overflow-hidden rounded relative aspect-[3/4]">
                                <img src="cha/듀얼리스트.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                <div class="hidden absolute inset-0 text-xs text-gray-500 items-center justify-center bg-neutral-950">3:4 IMAGE SLOT</div>
                            </div>
                            <div class="space-y-1">
                                <p class="font-bold text-yellow-400 text-sm">04. 듀얼리스트 <span class="text-[10px] text-red-400 font-normal">[25 HP]</span></p>
                                <p class="text-gray-400 text-[11px]"><strong>스텟:</strong> 지력/매력 마법 스텟 최적화 재분배[cite: 1]</p>
                                <p class="text-gray-400 leading-relaxed text-[11px]">2막 카드마스터 도박 매치 주사위 연속 대성공 파산 리워드[cite: 1].</p>
                            </div>
                        </div>

                        <!-- 05. 분노한 엘프의 왕 -->
                        <div class="bg-neutral-900/80 border border-neutral-800 rounded p-3 flex flex-col justify-between space-y-3">
                            <div class="w-full bg-neutral-800 border border-neutral-700 overflow-hidden rounded relative aspect-[3/4]">
                                <img src="cha/엘프의왕.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                <div class="hidden absolute inset-0 text-xs text-gray-500 items-center justify-center bg-neutral-950">3:4 IMAGE SLOT</div>
                            </div>
                            <div class="space-y-1">
                                <p class="font-bold text-yellow-400 text-sm">05. 분노한 엘프의 왕 <span class="text-[10px] text-red-400 font-normal">[34 HP]</span></p>
                                <p class="text-gray-400 text-[11px]"><strong>스텟:</strong> 전 능력치 보정치 기본 +3 가산[cite: 1]</p>
                                <p class="text-gray-400 leading-relaxed text-[11px]">4막 폐허 세계수 영혼 주사위 성공으로 신창 궁그닐 전면 귀속[cite: 1].</p>
                            </div>
                        </div>

                        <!-- 06. 바바리안 대족장 -->
                        <div class="bg-neutral-900/80 border border-neutral-800 rounded p-3 flex flex-col justify-between space-y-3">
                            <div class="w-full bg-neutral-800 border border-neutral-700 overflow-hidden rounded relative aspect-[3/4]">
                                <img src="cha/바바리안 대족장.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                <div class="hidden absolute inset-0 text-xs text-gray-500 items-center justify-center bg-neutral-950">3:4 IMAGE SLOT</div>
                            </div>
                            <div class="space-y-1">
                                <p class="font-bold text-yellow-400 text-sm">06. 바바리안 대족장 <span class="text-[10px] text-red-400 font-normal">[58 HP]</span></p>
                                <p class="text-gray-400 text-[11px]"><strong>스텟:</strong> 근력(STR) 보정치 +4 가산[cite: 1]</p>
                                <p class="text-gray-400 leading-relaxed text-[11px]">1막 보스 파스칼 광폭화 턴 유도 처치 후 코어 완력 흡수 성공[cite: 1].</p>
                            </div>
                        </div>

                        <!-- 07. 정령술사 -->
                        <div class="bg-neutral-900/80 border border-neutral-800 rounded p-3 flex flex-col justify-between space-y-3">
                            <div class="w-full bg-neutral-800 border border-neutral-700 overflow-hidden rounded relative aspect-[3/4]">
                                <img src="cha/정령술사.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                <div class="hidden absolute inset-0 text-xs text-gray-500 items-center justify-center bg-neutral-950">3:4 IMAGE SLOT</div>
                            </div>
                            <div class="space-y-1">
                                <p class="font-bold text-yellow-400 text-sm">07. 정령술사 <span class="text-[10px] text-red-400 font-normal">[38 HP]</span></p>
                                <p class="text-gray-400 text-[11px]"><strong>스텟:</strong> 지력(INT) 및 물 정령 친화 보정 가산[cite: 1]</p>
                                <p class="text-gray-400 leading-relaxed text-[11px]">2막 운디네 정령 폭포 명상 분기 수락 및 공명 주사위 성공[cite: 1].</p>
                            </div>
                        </div>

                        <!-- 08. 천군 (天君) -->
                        <div class="bg-neutral-900/80 border border-neutral-800 rounded p-3 flex flex-col justify-between space-y-3">
                            <div class="w-full bg-neutral-800 border border-neutral-700 overflow-hidden rounded relative aspect-[3/4]">
                                <img src="cha/천군.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                <div class="hidden absolute inset-0 text-xs text-gray-500 items-center justify-center bg-neutral-950">3:4 IMAGE SLOT</div>
                            </div>
                            <div class="space-y-1">
                                <p class="font-bold text-yellow-400 text-sm">08. 천군 (天君) <span class="text-[10px] text-red-400 font-normal">[45 HP]</span></p>
                                <p class="text-gray-400 text-[11px]"><strong>스텟:</strong> 신성 계수 반영 및 매력(CHA) 보정+2[cite: 1]</p>
                                <p class="text-gray-400 leading-relaxed text-[11px]">3막 신전 주사위 18이상 대성공, 성좌 선인왕검 빙의 각성[cite: 1]. 삼환신 구동[cite: 3].</p>
                            </div>
                        </div>

                        <!-- 09. 무신 (武神) -->
                        <div class="bg-neutral-900/80 border border-neutral-800 rounded p-3 flex flex-col justify-between space-y-3">
                            <div class="w-full bg-neutral-800 border border-neutral-700 overflow-hidden rounded relative aspect-[3/4]">
                                <img src="cha/무신.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                <div class="hidden absolute inset-0 text-xs text-gray-500 items-center justify-center bg-neutral-950">3:4 IMAGE SLOT</div>
                            </div>
                            <div class="space-y-1">
                                <p class="font-bold text-yellow-400 text-sm">09. 무신 (武神) <span class="text-[10px] text-red-400 font-normal">[60 HP]</span></p>
                                <p class="text-gray-400 text-[11px]"><strong>스텟:</strong> 전 능력치 주사위 보정치 상시 +1[cite: 1]</p>
                                <p class="text-gray-400 leading-relaxed text-[11px]">파티 내 무당 생존, 2막 주관식 역사 고증 퀴즈(이순신) 통과[cite: 1, 3].</p>
                            </div>
                        </div>

                        <!-- 10. [통합 직업] 락토르 -->
                        <div class="bg-neutral-900/80 border border-neutral-800 rounded p-3 flex flex-col justify-between space-y-3">
                            <div class="w-full bg-neutral-800 border border-neutral-700 overflow-hidden rounded relative aspect-[3/4]">
                                <img src="cha/락토르.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                <div class="hidden absolute inset-0 text-xs text-gray-500 items-center justify-center bg-neutral-950">3:4 IMAGE SLOT</div>
                            </div>
                            <div class="space-y-1">
                                <p class="font-bold text-orange-400 text-sm">10. 락토르 (Raktor) <span class="text-[10px] text-red-400 font-normal">[고정 45 HP]</span></p>
                                <p class="text-gray-400 text-[11px]"><strong>전직:</strong> STR 15, CHA 10 이상 대장간 트리거 각성[cite: 1]</p>
                                <p class="text-gray-400 leading-relaxed text-[11px]">메인/서브 파쇄 소멸 통합, STR+4 / CHA+5 보정[cite: 1]. 고대 대장간 건물 실체화 소환 및 초거대 해머틱 크러셔 구사[cite: 1].</p>
                            </div>
                        </div>

                        <!-- 11. [통합 직업] 로 아이아스 -->
                        <div class="bg-neutral-900/80 border border-neutral-800 rounded p-3 flex flex-col justify-between space-y-3">
                            <div class="w-full bg-neutral-800 border border-neutral-700 overflow-hidden rounded relative aspect-[3/4]">
                                <img src="cha/로아이아스.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                <div class="hidden absolute inset-0 text-xs text-gray-500 items-center justify-center bg-neutral-950">3:4 IMAGE SLOT</div>
                            </div>
                            <div class="space-y-1">
                                <p class="font-bold text-blue-400 text-sm">11. 로 아이아스 (Rho Aias) <span class="text-[10px] text-red-400 font-normal">[고정 50 HP]</span></p>
                                <p class="text-gray-400 text-[11px]"><strong>전직:</strong> 인간/오크 한정 2막 물의 신전 공명 각성[cite: 1]</p>
                                <p class="text-gray-400 leading-relaxed text-[11px]">STR+6, DEF+8 영구 가산[cite: 1]. 최종 궁극기 시전 시 전고 30m 크기의 7중 투명 백색 금장 마법 장막으로 대인 파멸기 원천 무효화[cite: 1].</p>
                            </div>
                        </div>

                        <!-- 12. [메카닉 2차] 메카니스트 -->
                        <div class="bg-neutral-900/80 border border-neutral-800 rounded p-3 flex flex-col justify-between space-y-3">
                            <div class="w-full bg-neutral-800 border border-neutral-700 overflow-hidden rounded relative aspect-[3/4]">
                                <img src="cha/메카니스트.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                                <div class="hidden absolute inset-0 text-xs text-gray-500 items-center justify-center bg-neutral-950">3:4 IMAGE SLOT</div>
                            </div>
                            <div class="space-y-1">
                                <p class="font-bold text-red-500 text-sm">12. 메카니스트 (Mechanist) <span class="text-[10px] text-red-400 font-normal">[고정 35 HP]</span></p>
                                <p class="text-gray-400 text-[11px]"><strong>전직:</strong> 1막 아레나 장치 해킹 ➡️ 2막 운디네 공명[cite: 1]</p>
                                <p class="text-gray-400 leading-relaxed text-[11px]">과열률 100% 시 800G 소소 오벨리스크 거신기갑 탑승[cite: 1]. 보스 전멸 타격을 80 고정 피해로 압축 흡수 수호 결계 기믹 전개[cite: 1].</p>
                            </div>
                        </div>

                    </div>
                   </div>`,
        },
        // -----------------------------------------------------------------------------
        // ■ [CATEGORY 03] NPC 소개 분파 (3:4 와이드 도감 레이아웃 설계)
        // -----------------------------------------------------------------------------
        "npc-act1": {
            title: "제 1막: 오리진 광장 허브 ─ 핵심 NPC 프로필 (3:4)",
            body: `<div class="space-y-4 text-xs">
                    <div class="p-3 bg-neutral-900 border border-neutral-800 rounded flex gap-4 items-center">
                        <div class="w-24 bg-neutral-800 border border-neutral-700 overflow-hidden rounded flex-shrink-0 relative aspect-[3/4]">
                            <img src="npc/레아.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                            <div class="hidden absolute inset-0 text-[10px] text-gray-500 items-center justify-center bg-neutral-950">3:4 IMG</div>
                        </div>
                        <div class="flex-1 space-y-1">
                            <p class="font-bold text-pink-400 text-base">🍺 주점 마스터 ─ 레아 (Lea)</p>
                            <p class="text-[10px] text-gray-400">순혈 하이엘프 / 극점의 얼음마법사 | 소속: 풍요의 달 주점</p>
                            <p class="text-gray-400 leading-relaxed mt-1">롱 실키 백금발과 에메랄드 녹색 눈동자. 레이스 백색 블라우스에 청색 스키니 진 장착 원화 고증.</p>
                            <p class="text-yellow-500 font-bold mt-1">🎁 호감도 MAX: 아군 모든 마법 명중률 주사위 무관 100% 무조건 성공 변격 개정.</p>
                        </div>
                    </div>

                    <div class="p-3 bg-neutral-900 border border-neutral-800 rounded flex gap-4 items-center">
                        <div class="w-24 bg-neutral-800 border border-neutral-700 overflow-hidden rounded flex-shrink-0 relative aspect-[3/4]">
                            <img src="npc/카리아 1막.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                            <div class="hidden absolute inset-0 text-[10px] text-gray-500 items-center justify-center bg-neutral-950">3:4 IMG</div>
                        </div>
                        <div class="flex-1 space-y-1">
                            <p class="font-bold text-red-400 text-base">🐲 드래곤 소녀 ─ 카리아 (Karia) [일상 모드]</p>
                            <p class="text-[10px] text-gray-400">용인족 / 돌격 바바리안 분파 | 소속: 카리아의 고서점</p>
                            <p class="text-gray-400 leading-relaxed mt-1">17세 체구 폴리모프 상태. 진홍색 용 꼬리와 작은 뿔 상주. 크롭 티셔츠와 핫팬츠 착용 원화 고증.</p>
                            <p class="text-gray-400">※ 메인 슬롯 영입 및 전사를 최상위 히든클래스 [드래곤본]으로 강제 각성 연동 트리거 보유.</p>
                        </div>
                    </div>

                    <div class="p-3 bg-neutral-900 border border-neutral-800 rounded flex gap-4 items-center">
                        <div class="w-24 bg-neutral-800 border border-neutral-700 overflow-hidden rounded flex-shrink-0 relative aspect-[3/4]">
                            <img src="npc/토르간.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                            <div class="hidden absolute inset-0 text-[10px] text-gray-500 items-center justify-center bg-neutral-950">3:4 IMG</div>
                        </div>
                        <div class="flex-1 space-y-1">
                            <p class="font-bold text-amber-500 text-base">🌋 장인 드워프 ─ 토르간 (Torgan)</p>
                            <p class="text-[10px] text-gray-400">드워프 / 마도 최고기술사 | 소속: 고대 대장간</p>
                            <p class="text-gray-400 leading-relaxed mt-1">턱수염 황금 링 고정. 왼팔 전체에 고대 톱니바퀴와 실린더가 연동되는 [마도 스팀 기계 의수] 장착 고증.</p>
                            <p class="text-blue-400">⚒️ 기믹: 레인저/궁수 총기 개조 명중 보정+2 및 파스칼 [장갑 약점 리포트] 컴파일 전담.</p>
                        </div>
                    </div>
                   </div>`,
        },
        "npc-act2": {
            title: "제 2막: 정령의 장벽 및 하수구 구역 ─ 주요 인카운터 (3:4)",
            body: `<div class="space-y-4 text-xs">
                    <div class="p-3 bg-blue-950/20 border border-blue-900/40 rounded flex gap-4 items-center">
                        <div class="w-24 bg-neutral-800 border border-neutral-700 overflow-hidden rounded flex-shrink-0 relative aspect-[3/4]">
                            <img src="npc/진실의호수.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                            <div class="hidden absolute inset-0 text-[10px] text-gray-500 items-center justify-center bg-neutral-950">3:4 IMG</div>
                        </div>
                        <div class="flex-1">
                            <p class="font-bold text-blue-400 text-base">🏞️ 1단계 노드: 진실의 호수 [자아 감지기]</p>
                            <p class="text-gray-300 mt-1 leading-relaxed">거울 호수 지형 자체 자아 탑재. 진입 시 [진실게임] 프로토콜 전개. 주관식 답변 실패 시 10턴 동안 파티 전체 모든 스킬 사용 차단 락인 패널티 강제 삽입.</p>
                        </div>
                    </div>
                   </div>`,
        },
        "npc-act3": {
            title: "제 3막: 심연의 화산대 ─ 고결한 대신전의 사제 (3:4)",
            body: `<div class="space-y-4 text-xs">
                    <div class="p-3 bg-neutral-900 border border-neutral-800 rounded flex gap-4 items-center">
                        <div class="w-24 bg-neutral-800 border border-neutral-700 overflow-hidden rounded flex-shrink-0 relative aspect-[3/4]">
                            <img src="npc/카일리.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                            <div class="hidden absolute inset-0 text-[10px] text-gray-500 items-center justify-center bg-neutral-950">3:4 IMG</div>
                        </div>
                        <div class="flex-1 space-y-1">
                            <p class="font-bold text-yellow-400 text-base">👑 용족 대사 신관 ─ 카일리 (Kylie)</p>
                            <p class="text-[10px] text-gray-400">고대 황금용 혈통 / 용언 사용자 | 제3막 4계층 태양의 대신전 제단</p>
                            <p class="text-gray-300 leading-relaxed mt-1">은백발(Silver-white hair)에 보석 왕관 고정. 눈이 먼 심안의 사제 자태. 황금 사제 로브 및 고대 황금용 마도 지팡이 파지.</p>
                            <p class="text-purple-400 font-bold text-[10px]">✨ 이펙트: 발걸음 이동 시 바닥 석판 위로 기하학적인 [황금빛 용언 장막 마법진 매트릭스] 파동 연출 가동.</p>
                            <p class="text-green-400 mt-1">⚖️ 외교 주사위 판정 보정치 [+5] 확정 가산. 호감도 공략 성공 시 용왕 롱기누스 외교 평화 포섭 동맹 플래그 언락.</p>
                        </div>
                    </div>
                   </div>`,
        },
        "npc-act4": {
            title: "제 4막: 암흑의 공허 영역 ─ 동료 복귀 서사 스크립트 (3:4)",
            body: `<div class="space-y-4 text-xs">
                    <div class="p-3 bg-neutral-900 border border-neutral-800 rounded flex gap-4 items-center">
                        <div class="w-24 bg-neutral-800 border border-neutral-700 overflow-hidden rounded flex-shrink-0 relative aspect-[3/4]">
                            <img src="npc/카리아 전투모드.jpeg" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"/>
                            <div class="hidden absolute inset-0 text-[10px] text-gray-500 items-center justify-center bg-neutral-950">3:4 IMG</div>
                        </div>
                        <div class="flex-1 space-y-1">
                            <p class="font-bold text-red-500 text-base">⚡ 드래곤 여전사 ─ 카리아 (Karia) [전투 모드 완전해방태]</p>
                            <p class="text-[10px] text-gray-400">4막 9계층 마왕의 대 회랑 사천왕 소탕 결산 시 3:4 고증 컷신 사출 복귀</p>
                            <p class="text-gray-300 leading-relaxed mt-1">무력 해방 선언 시 8등신 성인 여전사 체급 폭발적 성장. 선명한 11자 복근 노출 가죽 크롭 전술 조끼 및 스트랩 핫팬츠, 머리에 자라난 암흑 용족 뿔 쌍과 등 뒤 진홍색 롱 헤어 휘날림 고증.</p>
                            <p class="text-red-400 font-bold">[초거대 중화기형 흑철 대검]을 오른손 하나로 파지한 무시무시한 파괴 수호자 스탠스 귀환.</p>
                        </div>
                    </div>
                   </div>`,
        },
    };
    // =================================================================================
    // 3. [NEW V15.0.0] 보스 도감 전용 단독 팝업창 레이아웃 & 동적 스위칭 엔진 시스템
    // =================================================================================

    // HTML 바디 최하단에 보스 전용 모달 창 동적 생성 결착
    const bossModalHTML = `
    <div id="bossModal" class="hidden fixed inset-0 z-[110] flex items-center justify-center bg-black/85 backdrop-blur-md">
        <button id="bossPrevBtn" class="absolute left-4 md:left-8 z-50 w-12 h-12 rounded-full bg-red-950/80 border-2 border-red-700 text-red-400 text-xl font-bold flex items-center justify-center hover:bg-red-900 hover:text-white transition-all shadow-[0_0_15px_rgba(239,68,68,0.3)]">◀</button>
        
        <div class="w-[850px] max-w-[95vw] h-[85vh] max-h-[800px] bg-[#0c0c0c] border-2 border-red-900/60 shadow-[0_0_50px_rgba(239,68,68,0.15)] flex flex-col overflow-hidden rounded relative">
            
            <div class="h-14 bg-gradient-to-r from-red-950/80 to-[#0c0c0c] flex flex-col md:flex-row justify-between items-center px-4 border-b border-white/10 py-1 flex-shrink-0 gap-2">
                <div class="flex items-center gap-2">
                    <span class="text-xs bg-red-600 text-white px-2 py-0.5 font-bold rounded tracking-widest" id="bossTypeTag">MAIN BOSS</span>
                    <span id="bossMainTitle" class="text-sm text-red-400 font-bold tracking-wider">보스 이름</span>
                </div>
                <div id="bossPhaseTabContainer" class="flex gap-1 bg-black/60 p-1 border border-neutral-800 rounded">
                    </div>
                <button id="bossCloseBtn" class="absolute right-4 top-3 text-gray-400 hover:text-red-500 text-xl transition-colors z-10">✕</button>
            </div>
            
            <div class="flex-1 p-6 overflow-y-auto text-gray-300 space-y-6 text-xs leading-relaxed bg-radial-gradient">
                
                <div class="flex flex-col md:flex-row gap-6 items-start border-b border-neutral-900 pb-6">
                    <div class="w-full md:w-[210px] bg-neutral-900 border-2 border-neutral-800 overflow-hidden rounded relative aspect-[3/4] flex-shrink-0 shadow-lg shadow-black/80">
                        <img id="bossMainImg" src="" class="w-full h-full object-cover" />
                        <div class="absolute inset-0 text-xs text-gray-500 flex items-center justify-center bg-neutral-950 text-center p-2 hidden" id="bossImgFallback">3:4 BOSS IMAGE</div>
                    </div>
                    <div class="flex-1 space-y-3 w-full">
                        <div class="p-3 bg-neutral-950/80 border border-neutral-900 rounded">
                            <p class="font-bold text-yellow-500 text-xs mb-1">📊 현재 페이즈 전투 능력치 지표</p>
                            <p id="bossStatText" class="text-gray-300 font-mono text-[11px]">HP: -- / DEF: --</p>
                        </div>
                        <div class="space-y-1">
                            <p class="font-bold text-gray-400 text-[11px]">📜 아레나 환경 레벨 디자인 및 로어</p>
                            <p id="bossLoreText" class="text-gray-400 leading-relaxed text-[11px]">보스 상세 설명</p>
                        </div>
                    </div>
                </div>
                
                <div class="space-y-3">
                    <p class="font-bold text-red-400 text-sm tracking-wide border-l-2 border-red-500 pl-2">⚔️ 페이즈 고유 보유 기믹 및 스킬 연산 명세</p>
                    <div id="bossSkillBookContainer" class="grid grid-cols-1 gap-3">
                        </div>
                </div>
                
            </div>
        </div>

        <button id="bossNextBtn" class="absolute right-4 md:right-8 z-50 w-12 h-12 rounded-full bg-red-950/80 border-2 border-red-700 text-red-400 text-xl font-bold flex items-center justify-center hover:bg-red-900 hover:text-white transition-all shadow-[0_0_15px_rgba(239,68,68,0.3)]">▶</button>
    </div>`;
    document.body.insertAdjacentHTML("beforeend", bossModalHTML);

    // 보스 전용 모달 제어 변수 활성화
    const bossModal = document.getElementById("bossModal");
    const bossCloseBtn = document.getElementById("bossCloseBtn");
    const bossPrevBtn = document.getElementById("bossPrevBtn");
    const bossNextBtn = document.getElementById("bossNextBtn");

    const bossTypeTag = document.getElementById("bossTypeTag");
    const bossMainTitle = document.getElementById("bossMainTitle");
    const bossPhaseTabContainer = document.getElementById("bossPhaseTabContainer");
    const bossMainImg = document.getElementById("bossMainImg");
    const bossImgFallback = document.getElementById("bossImgFallback");
    const bossStatText = document.getElementById("bossStatText");
    const bossLoreText = document.getElementById("bossLoreText");
    const bossSkillBookContainer = document.getElementById("bossSkillBookContainer");

    let currentBossIndex = 0;
    let currentPhaseIndex = 0;

    // =================================================================================
    // [v15.0.0 CORE DATA] 전막 시나리오 메인 / 히든 보스 페이즈별 이미지 및 스킬 데이터 세트
    // =================================================================================
    const bossDatabase = [
        // -----------------------------------------------------------------------------
        // ■ [BOSS 01] 제1막 메인 보스 : 대기갑병 파스칼 (Pascal)
        // -----------------------------------------------------------------------------
        {
            id: "boss-pascal",
            name: "대기갑병 파스칼 (Pascal)",
            type: "MAIN BOSS",
            phases: [
                {
                    name: "1페이즈 [마도 중장갑 태세]",
                    img: "cha/파스칼1차.jpeg",
                    stats: "HP: 250 / 마도 마나 실드: 50 / 위험도: ★★★★☆[cite: 2]",
                    lore: "전고 12m 크기의 하이오크 사이보그 폭군입니다[cite: 2]. 전신을 시꺼먼 마도 중장갑 판금으로 감싸고 고압의 검은 마기 증기를 뿜어내며 거대한 기계식 액스를 파지하고 있습니다[cite: 2].",
                    skills: [
                        {
                            name: "🛡️ [액티브] 하이오크 대지분쇄격",
                            desc: "상부 발칸포 소사 전조증상 이후 격발[cite: 2]. 시스템 엔진이 아군 파티원 중 정확히 절반(4인 파티 기준 2명)을 무작위 지정하여 1턴간 강제 행동 불능(기절/Banned) 상태로 고정하고, 지정 대상자들에게 [고정 대미지 8]을 무조건 부여합니다[cite: 2].",
                            img: "cha/파스칼_대지분쇄.jpeg",
                        },
                    ],
                },
                {
                    name: "2페이즈 [초고열 광폭화]",
                    img: "cha/파스칼2차.jpeg",
                    stats: "HP: 45 이하 고정 돌입 / 공격력: 광폭화 오버클럭 상태[cite: 2]",
                    lore: "체력이 45 임계점 이하로 떨어지는 순간 전신 회로에서 불꽃을 폭발시키며 상시 가동되는 폭주 태세입니다[cite: 2]. 순수 눈값 20인 전설적 대성공이나 시스템이 인정한 강력한 공격 연계 조건을 충족하기 전까지 보스의 그로기 상태이상이 절대 발동되지 않고 차단됩니다[cite: 2].",
                    skills: [
                        {
                            name: "🌋 [궁극기] 파멸의 초고열 휠윈드",
                            desc: "전장 전체를 초토화하는 물리/화염 혼합 광역기입니다[cite: 2]. [힘(STR) 주사위(1d6) 눈값 × 5]의 대미지를 아군 파티 전체에게 매 턴 확정 주입합니다[cite: 2]. 주사위에만 의존하는 것이 아닌, 지형이나 스킬을 활용한 창의적인 고유 돌발행동 주관식 입력을 통해 기믹을 크래킹해야 합니다[cite: 2].",
                            img: "cha/파스칼_휠윈드.jpeg",
                        },
                    ],
                },
            ],
        },

        // -----------------------------------------------------------------------------
        // ■ [BOSS 02] 제2막 메인 보스 : 수령 운디네 (Undine)
        // -----------------------------------------------------------------------------
        {
            id: "boss-undine",
            name: "수령 운디네 (Undine)",
            type: "MAIN BOSS",
            phases: [
                {
                    name: "1페이즈 [수령의 해일 몰아치기]",
                    img: "cha/운디네1차.jpeg",
                    stats: "HP: 380 / 물리 면역 장막: 60 / 상성: 빙결/이교도 취약[cite: 2, 3]",
                    lore: "물의 신전 중앙 지하 심연 코어인 초거대 원형 대 콜로세움 아레나에 군림하는 순수 원소정령형 우두머리입니다. 일반적인 물리 평타, 권격, 칼날 타격을 전면 무효화 차단하는 장막을 두르고 있습니다[cite: 1].",
                    skills: [
                        {
                            name: "🌊 [패시브] 수류 장막 프로토콜",
                            desc: "보스 전신을 감싼 60 수치의 장막으로 아군의 일반 참격/물리 피해를 고정 0 대미지로 차단합니다[cite: 1, 2]. 오직 금속기술사의 가시 타격이나 인벤토리 내 [소이탄] 아이템을 직격시켜 장막을 증발시켜야만 본체 타격이 허용됩니다[cite: 1, 2].",
                            img: "cha/운디네_장막.jpeg",
                        },
                        {
                            name: "💧 [패시브] 익사 (Drowning) 필드 결산",
                            desc: "보스 룸 진입 즉시 콜로세움 전장에 수원이 완충됨에 따라, 매 턴 종료 연산 시 파티원 전체에게 익사 디버프를 주사위 판정 없이 강제 주입합니다[cite: 1, 2]. 걸린 아군은 수중 저항 패널티로 [민첩(DEX) 보정치 강제 -3 감산] 및 [매 턴 종료 시마다 HP -4]의 도트 피해를 고정 차감당합니다[cite: 1, 2].",
                            img: "cha/운디네_익사.jpeg",
                        },
                        {
                            name: "🧜‍♀️ [액티브] 물의 수호자 소환",
                            desc: "일정 이상 피격 시 [체력 20의 수호자 3명]을 전방 영역에 즉시 실시간 현현 소환 배치합니다[cite: 3]. 수호자가 한 명이라도 생존해 상주 중일 경우 매 턴 운디네의 HP가 +3씩 자동 수복 수합됩니다[cite: 3].",
                            img: "cha/운디네_소환수.jpeg",
                        },
                    ],
                },
                {
                    name: "2페이즈 [절대영도 빙하시대]",
                    img: "cha/운디네2차.jpeg",
                    stats: "HP: 50 이하 임계점 하강 돌입 / 마력 임계점 태세[cite: 1, 2]",
                    lore: "운디네의 남은 체력이 50 이하로 떨어지는 순간, 필드에 차 있던 콜로세움의 모든 수원을 순간적으로 급속 동결시키는 광역 전멸 제어 페이즈입니다[cite: 1, 2]. 수호자 3명을 전멸시키면 마력 역류로 1턴간 행동 제약 기절 무방비 상태에 빠집니다[cite: 3].",
                    skills: [
                        {
                            name: "❄️ [궁극기] 절대영도 빙하시대",
                            desc: "급속 냉기 주문 폭발을 격발하여 2턴 동안 파티 전체를 행동 불능 상태인 [빙결(Freeze)] 상태로 완전 묶어버립니다[cite: 1, 2]. 아군의 턴이 마비되기 전 인벤토리의 [화염주]를 투척해 녹이거나, 바바리안 클래스의 무력 주관식 돌발행동 입력을 성공시켜 빙판을 깨부수어야 인과율 주도권을 수복할 수 있습니다[cite: 1, 2].",
                            img: "cha/운디네_빙하시대.jpeg",
                        },
                    ],
                },
            ],
        },

        // -----------------------------------------------------------------------------
        // ■ [BOSS 03] 제3막 메인 보스 : 용왕 롱기누스 (Longinus)
        // -----------------------------------------------------------------------------
        {
            id: "boss-longinus",
            name: "용왕 롱기누스 (Longinus)",
            type: "MAIN BOSS",
            phases: [
                {
                    name: "1페이즈 [마도 사슬 결계 구속 태세]",
                    img: "cha/용왕1.jpeg",
                    stats: "HP: 300 / 결계 방어력: 무한대 (DEF INF)[cite: 1, 2]",
                    lore: "온몸이 음산한 고대 구속의 흑철 사슬에 묶인 채 대제단에 도사린 거대 백룡의 형상입니다[cite: 1, 2]. 전신의 비늘 균열 사이로 진홍색 용의 피가 실시간으로 흘러내리는 처절한 비주얼 기믹을 지니고 있습니다[cite: 2].",
                    skills: [
                        {
                            name: "⛓️ [패시브] 흑철의 절망 장갑",
                            desc: "아레나 외곽의 흑철 비석들과 보스의 사슬이 공명하여 인과율 방어력이 시스템상 [무한대]로 잠금 처리됩니다[cite: 1, 2]. 아군의 모든 일반 평타, 격투, 마법 대미지는 무조건 0 고정으로 완전히 튕겨 나갑니다[cite: 1, 2].",
                            img: "cha/롱기누스_장갑.jpeg",
                        },
                        {
                            name: "⚙️ [기믹 파쇄 조건] 사슬 링크 크래킹",
                            desc: "오직 무기 관통 속성 주사위 판정 성공이나, 방어구 관통을 보유한 특수 클래스의 [철제 분쇄 스킬]을 정확히 적중시켜 사슬 링크를 강제로 조각내야만 본체 체력 300에 다이렉트 감산 타격이 허용됩니다[cite: 1, 2].",
                            img: "cha/롱기누스_사슬파쇄.jpeg",
                        },
                    ],
                },
                {
                    name: "2페이즈 [인간 폴리모프 대마법사 스탠스]",
                    img: "cha/용왕2.jpeg",
                    stats: "HP: 420 독립 새로 생성 / 턴 우선권: 100% 하이재킹[cite: 1, 2]",
                    lore: "사슬이 파쇄되면 적발에 검은 뿔테 안경, 제복 코트 핏을 두른 8~9등신의 슬림한 인간형 마검사 형태로 외형을 압축 치환합니다[cite: 1, 2]. 왼손에는 [선조의 고서], 오른손에는 화염 강기가 감도는 흑철 마검을 파지합니다[cite: 2].",
                    skills: [
                        {
                            name: "🔮 [패시브] 턴 시퀀스 하이재킹",
                            desc: "아군 파티원들의 민첩 스텟 수치를 시스템 레벨에서 무조건 해킹 가로채어 [턴 우선권 무조건 100% 독점] 장치를 가동합니다[cite: 1, 2]. 아군의 기동성과 무관하게 보스가 매 라운드 무조건 선제공격을 개시합니다[cite: 1, 2].",
                            img: "cha/롱기누스_하이재킹.jpeg",
                        },
                        {
                            name: "🔥 [액티브] 오버클럭 원소 파괴술 주문",
                            desc: "매 턴마다 주사위 롤링 연산 없이 시스템에 등록된 상위 기술 주문을 순차적으로 100% 자동 영창하여 아레나 전체에 시전 난사합니다[cite: 1, 2].<br>1. 지옥화염 해일(전열 아군 20 화염 피해 및 3턴간 화상 도트 -5)<br>2. 절대영도 서리발(후방 라인 전체 1턴간 강제 빙결 행동 불능)<br>3. 카르마 반전의 저주(아군이 사용한 버프 메커니즘을 디버프 오라로 강제 변환 역연산)<br>4. 명석의 차원 종단참(단일 타겟 아군의 장갑을 무시하고 25 복합 치명타 피해 삽입)[cite: 1, 2]",
                            img: "cha/롱기누스_원소파괴.jpeg",
                        },
                    ],
                },
                {
                    name: "3페이즈 [완전체 해방 오리진 고룡화]",
                    img: "cha/롱기누스 고룡화.jpeg",
                    stats: "HP: 550 최종 진화 개방 / 제어 상태이상: 100% 절대 면역[cite: 1, 2]",
                    lore: "인간의 외피를 찢어발겨 전고 30m 크기의 오리진 블랙 드래곤 진명태를 취합니다[cite: 1, 2]. 전신이 흑철빛 옵시디언 비늘로 뒤덮이고 날개 안쪽에 은하수 성좌 매트릭스가 기식합니다[cite: 2]. 기절, 수면, 턴 밀기 등 모든 제어 상태이상이 통째로 무력화 면역 처리됩니다[cite: 1, 2].",
                    skills: [
                        {
                            name: "🌋 [궁극기] 종말의 브레스 (Doomsday Breath)",
                            desc: "형태 전환 완료 시점을 기준으로 [매 3턴 주기가 돌아올 때마다] 시스템이 강제 격발시키는 확정 전멸기 스크립트입니다[cite: 1, 2]. 보스가 허공으로 도약하여 아레나 전역에 성좌 화염을 사출하며, 아군 유저의 모든 주사위 눈값(D20)을 완벽 해킹 무시합니다[cite: 1, 2]. 캐릭터가 두른 장갑, 실드, 신성 무적 등 모든 생존 버프를 지워버리고 [파티원 전체 즉사 분해 (Instant Wipeout)] 스크립트를 즉시 집행합니다[cite: 1, 2]. 브레스 차징 턴(1, 2턴의 딜 윈도우) 내에 파스칼 코어 이상의 폭딜로 임계치 화력을 꺾거나, 지형 내부 특정 고유 기믹 주관식 돌발 입력을 성공시켜 차징 회로를 끊어야만 생존할 수 있습니다[cite: 1, 2].",
                            img: "cha/롱기누스_브레스.jpeg",
                        },
                    ],
                },
            ],
        },

        // -----------------------------------------------------------------------------
        // ■ [BOSS 04] 제4막 메인 최종 보스 : 마왕 (Demon King)
        // -----------------------------------------------------------------------------
        {
            id: "boss-demonking",
            name: "최종마왕 (Demon King)",
            type: "MAIN BOSS",
            phases: [
                {
                    name: "1차전 [고대 현자 형태]",
                    img: "img/boss/마왕1차.jpeg",
                    stats: "HP: 800 시작 / 제어 상태이상: 100% 절대 면역[cite: 1, 2]",
                    lore: "육중한 보랏빛 흑철 판금 중장갑을 두른 3m 크기의 암흑 군주 상태입니다[cite: 1, 2]. 안면에 핏빛 적안을 번뜩이며 양손에 차원을 뒤틀며 회전하는 분홍빛 전격 마기 플라즈마 구체를 결착하고 있습니다[cite: 1, 2]. <br><strong>[상시 저지 불가 패시브]:</strong> 아군 파티가 가해오는 모든 기절, 빙결, 침묵, 도발, 턴 밀기 등 제어 상태이상 및 영혼 디버프에 대해 100% 절대 면역 체계를 배정받아 상시 유지합니다[cite: 1, 2].",
                    skills: [
                        {
                            name: "👁️ [액티브] 공간 파괴 주문",
                            desc: "광역 공간 고대 파괴 주문을 난사하여 매 턴 주사위 판정 없이 아군 파티 전체에게 [고정 15 마법 피해]를 상시 지속 주입합니다[cite: 1, 2].",
                            img: "cha/마왕_공간파괴.jpeg",
                        },
                        {
                            name: "🔮 [액티브] 마기 정신 오염",
                            desc: "플레이어 파티원들의 인과율 뇌수를 강제로 오염시켜 [아군끼리 타겟팅 시스템을 완벽히 상실하고 서로를 향해 무차별 공격을 감행]하게 만드는 하드코어 정신 파괴 디버프를 전술 필드 전역에 살포합니다[cite: 1, 2].",
                            img: "cha/마왕_정신오염.jpeg",
                        },
                    ],
                },
                {
                    name: "2차전 [힘 개방 마검사 형태]",
                    img: "img/boss/마왕2차.jpeg",
                    stats: "HP: 650 ~ 401 구간 가동 / 참격 범위: 200% 강제 증폭[cite: 1, 2]",
                    lore: "마왕의 폭발하는 투기로 인해 부유하던 거대 석조 파편들이 외곽으로 밀려나며 필드가 완전 평지로 전환됩니다[cite: 1]. 등 뒤로 거대한 암흑 드래곤 가죽 날개와 기계식 꼬리가 완전히 실체화 개방된 진화 사양입니다[cite: 1, 2].",
                    skills: [
                        {
                            name: "⚔️ [궁극기] 마기 강기 주입 ─ 종단 격살",
                            desc: "검격 내부에 진한 암흑 마기와 강기를 주입하여 휘두르는 모든 물리 참격 범위 판정 및 칼날의 타격 사거리를 시스템 연산상 [정확히 2배(200%)로 강제 증폭]시킵니다[cite: 1, 2]. 전장의 전열(탱커)과 후열(힐러)의 거리 개념을 완벽하게 삭제하여, 단 한 번의 베기 모션으로 전 파티원을 동시에 타격하는 광역 물리 치명타 피해 시퀀스를 강제 가동합니다[cite: 1, 2].",
                            img: "cha/마왕_종단격살.jpeg",
                        },
                    ],
                },
                {
                    name: "3차전 [완전 현현 기본 검사 Stance]",
                    img: "img/boss/마왕 3차.jpeg",
                    stats: "HP: 400 ~ 201 구간 가동 / 반사율: 100% 대칭 결착[cite: 1, 2]",
                    lore: "인간의 외형을 완전히 버리고 전신의 살결이 지옥마룡의 뿔 장갑으로 진화한 진명 개방태입니다[cite: 1, 2]. 복근 갑주 틈새 사이로 시빨간 파멸의 자색 화염 장막이 분출되어 아레나 필드 전체를 오염 격하합니다[cite: 1, 2].",
                    skills: [
                        {
                            name: "🛡️ [패시브] 극점의 암흑 검술 ─ 100% 반사 결계",
                            desc: "유저가 공격 선언 주사위(D20)를 던지는 바로 그 찰나, 주사위 판정 조건을 완전히 하이재킹 무시하고 아군의 칼날을 받아쳐 냅니다[cite: 1, 2]. 시전자가 마왕에게 가한 물리/마법 피해량의 정확히 100%를 역으로 시전자에게 고스란히 되돌려주는 대칭 카운터 반격 기믹이 상시 작동하므로, 단순 무차별 타격 시 파티가 스스로 자멸하게 설계되어 있습니다[cite: 1, 2].",
                            img: "cha/마왕_반사결계.jpeg",
                        },
                    ],
                },
                {
                    name: "4차전 [★검귀 劍鬼 변격 스탠스]",
                    img: "img/boss/마왕 4차 검귀.jpeg",
                    stats: "HP: 200 ~ 0 종극의 데드존 / 선제권: 100% 독점[cite: 1, 2]",
                    lore: "생명력이 200 이하 임계점에 도달하면 비대했던 부정한 마왕 기운과 날개 뿔 장갑을 대폭발과 함께 스스로 부수어 증발시키고, 수백 년 전 대륙을 유린하던 [인간 시절 검귀 본연의 형상](8~9등신의 슬림한 백발 하이엘프 검사 자태)으로 형태를 강제 압축 치환합니다[cite: 1, 2].",
                    skills: [
                        {
                            name: "👻 [궁극기] 인과율 종단참 (Causality Slash)",
                            desc: "마법과 디버프 주문을 일절 배제하는 대신 사거리와 지형 물리 법칙을 파쇄합니다[cite: 1, 2]. [보스의 선제 공격 턴 연산 우선권 100% 독점] 특성이 상시 가동되어, 매 라운드 턴 개시 단계마다 주사위 판정 없이 파티 내 무작위 아군 한 명의 미간을 지정해 차원을 접어 도약하는 영거리 참격을 사출합니다[cite: 1, 2]. 지정 타겟에게 [35의 고정 트루 물리 치명타 대미지]를 캐릭터의 방어 장갑, 매직 실드를 통째로 씹어버리고 즉시 직격시켜 그 자리에서 참수(즉사)시킵니다[cite: 1, 2]. 이 무자비한 패턴은 오직 금속기술사의 금속 수은 경화 패시브나 전사의 근성 무적 패시브 등 특수 생존 면역 장치만 버텨낼 수 있으며, 6~8계층 난민 구출 미션으로 루팅한 [고뇌의 쇠사슬] 가동 시에만 1턴간 이 독점권을 파쇄할 수 있습니다[cite: 1, 2].",
                            img: "cha/마왕_종단참.jpeg",
                        },
                    ],
                },
            ],
        },

        // -----------------------------------------------------------------------------
        // ■ [BOSS 05] 제1막 히든 보스 : 건슬링어 우두막시키 (Udumaksiki)
        // -----------------------------------------------------------------------------
        {
            id: "boss-udumaksiki",
            name: "건슬링어 우두막시키 (Udumaksiki)",
            type: "HIDDEN BOSS",
            phases: [
                {
                    name: "1페이즈 [상시 과열 폭주태]",
                    img: "cha/우두막시키.jpeg",
                    stats: "HP: 85 고정 / 스텟: STR 8 / DEX 20 / INT 8 / CHA 12[cite: 2]",
                    lore: "1막 드워프 토르간의 고대 대장간 노점에서 무기 수리 주사위 4회 연속 자동 롤링 중 단 1회라도 실패 시, 쌍권총이 박살 나며 이성을 상실한 채 아군 파티를 습격하는 폭주 거너입니다[cite: 2].",
                    skills: [
                        {
                            name: "🤠 [패시브] 흥분한 건슬링어 코어",
                            desc: "기체의 화기 연사 제어 장치가 완전히 파괴되어 [항시 과열 상태 100% 고정] 사양으로 전투에 임합니다[cite: 2]. 일반 평타 무기 공격 격발 시 무조건 [+3의 화염 속성 추가 대미지]가 가산되며 피격자에게 [50% 확률로 화상 디버프]를 확정 부여합니다[cite: 2]. 단, 과열 임계점 패널티 반동으로 본인이 공격을 선언하여 사출할 때마다 총기 역류 열풍으로 인해 [본인 체력도 매회 -5씩 트루 대미지 감산]당하는 공멸 회로가 연동됩니다[cite: 2].",
                            img: "cha/우두막시키_과열.jpeg",
                        },
                        {
                            name: "🔫 [액티브] 숏킬 (Shot Kill)",
                            desc: "적이 반응하기 전에 권총 한 자루를 빛의 속도로 뽑아 사출하는 정밀 점사 기술입니다[cite: 2]. 시스템 선공권 100% 우선권을 획득하는 [선공기]로 구동되며, 피격 대상 단일 개체에게 [민첩(DEX) 보정치의 2분의 1(1/2)]에 해당하는 속행 물리 피해를 사하합니다[cite: 2].",
                            img: "cha/우두막시키_숏킬.jpeg",
                        },
                        {
                            name: "💣 [액티브] 타임 투 킬 (Time to Kill)",
                            desc: "전장 안의 아군 파티원 중 정확히 [2명의 타겟을 종수 지정]한 뒤, 양손 권총의 실린더 탄창이 완전히 빌 때까지 총 7발의 마탄을 초고속 연사 소사합니다[cite: 2]. 지정당한 아군 캐릭터들에게 각각 [(민첩 다이스 결과값 / 7) × 7회 연타 = 민첩 다이스 총합 수치]에 해당하는 가혹한 탄막 대미지를 실시간 동시 주입합니다[cite: 2].",
                            img: "cha/우두막시키_타임투킬.jpeg",
                        },
                        {
                            name: "💥 [궁극기] 쇼타임 (Showtime)",
                            desc: "양손 권총의 실린더 약실을 최과열 전면 개방하여 지정 적 단일 대상을 향해 무차별 탄환을 난사하는 화력 종단기입니다[cite: 2]. 발동 즉시 보스의 [힘(STR) 주사위 결과 + 매력(CHA) 주사위 결과]의 더블 다이스 최종 합산치를 계산한 뒤, 해당 합산값의 [20분의 1(1/20) 계수 대미지를 정확히 ×40회 연타]로 집중 소사 격직합니다[cite: 2]. 탄환 1발당 독립적으로 [50%의 명중률 확률 난수] 다이스를 개별 롤링해 최종 적중 발수를 누적 결산합니다[cite: 2]. (전투 세션당 최대 2회 제한)[cite: 2].",
                            img: "cha/우두막시키_쇼타임.jpeg",
                        },
                    ],
                },
            ],
        },

        // -----------------------------------------------------------------------------
        // ■ [BOSS 06] 제1막 히든 보스 : 네파포비 (Nepapobi)
        // -----------------------------------------------------------------------------
        {
            id: "boss-nepapobi",
            name: "네파포비 (Nepapobi)",
            type: "HIDDEN BOSS",
            phases: [
                {
                    name: "1페이즈 [수인형 야수 전격태]",
                    img: "cha/네파포비.png",
                    stats: "HP: 120 상향 패치 / 전격 축적도 게이지 연동[cite: 2]",
                    lore: "1막 광장 석조 우물 오브젝트를 돌발행동 주관식 직접 입력으로 수색하다가 1~3 Fumble 주사위 직격 시, 지하 창고로 추락하며 강제 조우하는 3.5m 크기의 거대 북극곰입니다[cite: 1, 2]. 빵빵하고 두터운 밝은 빨간색 패딩 파카를 입고 한 손에 찌그러진 콜라 캔을 쥔 위압적인 비주얼 기믹을 지니고 있습니다[cite: 2].",
                    skills: [
                        {
                            name: "⚡ [패시브] 5타 충전 매트릭스",
                            desc: "턴 흐름과 무관한 [타격 카운팅 과충전 시스템]입니다[cite: 2]. 네파포비 보스가 아군 유저의 공격(평타, 액티브 불문)을 누적 정확히 '5번' 맞는 연산이 완료되는 순간 체내 전격 에너지가 즉시 100% 과충전 상태가 됩니다[cite: 2]. 이 오버클럭 버프가 격발되면 바로 다음 보스 행동 턴에 가해지는 모든 스킬 및 광역 방전 공격의 피해 계수가 [정확히 2배(200%) 복리 증폭]되어 사출됩니다[cite: 2].",
                            img: "cha/네파포비_충전.jpeg",
                        },
                        {
                            name: "🥩 [궁극기] 포식 (Devour)",
                            desc: "인과율을 가로채는 서사 가변 트리거 기술입니다[cite: 2]. 네파포비 레이드 세션 진행 중, 체력이 0이 되어 사망(리타이어)하는 플레이어 캐릭터가 단 한 명이라도 발생하는 순간 즉시 강제 격발됩니다[cite: 2]. 사망한 유저의 육체와 영혼 파편을 그 자리에서 통째로 삼켜 포식하며, 포식당한 대상 플레이어의 고유 능력치 스텟과 스킬셋 아키타입의 정확히 절반(50%) 수치를 보스 본성 영혼 위에 완벽히 하이브리드 융합(Fusion)시킵니다[cite: 2]. 이 순간 보스 레이드는 즉시 조기 중단 승리 정산 처리되며, 네파포비는 해당 유저의 기술 스택을 인계받아 전용 사기 패시브를 장착한 [새로운 플레이어블 동료 영웅 영입 데이터]로 갱신 변격되어 팀에 최종 귀속 합류합니다[cite: 2].",
                            img: "cha/네파포비_포식.jpeg",
                        },
                    ],
                },
            ],
        },

        // -----------------------------------------------------------------------------
        // ■ [BOSS 07] 제2막 히든 보스 : 헤라클레스 재문필
        // -----------------------------------------------------------------------------
        {
            id: "boss-jaemunpil",
            name: "헤라클레스 재문필",
            type: "HIDDEN BOSS",
            phases: [
                {
                    name: "1페이즈 [의태형 인간 기마 궁수]",
                    img: "cha/재문필.jpeg",
                    stats: "HP: 80 고정 / 재생 코어 멀티 장착 사양[cite: 2]",
                    lore: "2막 하수구 최하층 비밀 환락의 필드 가스 장막 통과 시 매력(CHA) 주사위 판정에 단 한 번이라도 실패할 시 시야가 오염되며 강제 전송되어 격발되는 약물/환각 특화 우두머리입니다[cite: 2]. 동그란 철테 안경에 교활하고 잔혹한 미소를 띤 8등신 수려한 인간 남성 체형으로, 흑철 장갑을 두르고 불꽃을 내뿜는 6m 크기 거대 사자 형태의 마도 전차용 야수에 탑승하여 종횡무진 기동합니다[cite: 2].",
                    skills: [
                        {
                            name: "🃏 [패시브] 9의 시련",
                            desc: "재문필 보스가 필드 전장에서 아군에게 통산 [정확히 9번 피격당하는 순간] 체내 강제 재생 코어가 시스템 내부에서 강제 발동합니다[cite: 2]. 주사위 연산 없이 그 즉시 [HP +40]을 확정적으로 자동 즉시 수복 회복시킵니다[cite: 2]. (전투 세션당 최대 2회 한도 제약)[cite: 2].",
                            img: "cha/재문필_시련.jpeg",
                        },
                        {
                            name: "🏹 [액티브] 신궁 (神弓)",
                            desc: "타겟팅된 단일 아군 캐릭터의 이마 및 미간을 포착하여 활시위를 사출합니다[cite: 2]. 피격자의 방어 장갑 수치 및 쉴드 감산 단계를 완벽하게 무시 차단하는 [고정 물리 대미지 15]를 다이렉트 직격 박아 넣습니다[cite: 2].",
                            img: "cha/재문필_신궁.jpeg",
                        },
                        {
                            name: "⛓️ [액티브] 신벌을 향한 돌진",
                            desc: "압도적인 마수의 기동 완력으로 가동되는 실시간 카운터 기술입니다. 유저가 재문필을 향해 공격 참격 및 마법 주문 스킬을 선언하여 주사위를 던지는 바로 그 찰나 시퀀스에 기습 즉시 체인 발동합니다[cite: 2]. 판정 없이 유저의 등 뒤 사각지대를 잡으며 [고정 대미지 10]의 카운터 충격 피해를 선제 사하합니다[cite: 2].",
                            img: "cha/재문필_돌진.jpeg",
                        },
                        {
                            name: "🌋 [궁극기] 대 요격 활",
                            desc: "과거 거인족을 상대할 때 사용한 에테르 황금 활을 허공에 소환하여 아레나를 사격하는 전체 차징형 전멸기입니다[cite: 2]. 파티 전체 광역 레이어에 [고정 대미지 20]을 다이렉트 주입함과 동시에, 시스템 독립 난수로 [정확히 10% 확률 즉사(Instant Death)] 패널티를 강제 유발 결착시킵니다[cite: 2]. 보스가 기술을 차징하는 라운드 턴 중, 아군 기체 중 단 한 명이라도 D20 주사위를 굴려 18 이상 대성공(Critical)을 터트려내면 이 전멸 공세를 완전 무효 상쇄 차단 막기 처리할 수 있는 파쇄 조건을 내장하고 있습니다[cite: 2].",
                            img: "cha/재문필_대요격활.jpeg",
                        },
                    ],
                },
            ],
        },

        // -----------------------------------------------------------------------------
        // ■ [BOSS 08] 제3막 히든 보스 : 예절의 권속 술사 whtjs02
        // -----------------------------------------------------------------------------
        {
            id: "boss-whtjs02",
            name: "예절의 권속 술사 whtjs02",
            type: "HIDDEN BOSS",
            phases: [
                {
                    name: "1페이즈 [트레저 헌터 인간 태세]",
                    img: "cha/whtjs02_1.jpeg",
                    stats: "HP: 100 / 스텟: STR 15 / DEX 15 / INT 15 / CHA 10[cite: 2]",
                    lore: "3막 7계층 비밀 보물의 방 대문 노드 진입 시 독점 대치 상황에서 격발됩니다[cite: 2]. 화염을 다스리는 고대 진 [아몬(Amon)]과 계약을 체결한 금속기술사로 정밀한 한손검 시미터 곡도 참격을 사용합니다[cite: 2].",
                    skills: [
                        {
                            name: "🔥 [패시브] 상위 기술사 코어 & 예절의 화염",
                            desc: "금속기술사 베이스 메커니즘을 공유하되 엔진 내부 계산 시 [최종 피해량의 정확히 1.5배 복리 증폭] 연산이 장착됩니다[cite: 2]. 또한 전장 상성 동화 특성으로 아군이 시전한 화염 기술에 피격당하거나 본인이 불 속성 기술 시전 시, 자신의 생명력을 [즉시 HP +10 치유 수복]함과 동시에 다음 턴 화염 대미지를 무조건 2배(200%) 증폭시킵니다[cite: 2].",
                            img: "cha/whtjs02_인체회로.jpeg",
                        },
                        {
                            name: "🛡️ [액티브] 화염 장벽 (염의 벽 / 炎의 壁)",
                            desc: "칼날에 불꽃을 휘감아 지면을 강하게 단조 내려쳐 열기류 방어 장막을 전개합니다[cite: 2]. 장벽이 유지되는 1턴 동안 아군 파티가 가해오는 모든 [돌진기] 및 [물리 타격기] 계열 공격을 전면 무효화 상쇄 차단하며, 역으로 공세를 감행한 아군 기체에게 [고정 5 화상 반격 피해]를 역주입시킵니다[cite: 2].",
                            img: "cha/whtjs02_염벽.jpeg",
                        },
                        {
                            name: "⚔️ [액티브] 아모르 사이카 (アモール・サイカ)",
                            desc: "검의 외형을 진 아몬의 본질인 둔중한 [아몬의 흑철 한손 대검] 형태로 변화시키는 무기화 마장 기술입니다[cite: 2]. 버프가 켜진 5턴 동안 모든 일반 평타 공격은 아군의 방어 장갑 수치를 완벽 해킹 바이패스하는 [100% 방어 무시 트루 대미지]로 치환되며, 피격자에게 [100% 확정 화상 디버프]를 결착시킵니다[cite: 2]. (보스의 힘 보정 주사위 결과물 스케일링 결산 / 종료 후 2턴간 스킬 휴식 과부하 디버프 연동)[cite: 2].",
                            img: "cha/whtjs02_아모르사이카.jpeg",
                        },
                    ],
                },
                {
                    name: "2페이즈 [아몬 전신 마장 태세]",
                    img: "cha/whtjs02_2.jpeg",
                    stats: "HP: 200 독립 새로 세팅 / 무기: 아모르 사이카 영구 장착 고정[cite: 2]",
                    lore: "1페이즈 생명력 파쇄 즉시 변격 가동. 전신이 불꽃 장갑 핏으로 무장되며, 머리는 불타오르는 눈부신 황금빛 샤프 헤어로 치환 성장하고 등 뒤 공간에는 광오하게 회전하는 화염의 태양 오라 링(불의 고리)이 상시 공전 연출됩니다[cite: 2]. 맨살 근육질 체형 스탠스입니다[cite: 2].",
                    skills: [
                        {
                            name: "🛡️ [액티브] 아모르 벨카 (アモールベルカ)",
                            desc: "화염 장벽의 연산 노드를 공중 허공으로 강제 확대 개정합니다[cite: 2]. 시전 즉시 [2턴의 지속 시간 동안 아군 파티가 가해오는 모든 원거리 물리 사격 및 원거리 마법 투사체 투하 공격을 100% 무효화 상쇄 차단]시킵니다[cite: 2].",
                            img: "cha/whtjs02_벨카.jpeg",
                        },
                        {
                            name: "⚔️ [액티브] 아모르 젤 사이카 (アモール・ゼルサイカ)",
                            desc: "아몬의 흑철 대검 칼날에 마기 불꽃 강기를 주입해 타격 사거리 리치 수치를 [기존의 정확히 2배]로 가로 확장합니다[cite: 2]. 버프 지속 3턴 동안 보스의 평타 공세는 아군의 전열과 후열 그리드를 통째로 동시 관통하여, [한 수에 무조건 아군 파티원 2명을 동시 지정 격살]하는 범위 공격 전열 파쇄기로 업그레이드 구동됩니다[cite: 2].",
                            img: "cha/whtjs02_젤사이카.jpeg",
                        },
                        {
                            name: "🌋 [궁극기] 초 극대마법: 아모르 아르바도르 사이카",
                            desc: "보스의 등 뒤로 지옥의 초열을 다스리는 거대한 [화염의 고대 거인 영체]를 실시간 투영화 소환해 전장 전체를 일도양단합니다[cite: 2]. 아군 파티 전체 광역 레이어에 보스 고유의 [지력(INT) 주사위 눈값 결산 결과 × 1.5배 증폭]에 해당하는 고정 화염 마법 피해를 즉시 직격 투하하며, 적중 전원에게 [매 라운드 종료 시마다 HP -3씩 실시간 감산하는 지옥 화상 디버프]를 영구 결착 오버레이합니다[cite: 2]. (전투 세션당 단 1회 격발 한정)[cite: 2].",
                            img: "cha/whtjs02_아르바도르.jpeg",
                        },
                    ],
                },
                {
                    name: "3페이즈 [완전 현현 예절의 진 아몬]",
                    img: "cha/whtjs02_3.jpeg",
                    stats: "HP: 300 최종 생성 / 스텟: 힘 15, 민첩 20, 지력 30, 매력 25[cite: 2]",
                    lore: "2페이즈 체력 방전 즉시 인간 외피를 완벽 증발시키고, 무기 족쇄를 부수어 [고대 화염의 진 아몬 본체]가 전고 20m 크기의 불꽃 거신 스탠스로 전장에 물리적 직접 완전 현현합니다[cite: 2]. 하늘색 피부를 지녔으며 하반신의 다리가 소멸되어 공중에 연기처럼 소용돌이치며 부유하는 푸른 영체 꼬리(Genie Tail) 형태를 고수합니다[cite: 2]. 이마 중앙에는 다이아몬드 형태의 제3의 눈안 룬 문양이 개안되어 있습니다[cite: 2].",
                    skills: [
                        {
                            name: "👁️ [패시브] 예절의 진 아몬 권능",
                            desc: "전장의 독점 규율을 제어합니다[cite: 2]. 아군 파티원이 아몬을 향해 [돌진기] 혹은 턴 우선권을 가로채는 [선공기] 스킬 연산을 선언하여 가동하려는 그 짧은 찰나, 차원 법칙을 해킹하여 [역으로 아몬이 선제 턴 우선권을 무조건 하이재킹]합니다[cite: 2]. 아군이 선언한 스킬 자체를 시스템 레벨에서 즉시 취소 및 캔슬 무력화시키고, 카운터로 [아몬의 민첩(DEX) 보정 다이스 결과물 수치]만큼의 트루 참격 피해를 아군 본체에 먼저 직격 꽂아 넣습니다[cite: 2].",
                            img: "cha/whtjs02_진아몬패시브.jpeg",
                        },
                        {
                            name: "🔥 [액티브] 아모르 아모라이즈 사이카",
                            desc: "허공에 차원의 핵을 연상시키는 장엄한 초거대 화염구를 형성하여 전장에 투하합니다[cite: 2]. 파티 전체에게 [15의 다이렉트 고정 마법 피해]를 즉시 사하하며, 초열로 신경망을 지져버려 [3턴 동안 아군 전체의 모든 돌진 계열 스킬 사용을 영구 잠금 봉인] 상태로 격하십니다[cite: 2].",
                            img: "cha/whtjs02_아모라이즈.jpeg",
                        },
                        {
                            name: "🐉 [액티브] 아모르 고르돈 고라이돈",
                            desc: "타오르는 마력을 용의 형상으로 위하시켜 전방에 독립 코어를 지닌 서브 우두머리 토큰인 [거대 불의 용 머리] 소환수를 하이브리드 배치합니다[cite: 2]. (전투당 최대 1회 제한)<br><strong>💀 거대 불의 용 머리 스펙:</strong> HP 80 / 전 스텟 15 고정[cite: 2]. 화염/번개 속성 피격 대미지를 50% 반토막 감산 흡수하며 매 턴 아몬과 독립 구동되어 아군 전체를 향해 한 틱당 70% 개별 다이스 명중률로 [2×6 = 총 12의 광역 화염 브레스]를 소사 사출합니다[cite: 2].",
                            img: "cha/whtjs02_고라이돈.jpeg",
                        },
                        {
                            name: "⚡ [액티브] 아모르 라이징카 구로 진카",
                            desc: "초열의 화염 마력을 지반에 강하게 마찰 수렴시켜 역으로 강력한 파괴 전격 에너지를 합성해 냅니다[cite: 2]. 이를 대지에 그대로 박아 넣어 아레나 그리드 바닥 곳곳에 대형 번개 기둥 트랩 구역을 생성합니다[cite: 2]. 이 기술이 깔린 5턴 지속 시간 동안 아군 파티원들은 매 턴 행동 개시 단계마다 [50%의 난수 확률]로 벼락 피격 다이스 롤링을 진행해야 하며, 확률 적치 시 즉시 장갑을 무시하는 [5의 고정 전격 대미지]를 실시간 차감당합니다[cite: 2].",
                            img: "cha/whtjs02_라이징카.jpeg",
                        },
                        {
                            name: "🌌 [전멸 궁극기] 초 극대마법 ─ 아모르 아르바도르 사이카 (진)",
                            desc: "지평선 전체를 뒤덮는 신화급 거대 화염 형상의 종단 마검을 허공에 강신시켜 파티 내 단 한 명의 타겟을 종수 지정하여 수직으로 관통 파쇄하는 파멸의 권능입니다[cite: 2]. 지정당한 단일 개체의 현재 잔여 생명력 수치 및 가상 실드량을 100% 무시 해킹하여, [해당 캐릭터의 HP를 정확히 단 '1'만 남겨두고 전량 강제 불태워 증발 소멸]시키는 일격필살 치트 타격을 감행합니다[cite: 2]. 추가 패널티로 이 불꽃에 영혼을 가열당한 신체는 영혼 저주가 결착되어 [3턴 동안 캐릭터의 모든 스텟 능력치 수치가 각 -10씩 강제 삭감 상실]되는 폐인 상태로 몰락합니다[cite: 2]. (전투 세션당 단 1회 격발 한정)[cite: 2].",
                            img: "cha/whtjs02_진아르바도르.jpeg",
                        },
                    ],
                },
            ],
        },

        // -----------------------------------------------------------------------------
        // ■ [BOSS 09] 제3막 히든 보스 : 검은 각성의 마일드 (Mild)
        // -----------------------------------------------------------------------------
        {
            id: "boss-mild",
            name: "검은 각성의 마일드 (Mild)",
            type: "HIDDEN BOSS",
            phases: [
                {
                    name: "1페이즈 [신생마족 폭주태]",
                    img: "cha/마일드1차.jpeg",
                    stats: "HP: 150 고정 / 체내 마력 오염 순환 상태[cite: 2]",
                    lore: "3막 광산 대장장이 마을 노선 공방 내부 난투극 선택지에서 청년을 제압할 시 영혼 흑화가 격발하는 히든 매치입니다[cite: 2]. 차분하게 내려앉은 내림 머리의 다크 브라운 헤어스타일에 눈가에 눈물이 고여 처연하면서도 수려한 인간 청년 안면 인상을 고수합니다 (IMG_3542.jpg 핵심 고증)[cite: 2]. 전신에서 검은색 오오라 장막이 분출됩니다[cite: 2].",
                    skills: [
                        {
                            name: "👿 [패시브] 신생마족 (Newborn Demon)",
                            desc: "고위 마족으로 강제 급상승하는 신체 코어가 오버클럭 가동됩니다[cite: 2]. 매 라운드 보스의 행동 턴 개시 연산 단계에서 주사위 판정 없이 [본체 체력 HP +20 즉시 확정 회복] 프로토콜을 자동 집행합니다[cite: 2]. 전투 세션 중 이 패시브를 통해 누적 회복한 누적 체력 수치의 합산값이 정확히 [80 HP 임계점에 도달하는 바로 그 찰나], 본체의 현재 잔여 HP 수치와 전면 무관하게 시스템 연산 회로가 대폭발 연출과 함께 [2페이즈: 완전마족화 군주태]로 실시간 강제 강격 진화 트리거를 작동시킵니다[cite: 2].",
                            img: "cha/마일드_신생패시브.jpeg",
                        },
                        {
                            name: "🥩 [액티브] 무자비한 폭주 타격",
                            desc: "이성을 상실하고 날리는 무차별 물리/마법 혼합 막무가내 공세입니다[cite: 2]. 턴 개시 시 시스템 엔진이 50%의 독립 확률 분기를 연산하여 암흑 마탄 사격을 가할지, 뼈를 부수는 물리 육탄 격타를 날릴지 무작위 결정 후, 아군 단일 타겟을 대상으로 [최종 명중률 50% 고정 판정] 주사위를 굴립니다[cite: 2]. 명중 다이스 승리 시 유저의 방어 장갑 및 대미지 감산 계수를 100% 바이패스 무시하고 미간에 [20의 트루 다이렉트 대미지]를 박아 넣습니다[cite: 2].",
                            img: "cha/마일드_폭주격타.jpeg",
                        },
                        {
                            name: "🔊 [액티브] 고통의 포효 디버프 장막",
                            desc: "신체가 인간에서 고위 마족으로 찢어지며 뒤틀리는 가혹한 영혼의 육체적 고통을 참지 못하고 필드 전역에 지르는 비명 오라입니다[cite: 2]. 전장에 상주하는 아군 파티 전체의 신경망 인과율을 오염시켜, [3턴 동안 아군 전체의 민첩(DEX) 스텟 및 최종 물리/마법 공격력 판정 주사위 보정치를 각 -3씩 강제 감산] 제약시키는 치명적인 광역 디버프 장막을 전개합니다[cite: 2]. (쿨타임 2턴 연동)[cite: 2].",
                            img: "cha/마일드_고통포효.jpeg",
                        },
                    ],
                },
                {
                    name: "2페이즈 [완전마족화 암흑 군주태]",
                    img: "cha/마일드2차.jpeg",
                    stats: "HP: 200 독립 새로 생성 / 지성 복구 오버클럭 상태[cite: 2]",
                    lore: "인간 외피를 완벽 탈피해 고대 암흑 대륙의 위압적인 격을 갖춘 고위 마족 상태입니다[cite: 2]. 8.5등신의 슬림하면서 단단한 근육질 흑철색 신체에 뒤틀린 악마의 염소 뿔과 가시 돋친 괴수의 암흑 꼬리를 장착했습니다[cite: 2]. 미간의 마력 회로가 주황색과 진홍색 안광 오라를 내뿜습니다[cite: 2].",
                    skills: [
                        {
                            name: "👹 [패시브] 고위마족 (High-Tier Demon Core)",
                            desc: "마족의 정점에 달한 시스템 회로가 안착됩니다[cite: 2]. 매 턴 종료 시마다 보스 본체의 [지력(INT) 및 매력(CHA) 보정치 스텟 수치를 상시 +1씩 영구 실시간 누적 증가]시키는 자체 오버클럭형 패시브입니다[cite: 2].",
                            img: "cha/마일드_군주패시브.jpeg",
                        },
                        {
                            name: "🎯 [기믹] 박살 난 오른쪽 손목 저격 절대 약점",
                            desc: "1페이즈 전 인간 상태에서 중년 아저씨에게 철저하게 강타당해 관절이 완전히 으스러진 [오른쪽 손목 부위]가 고위 마족 변격 이후에도 결착되지 못한 채 유일한 치명적 취약 포인트(Weak Spot)로 연산 중입니다[cite: 2]. 유저가 전투 중 주관식 텍스트로 '마일드의 덜렁거리는 오른쪽 손목 관절 부위를 정밀 집중 저격 타격한다'라는 [돌발행동]을 직접 입력 선언하고, 아군의 명중 주사위가 성공 판정을 터트릴 시 기믹 브레이크가 격발되어 [보스가 보유한 전 능력치 스텟 보정 수치 및 모든 스킬의 최종 대미지 피해 계수가 영구적으로 정확히 반토막(50% 상시 차감)] 상태로 격하당하는 치명적인 시스템 인과율 다운이 가동됩니다[cite: 2].",
                            img: "cha/마일드_손목저격.jpeg",
                        },
                        {
                            name: "🔮 [액티브] 고위마력탄 연타 폭격",
                            desc: "자아도취에 빠진 마일드가 오른손을 뻗어 단일 아군 캐릭터에게 압도적인 마력 질량의 구체들을 사격하는 파괴 주문입니다[cite: 2]. 지정 타겟의 미간에 [4 대미지 × 4회 연타 = 총 16의 고정 암흑 마법 피해]를 일시 투하하며, 폭격 구체 한 발당 개별적으로 [80%의 확정 명중률 확률] 다이스를 가동하여 결산합니다[cite: 2]. (쿨타임 2턴)[cite: 2].",
                            img: "cha/마일드_마력탄.jpeg",
                        },
                        {
                            name: "🛡️ [액티브] 지각 들어올리기 절대방어 장막",
                            desc: "무지막지한 완력을 대지에 박아 넣고 아레나의 화강암 지반 석판을 통째로 뜯어 들어 올려 전면에 차단 장벽을 형성하는 절대 방어 메커니즘입니다[cite: 2]. 해당 턴 동안 아군 파티가 가해오는 일반 평타, 코어 액티브, 금속기술사의 극대마법 등 모든 루트의 최종 피해량을 100% 흡수하여 무효화(0 처리)시킵니다[cite: 2]. 단, 시스템 내부 회로에 [15%의 확정 방어 실패 확률 난수]가 내장되어 있어, 아군의 연계 공격 중 15% 난수가 격발될 시 장벽이 와르르 무너지며 아군의 원래 대미지가 정상 진입합니다[cite: 2]. (쿨타임 3턴)[cite: 2].",
                            img: "cha/마일드_지각방어.jpeg",
                        },
                        {
                            name: "💀 [군속기 궁극기] 유골 스켈레톤 드워프 광부 군세 소환",
                            desc: "과거 고대 광산 단층 지대에 억울하게 파묻혀 숨져갔던 고대 드워프 광부들의 원혼과 유골을 고위 마족의 지배령으로 강제 강신시켜 아레나 최전방 영역에 전열 방진으로 배치하는 군세 기술입니다[cite: 2]. 보스가 자신의 고유 [매력(CHA) 주사위]를 실시간 롤링 연산하여, 나온 최종 다이스 눈값 지표를 기반으로 [마일드의 매력(CHA) 주사위 눈값 / 4 (소수점 버림)] 공식에 따라 스켈레톤 무리를 즉시 전방 노드에 팝업 소환합니다[cite: 2]. 소환수들은 30 HP / 전스텟 10 고정 스펙을 지니며 상시 [도발 (Taunt)] 오라를 격발해 아군의 타겟팅을 자신들에게 묶어 보스 본체 생명력을 완벽 고기방패 엄호합니다[cite: 2]. (소환 쿨타임 5턴 제한 / 전투 세션당 최대 3회 한도 락인)[cite: 2].",
                            img: "cha/마일드_군세소환.jpeg",
                        },
                    ],
                },
            ],
        },
    ];

    // 보스 도감 화면 갱신 엔진 함수
    function renderBossDOM() {
        const boss = bossDatabase[currentBossIndex];
        const phase = boss.phases[currentPhaseIndex];

        bossTypeTag.innerText = boss.type;
        if (boss.type === "HIDDEN BOSS") {
            bossTypeTag.className = "text-xs bg-purple-700 text-white px-2 py-0.5 font-bold rounded tracking-widest";
        } else {
            bossTypeTag.className = "text-xs bg-red-600 text-white px-2 py-0.5 font-bold rounded tracking-widest";
        }
        bossMainTitle.innerText = boss.name;

        // 상단 페이즈 단추 동적 매칭
        bossPhaseTabContainer.innerHTML = "";
        boss.phases.forEach((p, idx) => {
            const btn = document.createElement("button");
            btn.innerText = `${idx + 1}P`;
            btn.className = `px-3 py-1 text-[11px] font-bold rounded transition-all ${
                idx === currentPhaseIndex
                    ? "bg-red-700 text-white shadow-[0_0_8px_rgba(239,68,68,0.4)]"
                    : "text-gray-400 hover:text-white hover:bg-neutral-800"
            }`;
            btn.addEventListener("click", () => {
                currentPhaseIndex = idx;
                renderBossDOM();
            });
            bossPhaseTabContainer.appendChild(btn);
        });

        // 이미지 경로 및 예외 블록 감지
        bossMainImg.src = phase.img;
        bossMainImg.onload = () => {
            bossImgFallback.classList.add("hidden");
            bossMainImg.classList.remove("hidden");
        };
        bossMainImg.onerror = () => {
            bossMainImg.classList.add("hidden");
            bossImgFallback.classList.remove("hidden");
        };

        bossStatText.innerText = phase.stats;
        bossLoreText.innerHTML = phase.lore;

        // 하단 스킬 스크롤 리스트 생성
        bossSkillBookContainer.innerHTML = "";
        phase.skills.forEach((skill) => {
            const skillImgSrc = skill.img ? skill.img : "cha/스킬공용더미.jpeg";
            const skillCardHTML = `
            <div class="p-3 bg-neutral-950 border border-neutral-900 rounded flex flex-col sm:flex-row gap-4 items-center">
                <div class="w-16 h-20 bg-neutral-900 border border-neutral-800 overflow-hidden rounded flex-shrink-0 relative aspect-[3/4]">
                    <img src="${skillImgSrc}" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                    <div class="hidden absolute inset-0 text-[8px] text-gray-600 items-center justify-center bg-neutral-950 text-center p-1">SKILL IMG</div>
                </div>
                <div class="flex-1 w-full space-y-0.5">
                    <p class="font-bold text-orange-400 text-xs">${skill.name}</p>
                    <p class="text-gray-400 text-[11px] leading-relaxed">${skill.desc}</p>
                </div>
            </div>`;
            bossSkillBookContainer.insertAdjacentHTML("beforeend", skillCardHTML);
        });
    }

    // 좌우 스위칭 네비게이션 연결
    bossPrevBtn.addEventListener("click", () => {
        currentBossIndex = (currentBossIndex - 1 + bossDatabase.length) % bossDatabase.length;
        currentPhaseIndex = 0;
        renderBossDOM();
    });

    bossNextBtn.addEventListener("click", () => {
        currentBossIndex = (currentBossIndex + 1) % bossDatabase.length;
        currentPhaseIndex = 0;
        renderBossDOM();
    });

    bossCloseBtn.addEventListener("click", () => {
        bossModal.classList.add("hidden");
        bossModal.classList.remove("flex");
    });

    bossModal.addEventListener("click", (e) => {
        if (e.target === bossModal) {
            bossModal.classList.add("hidden");
            bossModal.classList.remove("flex");
        }
    });

    // 상단 네비게이션 메뉴 중 .boss-link 요소를 클릭했을 때 전용 모달 활성화 트리거
    const bossLinks = document.querySelectorAll(".boss-link");
    bossLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("data-boss");
            const dbIndex = bossDatabase.findIndex((b) => b.id === targetId);

            if (dbIndex !== -1) {
                currentBossIndex = dbIndex;
                currentPhaseIndex = 0;
                renderBossDOM();
                bossModal.classList.remove("hidden");
                bossModal.classList.add("flex");
            }
        });
    });
    // 네비게이션 아이템 클릭 이벤트 리스너 등록 및 드래그 슬라이드 바인딩
    menuItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            // [★버그 수정 핵심]: 클릭한 버튼이 보스 도감용 링크(.boss-link)라면
            // 일반 네비게이션('준비 중') 연산을 시작하지 않고 즉시 차단(리턴)합니다.
            if (item.classList.contains("boss-link")) return;

            const menuKey = item.getAttribute("data-menu");
            const data = menuData[menuKey];

            if (data) {
                contentTitle.innerText = data.title;
                contentBody.innerHTML = data.body;
            } else {
                contentTitle.innerText = "준비 중";
                contentBody.innerHTML =
                    "<p class='text-gray-500 text-center py-4'>아직 기획 자료 정리 중인 영역입니다.</p>";
            }

            contentModal.classList.remove("hidden");
            contentModal.classList.add("flex");

            // 콘텐츠 주입 후 드래그 슬라이드 이벤트 자동 활성화
            enableDragScroll();
        });
    });
    // 콘텐츠 팝업 모달 닫기 버튼
    contentCloseBtn.addEventListener("click", () => {
        contentModal.classList.add("hidden");
        contentModal.classList.remove("flex");
    });

    // 콘텐츠 팝업 바깥 어두운 배경 클릭 시 닫히기
    contentModal.addEventListener("click", (e) => {
        if (e.target === contentModal) {
            contentModal.classList.add("hidden");
            contentModal.classList.remove("flex");
        }
    });

    // =================================================================================
    // 3. [ADD-ON] 네비게이션 팝업 내 가로 스크롤 영역 마우스 드래그 슬라이드 연산
    // =================================================================================
    function enableDragScroll() {
        const scrollContainers = document.querySelectorAll(".overflow-x-auto");

        scrollContainers.forEach((container) => {
            let isDown = false;
            let startX;
            let scrollLeft;

            container.addEventListener("mousedown", (e) => {
                isDown = true;
                container.classList.add("active");
                container.style.cursor = "grabbing";
                container.style.userSelect = "none";

                startX = e.pageX - container.offsetLeft;
                scrollLeft = container.scrollLeft;
            });

            container.addEventListener("mouseleave", () => {
                isDown = false;
                container.style.cursor = "grab";
            });

            container.addEventListener("mouseup", () => {
                isDown = false;
                container.style.cursor = "grab";
                container.style.removeProperty("user-select");
            });

            container.addEventListener("mousemove", (e) => {
                if (!isDown) return;
                e.preventDefault();

                const x = e.pageX - container.offsetLeft;
                const walk = (x - startX) * 2; // 감도 조절
                container.scrollLeft = scrollLeft - walk;
            });

            container.style.cursor = "grab";
        });
    }
});

// =================================================================================
// 4. 기존 오디오 컨트롤 스크립트 (바깥 전역 유지)
// =================================================================================
const hoverSound = new Audio("audio/hover.mp3");
const readySound = new Audio("audio/game start.mp3");

hoverSound.volume = 0.5;
readySound.volume = 0.8;

function playHoverSound() {
    hoverSound.currentTime = 0;
    hoverSound.play().catch((error) => {
        console.log("오디오 재생 차단됨 (유저 상호작용 필요)");
    });
}

function playReadySound() {
    readySound.currentTime = 0;
    readySound.play().catch((error) => {
        console.log("오디오 재생 실패:", error);
    });
}

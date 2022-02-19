const mainAnimation = () => {
  let yOffset = 0; // window.pageYOffset 대용
  let prevScrollHeight = 0; //이전 스크롤 섹션들의 스크롤 높이 합
  let currentScene = 0; //지금 보고있는 씬!
  let enterNewScene = false;
  const sceneInfo = [
    {
      //0
      type: 'sticky',
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-0'),
        messageA: document.querySelector(
          '#scroll-section-0 .performance-info.a'
        ),
        messageB: document.querySelector(
          '#scroll-section-0 .performance-info.b'
        ),
        messageC: document.querySelector(
          '#scroll-section-0 .performance-info.c'
        )
      },
      values: {
        //등장 투명도
        messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
        messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
        messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
        messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
        messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
        message_opacity_out: [1, 0, { start: 0.75, end: 0.93 }],
        //나타나면서 올라옴
        messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
        messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
        messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }]
      }
    },
    {
      //1
      type: 'normal',
      heightNum: 2,
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-1'),
        performance21: document.querySelector('#scroll-section-1 .performace21')
      }
    },
    {
      //2
      type: 'normal',
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-2'),
        mobileA: document.querySelector('#scroll-section-2 .m-message-0')
      },
      values: {
        mobileA_opacity_in: [0, 1, { start: 5, end: 0.7 }],
        mobileA_opacity_out: [1, 0, { start: 0.75, end: 0.93 }],
        mobileA_translateY_in: [20, 0, { start: 0.1, end: 0.3 }]
      }
    },
    {
      //3
      type: 'normal',
      heightNum: 1,
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-3')
      }
    },
    {
      //4
      type: 'normal',
      heightNum: 2,
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-4')
      }
    }
  ];

  function setLayout() {
    //각 스크롤 섹션의 높이 세팅
    for (let i = 0; i < sceneInfo.length; i++) {
      if (sceneInfo[i].type === 'sticky') {
        sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      } else if (sceneInfo[i].type === 'normal')
        sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetheight;
      sceneInfo[
        i
      ].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }

    yOffset = window.pageYOffset;
    let totalScrollHegiht = 0;
    for (let i = 0; i < sceneInfo.length; i++) {
      totalScrollHegiht += sceneInfo[i].scrollHeight;
      if (totalScrollHegiht >= yOffset) {
        currentScene = i;
        break;
      }
    }
    document.body.setAttribute('id', `show-scene-${currentScene}`);
  }

  function calcValues(values, currentYOffset) {
    let rv;
    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / scrollHeight;
    if (values.length === 3) {
      //start~end 사이에 애니매이션 실행
      const partScrollStart = values[2].start * scrollHeight;
      const partScrollEnd = values[2].end * scrollHeight;
      const partScrollHeight = partScrollEnd - partScrollStart;
      const partScrollRatio =
        (currentYOffset - partScrollStart) / partScrollHeight;
      if (
        currentYOffset >= partScrollStart &&
        currentYOffset <= partScrollEnd
      ) {
        rv = partScrollRatio * (values[1] - values[0]) + values[0];
      } else if (currentYOffset < partScrollStart) {
        rv = values[0];
      } else if (currentYOffset > partScrollEnd) {
        rv = values[1];
      }
    } else {
      rv = scrollRatio * (values[1] - values[0]) + values[0];
    }
    return rv;
  }

  function playAnimaition() {
    const currentYOffset = yOffset - prevScrollHeight;
    const objs = sceneInfo[currentScene].objs;
    const values = sceneInfo[currentScene].values;
    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / scrollHeight;

    switch (currentScene) {
      case 0:
        const messageA_opacity_in = calcValues(
          values.messageA_opacity_in,
          currentYOffset
        );
        const messageA_opacity_out = calcValues(
          values.messageA_opacity_out,
          currentYOffset
        );
        const messageB_opacity_in = calcValues(
          values.messageB_opacity_in,
          currentYOffset
        );
        const messageB_opacity_out = calcValues(
          values.messageB_opacity_out,
          currentYOffset
        );
        const messageC_opacity_in = calcValues(
          values.messageC_opacity_in,
          currentYOffset
        );
        const message_opacity_out = calcValues(
          values.message_opacity_out,
          currentYOffset
        );
        if (scrollRatio <= 0.22) {
          objs.messageA.style.opacity = messageA_opacity_in;
          objs.messageA.style.transform = `translate3d(0, ${calcValues(
            values.messageA_translateY_in,
            currentYOffset
          )}%, 0)`;
        } else if (scrollRatio <= 0.42) {
          objs.messageB.style.opacity = messageB_opacity_in;
          objs.messageB.style.transform = `translate3d(0, ${calcValues(
            values.messageB_translateY_in,
            currentYOffset
          )}%, 0)`;
        } else if (scrollRatio <= 0.62) {
          objs.messageC.style.opacity = messageC_opacity_in;
          objs.messageC.style.transform = `translate3d(0, ${calcValues(
            values.messageC_translateY_in,
            currentYOffset
          )}%, 0)`;
        } else if (scrollRatio > 0.62) {
          objs.messageA.style.opacity = message_opacity_out;
          objs.messageB.style.opacity = message_opacity_out;
          objs.messageC.style.opacity = message_opacity_out;
        }
        break;
      case 1:
        break;
      case 2:
        const mobileA_opacity_in = calcValues(
          values.mobileA_opacity_in,
          currentYOffset
        );
        const mobileA_opacity_out = calcValues(
          values.mobileA_opacity_out,
          currentYOffset
        );
        if (scrollRatio <= 0.22) {
          objs.mobileA.style.opacity = mobileA_opacity_in;
          objs.mobileA.style.transform = `translate3d(0, ${calcValues(
            values.mobileA_translateY_in,
            currentYOffset
          )}%, 0)`;
        }
        break;
      case 3:
        break;
    }
  }

  function scrollLoop() {
    enterNewScene = false;
    prevScrollHeight = 0;
    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight;
    }
    if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      enterNewScene = true;
      currentScene++;
    } else if (yOffset < prevScrollHeight) {
      enterNewScene = true;
      if (currentScene === 0) {
        return;
      } // 모바일에서 바운스효과로 나타나는 버그 방지
      currentScene--;
    }
    document.body.setAttribute('id', `show-scene-${currentScene}`);
    if (enterNewScene) return;
    playAnimaition();
  }

  window.addEventListener('scroll', () => {
    yOffset = window.pageYOffset;
    scrollLoop();
  });

  window.addEventListener('load', setLayout);
  window.addEventListener('resize', setLayout);
};

export default mainAnimation;

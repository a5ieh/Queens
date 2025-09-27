// script.js
const bgMusic = document.getElementById('bg-music');
const doorSound = document.getElementById('door-sound');
const contentDiv = document.getElementById('content');

const content = {
  biology: {
    info: "<h2>أحياء</h2><p>استكشف عالم الأحياء مع صور متحركة ومحاكاة تفاعلية!</p>",
    quiz: "<h2>اختبار الأحياء</h2><p>سؤال: ما هو أكبر عضو في جسم الإنسان؟</p><ul><li>القلب</li><li>الرئة</li><li>الجلد ✅</li></ul>",
    video: "<h2>فيديو أحياء</h2><iframe width='560' height='315' src='https://www.youtube.com/embed/5b8v9cFO9Jo' frameborder='0' allowfullscreen></iframe>"
  },
  chemistry: {
    info: "<h2>كيمياء</h2><p>تجارب الكيمياء الحية مع تفاعلات مذهلة!</p>",
    quiz: "<h2>اختبار الكيمياء</h2><p>سؤال: ما هو الرمز الكيميائي للماء؟</p><ul><li>H2O ✅</li><li>O2</li><li>CO2</li></ul>",
    video: "<h2>فيديو كيمياء</h2><iframe width='560' height='315' src='https://www.youtube.com/embed/M1iR0e6tTbY' frameborder='0' allowfullscreen></iframe>"
  },
  physics: {
    info: "<h2>فيزياء</h2><p>قوانين الفيزياء مع محاكاة حية!</p>",
    quiz: "<h2>اختبار الفيزياء</h2><p>سؤال: ما هي وحدة القوة؟</p><ul><li>نيوتن ✅</li><li>واط</li><li>كولوم</li></ul>",
    video: "<h2>فيديو فيزياء</h2><iframe width='560' height='315' src='https://www.youtube.com/embed/5nQ8QwJ3NQ8' frameborder='0' allowfullscreen></iframe>"
  },
  history: {
    info: "<h2>تاريخ</h2><p>استكشف التاريخ مع أحداث متحركة!</p>",
    quiz: "<h2>اختبار التاريخ</h2><p>سؤال: من كان أول خليفة؟</p><ul><li>أبو بكر ✅</li><li>عمر</li><li>عثمان</li></ul>",
    video: "<h2>فيديو تاريخ</h2><iframe width='560' height='315' src='https://www.youtube.com/embed/someHistoryVideo' frameborder='0' allowfullscreen></iframe>"
  },
  tech: {
    info: "<h2>تقنية</h2><p>تعلم التقنية الحديثة بطريقة ممتعة!</p>",
    quiz: "<h2>اختبار التقنية</h2><p>سؤال: ما هي لغة برمجة الويب الأساسية؟</p><ul><li>HTML ✅</li><li>Python</li><li>C++</li></ul>",
    video: "<h2>فيديو تقنية</h2><iframe width='560' height='315' src='https://www.youtube.com/embed/someTechVideo' frameborder='0' allowfullscreen></iframe>"
  },
  math: {
    info: "<h2>رياضيات</h2><p>مسائل رياضية تفاعلية ممتعة!</p>",
    quiz: "<h2>اختبار الرياضيات</h2><p>سؤال: ما هو ناتج 5+7؟</p><ul><li>10</li><li>12 ✅</li><li>15</li></ul>",
    video: "<h2>فيديو رياضيات</h2><iframe width='560' height='315' src='https://www.youtube.com/embed/someMathVideo' frameborder='0' allowfullscreen></iframe>"
  }
};

let currentSubject = '';

function openClass(subject){
  currentSubject = subject;
  doorSound.play();
  setTimeout(()=>{
    document.getElementById('classroom').style.display = 'block';
    changeContent('info');
    bgMusic.play();
  }, 600);
}

function closeClass(){
  document.getElementById('classroom').style.display = 'none';
  bgMusic.pause();
  bgMusic.currentTime = 0;
}

function changeContent(type){
  contentDiv.innerHTML = content[currentSubject][type];
}

const nunjucks = require('nunjucks');
const fs = require('fs-extra');
const path = require('path');

const TEMPLATE_ROOT = 'src/templates';
const DATA_ROOT = 'src/data';
const DIST_ROOT = 'dist';

// nunjucks 템플릿 루트 설정
nunjucks.configure(TEMPLATE_ROOT, { autoescape: true });

// 모든 .njk 파일 찾기 (components 폴더 제외)
function getAllTemplateFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      // components 폴더는 제외
      if (file !== 'components') {
        results = results.concat(getAllTemplateFiles(filePath));
      }
    } else if (file.endsWith('.njk')) {
      results.push(filePath);
    }
  });
  return results;
}

const templates = getAllTemplateFiles(TEMPLATE_ROOT);

templates.forEach(templatePath => {
  // 템플릿 경로를 dist 경로로 변환
  const relPath = path.relative(TEMPLATE_ROOT, templatePath);
  const outPath = path.join(DIST_ROOT, relPath.replace(/\.njk$/, '.html'));

  // 데이터 파일이 있으면 로드, 없으면 빈 객체
  const dataFile = path.join(DATA_ROOT, relPath.replace(/\.njk$/, '.json'));
  let data = {};
  if (fs.existsSync(dataFile)) {
    data = fs.readJsonSync(dataFile);
  }

  // 템플릿 렌더링
  const html = nunjucks.render(relPath.replace(/\\/g, '/'), data);

  // 결과 저장
  fs.ensureDirSync(path.dirname(outPath));
  fs.writeFileSync(outPath, html);
  console.log(`빌드 완료: ${outPath}`);
});

console.log('모든 HTML 빌드 완료!');
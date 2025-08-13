const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const langManager = {
  excelPath: path.join(__dirname, '..', 'lang', 'lang.xlsx'),
  outputDir: path.join(__dirname, '..', 'lang'),
  generateLangJson() {
    const workbook = xlsx.readFile(this.excelPath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = xlsx.utils.sheet_to_json(sheet);
    const locales = Object.keys(rows[0]).filter(key => key !== 'key');
    const result = {};

    // 각 언어별 객체 생성
    locales.forEach(locale => {
      result[locale] = { lang: locale };
      rows.forEach(row => {
        result[locale][row.key] = row[locale];
      });
    });

    // 각 언어별 json 파일 저장
    locales.forEach(locale => {
      fs.writeFileSync(
        path.join(this.outputDir, `${locale}.json`),
        JSON.stringify(result[locale], null, 2),
        'utf-8'
      );
      console.log(`${locale}.json 생성 완료`);
    });
  },
};

langManager.generateLangJson();
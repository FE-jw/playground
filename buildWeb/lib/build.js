const fs = require('fs');
const path = require('path');
const nunjucks = require('nunjucks');
const sass = require('sass');
const babel = require('@babel/core');
const CleanCSS = require('clean-css');

const buildManager = {
  srcDir: path.join(__dirname, '..', 'src'),
  distDir: path.join(__dirname, '..', '.dist'),
  langDir: path.join(__dirname, '..', 'lang'),
  templateFile: path.join(__dirname, '..', 'src', 'index.njk'),
  compileTemplates() {
    nunjucks.configure(path.join(__dirname, '..', 'src'), { autoescape: true });  // Nunjucks 환경 설정

    fs.readdirSync(this.langDir)
      .filter(file => file.endsWith('.json'))
      .forEach(file => {
        const langCode = path.basename(file, '.json');
        const jsonPath = path.join(this.langDir, file);
        const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
        const html = nunjucks.render(this.templateFile, data);
        const deleteEmptyLine = html.split('\n').filter(line => line.trim() !== '').join('\n');  // 빈 라인 삭제

        fs.writeFileSync(path.join(this.distDir, `${langCode}.html`), deleteEmptyLine, 'utf-8');
        console.log(`${this.distDir}\\${langCode}.html 생성 완료`);
      });
  },
  copyFoldersExceptFiles(src = null, dest = null, isRoot = true) {
    src = src || this.srcDir;
    dest = dest || this.distDir;
    fs.readdirSync(src, { withFileTypes: true }).forEach(entry => {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      // src 폴더 바로 밑의 index.njk, .scss, .js 파일만 제외
      if (
        isRoot &&
        entry.isFile() &&
        (
          entry.name === 'index.njk' ||
          entry.name.endsWith('.scss') ||
          entry.name.endsWith('.js')
        )
      ) return;

      if (entry.isDirectory()) {
        fs.mkdirSync(destPath, { recursive: true });
        this.copyFoldersExceptFiles(srcPath, destPath, false);
      } else if (entry.isFile()) {
        fs.copyFileSync(srcPath, destPath);
      }
    });
  },
  compileScssFiles(src = null, dest = null) {
    src = src || this.srcDir;
    dest = dest || this.distDir;
    fs.readdirSync(src, { withFileTypes: true }).forEach(entry => {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name.replace(/\.scss$/, '.min.css'));

      if (entry.isDirectory()) {
        if (!fs.existsSync(destPath)) fs.mkdirSync(destPath, { recursive: true });
        this.compileScssFiles(srcPath, destPath);
      } else if (entry.isFile() && entry.name.endsWith('.scss')) {
        const result = sass.compile(srcPath);
        const cleanOpts = {
          level: 0
        }
        const minified = new CleanCSS(cleanOpts).minify(result.css);
        result.css = minified.styles;
        fs.writeFileSync(destPath, result.css, 'utf-8');
        console.log(`${destPath} 생성 완료`);
      }
    });
  },
  compileJsFiles(src = null, dest = null) {
    src = src || this.srcDir;
    dest = dest || this.distDir;
    fs.readdirSync(src, { withFileTypes: true })
      .filter(entry => entry.isFile() && entry.name.endsWith('.js'))
      .forEach(entry => {
        const srcPath = path.join(src, entry.name);
        const distFile = path.join(dest, entry.name.replace(/\.js$/, '.min.js'));
        const code = fs.readFileSync(srcPath, 'utf-8');
        const result = babel.transformSync(code, {
          presets: ['@babel/preset-env'],
          minified: true,
          comments: false
        });

        fs.writeFileSync(distFile, result.code, 'utf-8');
        console.log(`${distFile} 생성 완료`);
      });
  },
  build() {
    if (!fs.existsSync(this.distDir)) {
      fs.mkdirSync(this.distDir, { recursive: true });
    }

    this.compileTemplates();
    this.copyFoldersExceptFiles();
    this.compileScssFiles();
    this.compileJsFiles();
  }
};

buildManager.build();
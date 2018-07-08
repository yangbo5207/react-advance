const path = require('path');
const fs = require('fs');
const url = require('url');
const glob = require('glob');

// cwd  执行当前命令的文件夹的地址
// __dirname 当前文件的文件夹地址
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const envPublicUrl = process.env.PUBLIC_URL;

function ensureSlash(path, needsSlash) {
  const hasSlash = path.endsWith('/');
  if (hasSlash && !needsSlash) {
    return path.substr(path, path.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${path}/`;
  } else {
    return path;
  }
}

// 可能会出现的一些模块文件夹，将会在resolve.modules中配置
const nodePaths = (process.env.NODE_PATH || '')
  .split(process.platform === 'win32' ? ';' : ':')
  .filter(Boolean)
  .map(resolveApp);

// 为多页系统提供入口，遍历src中的js文件，每个js文件将会对应同名的html文件成为一个页面
const entries = {};

glob.sync(resolveApp('src/!(_)*.js?(x)')).forEach(file => {
  const basename = path.basename(file).replace(/\.jsx?$/, '');
  entries[basename] = file;
})

/*
like this
entries = {
  index: '/Users/yangbo/develop/react-advance/src/index.js',
  free: '/Users/yangbo/develop/react-advance/src/free.js',
  ...
}
*/

// 在public文件夹中遍历html文件，每个html将会成为一个页面
const pageEntries = glob.sync(resolveApp('public/!(_)*.html'))
  .map(file => path.basename(file, '.html')); // index.html -> index

// 别名
const alias = {
  components: resolveApp('src/components'),
  pages: resolveApp('src/pages'),
  utils: resolveApp('src/utils')
}


const getPublicUrl = appPackageJson =>
  envPublicUrl || require(appPackageJson).homepage;

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// Webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
function getServedPath(appPackageJson) {
  const publicUrl = getPublicUrl(appPackageJson);
  const servedUrl =
    envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');
  return ensureSlash(servedUrl, true);
}

// config after eject: we're in ./config/
module.exports = {
  dotenv: resolveApp('.env'),
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveApp('src/index.js'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveApp('src/setupTests.js'),
  appNodeModules: resolveApp('node_modules'),
  publicUrl: getPublicUrl(resolveApp('package.json')),
  servedPath: getServedPath(resolveApp('package.json')),

  // 可能会与上面的有重复，略过
  root: resolveApp(''),
  build: resolveApp('build'),
  public: resolveApp('public'),
  appHTML: resolveApp('public/index.html'),
  pkg: resolveApp('package.json'),
  src: resolveApp('src'),
  static: resolveApp('static'),
  nodeModules: resolveApp('node_modules'),
  nodePaths: nodePaths,
  alias: alias,
  entries: entries,
  pageEntries: pageEntries
};

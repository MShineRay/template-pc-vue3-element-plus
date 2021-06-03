
const fs = require('fs')
const path = require('path')
const Pkg = require('./package.json')

function getGitBreanchInfo() {
  let filePath = path.join(process.cwd(), '.git', 'HEAD')
  if (fs.existsSync(filePath)) {
    let filestream = fs.readFileSync(filePath).toString()
    return '\n' + 'git branch: ' + filestream.split('heads/')[1]
  } else {
    return ''
  }
}

module.exports = Pkg.name + ' version: ' + Pkg.version + getGitBreanchInfo()

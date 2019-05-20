const chalk=require('chalk')
const path=require('path')
const fs=require('fs')
const resolveDir=(...file)=>path.resolve(__dirname,...file)
// eslint-disable-next-line no-console
const log= message => console.log(chalk.green(`${message}`))
// eslint-disable-next-line no-console
const successLog = message => console.log(chalk.blue(`${message}`))
// eslint-disable-next-line no-console
const errorLog = error => console.log(chalk.red(`${error}`))
const {componentTemplate} = require('./template.js')

const generateFile = (dir, data) => {
  if(fs.existsSync(dir)){
    errorLog(`${dir}文件已存在`)
    return
  }
  return new Promise((resolve ,reject) => {
    fs.writeFile(dir, data , 'utf8' ,err => {
      if(err){
        errorLog(err.message)
        reject(err)
      } else {
        resolve(true)
      }
    })
  })
}

function mkdirs(directory, callback) {
  let exists = fs.existsSync(directory)
  if(exists) {
    callback()
  } else {
    mkdirs(path.dirname(directory), () => {
      fs.mkdirSync(directory)
      callback()
    })
  }
}

function doExistDirectoryCreate(directory) {
  return new Promise((resolve) => {
    mkdirs(directory, () => {
      resolve(true)
    })
  })
}

log('请输入要生成的组件的名称')
let componentName = ''
process.stdin.on('data', async chunk => {
  const inputName = String(chunk).trim().toString()

  const componentDirectory = resolveDir('../src/components', inputName)

  const componentVueName = resolveDir(componentDirectory, 'index.vue')

  const hasComponentDirectory = fs.existsSync(componentDirectory)
  if(hasComponentDirectory) {
    errorLog(`${inputName}组件目录已存在，请重新输入`)
    return
  } else {
    log(`正在生成 component 目录 ${componentDirectory}`)
    await doExistDirectoryCreate(componentDirectory)
  }
  try {
    if(inputName.includes('/')) {
      const inputArr = inputName.split('/')
      componentName = inputArr[inputArr.length-1]
    } else {
      componentName = inputName
    }
    log(`正在生成 vue 文件 ${componentVueName}`)
    await generateFile(componentVueName, componentTemplate(componentName))
    successLog('生成成功')
  } catch (error) {
    errorLog(error)
  }

  process.stdin.emit('end')
})

process.stdin.on('end', () => {
  log('exit')
  process.exit()
})
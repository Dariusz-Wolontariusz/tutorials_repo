const simpleGit = require('simple-git')
const fs = require('fs-extra')
const path = require('path')

const projectName = process.argv[2]

if (!projectName) {
  console.error(
    '❌ Please provide a project folder name (e.g. 4_blog-preview-card-main)'
  )
  process.exit(1)
}

const PROJECT_DIR = path.join('frontend-mentor/basic', projectName)
const TEMP_DIR = '../gh-pages-temp'
const DEST_DIR = path.join(TEMP_DIR, projectName)

;(async () => {
  if (!fs.existsSync(PROJECT_DIR)) {
    console.error(`❌ Project folder "${PROJECT_DIR}" not found.`)
    process.exit(1)
  }

  console.log(`📂 Copying project "${PROJECT_DIR}" to "${DEST_DIR}"...`)
  await fs.ensureDir(DEST_DIR)
  await fs.emptyDir(DEST_DIR)
  await fs.copy(PROJECT_DIR, DEST_DIR)

  const git = simpleGit(TEMP_DIR)

  console.log(`📦 Committing changes to gh-pages...`)
  await git.add('./*')
  await git.commit(`Deploy ${projectName}`)
  await git.push('origin', 'gh-pages')

  console.log(
    `✅ Done! View at: https://Dariusz-Wolontariusz.github.io/tutorials_repo/${projectName}/`
  )
})()

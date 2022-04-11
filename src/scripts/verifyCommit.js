const msg=require("fs")
    .readFileSync(".git/COMMIT_EDITMSG","utf-8")
.trim()
const commitRE=/^(revert:)?(feature|fix|docs|style|refactor|perf|test|build|merge|ci|chore|types|release)(\(.+\))?: .{1,50}/
const mergeRe=/^(Merge pull request|Merge branch)/
if(!commitRE.test(msg)){
    if(!mergeRe.test(msg)){
        console.log('git commit信息校验不通过')
    }
    console.error(`git commit的信息格式不对，需要使用title(scope):desc的格式
        比如 fix:xxbug
        feat(test):add new
        具体校验逻辑看scripts/verifyCommit.js`)
    process.exit(1)
}
else {
    console.log('git commit校验信息通过')
}
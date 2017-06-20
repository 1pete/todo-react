npm run deploy -- -r https://${DEPLOY_TOKEN}@github.com/1pete/todo-react.git  -m "Deploy $(git rev-parse HEAD) to GitHub pages [ci skip]"

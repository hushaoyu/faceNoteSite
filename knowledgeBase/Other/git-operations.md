---
title: "Git 常见操作"
category: "Other"
tags: ["git", "version-control", "workflow"]
difficulty: "简单"
---

# Git 常见操作

## 基础操作

### 1. 初始化仓库
```bash
git init
git clone <url>
```

### 2. 添加文件
```bash
git add <file>
git add .
git add -A
```

### 3. 提交
```bash
git commit -m "commit message"
git commit -am "commit message"
git commit --amend
```

### 4. 推送
```bash
git push origin main
git push -u origin main
```

## 分支操作

### 1. 创建分支
```bash
git branch <branch-name>
git checkout -b <branch-name>
git switch -c <branch-name>
```

### 2. 切换分支
```bash
git checkout <branch-name>
git switch <branch-name>
```

### 3. 合并分支
```bash
git merge <branch-name>
git rebase <branch-name>
```

### 4. 删除分支
```bash
git branch -d <branch-name>
git branch -D <branch-name>
```

## 撤销操作

### 1. 撤销工作区修改
```bash
git checkout -- <file>
git restore <file>
```

### 2. 撤销暂存区
```bash
git reset HEAD <file>
git restore --staged <file>
```

### 3. 撤销提交
```bash
git reset --soft HEAD^
git reset --mixed HEAD^
git reset --hard HEAD^
```

## 查看历史

```bash
git log
git log --oneline
git log --graph
git log --all
git blame <file>
```

## 远程操作

```bash
git remote -v
git remote add origin <url>
git fetch origin
git pull origin main
git push origin --delete <branch-name>
```

## 常见问题

### 1. 冲突解决
```bash
# 查看冲突文件
git status

# 手动解决冲突后
git add <file>
git commit
```

### 2. 丢弃本地修改
```bash
git checkout .
git clean -fd
```

### 3. 回退到指定版本
```bash
git reset --hard <commit-hash>
git push -f origin main
```

## 工作流

### Git Flow
```bash
git checkout develop
git checkout -b feature/xxx
# 开发完成
git checkout develop
git merge feature/xxx
git branch -d feature/xxx
```

### GitHub Flow
```bash
git checkout -b feature/xxx
# 开发完成
git push origin feature/xxx
# 创建 Pull Request
# 合并后删除分支
```
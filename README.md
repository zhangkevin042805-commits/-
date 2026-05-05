# IELTS Arcane Sheet

本地可运行的雅思/学术词汇轻游戏学习工具（Vite + React + TS + Tailwind）。内置 300+ demo 词库离线可用；可通过脚本从 GitHub 开源词表构建更完整词库。

## 功能
- Daily Session、Shadow Words、Trial、Wordbook、Stats、角色卡成长
- 每 10 题 D20 Round Feedback（仅反馈，不影响记忆判定）
- localStorage 持久化：userProfile、wordProgress、sessionHistory、titles、trialHistory、streak 等
- 词库质量检查：`validateWordBank`

## 运行
```bash
npm install
npm run dev
```

## 词库来源建议（需自行核验许可证）
1. lpmi-13/machine_readable_wordlists（CC0-1.0，优先）
2. globalwordnet/english-wordnet（CC-BY 4.0）
3. aparrish/wordfreq-en-25000（CC BY-SA 4.0）
4. lzrk/nglsh IELTS-4000（需自行确认）
5. fanhongtao/IELTS（需自行确认）
6. surajk95/wordsta（组织参考）

> 默认 demo 词库仅用于学习演示。构建完整词库前，请自行确认数据源 license。严禁复制商业词典例句。原创例句标记 `example_source: "generated_original"`。

## 导入原始词表
- 将 raw 文件放入 `data/raw/`
- 运行：
```bash
npm run build:wordbank
npm run validate:wordbank
```
输出：
- `data/processed/cleaned_ielts_words.json`
- `data/processed/wordbank_report.json`

## 为什么不复制商业词典例句
避免版权风险；本项目仅使用原创或可追溯开源文本。

## 为什么 D20 只做反馈
D20 只提供阶段激励与文案反馈，避免掷骰干扰真实记忆曲线与复习间隔。

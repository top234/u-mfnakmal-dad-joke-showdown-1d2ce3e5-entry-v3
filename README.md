# The Hot Dog Stand

[![Dad Joke Showdown](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![Rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/top234/u-mfnakmal-dad-joke-showdown-1d2ce3e5-entry-v3/rank.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5/leaderboard)
[![Reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/top234/u-mfnakmal-dad-joke-showdown-1d2ce3e5-entry-v3/reward.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)

Entry for the make.fun competition [Dad Joke Showdown](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5).

## The joke

> My dad started a hot dog stand. He says business is on a roll.

One dad joke, 62 characters — well under the 200-character limit. The pun
lands on the last line: "on a roll" means business is going well, and a hot
dog is, literally, served on a roll.

## How it runs

`main.ts` (Node.js, standard library only, no network) validates the joke is
1–200 characters, then writes it to `$OUTPUT_DIR/entry.txt` (default
`/output`).

```sh
OUTPUT_DIR=/tmp/dad-joke-test node main.ts
cat /tmp/dad-joke-test/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

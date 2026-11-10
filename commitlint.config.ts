import type { UserConfig } from "@commitlint/types"

export default {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"scope-empty": [1, "never"],
		"body-max-line-length": [1, "always", 100],
	},
} satisfies UserConfig
